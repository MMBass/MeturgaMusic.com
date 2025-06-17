import constants from '@/constants';
import { LOCAL_STORAGE_KEYS } from '@/enums';
import utils from '@/utils.js';

export default async (splittedSongTitle, webSongUrl) => {
    const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem(LOCAL_STORAGE_KEYS.INIT);
    
    const response = await fetch(`${constants.prodServerUri}/lyrics?initId=` + initId, {
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