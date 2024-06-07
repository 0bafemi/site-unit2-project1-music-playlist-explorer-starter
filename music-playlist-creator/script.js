const playlistdata = data.playlists;
let search = document.getElementById("search");

function loadplaylists(filter="") {
    let filter_result = playlistdata.filter(item => item['playlist_name'].toLowerCase().includes(filter.toLowerCase()) || item['playlist_creator'].toLowerCase().includes(filter.toLowerCase()))
    document.getElementById('cards-screen').innerHTML='';
    for (let i = 0; i < filter_result.length; i++) {
        let card = filter_result[i];

        let playlistCardElement = document.createElement("div");
        playlistCardElement.className = "playlist-cards"
        playlistCardElement.innerHTML = `
                <div>
                    <img class="card-pic" src="${card.playlist_art}">
                </div>
                <div class = "card-text">
                    <h3 id="playlist-title">${card.playlist_name}</h3>
                    <p id="Creator">${card.playlist_creator}</p>
                    <span id=heart-${card.playlistID}>
                        <i class="fa-regular fa-heart"></i>
                    <span>
                    <span id=likecount-${card.playlistID}>
                        ${card.likeCount}
                    </span>
                </div>
        `;
        playlistCardElement.classList.add("card");
        document.getElementById("cards-screen").appendChild(playlistCardElement);

        const like = document.getElementById(`heart-${card.playlistID}`);

        const likeElement = document.getElementById(`likecount-${card.playlistID}`);


        const heartSpan = document.getElementById(`heart-${card.playlistID}`);

        like.addEventListener("click", function () {
            event.stopPropagation();

            card.likeCount++;
            likeElement.innerText = card.likeCount;

            if (card.likeCount === 1) {
                card.likeCount -= 2;
                // Select the <i> element within the clicked heart's parent span element
                const heartElement = heartSpan.querySelector('i');
                heartElement.classList.remove('fa-regular');
                heartElement.classList.add('fa-solid');
            } else if (card.likeCount === 0) {
                // Select the <i> element within the clicked heart's parent span element
                const heartElement = heartSpan.querySelector('i');
                heartElement.classList.remove('fa-solid');
                heartElement.classList.add('fa-regular');
            }
        });
    }
}

search.addEventListener('input', (event) => {
    loadplaylists(event.target.value)
})

function loadModalOverlay(playlist){ // playlist contains the specific playlist object
    let modalOverlay = document.getElementsByClassName('modal')[0];
    console.log(modalOverlay);
    modalOverlay.innerHTML = `
    <div class="modalcontent">
        <div class="modalhead">
            <span class="modalpic">
                <img class="card-pic" src="${playlist.playlist_art}">
            </span>
            <span class="modaltitle">
                <div id="song-title"><h1>${playlist.playlist_name}</h1></div>
                <div id="artiste">${playlist.playlist_creator}</div>
            </span>
            <span  class="quit">&times;</span>
        </div>
    `;
    // Time to work on the songs
    let modalContent = document.getElementsByClassName('modalcontent')[0];
    for (let i=0; i < playlist.songs.length; i++){
        let song = playlist.songs[i];
        modalContent.innerHTML += `
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
        `;
    }
    modalOverlay.innerHTML += `
    </div>
    `;
    let closeButton = document.getElementsByClassName('quit')[0];
    closeButton.addEventListener('click',  (event) => { // What does event do?
        document.getElementsByClassName('modal')[0].style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalOverlay){
            document.getElementsByClassName('modal')[0].style.display = 'none';
        }
        });
}


loadplaylists();
var cardElements = document.getElementsByClassName("playlist-cards");
    for (let i = 0; i < cardElements.length; i ++) {
        cardElements[i].addEventListener('click',  (event) => { // What does event do?
            loadModalOverlay(playlistdata[i]);
            document.getElementsByClassName('modal')[0].style.display = 'block';
            console.log(playlistData[i]);
        });
    }
