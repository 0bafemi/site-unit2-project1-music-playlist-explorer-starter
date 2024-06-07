const playlistdata = data.playlists;

function loadplaylists() {
    let cards = document.getElementById("cards-screen");
    for (let i = 0; i < playlistdata.length; i++) {
        let card = playlistdata[i];

        let playlistCardElement = document.createElement("div");
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

loadplaylists();
