const movieBtn = document.getElementById("movie-btn");
const tvBtn = document.getElementById("tv-btn");
const containerM = document.getElementById("grid-container-movie");
const containerT = document.getElementById("grid-container-tv");

const movies = [
  {
    title: "Aquaman and The Lost Kingdom",
    year: 2023,
    lenght: 124,
    source: "asset/aquaman.jpg",
    type: "Movie",
  },
  {
    title: "Beekeeper",
    year: 2024,
    lenght: 105,
    source: "asset/beekeeper.jpg",
    type: "Movie",
  },
  {
    title: "Dune",
    year: 2021,
    lenght: 155,
    source: "asset/dune.jpg",
    type: "Movie",
  },
  {
    title: "The Tiger's Apprentice",
    year: 2024,
    lenght: 83,
    source: "asset/tiger.jpg",
    type: "Movie",
  },
  {
    title: "Hunger Game",
    year: 2023,
    lenght: 124,
    source: "asset/hungergame.jpg",
    type: "Movie",
  },
  {
    title: "The Marvels",
    year: 2023,
    lenght: 105,
    source: "asset/marvels.jpg",
    type: "Movie",
  },
  {
    title: "Openheimer",
    year: 2023,
    lenght: 181,
    source: "asset/openheimer.jpg",
    type: "Movie",
  },
  {
    title: "Wonka",
    year: 2023,
    lenght: 117,
    source: "asset/wonka.jpg",
    type: "Movie",
  },
  {
    title: "Aquaman and The Lost Kingdom",
    year: 2023,
    lenght: 124,
    source: "asset/aquaman.jpg",
    type: "Movie",
  },
  {
    title: "Beekeeper",
    year: 2024,
    lenght: 105,
    source: "asset/beekeeper.jpg",
    type: "Movie",
  },
  {
    title: "Dune",
    year: 2021,
    lenght: 155,
    source: "asset/dune.jpg",
    type: "Movie",
  },
  {
    title: "The Tiger's Apprentice",
    year: 2024,
    lenght: 83,
    source: "asset/tiger.jpg",
    type: "Movie",
  },
  {
    title: "Hunger Game",
    year: 2023,
    lenght: 124,
    source: "asset/hungergame.jpg",
    type: "Movie",
  },
  {
    title: "The Marvels",
    year: 2023,
    lenght: 105,
    source: "asset/marvels.jpg",
    type: "Movie",
  },
  {
    title: "Openheimer",
    year: 2023,
    lenght: 181,
    source: "asset/openheimer.jpg",
    type: "Movie",
  },
  {
    title: "Wonka",
    year: 2023,
    lenght: 117,
    source: "asset/wonka.jpg",
    type: "Movie",
  },
  {
    title: "Aquaman and The Lost Kingdom",
    year: 2023,
    lenght: 124,
    source: "asset/aquaman.jpg",
    type: "Movie",
  },
  {
    title: "Beekeeper",
    year: 2024,
    lenght: 105,
    source: "asset/beekeeper.jpg",
    type: "Movie",
  },
  {
    title: "Dune",
    year: 2021,
    lenght: 155,
    source: "asset/dune.jpg",
    type: "Movie",
  },
  {
    title: "The Tiger's Apprentice",
    year: 2024,
    lenght: 83,
    source: "asset/tiger.jpg",
    type: "Movie",
  },
  {
    title: "Hunger Game",
    year: 2023,
    lenght: 124,
    source: "asset/hungergame.jpg",
    type: "Movie",
  },
  {
    title: "The Marvels",
    year: 2023,
    lenght: 105,
    source: "asset/marvels.jpg",
    type: "Movie",
  },
  {
    title: "Openheimer",
    year: 2023,
    lenght: 181,
    source: "asset/openheimer.jpg",
    type: "Movie",
  },
  {
    title: "Wonka",
    year: 2023,
    lenght: 117,
    source: "asset/wonka.jpg",
    type: "Movie",
  },
];

const tv_shows = [
  {
    title: "One Piece",
    year: 'SS 21',
    lenght: 'EPS 1091',
    source: "asset/onepiece.jpg",
    type: "Tv Show",
  },
  {
    title: "Attack on Titan",
    year: 'SS 4',
    lenght: 'EPS 30',
    source: "asset/attackontitan.jpg",
    type: "Tv Show",
  },
  {
    title: "Friends",
    year: 'SS 10',
    lenght: 'EPS 17',
    source: "asset/friends.jpg",
    type: "Tv Show",
  },
  {
    title: "Halo",
    year: 'SS 2',
    lenght: 'EPS 3',
    source: "asset/halo.jpg",
    type: "Tv Show",
  },
  {
    title: "Jujutsu Kaisen",
    year: 'SS 1',
    lenght: 'EPS 29',
    source: "asset/jujutsukaisen.jpg",
    type: "Tv Show",
  },
  {
    title: "The Loud House",
    year: 'SS 9',
    lenght: 'EPS 20',
    source: "asset/theloudhouse.jpg",
    type: "Tv Show",
  },
  {
    title: "OnePiece",
    year: 2000,
    lenght: 25,
    source: "asset/onepiece.jpg",
    type: "Tv Show",
  },
  {
    title: "OnePiece",
    year: 2000,
    lenght: 25,
    source: "asset/onepiece.jpg",
    type: "Tv Show",
  },
  {
    title: "One Piece",
    year: 'SS 21',
    lenght: 'EPS 1091',
    source: "asset/onepiece.jpg",
    type: "Tv Show",
  },
  {
    title: "Attack on Titan",
    year: 'SS 4',
    lenght: 'EPS 30',
    source: "asset/attackontitan.jpg",
    type: "Tv Show",
  },
  {
    title: "Friends",
    year: 'SS 10',
    lenght: 'EPS 17',
    source: "asset/friends.jpg",
    type: "Tv Show",
  },
  {
    title: "Halo",
    year: 'SS 2',
    lenght: 'EPS 3',
    source: "asset/halo.jpg",
    type: "Tv Show",
  },
  {
    title: "Jujutsu Kaisen",
    year: 'SS 1',
    lenght: 'EPS 29',
    source: "asset/jujutsukaisen.jpg",
    type: "Tv Show",
  },
  {
    title: "The Loud House",
    year: 'SS 9',
    lenght: 'EPS 20',
    source: "asset/theloudhouse.jpg",
    type: "Tv Show",
  },
  {
    title: "OnePiece",
    year: 2000,
    lenght: 25,
    source: "asset/onepiece.jpg",
    type: "Tv Show",
  },
  {
    title: "OnePiece",
    year: 2000,
    lenght: 25,
    source: "asset/onepiece.jpg",
    type: "Tv Show",
  },
  {
    title: "One Piece",
    year: 'SS 21',
    lenght: 'EPS 1091',
    source: "asset/onepiece.jpg",
    type: "Tv Show",
  },
  {
    title: "Attack on Titan",
    year: 'SS 4',
    lenght: 'EPS 30',
    source: "asset/attackontitan.jpg",
    type: "Tv Show",
  },
  {
    title: "Friends",
    year: 'SS 10',
    lenght: 'EPS 17',
    source: "asset/friends.jpg",
    type: "Tv Show",
  },
  {
    title: "Halo",
    year: 'SS 2',
    lenght: 'EPS 3',
    source: "asset/halo.jpg",
    type: "Tv Show",
  },
  {
    title: "Jujutsu Kaisen",
    year: 'SS 1',
    lenght: 'EPS 29',
    source: "asset/jujutsukaisen.jpg",
    type: "Tv Show",
  },
  {
    title: "The Loud House",
    year: 'SS 9',
    lenght: 'EPS 20',
    source: "asset/theloudhouse.jpg",
    type: "Tv Show",
  },
  {
    title: "OnePiece",
    year: 2000,
    lenght: 25,
    source: "asset/onepiece.jpg",
    type: "Tv Show",
  },
  {
    title: "OnePiece",
    year: 2000,
    lenght: 25,
    source: "asset/onepiece.jpg",
    type: "Tv Show",
  },
];

shuffle();
function shuffle() {
  for (let i = 0; i < movies.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [movies[i], movies[j]] = [movies[j], movies[i]];
  }
  for (let i = 0; i < tv_shows.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [tv_shows[i], tv_shows[j]] = [tv_shows[j], tv_shows[i]];
  }
}

addCard(1);
function addCard(c) {
  let arrs = c ? movies : tv_shows;
  arrs.forEach((arr) => {

    const card = document.createElement("Div");
    const imgDiv = document.createElement("Div");
    const hovered = document.createElement("Div");
    const playBtn = document.createElement("Div");
    const playImg = document.createElement("img");
    const img = document.createElement("img");
    const descDiv = document.createElement("Div");
    const title = document.createElement("Div");
    const desc = document.createElement("Div");
    const p = document.createElement("P");
    const span = document.createElement("Span");
    const icon = document.createElement("i");
    c ? containerM.appendChild(card) : containerT.appendChild(card);
    card.classList.add("w-full");
    card.appendChild(imgDiv);
    imgDiv.classList.add("imageStyle", "group");
    imgDiv.appendChild(hovered);
    hovered.classList.add("hovered");
    imgDiv.appendChild(playBtn);
    playBtn.classList.add("playBtn");
    playBtn.appendChild(playImg);
    playImg.src = "asset/play-solid.svg";
    playImg.classList.add("w-6", "h-6");
    imgDiv.appendChild(img);
    img.src = arr.source;
    img.classList.add("img");
    card.appendChild(descDiv);
    descDiv.classList.add("py-2");
    descDiv.appendChild(title);
    title.textContent = arr.title;
    title.classList.add("title");
    descDiv.appendChild(desc);
    desc.classList.add("desc");
    desc.appendChild(p);
    p.textContent = arr.year;
    p.appendChild(span);
    span.textContent = " . ";
    span.classList.add("span");
    p.innerHTML += arr.lenght;
    desc.appendChild(icon);
    icon.classList.add("icon");
    icon.textContent = arr.type;
  });
}

function movieCardDisplay() {
    movieBtn.classList.add('current');
    tvBtn.classList.remove('current');
    containerM.classList.remove('hidden');
    containerM.classList.add('firstDiv');
    containerT.innerHTML = '';
    containerT.classList.add('hidden');
    containerT.classList.remove('firstDiv');

    addCard(1);
}

function tvCardDisplay() {
    tvBtn.classList.add('current');
    movieBtn.classList.remove('current');
    containerT.classList.remove('hidden');
    containerT.classList.add('firstDiv');
    containerM.innerHTML = '';
    containerM.classList.add('hidden');
    containerM.classList.remove('firstDiv');

    addCard(0);
}



movieBtn.addEventListener('click', movieCardDisplay);
tvBtn.addEventListener('click', tvCardDisplay);