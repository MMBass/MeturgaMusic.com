import { LOCAL_STORAGE_KEYS, URLS } from '@/constants';
import utils from '@/utils.js';

export default async (lines, title) => {
    const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem(LOCAL_STORAGE_KEYS.INIT);
    
    const response = await fetch(`${URLS.PROD_SERVER_URL}/trans/lines?initId=` + initId, {
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

    if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
    }

    return response.json();
};