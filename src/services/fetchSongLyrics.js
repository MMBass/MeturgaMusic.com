import constants from '@/constants';
import utils from '@/utils.js';
const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem('init');

export default async (splittedSongTitle) => {
    const response = await fetch(`${constants.prodServerUri}/lyrics?initId=` + initId, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "currSong": splittedSongTitle
        })
    });

    return response.json();
}