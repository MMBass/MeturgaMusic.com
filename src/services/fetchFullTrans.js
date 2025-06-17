import constants from '@/constants';
import { LOCAL_STORAGE_KEYS } from '@/enums';
import utils from '@/utils.js';

export default async (lines, title) => {
    const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem(LOCAL_STORAGE_KEYS.INIT);
    
    const response = await fetch(`${constants.prodServerUri}/trans/lines?initId=` + initId, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "lines": lines,
            title: title
        })
    });

    return response.json();
};