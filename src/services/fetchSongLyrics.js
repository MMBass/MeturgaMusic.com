import { LOCAL_STORAGE_KEYS, URLS } from '@/constants';
import utils from '@/utils.js';

export default async (splittedSongTitle, webSongUrl) => {
    const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem(LOCAL_STORAGE_KEYS.INIT);
    
    const response = await fetch(`${URLS.PROD_SERVER_URL}/lyrics?initId=` + initId, {
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

    return response.json();
}