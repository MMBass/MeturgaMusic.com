import constants from '@/constants';
import utils from '@/utils.js';
const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem('init');

export default async (src) => {
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
