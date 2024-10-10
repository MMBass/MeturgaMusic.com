/** Look for a song in the LS wishList.
 * @param {string} title - The title of the song to be looked.
 * @returns {string|null} The id of the song if found, or null if not found.
 */
function isSaved(title) {
    if (!localStorage.getItem('meturgamm_wish')) localStorage.setItem('meturgamm_wish', JSON.stringify([]));
    const lsSongs = JSON.parse(localStorage.getItem('meturgamm_wish'));
    const song = lsSongs.find(s => s.title === title);
    return song ? song.id.toString() : null;
}

/** Adds a new song to the saved songs list in local storage.
 * @param {string} title - The title of the song to be added.
 * @returns {Array} The updated list of saved songs.
 */
function handleAddSong(title) {
    if (!localStorage.getItem('meturgamm_wish')) localStorage.setItem('meturgamm_wish', JSON.stringify([]));
    const lsSongs = JSON.parse(localStorage.getItem('meturgamm_wish'));
    const song = { title: title.replaceAll('&', 'and'), id: lsSongs.length.toString() };
    
    if (isSaved(title)) return lsSongs;

    lsSongs.unshift(song);  // {title: string, id: num}
    if (lsSongs.length >= 500) lsSongs.shift();

    localStorage.setItem("meturgamm_wish", JSON.stringify(lsSongs));

    return lsSongs;
};

/** Removes a song from the saved songs list in local storage.
 * @param {string} id - The id of the song to be removed.
 * @returns {Array} The updated list of saved songs.
 */
const handleDeleteClick = (id) => {
    const lsSongs = JSON.parse(localStorage.getItem('meturgamm_wish'));
    let newSongs = lsSongs.filter((row) => row.id !== id);
    localStorage.setItem("meturgamm_wish", JSON.stringify(newSongs));

    return newSongs;
};


export default { isSaved, handleAddSong, handleDeleteClick };
