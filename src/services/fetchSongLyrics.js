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

    let response = null;
    try {
        response = await innerFetch(URLS.PROD_SERVER_URL);
    } catch {
        response = await innerFetch(URLS.PROD_BCKP_SERVER_URL);
    }

    return response.json();
}