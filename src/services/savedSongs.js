
/**
 * Adds a new song to the saved songs list in local storage.
 * @param {string} title - The title of the song to be added.
 * @returns {Array} The updated list of saved songs.
 */
function handleAddSong(title) {
    if (!localStorage.getItem('meturgamm_wish')) localStorage.setItem('meturgamm_wish', JSON.stringify([]));
    const lsSongs = JSON.parse(localStorage.getItem('meturgamm_wish'));
    const song = { title: title.replaceAll('&', 'and'), id: lsSongs.length.toString() };
    if (lsSongs.some(s => s.title === song.title)) return;

    lsSongs.unshift(song);  // {title: string, id: num}
    if (lsSongs.length >= 500) songs.shift();

    localStorage.setItem("meturgamm_wish", JSON.stringify(lsSongs));

    return lsSongs;
};

/**
 * Removes a song from the saved songs list in local storage.
 * @param {string} id - The id of the song to be removed.
 * @returns {Array} The updated list of saved songs.
 */
const handleDeleteClick = (id) => {
    const lsSongs = JSON.parse(localStorage.getItem('meturgamm_wish'));
    let newSongs = lsSongs.filter((row) => row.id !== id);
    localStorage.setItem("meturgamm_wish", JSON.stringify(newSongs));

    return newSongs;
};


export default { handleAddSong, handleDeleteClick };
