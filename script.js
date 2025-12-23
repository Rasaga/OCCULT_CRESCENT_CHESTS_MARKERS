// ==========================
// CONFIGURACIÓN COFRES
// ==========================
const maxCoord = 41.8; // máximo de coordenadas del juego
const treasureData = [
  { id: 't1', x: 5, y: 10 },
  { id: 't2', x: 20, y: 30 },
  { id: 't3', x: 37, y: 15 },
  { id: 't4', x: 10, y: 35 }
];

// Cargar progreso guardado de cofres
const saved = JSON.parse(localStorage.getItem('treasures')) || {};

// ==========================
// ELEMENTOS DEL DOM
// ==========================
const zoomSlider = document.getElementById('zoom');
const mapContainer = document.getElementById('map-container');
const mapImg = document.getElementById('map');
const viewport = document.getElementById('map-viewport');

// ==========================
// ESTADO GLOBAL DEL MAPA
// ==========================
let scale = parseFloat(localStorage.getItem('mapZoom')) || 1;
let minZoom = 1;
let maxZoom = 1;

// ==========================
// FUNCIONES MAPA
// ==========================
function updateTransform() {
  mapContainer.style.transform = `scale(${scale})`;

  // actualizar variable CSS para cofres
  document.querySelectorAll('.treasure').forEach(t => {
    t.style.setProperty('--zoom-comp', 1 / scale);
  });
}

// ==========================
// COFRES CON WRAPPER
// ==========================
function createTreasure(x, y, id) {
  // Crear wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('treasure-wrapper');

  // Posición relativa al mapa
  const leftPercent = (x / maxCoord) * 100;
  const topPercent = (y / maxCoord) * 100;
  wrapper.style.left = `${leftPercent}%`;
  wrapper.style.top = `${topPercent}%`;

  // Crear la imagen del cofre
  const img = document.createElement('img');
  img.src = saved[id]
    ? 'assets/BronzeChestDone.png'
    : 'assets/BronzeChest.png';

  img.classList.add('treasure');
  if (saved[id]) img.classList.add('done');
  img.dataset.id = id;

  // Evento click
  img.addEventListener('click', () => toggleTreasure(img));

  // Añadir la imagen al wrapper
  wrapper.appendChild(img);

  // Añadir wrapper al mapa
  mapContainer.appendChild(wrapper);
}

function toggleTreasure(img) {
  const isDone = img.classList.toggle('done');
  img.src = isDone
    ? 'assets/BronzeChestDone.png'
    : 'assets/BronzeChest.png';

  saved[img.dataset.id] = isDone;
  localStorage.setItem('treasures', JSON.stringify(saved));
}

// Crear todos los cofres
treasureData.forEach(t => createTreasure(t.x, t.y, t.id));

// ==========================
// ZOOM CON SLIDER
// ==========================
zoomSlider.addEventListener('input', () => {
  scale = parseFloat(zoomSlider.value);
  localStorage.setItem('mapZoom', scale);
  updateTransform();
});

// ==========================
// CALCULAR ZOOM MIN / MAX
// ==========================
mapImg.addEventListener('load', () => {
  const viewportWidth = viewport.clientWidth;
  const viewportHeight = viewport.clientHeight;

  const imageWidth = mapImg.naturalWidth;
  const imageHeight = mapImg.naturalHeight;

  // Zoom mínimo: mapa completo visible
  minZoom = Math.min(
    viewportWidth / imageWidth,
    viewportHeight / imageHeight
  );

  // Zoom máximo: tamaño real del archivo
  maxZoom = 1;

  zoomSlider.min = minZoom;
  zoomSlider.max = maxZoom;
  zoomSlider.step = 0.01;

  // Ajustar zoom guardado a los límites
  scale = Math.max(minZoom, Math.min(scale, maxZoom));
  zoomSlider.value = scale;

  updateTransform();
});
