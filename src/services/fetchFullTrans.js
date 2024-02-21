import constants from '@/constants';
import utils from '@/utils.js';
const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem('init');

export default async (lines, song_id, title) => {
    const response = await fetch(`${constants.prodServerUri}/trans/lines?initId=` + initId, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "lines": lines,
            song_id: song_id,
            title: title
        })
    });

    return response.json();
};