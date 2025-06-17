import utils from "@/utils";

// We have a chat copilot with reccomandations 

const MeturgaMusicUrl = " Https://MeturgaMusic.com ";

// Data links
const prodServerUri = 'Https://api.MeturgaMusic.com';
const devServerUri = utils.isLocalhost() ? 'http://localhost:5000' : 'Https://api.MeturgaMusic.com'; // if running on a cloud server - use the prod url anyway (for case of wrong deploying)
const gUrl = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=he&dt=t&q=';

// Redirect out links
const googleSearchRefUri = 'https://www.google.com/search?q=';
const youtubeEmbedUri = 'https://www.youtube.com/embed/';
const youtubeEmbedProps = '?rel=0&fs=0&loop=1&color=white&enablejsapi=1&vq=small'; // TODO loop, rel, vq - are not wotking
const MeturgamusicMail = 'MeturgaMusic@gmail.com';
const instaPageUri = "https://www.instagram.com/meturgamusic";
const faceBookPageUri = "https://www.facebook.com/people/MeturgaMusic/100088145167989";
const whatsappDraftMessageUri = "https://api.whatsapp.com/send?text="


// TODO - more regex in files
// Regex
const insideSearchResultsPattern = /\(([^)]+)\)/;
const en_pattern = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;
const specialCharsPattern = /[^a-zA-Z0-9']/g;
const allBracketsPattern = /[\])}[{(]/g;
const lineBreakPattern = /(?:\r\n|\r|\n)(?![\r\n])/g; // With a negative lookahead that ensures there isn't another line break character following

export default {
    MeturgaMusicUrl,

    prodServerUri,
    devServerUri,
    gUrl,
    googleSearchRefUri,
    youtubeEmbedUri,
    youtubeEmbedProps,
    MeturgamusicMail,
    instaPageUri,
    faceBookPageUri,
    whatsappDraftMessageUri,

    en_pattern,
    specialCharsPattern,
    insideSearchResultsPattern,
    allBracketsPattern,
    lineBreakPattern
};
