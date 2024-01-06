const getSingleTrans = async (lyric) => {
    const serverUri = 'https://musicline-backend.vercel.app';

    // const serverUri = 'https://musicline-backend-dev.vercel.app';

    // const serverUri = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? 'http://localhost:5000' : 'https://musicline-backend.vercel.app';

    lyric.trim().toLowerCase();
    lyric = lyric.replaceAll(/[^a-zA-Z0-9']/g, ""); // removes special chars exept '
    if (lyric.slice(-1) === "'") lyric = lyric.replaceAll("'", "g"); // change short Pronunciation spelling like goin' to - going

    return fetch(`${serverUri}/trans/single?initId=` + localStorage.getItem('init'), {
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

        let gUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${'he'}&dt=t&q=${encodeURIComponent(
            lyric
        )}`;

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
            return ['לא נמצאו עוד'];
        }
    } catch (error) {
        console.error("Google lyric Translation error:", error);
        return ['לא נמצאו עוד'];
    }
}

export default getSingleTrans;