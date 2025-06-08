
/** Get if app currently running on local @returns {boolean} */
const isLocalhost = () => (location.hostname === "localhost" || location.hostname === "127.0.0.1")

const loadGscScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cse.google.com/cse.js?cx=0d8465f607b0b1227" // Az engine, Called 'MusixMatch2' Id In Bass...Dev Account;
    script.defer = true;
    document.body.appendChild(script);
    // a85c2374ffc8b8898 // Genius engine id 
};

const lsSaveWord = (toSave /* { word: string, results: [string] } */) => {
    if (!localStorage.getItem('meturgamm_words')) localStorage.setItem('meturgamm_words', JSON.stringify([]));

    const words = JSON.parse(localStorage.getItem('meturgamm_words'));
    toSave.word = toSave.word.replace(/[,\.]$/, " ");
    toSave.id = words.length.toString();
    words.unshift(toSave);  // {id: num, word: string, results: [string] }
    if (words.length >= 1000) words.shift();

    localStorage.setItem("meturgamm_words", JSON.stringify(words));
};

const lsSaveSongHistory = (song /*Provide a trimmed title*/) => {
    if (!localStorage.getItem('meturgamm_songs')) localStorage.setItem('meturgamm_songs', JSON.stringify([]));

    const songs = JSON.parse(localStorage.getItem('meturgamm_songs'));

    // Update if exsist
    if(lsFindSong(song.title)){
        songs.forEach(s =>{if(s.title.toLowerCase() === song.title.toLowerCase()){
            s.id = s.id || s.id
            s.lines = song.lines || s.lines
            s.videoId = song.videoId || s.videoId
            s.service = song.service || "legacy"
        }});
    }

    // Create new
    if(!lsFindSong(song.title)){
        song.id = songs.length.toString();
        songs.unshift(song);
        if (songs.length >= 500) songs.shift();
    }

    localStorage.setItem("meturgamm_songs", JSON.stringify(songs));
};

const lsFindSong = (title /*provide trimmed title*/) => {
    if (!localStorage.getItem('meturgamm_songs')) return false;

    const songs = JSON.parse(localStorage.getItem('meturgamm_songs'));
    return songs.find(s => s.title.toLowerCase() === title.toLowerCase());  // {title: "", lines: {src:"", trans:""}}
};

/**  Clear the gsc search input */
const clearGsc = () => { //
    let gsc_clear = document.querySelector('.gsst_a');
    if (gsc_clear) {
        gsc_clear.dispatchEvent(new Event('click'));
    };
};

/** Get if apple device or not @returns {boolean} */
const isApple = () => {
    let iosQuirkPresent = function () {
        var audio = new Audio();
        audio.volume = 0.5;
        return audio.volume === 1;   // volume cannot be changed from "1" on iOS 12 and below
    };
    let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    let isAppleDevice = navigator.userAgent.includes('Macintosh');
    let isTouchScreen = navigator.maxTouchPoints >= 1;   // true for iOS 13 (and hopefully beyond)
    return isIOS || (isAppleDevice && (isTouchScreen || iosQuirkPresent()));
};

/** @param {string} str @returns {string} */
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

/** @param {string} str @returns {boolean} */
function isMostlyEnglish(str) {
    let regex = /[~`!@#$%^&*()_+=[\]{}|;':",./<>?a-zA-Z0-9- ]/g;
    // Count the number of matching characters in the string
    let count = (str.match(regex) || []).length;
    // Calculate the percentage of matching characters
    let percentage = count / str.length;
    // Return true if the percentage is more than 90%, otherwise return false
    return percentage > 0.9;
}

/** GOOGLE ads tag - Global for all account sites */
const loadGoogleAds = () => {
    // The script will work if the option is ON in google console. Otherwise the custom ads will show
    const existingAdsScript = document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]');
    if (!existingAdsScript) {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744';
        script.def = true;
        script.crossorigin = "anonymous";
        script.dataset.overlays = "bottom";
        document.body.appendChild(script);
    }
}

const titleToParams = (str) => {
    if (typeof str === 'string') return '?song=' + str.replaceAll(' - ', '_').replaceAll(' ', '-').replaceAll('&', 'and');
    else return;
};

const compareTitles = (a, b) => {
    if (typeof a !== 'string' || typeof b !== 'string') {
        console.error('compareTitles: One of the params is not a string');
        return false;
    }
    if (titleToParams(a.trim()).toLowerCase().replaceAll(' ', '') === titleToParams(b.trim()).toLowerCase().replaceAll(' ', '')){
        return true;
    } else{
        return false;
    } 
}

/** Hack the gh-pages hash router - For direct access */
const directParamsToHash = () => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('page')) {
        location.href = location.origin + '/#/' + searchParams.get('page');
    } else if (searchParams.get('song') && searchParams.get('song').includes("_")) {
        location.href = location.origin + '/#/?song=' + searchParams.get('song');
    } else {
        return;
    }
};

export default { isLocalhost, directParamsToHash, loadGscScript, lsSaveSongHistory, lsFindSong, lsSaveWord, clearGsc, isApple, keyboardHEENSwitcher, isMostlyEnglish, loadGoogleAds, titleToParams, compareTitles }