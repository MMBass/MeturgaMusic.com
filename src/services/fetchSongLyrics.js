import { LOCAL_STORAGE_KEYS, URLS } from '@/constants';
import utils from '@/utils.js';

export default async (splittedSongTitle, webSongUrl) => {
    const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem(LOCAL_STORAGE_KEYS.INIT);

    const callSearch = async (currServer) => {
        try {
            // move to catch until block done:
            // throw;
            
            // client side call webSongUrl
            const htmlSong = await fetch(webSongUrl).then(response => response.text());
            console.log(htmlSong);
           
            // post to server to process
            return await fetch(`${currServer}/lyrics/generate?initId=` + initId, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "htmlSong": htmlSong,
                    "currSong": splittedSongTitle,
                    "webSongUrl": webSongUrl
                })
            });
        } catch {
            return await fetch(`${currServer}/lyrics/search?initId=` + initId, {
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
    }

    let response = null;

    response = await callSearch(URLS.PROD_SERVER_URL);

    return response.json();
}