import constants from '@/constants';
import { LOCAL_STORAGE_KEYS } from '@/enums';
import utils from '@/utils.js';

export default async (src) => {
    const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem(LOCAL_STORAGE_KEYS.INIT);

    try {
        
        const response = await fetch(`${constants.prodServerUri}/trans/single-line?initId=` + initId, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "line": encodeURI(src)
            })
        });
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
        throw e;
    }
}
