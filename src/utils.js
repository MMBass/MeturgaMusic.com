const lsSaveSong = (song /*provide trimmed title*/) => {
    if (!localStorage.getItem('meturgamm_songs')) localStorage.setItem('meturgamm_songs', JSON.stringify([]));

    const songs = JSON.parse(localStorage.getItem('meturgamm_songs'));
    songs.push(song);  // {title: "", lines: {src:"", trans:""}}
    if (songs.length >= 500) songs.shift();

    localStorage.setItem("meturgamm_songs", JSON.stringify(songs));
};

const lsFindSong = (title /*provide trimmed title*/) => {
    if (!localStorage.getItem('meturgamm_songs')) return false;

    const songs = JSON.parse(localStorage.getItem('meturgamm_songs'));
    return songs.find(s => s.title.toLowerCase() === title.toLowerCase());  // {title: "", lines: {src:"", trans:""}}
};

const clearGsc = () => { // clear the gsc search input
    let gsc_clear = document.querySelector('.gsst_a');
    if (gsc_clear) {
        gsc_clear.dispatchEvent(new Event('click'));
    };
};

const getMobileOS = () => {
    let is = false;
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
        is = false;
    } else if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
        is = true;
    }

    return is;
};

const keyboardHEENSwitcher = (str) => {
    if (/[\u0590-\u05FF]/.test(str)) {
        var hebrewToEnglish = { "ק": "e", "ר": "r", "א": "t", "ט": "y", "ו": "u", "ן": "i", "ם": "o", "פ": "p", "ש": "a", "ד": "s", "ג": "d", "כ": "f", "ע": "g", "י": "h", "ח": "j", "ל": "k", "ך": "l", "ז": "z", "ס": "x", "ב": "c", "נ": "v", "נ": "b", "מ": "n", "צ": "m" };

        for (let index = 0; index < str.length; index++) {
            if (hebrewToEnglish[str[index]]) str = str.replace(new RegExp(str[index], 'g'), hebrewToEnglish[str[index]]);
            else str = str.replace(new RegExp(str[index], 'g'), '');
        }
        console.log(str);
        return str;
    } else {
        return str;
    }
}

function isMostlyEnglish(str) {
    let regex = /[~`!@#$%^&*()_+=[\]{}|;':",./<>?a-zA-Z0-9- ]/g;
    // Count the number of matching characters in the string
    let count = (str.match(regex) || []).length;
    // Calculate the percentage of matching characters
    let percentage = count / str.length;
    // Return true if the percentage is more than 50%, otherwise return false
    return percentage > 0.8;
}

export default { lsSaveSong, lsFindSong, clearGsc, getMobileOS, keyboardHEENSwitcher, isMostlyEnglish }