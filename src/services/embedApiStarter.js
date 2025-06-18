import { LOCAL_STORAGE_KEYS, URLS } from '@/constants';

/**
 * Initializes and configures a YouTube player.
 * 
 * @param {string} vID - The YouTube video ID to be played.
 * @param {React.MutableRefObject} youtubePlayer - A ref object to store the YouTube player instance.
 * @param {function} onPlayerReady - Callback function to be executed when the player is ready.
 * @param {function} onPlayerStateChange - Callback function to be executed when the player's state changes.
 * @param {function} onPlayerError - Callback function to be executed when an error occurs in the player.
 * 
 * @description
 * This function sets up a YouTube player either by creating a new instance if the API is already loaded,
 * or by loading the YouTube IFrame API and then creating the player instance.
 * It also manages the 'showPlayer' flag in localStorage.
 */
export default function (vID, youtubePlayer, onPlayerReady, onPlayerStateChange, onPlayerError) {
    if (vID) {
        if (!localStorage.getItem(LOCAL_STORAGE_KEYS.SHOW_PLAYER)) localStorage.setItem(LOCAL_STORAGE_KEYS.SHOW_PLAYER, 'true');

        loadYouTubeScript();
        if (youtubePlayer.current) {
            // destroy and create new instance
            youtubePlayer.current.destroy();
            newYTinstance();
        }

        window.onYouTubeIframeAPIReady = () => {
            newYTinstance();
        };

        function newYTinstance() {
            youtubePlayer.current = new window.YT.Player('youtube-player', {
                videoId: vID,
                width: 30,
                height: 30,
                playerVars: {
                    allowFullScreen: 'false'
                },
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange,
                    onError: onPlayerError
                }
            });
        }
    }
}

function loadYouTubeScript() {
    // Remove the script tag if it already exists
    let existingMainScript = document.querySelector('script[src^='+URLS.YT_IFRAME_API+']');
    if (existingMainScript) existingMainScript.parentNode.removeChild(existingMainScript);
    let existingWidgetScript = document.querySelector('script[src="https://www.youtube.com/s/player/2f238d39/www-widgetapi.vflset/www-widgetapi.js"]');
    if (existingWidgetScript) existingWidgetScript.parentNode.removeChild(existingWidgetScript);

    var tag = document.createElement('script');
    tag.src = URLS.YT_IFRAME_API+"?v=" + new Date().getTime(); // A random version to prevent caching
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}