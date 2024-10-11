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
    if(vID){
        if (!localStorage.getItem('showPlayer')) localStorage.setItem('showPlayer', 'true');


        if (youtubePlayer.current.loadVideoById ) {
            // API already loaded, skip the window.onYouTubeIframeAPIReady (while it's run only once at a session anyway - no use to wait for it)
            youtubePlayer.current.loadVideoById(vID);
        } else {
            // First time - need to load the API
            if (document.querySelector('script[src="https://www.youtube.com/iframe_api"]') === null) {
                const tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            }
    
            window.onYouTubeIframeAPIReady = () => {
                youtubePlayer.current = new window.YT.Player('youtube-player', {
                    videoId: vID,
                    events: {
                        onReady: onPlayerReady,
                        onStateChange: onPlayerStateChange,
                        onError: onPlayerError,
                        onApiChange: (event) => {
                            if(event.data)  console.log(event.data);
                        }
                    }
                });
            };
        }
    }
}