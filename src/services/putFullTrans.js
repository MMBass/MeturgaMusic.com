import constants from '@/constants';
import utils from '@/utils.js';
const initId = utils.isLocalhost() ? "localhost" : localStorage.getItem('init');

export default (song_id, title, newLines, source) => {
    const trans = [];
    newLines.forEach(e => trans.push(e.trans));

    fetch(`${constants.prodServerUri}/trans/lines?initId=` + initId, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": song_id,
            "title": title,
            "trans": JSON.stringify(trans),
            "source": source,
        })
    }).then(response => response.json())
    .then(data => {
        console.log(data);
    });
};