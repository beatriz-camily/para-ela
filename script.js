// ===================== EDITE AQUI =====================
// Troque pelas músicas de verdade. "nota" é o motivo/lembrança.
const songs = [

  {
    title: "Você Não Me Ensinou A Te Esquecer",
    artist: "Fernando Mendes",
    note: "Acho que essa música resume boa parte dos meus sentimentos, por agora, não completamente, mas alguns sim.",
    audio: "audio/voce-nao-me-ensinou-a-te-esquecer.mp3",
    cover: "img/voce-nao-me-ensinou-a-te-esquecer.jpg",
    background: "img/voce-nao-me-ensinou-a-te-esquercer-bg.gif"
  },

   {
    title: "Call Me",
    artist: "Zach Templar",
    note: "",
    audio: "audio/call-me.mp3",
    cover: "img/call-me.jpg",
    background: "img/call-me-bg.gif"
  },

  {
    title: "Chove Chuva",
    artist: "Jorge Ben",
    note: "",
    audio: "audio/chove-chuva.mp3",
    cover: "img/chove-chuva.jpg",
    background: "img/chove-chuva-bg.gif"
  },

  {
    title: "Mania de Você",
    artist: "Rita Lee",
    note: "",
    audio: "audio/mania-de-você.mp3",
    cover: "img/mania-de-você.jpg",
    background: "img/mania-de-você-bg.gif"
  },

  {
    title: "All I Wanted",
    artist: "Paramore",
    note: "A frase All I wanted was you, já diz tudo - não acha?",
    audio: "audio/all-i-wanted.mp3",
    cover: "img/all-i-wanted.jpg",
    background: "img/all-i-wanted-bg.gif"
  },

  {
    title: "Gostava Tanto de Você",
    artist: "Tim Maia",
    note: "[seu texto aqui]",
    audio: "audio/gostava-tanto-de-voce.mp3",
    cover: "img/gostava-tanto-de-voce.jpg",
    background: "img/gostava-tanto-de-voce-bg.gif"
  },

  {
    title: "Onde Anda Você",
    artist: "Vinicius de Moraes & Toquinho",
    note: "[seu texto aqui]",
    audio: "audio/onde-anda-voce.mp3",
    cover: "img/onde-anda-voce.jpg",
    background: "img/onde-anda-voce-bg.gif"
  },

  {
    title: "Saudade",
    artist: "Luiz Lins, Konai, Mazilli",
    note: "Talvez o próprio nome já explique parte do motivo de ela estar aqui.",
    audio: "audio/saudade.mp3",
    cover: "img/saudade.jpg",
    background: "img/saudade-bg.gif"
  },

  {
    title: "Rainy Days",
    artist: "V",
    note: "Essa tem exatamente aquela sensação de ficar pensando demais em alguém num dia quieto.",
    audio: "audio/rainy-days.mp3",
    cover: "img/v.jpg",
    background: "img/v-bg.gif"
  },

  {
    title: "Blue",
    artist: "V",
    note: "[seu texto aqui]",
    audio: "audio/blue.mp3",
    cover: "img/v.jpg",
    background: "img/v-bg.gif"
  },

  {
    title: "Love Me Again",
    artist: "V",
    note: "[seu texto aqui]",
    audio: "audio/love-me-again.mp3",
    cover: "img/v.jpg",
    background: "img/v-bg.gif"
  },

  {
    title: "Pela Luz Dos Olhos Teus",
    artist: "Miúcha, Antonio Carlos Jobim",
    note: "[seu texto aqui]",
    audio: "audio/pela-luz-dos-olhos-teus.mp3",
    cover: "img/pela-luz-dos-olhos-teus.jpg",
    background: "img/pela-luz-dos-olhos-teus-bg.gif"
  },

  {
    title: "Seven",
    artist: "Jung Kook, feat. Latto",
    note: "[seu texto aqui]",
    audio: "audio/seven.mp3",
    cover: "img/seven.jpg",
    background: "img/seven-bg.gif"
  },

  {
    title: "Taste",
    artist: "Junny",
    note: "[seu texto aqui]",
    audio: "audio/taste.mp3",
    cover: "img/taste.jpg",
    background: "img/taste-bg.gif"
  },

  {
    title: "Invitation",
    artist: "Junny, Gaeko",
    note: "[seu texto aqui]",
    audio: "audio/invitation.mp3",
    cover: "img/invitation.jpg",
    background: "img/invitation-bg.gif"
  },

  {
    title: "Bite Me",
    artist: "Enhypen",
    note: "[seu texto aqui]",
    audio: "audio/bite-me.mp3",
    cover: "img/bite-me.jpg",
    background: "img/bite-me-bg.gif"
  },

  {
    title: "Deleita",
    artist: "Mariana Volker",
    note: "[seu texto aqui]",
    audio: "audio/deleita.mp3",
    cover: "img/deleita.jpg",
    background: "img/deleita-bg.gif"
  },

  {
    title: "Still With You",
    artist: "Jung Kook",
    note: "[seu texto aqui]",
    audio: "audio/still-with-you.mp3",
    cover: "img/still-with-you.jpg",
    background: "img/still-with-you-bg.gif"
  },

  {
    title: "Better With You",
    artist: "Jeff Bernat",
    note: "[seu texto aqui]",
    audio: "audio/better-with-you.mp3",
    cover: "img/better-with-you.jpg",
    background: "img/better-with-you-bg.gif"
  },

  {
    title: "Still Loving You",
    artist: "Scorpions",
    note: "[seu texto aqui]",
    audio: "audio/still-loving-you.mp3",
    cover: "img/still-loving-you.jpg",
    background: "img/still-loving-you-bg.gif"
  },

  {
    title: "Oi Sumida",
    artist: "MC Menor da L, Macih",
    note: "[seu texto aqui]",
    audio: "audio/oi-sumida.mp3",
    cover: "img/oi-sumida.jpg",
    background: "img/oi-sumida-bg.gif"
  },

  {
    title: "Bloco dos Apaixonados",
    artist: "Sotam, Carla Sol, Rob, Pulim",
    note: "[seu texto aqui]",
    audio: "audio/bloco-dos-apaixonados.mp3",
    cover: "img/bloco-dos-apaixonados.jpg",
    background: "img/bloco-dos-apaixonados-bg.gif"
  },

  {
    title: "Distrimia",
    artist: "Casuarina",
    note: "[seu texto aqui]",
    audio: "audio/distrimia.mp3",
    cover: "img/distrimia.jpg",
    background: "img/distrimia-bg.gif"
  },

  {
    title: "Pandora",
    artist: "Sazack",
    note: "[seu texto aqui]",
    audio: "audio/pandora.mp3",
    cover: "img/pandora.jpg",
    background: "img/pandora-bg.gif"
  },

   {
    title: "Stay With Me",
    artist: "Miki Matsubara",
    note: "[seu texto aqui]",
    audio: "audio/stay-with-me.mp3",
    cover: "img/stay-with-me.jpg",
    background: "img/stay-with-me-bg.gif"
  },

  {
    title: "Sozinho",
    artist: "Caetano Valoso",
    note: "[seu texto aqui]",
    audio: "audio/sozinho.mp3",
    cover: "img/sozinho.jpg",
    background: "img/sozinho-bg.gif"
  },

  {
    title: "Home",
    artist: "BTS",
    note: "[seu texto aqui]",
    audio: "audio/home.mp3",
    cover: "img/home.jpg",
    background: "img/home-bg.gif"
  },

  {
    title: "Pampa",
    artist: "CountryBeat, MC Daniel",
    note: "[seu texto aqui]",
    audio: "audio/pampa.mp3",
    cover: "img/pampa.jpg",
    background: "img/pampa-bg.gif"
  },

  {
    title: "Quando Bate Aquela Saudade",
    artist: "Rubel",
    note: "[seu texto aqui]",
    audio: "audio/quando-bate-aquela-saudade.mp3",
    cover: "img/quando-bate-aquela-saudade.jpg",
    background: "img/quando-bate-aquela-saudade-bg.gif"
  },

  {
    title: "On",
    artist: "BTS",
    note: "Eu fiquei surpresa quando colocou uma música do BTS para escutar no carro, pois eu tinha muito preconceito com gaypop, porém me fez gostar ainda mais de tu, infelizmente.",
    audio: "audio/on.mp3",
    cover: "img/home.jpg",
    background: "img/home-bg.gif"
  }
  
];
// ========================================================

// =========================================================
// PLAYER
// =========================================================

const audio = document.getElementById("audio-player");

const player = document.getElementById("music-player");

const playerCover = document.getElementById("player-cover");
const playerTitle = document.getElementById("player-title");
const playerArtist = document.getElementById("player-artist");
const playerNote = document.getElementById("player-note");

const playlistBg = document.getElementById("playlist-bg");

const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const progressTrack = document.getElementById("progress-track");
const progressFill = document.getElementById("progress-fill");

const currentTimeText = document.getElementById("current-time");
const durationText = document.getElementById("duration");


let currentSongIndex = 0;

// =========================================================
// CARREGA UMA MÚSICA
// =========================================================

function loadSong(index) {

  currentSongIndex = index;

  const song = songs[index];


  // -------------------------
  // Áudio
  // -------------------------

  audio.src = song.audio;

  audio.load();


  // -------------------------
  // Textos
  // -------------------------

  playerTitle.textContent = song.title;

  playerArtist.textContent = song.artist;

  playerNote.textContent = song.note;


  // -------------------------
  // Capa
  // -------------------------

  playerCover.style.opacity = "0";


  setTimeout(() => {

    playerCover.src = song.cover;

    playerCover.alt =
      `Capa de ${song.title} - ${song.artist}`;

    playerCover.style.opacity = "1";

  }, 180);


  // -------------------------
  // Fundo
  // -------------------------

  playlistBg.style.opacity = "0";


  setTimeout(() => {

    playlistBg.style.backgroundImage =
      `url("${song.background}")`;

    playlistBg.style.opacity = ".55";

  }, 200);


  // -------------------------
  // Destaque da faixa
  // -------------------------

  const tracks =
    document.querySelectorAll(".track");


  tracks.forEach((track, trackIndex) => {

    track.classList.toggle(
      "active",
      trackIndex === currentSongIndex
    );

  });


  // -------------------------
  // Reset da barra
  // -------------------------

  progressFill.style.width = "0%";

  currentTimeText.textContent = "0:00";

  durationText.textContent = "0:00";

}


// =========================================================
// PLAY
// =========================================================

function playSong() {

  const playPromise = audio.play();


  if (playPromise !== undefined) {

    playPromise
      .then(() => {

        player.classList.add("playing");

        playBtn.textContent = "❚❚";

        playBtn.setAttribute(
          "aria-label",
          "Pausar música"
        );

      })
      .catch(error => {

        console.log(
          "O navegador bloqueou a reprodução:",
          error
        );

      });

  }

}


// =========================================================
// PAUSE
// =========================================================

function pauseSong() {

  audio.pause();

  player.classList.remove("playing");

  playBtn.textContent = "▶";

  playBtn.setAttribute(
    "aria-label",
    "Tocar música"
  );

}


// =========================================================
// BOTÃO PLAY / PAUSE
// =========================================================

playBtn.addEventListener("click", () => {

  if (audio.paused) {

    playSong();

  } else {

    pauseSong();

  }

});


// =========================================================
// PRÓXIMA
// =========================================================

function nextSong() {

  currentSongIndex++;


  if (currentSongIndex >= songs.length) {

    currentSongIndex = 0;

  }


  loadSong(currentSongIndex);

  playSong();

}


nextBtn.addEventListener(
  "click",
  nextSong
);


// =========================================================
// ANTERIOR
// =========================================================

function previousSong() {

  currentSongIndex--;


  if (currentSongIndex < 0) {

    currentSongIndex =
      songs.length - 1;

  }


  loadSong(currentSongIndex);

  playSong();

}


prevBtn.addEventListener(
  "click",
  previousSong
);


// =========================================================
// ATUALIZA BARRA ENQUANTO A MÚSICA TOCA
// =========================================================

audio.addEventListener(
  "timeupdate",
  () => {

    if (!audio.duration) return;


    const percentage =
      (audio.currentTime / audio.duration) * 100;


    progressFill.style.width =
      `${percentage}%`;


    currentTimeText.textContent =
      formatTime(audio.currentTime);

  }
);


// =========================================================
// QUANDO DESCOBRE A DURAÇÃO
// =========================================================

audio.addEventListener(
  "loadedmetadata",
  () => {

    durationText.textContent =
      formatTime(audio.duration);

  }
);


// =========================================================
// CLICAR NA BARRA PARA PULAR NA MÚSICA
// =========================================================

progressTrack.addEventListener(
  "click",
  event => {

    if (!audio.duration) return;


    const rect =
      progressTrack.getBoundingClientRect();


    const clickedPosition =
      event.clientX - rect.left;


    const percentage =
      clickedPosition / rect.width;


    audio.currentTime =
      percentage * audio.duration;

  }
);


// =========================================================
// QUANDO TERMINAR, VAI PARA A PRÓXIMA
// =========================================================

audio.addEventListener(
  "ended",
  nextSong
);


// =========================================================
// FORMATA SEGUNDOS EM MINUTOS
// =========================================================

function formatTime(seconds) {

  if (
    !Number.isFinite(seconds)
  ) {

    return "0:00";

  }


  const minutes =
    Math.floor(seconds / 60);


  const remainingSeconds =
    Math.floor(seconds % 60);


  return (
    minutes +
    ":" +
    String(remainingSeconds).padStart(2, "0")
  );

}


// =========================================================
// CARREGA A PRIMEIRA MÚSICA AO ABRIR
// =========================================================

loadSong(0);

// sim / não
const respNao = document.getElementById('resposta-nao');
const respSim = document.getElementById('resposta-sim');

document.getElementById('btn-nao').addEventListener('click', () => {
  respSim.classList.remove('show');
  respNao.classList.add('show');
});

document.getElementById('btn-sim').addEventListener('click', () => {
  respNao.classList.remove('show');
  respSim.classList.add('show');
});

document.querySelectorAll('.btn-ver-playlist').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('playlist').scrollIntoView({ behavior: 'smooth' });
  });
});

// navegação por pontinhos + destaque da seção ativa
const sections = document.querySelectorAll('.screen');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    document.getElementById(dot.dataset.target).scrollIntoView({ behavior: 'smooth' });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      dots.forEach(d => d.classList.toggle('active', d.dataset.target === entry.target.id));
    }
  });
}, { threshold: 0.6 });

sections.forEach(sec => observer.observe(sec));