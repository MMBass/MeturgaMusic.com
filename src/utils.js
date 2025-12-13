import { LOCAL_STORAGE_KEYS, REGEX, URLS } from '@/constants';

/** Get if app currently running on local @returns {boolean} */
const isLocalhost = () => (location.hostname === "localhost" || location.hostname === "127.0.0.1")

const loadGscScript = () => {
    // Remove existing script
    const existingScript = document.querySelector(`script[src="${URLS.GSC_ENGINE}"]`);
    if (existingScript) existingScript.remove();

    // Create new script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = URLS.GSC_ENGINE;
    script.defer = true;
    document.body.appendChild(script);
    // a85c2374ffc8b8898 // Gen engine id
};

const lsSaveWord = (toSave /* { word: string, results: [string] } */) => {
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.WORDS)) localStorage.setItem(LOCAL_STORAGE_KEYS.WORDS, JSON.stringify([]));

    const words = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.WORDS));
    toSave.word = toSave.word.replace(REGEX.END_PUNCTUATION_PATTERN, " ");
    toSave.id = words.length.toString();
    words.unshift(toSave);  // {id: num, word: string, results: [string] }
    if (words.length >= 1000) words.shift();

    localStorage.setItem(LOCAL_STORAGE_KEYS.WORDS, JSON.stringify(words));
};

const lsSaveSongHistory = (song /*Provide a trimmed title*/) => {
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.SONGS)) localStorage.setItem(LOCAL_STORAGE_KEYS.SONGS, JSON.stringify([]));

    const songs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SONGS));

    // Update if exsist
    if (lsFindSong(song.title)) {
        songs.forEach((s, index) => {
            if (s.title.toLowerCase() === song.title.toLowerCase()) {
                s.id = s.id || index.toString();
                s.lines = song.lines || s.lines
                s.videoId = song.videoId || s.videoId
                s.service = song.service || "legacy"
            }
        });
    }

    // Create new
    if (!lsFindSong(song.title)) {
        song.id = songs.length.toString();
        songs.unshift(song);
        if (songs.length >= 500) songs.shift();
    }

    localStorage.setItem(LOCAL_STORAGE_KEYS.SONGS, JSON.stringify(songs));
};

const lsFindSong = (title /*provide trimmed title*/) => {
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.SONGS)) return false;

    const songs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SONGS));
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
    return /iPad|iPhone|iPod|Mac|Macintosh/.test(navigator.userAgent);
}


/** Note! Not finished yet @param {string} str @returns {string} */
const keyboardHEENSwitcher = (str) => {
    if (REGEX.HEBREW_CHARS_PATTERN.test(str)) {
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
    if (!str || typeof str !== 'string' || str.length === 0) return false;
    // Count the number of matching characters in the string
    let count = (str.match(REGEX.EN_CHARS_PATTERN) || []).length;
    // Calculate the percentage of matching characters
    let percentage = count / str.length;
    // Return true if the percentage is more than 90%, otherwise return false
    return percentage > 0.9;
}

/** GOOGLE ads tag - Global for all account sites */
const loadGoogleAds = () => {
    // The script will work if the option is ON in google console. Otherwise the custom ads will show (Not the automatic ads)
    const existingAdsScript = document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"]');
    // '+URLS.G_ADS+'
    if (!existingAdsScript) {
        const script = document.createElement('script');
        script.src = URLS.G_ADS;
        script.defer = true;
        script.crossorigin = "anonymous";
        script.dataset.overlays = "bottom";
        document.body.appendChild(script);
    }
}

const titleToParams = (str) => {
    if (typeof str === 'string') {
        const formatted = str.replaceAll(' - ', '_').replaceAll(' ', '-');
        return '?song=' + encodeURIComponent(formatted);
    }
    return;
};

const compareTitles = (a, b) => {
    if (typeof a !== 'string' || typeof b !== 'string') {
        console.error('compareTitles: One of the params is not a string');
        return false;
    }
    if (titleToParams(a.trim()).toLowerCase().replaceAll(' ', '') === titleToParams(b.trim()).toLowerCase().replaceAll(' ', '')) {
        return true;
    } else {
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

/**
 * Observes the DOM for an elements matching the selector, log their text content, and removes their parent element.
 * Example use:
 * jsObserveAndRemoveParentElmByChild('body ins .goog-rtopics, body ins .google-anno-sc');
 *  @param {string} childSelector - CSS selector for the target child 
 *  @param {number} depth - Depth of parent to remove (default is 1, which means remove direct parent).
 * * NOTE! past the child selector not the parent selector. */
const jsObserveAndRemoveParentElmByChild = (childSelector, depth = 1) => {
    try {
        const observer = new MutationObserver(() => {
            const children = document.querySelectorAll(childSelector);
            const removedParents = new Set();

            children.forEach(child => {
                let parent = child.parentElement;
                for (let i = 1; i < depth; i++) {
                    parent = parent?.parentElement;
                }

                if (parent && !removedParents.has(parent) && document.body.contains(parent)) {
                    console.log("Removed child content: " + child.textContent);
                    parent.parentElement?.removeChild(parent);
                    removedParents.add(parent);
                }
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    } catch (err) {
        console.error("Error initializing jsObserveAndRemoveParentElmByChild:", err);
    }
}

export default { isLocalhost, directParamsToHash, loadGscScript, lsSaveSongHistory, lsFindSong, lsSaveWord, clearGsc, isApple, keyboardHEENSwitcher, isMostlyEnglish, loadGoogleAds, titleToParams, compareTitles, jsObserveAndRemoveParentElmByChild }