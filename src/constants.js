import utils from "@/utils";

const MeturgaMusicUrl = " Https://MeturgaMusic.com ";

// Data links
const prodServerUri = 'https://musicline-backend.vercel.app';
const devServerUri = utils.isLocalhost() ? 'http://localhost:5000' : 'https://musicline-backend.vercel.app'; // if running on a cloud server - use the prod url anyway (for case of wrong deploying)
const gUrl = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=he&dt=t&q=';

// Redirect out links
const googleSearchRefUri = 'https://www.google.com/search?q=';
const youtubeEmbedUri = 'https://www.youtube.com/embed/';
const MeturgamusicMail = 'MeturgaMusic@gmail.com';
const instaPageUri = "https://www.instagram.com/meturgamusic";
const faceBookPageUri = "https://www.facebook.com/people/MeturgaMusic/100088145167989";
const whatsappDraftMessageUri = "https://api.whatsapp.com/send?text="

// Regex
const insideSearchResultsPattern = /\(([^)]+)\)/;
const en_pattern = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;
const specialCharsPattern = /[^a-zA-Z0-9']/g;
const allBracketsPattern = /[\])}[{(]/g;
const lineBreakPattern = /(?:\r\n|\r|\n)/g;

export default {
    MeturgaMusicUrl,

    prodServerUri,
    devServerUri,
    gUrl,
    googleSearchRefUri,
    youtubeEmbedUri,
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
