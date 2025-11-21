// AZ example array in /data folder

import fetchSongLyrics from "@services/fetchSongLyrics";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * @param {Function} fetchSongLyrics
 */
async function runAllFetches() {
  for (const item of fullAZLyricsLinks) {

    const randomDelay = Math.floor(Math.random() * 2000) + 500;


    const splittedSongTitle = {
      artistName: encodeURI(item.artist),
      songName: encodeURI(item.song)
    };

    await fetchSongLyrics(splittedSongTitle, item.url);

    await delay(randomDelay);
  }
}

// Use example:
// runAllFetches(fullAZLyricsLinks, fetchSongLyrics);