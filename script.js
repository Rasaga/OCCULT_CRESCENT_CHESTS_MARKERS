// ==========================
// CONFIGURACIÓN COFRES
// ==========================
const maxCoord = 42; // máximo de coordenadas del juego (0-42)
const treasureData = [
  { id: 't1', x: 4.0, y: 7.3 },
  { id: 't2', x: 6.3, y: 6.4 },
  { id: 't3', x: 9.2, y: 3.6 },
  { id: 't4', x: 7.7, y: 9.3 },
  { id: 't5', x: 11.9, y: 5.4 },
  { id: 't6', x: 11.1, y: 10.3 },
  { id: 't7', x: 14.1, y: 13.3 },
  { id: 't8', x: 18.5, y: 6.8 },
  { id: 't9', x: 18.1, y: 12.6 },
  { id: 't10', x: 23.8, y: 9.4 },
  { id: 't11', x: 28.6, y: 6.1 },
  { id: 't12', x: 33.3, y: 6.9 },
  { id: 't13', x: 30.7, y: 9.1 },
  { id: 't14', x: 34.3, y: 11.3 },
  { id: 't15', x: 38.3, y: 13.2 },
  { id: 't16', x: 36.5, y: 15.8 },
  { id: 't17', x: 35.5, y: 19.6 },
  { id: 't18', x: 36.7, y: 23.1 },
  { id: 't19', x: 33.1, y: 23.3 },
  { id: 't20', x: 37.5, y: 29.6 },
  { id: 't21', x: 38.3, y: 32.6 },
  { id: 't22', x: 37.6, y: 34.9 },
  { id: 't23', x: 32.9, y: 33.4 },
  { id: 't24', x: 33.8, y: 29.1 },
  { id: 't25', x: 30.4, y: 31.5 },
  { id: 't26', x: 29.6, y: 34.6 },
  { id: 't27', x: 26.8, y: 33.7 },
  { id: 't28', x: 26.1, y: 30.8 },
  { id: 't29', x: 23.7, y: 36.3 },
  { id: 't30', x: 21.6, y: 33.9 },
  { id: 't31', x: 21.1, y: 29.5 },
  { id: 't32', x: 17.0, y: 33.3 },
  { id: 't33', x: 16.4, y: 37.0 },
  { id: 't34', x: 13.5, y: 31.5 },
  { id: 't35', x: 8.0, y: 29.0 },
  { id: 't36', x: 12.9, y: 27.6 },
  { id: 't37', x: 6.3, y: 32.2 },
  { id: 't38', x: 9.9, y: 33.5 },
  { id: 't39', x: 7.4, y: 33.7 },
  { id: 't40', x: 5.2, y: 34.9 },
  { id: 't41', x: 6.6, y: 36.8 },
  { id: 't42', x: 8.9, y: 37.0 },
  { id: 't43', x: 7.3, y: 13.8 },
  { id: 't44', x: 5.6, y: 16.2 },
  { id: 't45', x: 3.8, y: 19.1 },
  { id: 't46', x: 6.3, y: 19.3 },
  { id: 't47', x: 5.8, y: 22.9 },
  { id: 't48', x: 6.7, y: 24.8 },
  { id: 't49', x: 12.0, y: 21.5 },
  { id: 't50', x: 13.0, y: 24.4 },
  { id: 't51', x: 15.8, y: 23.4 },
  { id: 't52', x: 11.2, y: 16.8 },
  { id: 't53', x: 17.8, y: 18.3 },
  { id: 't54', x: 20.4, y: 23.9 },
  { id: 't55', x: 22.0, y: 15.1 },
  { id: 't56', x: 25.8, y: 20.6 },
  { id: 't57', x: 26.5, y: 25.8 },
  { id: 't58', x: 30.4, y: 19.2 },
  { id: 't59', x: 28.0, y: 15.2 },
  { id: 't60', x: 28.7, y: 11.9 }
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
const coordDisplay = document.getElementById('coord-display');

// ==========================
// ESTADO GLOBAL DEL MAPA
// ==========================
let scale = parseFloat(localStorage.getItem('mapZoom')) || 1;
let minZoom = 1;
let maxZoom = 1;
let panX = parseFloat(localStorage.getItem('mapPanX')) || 0;
let panY = parseFloat(localStorage.getItem('mapPanY')) || 0;
if (scale <= 1) {
  panX = 0;
  panY = 0;
}
let isDragging = false;
let startX, startY;

// ==========================
// FUNCIONES MAPA
// ==========================
function updateTransform() {
  mapContainer.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
  mapContainer.style.cursor = scale > 1 ? 'grab' : 'default';

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

  // Obtener tamaño del mapa
  const mapWidth = mapImg.offsetWidth;
  const mapHeight = mapImg.offsetHeight;

  // Posición en px relativa al mapa
  const leftPx = (x / maxCoord) * mapWidth;
  const topPx = (y / maxCoord) * mapHeight;
  wrapper.style.left = `${leftPx}px`;
  wrapper.style.top = `${topPx}px`;

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
  updateChestCounter();

}

// Crear todos los cofres después de que el mapa cargue
function initMap() {
  mapImg.draggable = false; // asegurar no drag
  treasureData.forEach(t => createTreasure(t.x, t.y, t.id));

  // Cursor inicial
  mapContainer.style.cursor = scale > 1 ? 'grab' : 'default';

  // Mostrar coordenadas al mover el mouse
  mapContainer.addEventListener('mousemove', (e) => {
    if (isDragging) return; // no mostrar coords durante drag
    const rect = mapImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const coordX = ((x / rect.width) * maxCoord).toFixed(1);
    const coordY = ((y / rect.height) * maxCoord).toFixed(1);
    coordDisplay.textContent = `X: ${coordX}, Y: ${coordY}`;
  });

  mapContainer.addEventListener('mouseleave', () => {
    coordDisplay.textContent = '';
  });
  updateChestCounter();
}

if (mapImg.complete) {
  initMap();
} else {
  mapImg.addEventListener('load', initMap);
}

// ==========================
// ZOOM CON SLIDER
// ==========================
zoomSlider.addEventListener('input', () => {
  scale = parseFloat(zoomSlider.value);
  if (scale <= 1) {
    panX = 0;
    panY = 0;
  }
  localStorage.setItem('mapZoom', scale);
  updateTransform();
});

// ==========================
// ZOOM CON RUEDA DEL RATÓN
// ==========================
mapContainer.addEventListener('wheel', (e) => {
  e.preventDefault();

  const rect = viewport.getBoundingClientRect();

  // Posición del mouse en el viewport
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  // Posición del punto del mapa ANTES del zoom
  const mapX = (mouseX - panX) / scale;
  const mapY = (mouseY - panY) / scale;

  const zoomFactor = 0.1;
  const oldScale = scale;

  if (e.deltaY < 0) {
    scale = Math.min(maxZoom, scale + zoomFactor);
  } else {
    scale = Math.max(minZoom, scale - zoomFactor);
  }

  // Ajustar pan para que el punto bajo el cursor no se mueva
  panX = mouseX - mapX * scale;
  panY = mouseY - mapY * scale;

  // Reset si llegamos al mínimo
  if (scale <= minZoom) {
    scale = minZoom;
    panX = 0;
    panY = 0;
  }

  zoomSlider.value = scale;
  localStorage.setItem('mapZoom', scale);
  localStorage.setItem('mapPanX', panX);
  localStorage.setItem('mapPanY', panY);

  updateTransform();
});


//e.preventDefault(); // prevenir drag nativo
// PAN CON MOUSE
// ==========================
mapContainer.addEventListener('pointerdown', (e) => {
  e.preventDefault(); // prevenir drag nativo
  isDragging = true;
  startX = e.clientX - panX;
  startY = e.clientY - panY;
  mapContainer.style.cursor = 'grabbing';
});

window.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  panX = e.clientX - startX;
  panY = e.clientY - startY;
  localStorage.setItem('mapPanX', panX);
  localStorage.setItem('mapPanY', panY);
  updateTransform();
});

window.addEventListener('pointerup', () => {
  isDragging = false;
  mapContainer.style.cursor = 'grab';
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

  let chestsVisible = true;

  const toggleVisibilityBtn = document.getElementById('toggle-visibility');

  toggleVisibilityBtn.addEventListener('click', () => {
    chestsVisible = !chestsVisible;

    document.querySelectorAll('.treasure-wrapper').forEach(w => {
      w.style.display = chestsVisible ? 'block' : 'none';
    });

    toggleVisibilityBtn.textContent = chestsVisible
      ? 'Hide chests'
      : 'Show chests';
  });

  const toggleVisitedBtn = document.getElementById('toggle-visited');

  toggleVisitedBtn.addEventListener('click', () => {
    const treasures = document.querySelectorAll('.treasure');

    const allVisited = [...treasures].every(t =>
      t.classList.contains('done')
    );

    treasures.forEach(t => {
      const shouldBeDone = !allVisited;
      t.classList.toggle('done', shouldBeDone);
      t.src = shouldBeDone
        ? 'assets/BronzeChestDone.png'
        : 'assets/BronzeChest.png';

      saved[t.dataset.id] = shouldBeDone;
    });

    localStorage.setItem('treasures', JSON.stringify(saved));
    updateChestCounter();

    toggleVisitedBtn.textContent = allVisited
      ? 'Mark all as visited'
      : 'Mark all as not visited';
  });


  const chestCounter = document.getElementById('chest-counter');

  function updateChestCounter() {
  const chestCounter = document.getElementById('chest-counter');
  if (!chestCounter) return;

  const total = treasureData.length;
  const found = Object.values(saved).filter(Boolean).length;

  chestCounter.textContent = `${found} / ${total} chests found`;
  }

});
