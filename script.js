// ===================== EDITE AQUI =====================
// Troque pelas músicas de verdade. "nota" é o motivo/lembrança.
const songs = [
  { title: "[Nome da música 1]", artist: "[Artista]", note: "[por que essa lembra ela]" },
  { title: "[Nome da música 2]", artist: "[Artista]", note: "[por que essa lembra ela]" },
  { title: "[Nome da música 3]", artist: "[Artista]", note: "[por que essa lembra ela]" },
  { title: "[Nome da música 4]", artist: "[Artista]", note: "[por que essa lembra ela]" },
];
// ========================================================

const list = document.getElementById('tracklist');
songs.forEach((s, i) => {
  const row = document.createElement('div');
  row.className = 'track';
  row.innerHTML = `
    <span class="track-num">${String(i + 1).padStart(2, '0')}</span>
    <div class="track-info">
      <b>${s.title}</b><span class="artist">${s.artist}</span>
      <p class="track-note">${s.note}</p>
    </div>`;
  row.addEventListener('click', () => {
    document.querySelectorAll('.track').forEach(t => t.classList.remove('active'));
    row.classList.add('active');
  });
  list.appendChild(row);
});

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

document.getElementById('btn-ver-playlist').addEventListener('click', () => {
  document.getElementById('playlist').scrollIntoView({ behavior: 'smooth' });
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