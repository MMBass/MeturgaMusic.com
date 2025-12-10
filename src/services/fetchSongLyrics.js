import { LOCAL_STORAGE_KEYS, URLS } from '@/constants';
import utils from '@/utils.js';

export default async (splittedSongTitle, webSongUrl) => {
    const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem(LOCAL_STORAGE_KEYS.INIT);

    const innerFetch = async (currServer) => {
        return await fetch(`${currServer}/lyrics?initId=` + initId, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "currSong": splittedSongTitle,
                "webSongUrl": webSongUrl
            })
        });
    }

    // Allows the first fetch to be skipped if it takes over 3.5 seconds, while still saving its response as a fallback
    const timeout = (ms) => new Promise((_, reject) =>
        setTimeout(() => reject(new Error('TIMEOUT')), ms)
    );

    let response = null;
    if (!webSongUrl) {
        // Stores the promise itself (not the resolved value)
        const prodPromise = innerFetch(URLS.PROD_SERVER_URL);

        try {
            // Will throw if timeout occurs first
            response = await Promise.race([prodPromise, timeout(5000)]);
        } catch {
            try {
                response = await innerFetch(URLS.VERCEL_BCKP_SERVER_URL);
            } catch {
                response = await prodPromise; // Same promise, reused
            }
        }
    } else {
        // If webSongUrl is provided, no need for timeout logic, since the App init sent req before
        try {
            response = await innerFetch(URLS.PROD_SERVER_URL);
        } catch {
            response = await innerFetch(URLS.VERCEL_BCKP_SERVER_URL);
        }
    }

    return response.json();
}