// ===================== EDITE AQUI =====================
// Troque pelas músicas de verdade. "nota" é o motivo/lembrança.
const songs = [
  { title: "Call Me", artist: "Zach Templar", note: "[por que essa lembra ela]" },
  { title: "Saudade", artist: "Luiz Lins, Konai, Mazilli", note: "[por que essa lembra ela]" },
  { title: "Rainy Days", artist: "V", note: "[por que essa lembra ela]" },
  { title: "Blue", artist: "V", note: "[por que essa lembra ela]" },
  { title: "Love Me Again", artist: "V", note: "[por que essa lembra ela]" },
  { title: "Seven", artist: "Jung Kook, Latto", note: "[por que essa lembra ela]" },
  { title: "Taste", artist: "Junny", note: "[por que essa lembra ela]" },
  { title: "Invitation", artist: "Junny, Gaeko", note: "[por que essa lembra ela]" },
  { title: "Bite Me", artist: "Enhypen", note: "[por que essa lembra ela]" },
  { title: "Deleita", artist: "Mariana Volker", note: "[por que essa lembra ela]" },
  { title: "Still With You", artist: "Jung Kook", note: "[por que essa lembra ela]" },
  { title: "Stiil Loving You", artist: "Scorpions", note: "[por que essa lembra ela]" },
  { title: "Oi Sumida", artist: "MC Menor da L, Macih", note: "[por que essa lembra ela]" },
  { title: "Bloco dos Apaixonados", artist: "Sotam, Carla Sol, Rob, Pulim", note: "[por que essa lembra ela]" },
  { title: "Distrimia", artist: "Casuarina", note: "[por que essa lembra ela]" },
  { title: "Pandora", artist: "Sazack", note: "[por que essa lembra ela]" },
  { title: "Home", artist: "BTS", note: "[por que essa lembra ela]" },
  { title: "Pampa", artist: "CountryBeat, MC Daniel", note: "[por que essa lembra ela]" },
{ title: "On", artist: "BTS", note: "[por que essa lembra ela]" },
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