import constants from '@/constants';
import utils from '@/utils.js';

export default async (splittedSongTitle, webSongUrl) => {
    const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem('init');
    
    const response = await fetch(`${constants.devServerUri}/lyrics?initId=` + initId, {
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