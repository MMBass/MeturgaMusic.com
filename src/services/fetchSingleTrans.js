import TUtils from '@/i18n-utils';
import { LOCAL_STORAGE_KEYS, REGEX, URLS } from '@/constants';
import utils from '@/utils.js';

const getSingleTrans = async (lyric) => {
    const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem(LOCAL_STORAGE_KEYS.INIT);

    lyric.trim().toLowerCase();
    lyric = lyric.replaceAll(REGEX.SPECIAL_CHARS_PATTERN, ""); // Removes special chars exept '
    if (lyric.slice(-1) === "'") lyric = lyric.replaceAll("'", "g"); // Change short Pronunciation spelling like goin' to - going

    return fetch(`${URLS.PROD_SERVER_URL}/trans/single?initId=` + initId, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "single": encodeURI(lyric)
        })
    }).then(response => response.json())
        .then(async data => {
            if (data?.results[0]) {
                return data.results;
            } else {
                return await getSingleFromG(lyric);
            }
        }
        ).catch(async (e) => {
            console.log(e);
            return await getSingleFromG(lyric);
        });
}

async function getSingleFromG(lyric) {
    try {

        const gUrl = `${URLS.GOOGLE_TRANSLATE_URL}${encodeURIComponent(lyric)}`;

        const response = await fetch(gUrl);
        const data = await response.json();

        var translatedTexts = [];
        if (data && data[0]) {
            data[0].forEach((element) => {
                translatedTexts.push(element[0]);
            });

            // Make the result a single string
            const finalResult = translatedTexts.join(" ");
            // Check if the result is empty or only whitespace
            if (!finalResult || finalResult.trim().length === 0) {
                return [TUtils.NoMore];
            }

            return [finalResult];

        } else {
            console.error("Google lyric Translation empty for: " + lyric);
            return [TUtils.NoMore];
        }
    } catch (error) {
        console.error("Google lyric Translation error:", error);
        return [TUtils.NoMore];
    }
}

export default getSingleTrans;