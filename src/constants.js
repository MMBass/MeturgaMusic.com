import utils from "@/utils";

export const ROUTES = {
    HOME: '/',
    EXERCISE: '/Exercise',
    HISTORY: '/History',
    WISHLIST: '/Wish-list',
    SPOTIFY_EXTENSION: '/Spotify-extension',
    ABOUT: '/About',
    ACCESSIBILITY: '/Accessibility',
    PRIVACY: '/Privacy',
    TERMS: '/Terms',
    SONG: '/song/:urlSong',
    SONGS: '/songs/:urlSong',
    NOT_FOUND: '*',
};

export const URLS = {
    METURGAMUSIC_URL: "https://MeturgaMusic.com",
    // If running on a cloud server - use the prod url anyway (for case of wrong deploying)
    DEV_SERVER_URL: utils.isLocalhost() ? 'http://localhost:5000' : 'https://api.MeturgaMusic.com',
    PROD_SERVER_URL: 'https://meturgamusic-backend.onrender.com',
    VERCEL_BCKP_SERVER_URL: 'https://api.MeturgaMusic.com',
    LOCALHOST: 'http://localhost:5000',
    GSC_ENGINE: "https://cse.google.com/cse.js?cx=0d8465f607b0b1227",
    GOOGLE_TRANSLATE_URL: 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=he&dt=t&q=',
    YT_IFRAME_API: "https://www.youtube.com/iframe_api",
    G_ADS: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744"
};

export const EXTERNAL_LINKS = {
    GOOGLE_SEARCH_REF_URL: 'https://www.google.com/search?q=',
    YOUTUBE_EMBED_URL: 'https://www.youtube.com/embed/',
    // Note - loop, rel, vq - are not wotking
    YOUTUBE_EMBED_PROPS: '?rel=0&fs=0&loop=1&color=white&enablejsapi=1&vq=small',
    METURGAMUSIC_MAIL: 'MeturgaMusic@gmail.com',
    INSTA_PAGE_URL: "https://www.instagram.com/meturgamusic",
    FACEBOOK_PAGE_URL: "https://www.facebook.com/people/MeturgaMusic/100088145167989",
    WHATSAPP_DRAFT_MESSAGE_URL: "https://api.whatsapp.com/send?text="
};

export const REGEX = {
    HEBREW_CHARS_PATTERN: /[\u0590-\u05FF]/g,
    // Matches each valid character in a string (individually)
    EN_CHARS_PATTERN: /[~`!@#$%^&*()_+=[\]{}|;':",./<>?a-zA-Z0-9- ]/g,
    // Tests if the whole string is composed only of valid characters.
    EN_PATTERN: /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/,
    INSIDE_SEARCH_RESULTS_PATTERN: /\(([^)]+)\)/,
    SPECIAL_CHARS_PATTERN: /[^a-zA-Z0-9']/g,
    ALL_BRACKETS_PATTERN: /[\])}[{(]/g,
    // With a negative lookahead that ensures there isn't another line break character following
    LINE_BREAK_PATTERN: /(?:\r\n|\r|\n)(?![\r\n])/g,
    IOS_MODELS: /iPad|iPhone|iPod/,
    END_PUNCTUATION_PATTERN: /[,\.]$/g
};

export const LOCAL_STORAGE_KEYS = {
    INIT: 'init',
    WORDS: 'meturgamm_words',
    SONGS: 'meturgamm_songs',
    WISHLIST: 'meturgamm_wish',
    WISH_CLOSE_DESC_BANNER: 'wish_closeDescBanner',
    PREFER_DARK: 'preferedDark',
    VISIBLE_ITMS: 'visibleItems',
    SHOW_PLAYER: 'showPlayer',
    L_BODY_FONT_SIZE: 'fontSize',
    PRIVACY_DIALOG_SHOWN: 'privacyDialogShown',
}

export const SESSION_STORAGE_KEYS = {
    CURR_SONG: 'currSong',
    TTIP: 'TTip',
}

export const LYRICS_BODY = {
    PARTIAL_LYRICS: '****PARTIAL LYRICS****',
    LEGACY_PHRASE_BREAK: 'PHRASE_BREAK',
    PHRASE_BREAK: '|####|',
};