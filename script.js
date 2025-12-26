// ==========================
// CONFIGURACIÓN COFRES
// ==========================
const maxCoord = 42;
const bronzeChestsData = [
  { id: 't1', x: 4.0, y: 7.3 }, { id: 't2', x: 6.3, y: 6.4 },
  { id: 't3', x: 9.2, y: 3.6 }, { id: 't4', x: 7.7, y: 9.3 },
  { id: 't5', x: 11.9, y: 5.4 }, { id: 't6', x: 11.1, y: 10.3 },
  { id: 't7', x: 14.1, y: 13.3 }, { id: 't8', x: 18.5, y: 6.8 },
  { id: 't9', x: 18.1, y: 12.6 }, { id: 't10', x: 23.8, y: 9.4 },
  { id: 't11', x: 28.6, y: 6.1 }, { id: 't12', x: 33.3, y: 6.9 },
  { id: 't13', x: 30.7, y: 9.1 }, { id: 't14', x: 34.3, y: 11.3 },
  { id: 't15', x: 38.3, y: 13.2 }, { id: 't16', x: 36.5, y: 15.8 },
  { id: 't17', x: 35.5, y: 19.6 }, { id: 't18', x: 36.7, y: 23.1 },
  { id: 't19', x: 33.1, y: 23.3 }, { id: 't20', x: 37.5, y: 29.6 },
  { id: 't21', x: 38.3, y: 32.6 }, { id: 't22', x: 37.6, y: 34.9 },
  { id: 't23', x: 32.9, y: 33.4 }, { id: 't24', x: 33.8, y: 29.1 },
  { id: 't25', x: 30.4, y: 31.5 }, { id: 't26', x: 29.6, y: 34.6 },
  { id: 't27', x: 26.8, y: 33.7 }, { id: 't28', x: 26.1, y: 30.8 },
  { id: 't29', x: 23.7, y: 36.3 }, { id: 't30', x: 21.6, y: 33.9 },
  { id: 't31', x: 21.1, y: 29.5 }, { id: 't32', x: 17.0, y: 33.3 },
  { id: 't33', x: 16.4, y: 37.0 }, { id: 't34', x: 13.5, y: 31.5 },
  { id: 't35', x: 8.0, y: 29.0 }, { id: 't36', x: 12.9, y: 27.6 },
  { id: 't37', x: 6.3, y: 32.2 }, { id: 't38', x: 9.9, y: 33.5 },
  { id: 't39', x: 7.4, y: 33.7 }, { id: 't40', x: 5.2, y: 34.9 },
  { id: 't41', x: 6.6, y: 36.8 }, { id: 't42', x: 8.9, y: 37.0 },
  { id: 't43', x: 7.3, y: 13.8 }, { id: 't44', x: 5.6, y: 16.2 },
  { id: 't45', x: 3.8, y: 19.1 }, { id: 't46', x: 6.3, y: 19.3 },
  { id: 't47', x: 5.8, y: 22.9 }, { id: 't48', x: 6.7, y: 24.8 },
  { id: 't49', x: 12.0, y: 21.5 }, { id: 't50', x: 13.0, y: 24.4 },
  { id: 't51', x: 15.8, y: 23.4 }, { id: 't52', x: 11.2, y: 16.8 },
  { id: 't53', x: 17.8, y: 18.3 }, { id: 't54', x: 20.4, y: 23.9 },
  { id: 't55', x: 22.0, y: 15.1 }, { id: 't56', x: 25.8, y: 20.6 },
  { id: 't57', x: 26.5, y: 25.8 }, { id: 't58', x: 30.4, y: 19.2 },
  { id: 't59', x: 28.0, y: 15.2 }, { id: 't60', x: 28.7, y: 11.9 }
];

const silverChestsData = [
  { id: 's1', x: 4.3, y: 4.2 }, { id: 's2', x: 5.0, y: 14.7 },
  { id: 's3', x: 7.5, y: 17.2 }, { id: 's4', x: 7.8, y: 35.2 },
  { id: 's5', x: 15.4, y: 28.5 }, { id: 's6', x: 35.2, y: 33.5 },
  { id: 's7', x: 31.5, y: 25.6 }, { id: 's8', x: 36.0, y: 18.0 },
];

const silverChestsDataTest = [
  { id: 'st1', x: 1.0, y: 0.0 }, { id: 'st2', x: 2.0, y: 2.0 },
];

const bronzeChestsDataTest = [
  { id: 'bt1', x: 5.0, y: 5.0 }, { id: 'bt2', x: 7.0, y: 7.0 },
];

const maps = {
  southHorn: {
    name: "South Horn",
    image: "assets/sh-map.png",
    chestTypes: {
      bronze: {
        data: bronzeChestsData,
        icon: 'assets/BronzeChest.png',
        iconDone: 'assets/ChestDone.png'
      },
      silver: {
        data: silverChestsData,
        icon: 'assets/SilverChest.png',
        iconDone: 'assets/ChestDone.png'
      }
    }
  },

/*   test: {
    name: "Test",
    image: "assets/test-map.png",
    chestTypes: {
      bronze: {
        data: bronzeChestsDataTest,
        icon: 'assets/BronzeChest.png',
        iconDone: 'assets/ChestDone.png'
      },
      silver: {
        data: silverChestsDataTest,
        icon: 'assets/SilverChest.png',
        iconDone: 'assets/ChestDone.png'
      }
    }
  } */
};

// Mapa activo por defecto
let currentMapId = "southHorn";
let chestTypes = maps[currentMapId].chestTypes;
let saved = JSON.parse(localStorage.getItem('treasures')) || {};

if (!saved[currentMapId]) {
  saved[currentMapId] = { bronze: {}, silver: {} };
}

// ==========================
// ELEMENTOS DEL DOM
// ==========================
const $ = id => document.getElementById(id);

const zoomSlider = $('zoom');
const mapContainer = $('map-container');
const mapImg = $('map');
const viewport = $('map-viewport');
const coordDisplay = $('coord-display');

// ==========================
// ESTADO GLOBAL DEL MAPA
// ==========================
let scale = parseFloat(localStorage.getItem('mapZoom')) || 1;
let panX = parseFloat(localStorage.getItem('mapPanX')) || 0;
let panY = parseFloat(localStorage.getItem('mapPanY')) || 0;
let minZoom = 1;
let maxZoom = 1;
let isDragging = false;
let startX = 0;
let startY = 0;

if (scale <= 1) {
  panX = 0;
  panY = 0;
}

// ==========================
// UTILIDADES
// ==========================
const saveState = () => {
  localStorage.setItem('mapZoom', scale);
  localStorage.setItem('mapPanX', panX);
  localStorage.setItem('mapPanY', panY);
};

const updateChestCounter = () => {
  const counter = $('chest-counter');
  if (!counter) return;
  let total = 0;
  let found = 0;
  Object.keys(chestTypes).forEach(type => {
    const typeData = chestTypes[type].data;
    const typeSaved = saved[currentMapId][type] || {};

    total += typeData.length;
    found += Object.values(typeSaved).filter(Boolean).length;
  });
  counter.textContent = `${found} / ${total} chests found`;
};

// Mostrar coordenadas del ratón
mapContainer.addEventListener('mousemove', e => {
  if (isDragging) return;

  const rect = mapImg.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * maxCoord;
  const y = ((e.clientY - rect.top) / rect.height) * maxCoord;

  coordDisplay.textContent = `X: ${x.toFixed(1)}, Y: ${y.toFixed(1)}`;
});

mapContainer.addEventListener('mouseleave', () => {
  coordDisplay.textContent = '';
});

// ==========================
// MAPA
// ==========================
function updateTransform() {
  mapContainer.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
  mapContainer.style.cursor = scale > 1 ? 'grab' : 'default';

  document.querySelectorAll('.treasure').forEach(t =>
    t.style.setProperty('--zoom-comp', 1 / scale)
  );
}

// ==========================
// COFRES
// ==========================
function createTreasure(type, { x, y, id }) {
  const wrapper = document.createElement('div');
  wrapper.className = `treasure-wrapper ${type}`;

  const mapWidth = mapImg.offsetWidth;
  const mapHeight = mapImg.offsetHeight;

  wrapper.style.left = `${(x / maxCoord) * mapWidth}px`;
  wrapper.style.top = `${(y / maxCoord) * mapHeight}px`;

  const img = document.createElement('img');
  img.className = `treasure ${type}`;
  img.dataset.id = id;
  img.dataset.type = type;

  const isDone = saved[currentMapId][type][id];
  img.src = isDone ? chestTypes[type].iconDone : chestTypes[type].icon;

  if (isDone) img.classList.add('done');

  img.addEventListener('click', () => toggleTreasure(img));

  wrapper.appendChild(img);
  mapContainer.appendChild(wrapper);
}


function toggleTreasure(img) {
  const type = img.dataset.type;
  const id = img.dataset.id;

  const isDone = img.classList.toggle('done');

  img.src = isDone
    ? chestTypes[type].iconDone
    : chestTypes[type].icon;

  saved[currentMapId][type][id] = isDone;
  localStorage.setItem('treasures', JSON.stringify(saved));
  updateChestCounter();
}

// ==========================
// INICIALIZACIÓN
// ==========================
function initMap() {
  mapImg.draggable = false;

  const chestTypes = maps[currentMapId].chestTypes;

  Object.keys(chestTypes).forEach(type => {
    chestTypes[type].data.forEach(chest => createTreasure(type, chest));
  });

  updateChestCounter();
}

mapImg.complete ? initMap() : mapImg.addEventListener('load', initMap);

// ==========================
// ZOOM SLIDER
// ==========================
zoomSlider.addEventListener('input', () => {
  scale = parseFloat(zoomSlider.value);

  if (scale <= minZoom) {
    scale = minZoom;
    panX = 0;
    panY = 0;
  }

  saveState();
  updateTransform();
});

// ==========================
// ZOOM RUEDA
// ==========================
mapContainer.addEventListener('wheel', e => {
  e.preventDefault();

  const rect = viewport.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const mapX = (mouseX - panX) / scale;
  const mapY = (mouseY - panY) / scale;

  const zoomFactor = 0.1;
  scale = e.deltaY < 0
    ? Math.min(maxZoom, scale + zoomFactor)
    : Math.max(minZoom, scale - zoomFactor);

  panX = mouseX - mapX * scale;
  panY = mouseY - mapY * scale;

  if (scale <= minZoom) {
    scale = minZoom;
    panX = 0;
    panY = 0;
  }

  zoomSlider.value = scale;
  saveState();
  updateTransform();
});

// ==========================
// PAN
// ==========================
mapContainer.addEventListener('pointerdown', e => {
  e.preventDefault();
  isDragging = true;
  startX = e.clientX - panX;
  startY = e.clientY - panY;
  mapContainer.style.cursor = 'grabbing';
});

window.addEventListener('pointermove', e => {
  if (!isDragging) return;

  panX = e.clientX - startX;
  panY = e.clientY - startY;

  saveState();
  updateTransform();
});

window.addEventListener('pointerup', () => {
  isDragging = false;
  mapContainer.style.cursor = 'grab';
});

// ==========================
// ZOOM LIMITES + BOTONES
// ==========================
mapImg.addEventListener('load', () => {
  const vw = viewport.clientWidth;
  const vh = viewport.clientHeight;

  minZoom = Math.min(vw / mapImg.naturalWidth, vh / mapImg.naturalHeight);
  maxZoom = 1;

  zoomSlider.min = minZoom;
  zoomSlider.max = maxZoom;
  zoomSlider.step = 0.01;

  scale = Math.max(minZoom, Math.min(scale, maxZoom));
  zoomSlider.value = scale;

  updateTransform();

  setupButtons();
});

function setupButtons() {
  const toggleBronze = $('toggle-bronze');
  const toggleSilver = $('toggle-silver');
  const toggleVisibilityBtn = $('toggle-visibility');
  const toggleVisitedBtn = $('toggle-visited');

  // Si los botones no existen, no hacemos nada
  if (!toggleBronze || !toggleSilver || !toggleVisibilityBtn || !toggleVisitedBtn) {
    console.warn("Alguno de los botones no existe en el DOM");
    return;
  }

  let bronzeVisible = true;
  let silverVisible = true;
  let allVisible = true;

  // -------------------------
  // BOTONES POR TIPO
  // -------------------------

  toggleBronze.addEventListener('click', () => {
    bronzeVisible = !bronzeVisible;

    document.querySelectorAll('.treasure-wrapper.bronze')
      .forEach(w => w.style.display = bronzeVisible ? 'block' : 'none');

    toggleBronze.textContent = bronzeVisible
      ? 'Hide bronze'
      : 'Show bronze';
  });

  toggleSilver.addEventListener('click', () => {
    silverVisible = !silverVisible;

    document.querySelectorAll('.treasure-wrapper.silver')
      .forEach(w => w.style.display = silverVisible ? 'block' : 'none');

    toggleSilver.textContent = silverVisible
      ? 'Hide silver'
      : 'Show silver';
  });

  // -------------------------
  // BOTÓN GLOBAL: HIDE ALL
  // -------------------------

  toggleVisibilityBtn.addEventListener('click', () => {
    allVisible = !allVisible;

    document.querySelectorAll('.treasure-wrapper')
      .forEach(w => w.style.display = allVisible ? 'block' : 'none');

    toggleVisibilityBtn.textContent = allVisible
      ? 'Hide all chests'
      : 'Show all chests';
  });

  // -------------------------
  // BOTÓN GLOBAL: MARK ALL VISITED
  // -------------------------

  toggleVisitedBtn.addEventListener('click', () => {
    const treasures = [...document.querySelectorAll('.treasure')];
    const allVisited = treasures.every(t => t.classList.contains('done'));

    treasures.forEach(t => {
      const type = t.dataset.type;
      const id = t.dataset.id;

      const done = !allVisited;
      t.classList.toggle('done', done);

      t.src = done
        ? chestTypes[type].iconDone
        : chestTypes[type].icon;

      saved[currentMapId][type][id] = done;
    });

    localStorage.setItem('treasures', JSON.stringify(saved));
    updateChestCounter();

    toggleVisitedBtn.textContent = allVisited
      ? 'Mark all as visited'
      : 'Mark all as not visited';
  });

}

function loadMap(mapId) {
  currentMapId = mapId;
  chestTypes = maps[currentMapId].chestTypes;

  // Asegurar estructura de guardado
  if (!saved[currentMapId]) {
    saved[currentMapId] = { bronze: {}, silver: {} };
  }

  // Resetear zoom y pan
  scale = 1;
  panX = 0;
  panY = 0;
  updateTransform();

  // Cambiar imagen del mapa
  mapImg.src = maps[currentMapId].image;

  // Limpiar cofres anteriores
  document.querySelectorAll('.treasure-wrapper').forEach(e => e.remove());

  // Cargar cofres nuevos
  initMap();
}

document.querySelectorAll('#sidebar-map-selector button').forEach(btn => {
  btn.addEventListener('click', () => {
    loadMap(btn.dataset.map);
  });
});