const playlists = data.playlists; // assuming data.playlists is an array of playlists

function loadFeature(playlist) {
  let modal = document.getElementsByClassName('feature-screen')[0];
  console.log(modal);
  console.log("hello")
  modal.innerHTML = `
  <div class="modalcontent">
                <div class="modalhead">
                    <span class="modalpic">
                        <img class="card-pic" src="${playlist.playlist_art}">
                        <div id="song-title"><h1>${playlist.playlist_name}</h1></div>
                        <div id="artiste">${playlist.playlist_creator}</div>
                    </span>
                </div>
                <div class="songs">
                </div>
            </div>
  `
  // code to display the selected playlist
  let modalContent = document.getElementsByClassName('songs')[0];
    for (let i=0; i < playlist.songs.length; i++){
        let song = playlist.songs[i];
        modalContent.innerHTML += `
        <div class="modaltitle">
            <div class="modalsong">
                <span class="songpic">
                    <img class="song-pic" src="${song.cover_art}">
                </span>
                <span class="songtitle">
                    <div id="song-title"><h2>${song.title}</h2></div>
                    <div id="artiste">${song.artist}</div>
                    <div id="album">${song.album}</div>
                </span>
                <span class="duration">
                    <div id="artiste">${song.duration}</div>
                </span>
            </div>
        </div>

        `
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function selectRandomPlaylist() {
  const randomPlaylist = playlists[getRandomInt(9)];
  loadFeature(randomPlaylist);
}

selectRandomPlaylist(); // call the function to select and display a random playlist
