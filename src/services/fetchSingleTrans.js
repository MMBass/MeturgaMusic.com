import TUtils from '@/i18n-utils';
import constants from '@/constants';
import { LOCAL_STORAGE_KEYS } from '@/enums';
import utils from '@/utils.js';

const getSingleTrans = async (lyric) => {
    const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem(LOCAL_STORAGE_KEYS.INIT);

    lyric.trim().toLowerCase();
    lyric = lyric.replaceAll(constants.specialCharsPattern, ""); // Removes special chars exept '
    if (lyric.slice(-1) === "'") lyric = lyric.replaceAll("'", "g"); // Change short Pronunciation spelling like goin' to - going

    return fetch(`${constants.prodServerUri}/trans/single?initId=` + initId, {
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

        const gUrl = `${constants.gUrl}${encodeURIComponent(lyric)}`;

        const response = await fetch(gUrl);
        const data = await response.json();

        var translatedTexts = [];
        if (data && data[0]) {
            data[0].forEach((element) => {
                translatedTexts.push(element[0]);
            });

            return [translatedTexts.join(" ")];

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