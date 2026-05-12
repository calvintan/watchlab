const clockConfig = {
  markerCount: 60,
  numberCount: 12,
  numberRadius: 32
};

const stylePresets = [
  {
    id: "classic-black",
    name: "Classic Black",
    swatch: { accent: "#111111", ring: "#f5f5f0", border: "#222222", glow: "#ecece5" },
    state: {
      hands: {
        hour: { visible: true, color: "#0f0f10", length: 0.45, lumeVisible: false, lumeColor: "#f5f5f5", shape: "rounded" },
        minute: { visible: true, color: "#17181a", length: 0.65, lumeVisible: false, lumeColor: "#f5f5f5", shape: "rounded" },
        second: { visible: true, color: "#d4151e", length: 0.7 }
      },
      indices: {
        hourMarkers: { visible: true, color: "#171717", cardinalOnly: false, displayAsDot: false },
        minuteMarkers: { visible: true, color: "#2b2b2b", displayAsDot: false }
      },
      numbers: {
        visible: true,
        color: "#101010",
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        cardinalOnly: false,
        fontSize: 24,
        fontWeight: 400
      },
      base: {
        clockFaceBackgroundColor: "#ececec",
        clockFaceBackgroundAlpha: 1,
        pageBackgroundColor: "#e8e9e9",
        pageBackgroundPattern: ""
      }
    }
  },
  {
    id: "green-minimal",
    name: "Green Minimal",
    swatch: { accent: "#09a36d", ring: "#ffffff", border: "#202020", glow: "#e3efe8" },
    state: {
      hands: {
        hour: { visible: true, color: "#14bf84", length: 0.44, lumeVisible: true, lumeColor: "#dff6ea", shape: "rounded" },
        minute: { visible: true, color: "#14bf84", length: 0.64, lumeVisible: true, lumeColor: "#dff6ea", shape: "rounded" },
        second: { visible: true, color: "#e11d2e", length: 0.7 }
      },
      indices: {
        hourMarkers: { visible: true, color: "#0aa36f", cardinalOnly: false, displayAsDot: false },
        minuteMarkers: { visible: true, color: "#14bf84", displayAsDot: false }
      },
      numbers: {
        visible: true,
        color: "#08a06c",
        fontFamily: '"JetBrains Mono", monospace',
        cardinalOnly: false,
        fontSize: 24,
        fontWeight: 400
      },
      base: {
        clockFaceBackgroundColor: "#fcfcfc",
        clockFaceBackgroundAlpha: 1,
        pageBackgroundColor: "#f5f6f3",
        pageBackgroundPattern: "assets/patterns/cubes.png"
      }
    }
  },
  {
    id: "sport-red",
    name: "Sport Red",
    swatch: { accent: "#ff5b58", ring: "#681715", border: "#320b0a", glow: "#ffe3e1" },
    state: {
      hands: {
        hour: { visible: true, color: "#151515", length: 0.47, lumeVisible: true, lumeColor: "#ffd9d6", shape: "pointed" },
        minute: { visible: true, color: "#191919", length: 0.68, lumeVisible: true, lumeColor: "#ffd9d6", shape: "pointed" },
        second: { visible: true, color: "#ff3b30", length: 0.74 }
      },
      indices: {
        hourMarkers: { visible: true, color: "#2b2b2b", cardinalOnly: false, displayAsDot: true },
        minuteMarkers: { visible: true, color: "#9a1414", displayAsDot: false }
      },
      numbers: {
        visible: true,
        color: "#881919",
        fontFamily: '"Exo 2", sans-serif',
        cardinalOnly: true,
        fontSize: 26,
        fontWeight: 600
      },
      base: {
        clockFaceBackgroundColor: "#f3f0f0",
        clockFaceBackgroundAlpha: 1,
        pageBackgroundColor: "#ede6e6",
        pageBackgroundPattern: ""
      }
    }
  },
  {
    id: "blue-technical",
    name: "Blue Technical",
    swatch: { accent: "#56c1da", ring: "#0e5b79", border: "#16334a", glow: "#def2f7" },
    state: {
      hands: {
        hour: { visible: true, color: "#12344f", length: 0.43, lumeVisible: true, lumeColor: "#bdefff", shape: "rounded" },
        minute: { visible: true, color: "#0f4566", length: 0.67, lumeVisible: true, lumeColor: "#bdefff", shape: "rounded" },
        second: { visible: true, color: "#58c3d5", length: 0.72 }
      },
      indices: {
        hourMarkers: { visible: true, color: "#114a70", cardinalOnly: false, displayAsDot: false },
        minuteMarkers: { visible: true, color: "#50b9d5", displayAsDot: true }
      },
      numbers: {
        visible: true,
        color: "#0f5177",
        fontFamily: "Orbitron, sans-serif",
        cardinalOnly: false,
        fontSize: 22,
        fontWeight: 500
      },
      base: {
        clockFaceBackgroundColor: "#eef7fb",
        clockFaceBackgroundAlpha: 1,
        pageBackgroundColor: "#dfeef3",
        pageBackgroundPattern: "assets/patterns/noise.png"
      }
    }
  },
  {
    id: "cream-vintage",
    name: "Cream Vintage",
    swatch: { accent: "#d3b47b", ring: "#f6efdd", border: "#7d5d36", glow: "#f6efdf" },
    state: {
      hands: {
        hour: { visible: true, color: "#5f4828", length: 0.44, lumeVisible: true, lumeColor: "#efe5bf", shape: "pointed" },
        minute: { visible: true, color: "#6b5030", length: 0.65, lumeVisible: true, lumeColor: "#efe5bf", shape: "pointed" },
        second: { visible: true, color: "#b55a34", length: 0.68 }
      },
      indices: {
        hourMarkers: { visible: true, color: "#6a4f2f", cardinalOnly: false, displayAsDot: false },
        minuteMarkers: { visible: true, color: "#8f7550", displayAsDot: false }
      },
      numbers: {
        visible: true,
        color: "#5f472d",
        fontFamily: '"Cormorant Garamond", serif',
        cardinalOnly: false,
        fontSize: 28,
        fontWeight: 600
      },
      base: {
        clockFaceBackgroundColor: "#f7f0de",
        clockFaceBackgroundAlpha: 1,
        pageBackgroundColor: "#eee5d2",
        pageBackgroundPattern: "assets/patterns/leather.png"
      }
    }
  },
  {
    id: "dark-mode",
    name: "Dark Mode",
    swatch: { accent: "#8ea0ff", ring: "#23314d", border: "#0d1220", glow: "#dfe6ff" },
    state: {
      hands: {
        hour: { visible: true, color: "#f1f5ff", length: 0.45, lumeVisible: false, lumeColor: "#dce8ff", shape: "pointed" },
        minute: { visible: true, color: "#d7e0ff", length: 0.66, lumeVisible: false, lumeColor: "#dce8ff", shape: "pointed" },
        second: { visible: true, color: "#6d86ff", length: 0.71 }
      },
      indices: {
        hourMarkers: { visible: true, color: "#dbe3ff", cardinalOnly: false, displayAsDot: true },
        minuteMarkers: { visible: true, color: "#92a5ff", displayAsDot: false }
      },
      numbers: {
        visible: true,
        color: "#f2f5ff",
        fontFamily: '"Space Grotesk", sans-serif',
        cardinalOnly: false,
        fontSize: 23,
        fontWeight: 500
      },
      base: {
        clockFaceBackgroundColor: "#141a28",
        clockFaceBackgroundAlpha: 1,
        pageBackgroundColor: "#0f131c",
        pageBackgroundPattern: "assets/patterns/pixel.png"
      }
    }
  },
  {
    id: "bauhaus",
    name: "Bauhaus",
    swatch: { accent: "#ff5a00", ring: "#111827", border: "#05070d", glow: "#ffe4d3" },
    state: {
      hands: {
        hour: { visible: true, color: "#111827", length: 0.38, lumeVisible: false, lumeColor: "#f7efdb", shape: "rounded" },
        minute: { visible: true, color: "#f0c419", length: 0.7, lumeVisible: false, lumeColor: "#f7efdb", shape: "rounded" },
        second: { visible: true, color: "#ff4a22", length: 0.74 }
      },
      indices: {
        hourMarkers: { visible: true, color: "#111827", cardinalOnly: true, displayAsDot: true },
        minuteMarkers: { visible: true, color: "#0f9bd7", displayAsDot: true }
      },
      numbers: {
        visible: true,
        color: "#111827",
        fontFamily: "Montserrat, sans-serif",
        cardinalOnly: true,
        fontSize: 30,
        fontWeight: 700
      },
      base: {
        clockFaceBackgroundColor: "#fff7df",
        clockFaceBackgroundAlpha: 1,
        pageBackgroundColor: "#f4ead7",
        pageBackgroundPattern: "assets/patterns/checker.png"
      }
    }
  },
  {
    id: "field-watch",
    name: "Field Watch",
    swatch: { accent: "#9fb18c", ring: "#445e39", border: "#243022", glow: "#e4eadc" },
    state: {
      hands: {
        hour: { visible: true, color: "#242d22", length: 0.45, lumeVisible: true, lumeColor: "#d9e8a9", shape: "pointed" },
        minute: { visible: true, color: "#2d3829", length: 0.66, lumeVisible: true, lumeColor: "#d9e8a9", shape: "pointed" },
        second: { visible: true, color: "#c25a3d", length: 0.69 }
      },
      indices: {
        hourMarkers: { visible: true, color: "#31412d", cardinalOnly: false, displayAsDot: false },
        minuteMarkers: { visible: true, color: "#617356", displayAsDot: false }
      },
      numbers: {
        visible: true,
        color: "#293527",
        fontFamily: "Rajdhani, sans-serif",
        cardinalOnly: false,
        fontSize: 25,
        fontWeight: 600
      },
      base: {
        clockFaceBackgroundColor: "#e5e0cc",
        clockFaceBackgroundAlpha: 1,
        pageBackgroundColor: "#cfc9b5",
        pageBackgroundPattern: "assets/patterns/scales.png"
      }
    }
  },
  {
    id: "elegant-serif",
    name: "Elegant Serif",
    swatch: { accent: "#5b4d7f", ring: "#fbfaf8", border: "#312744", glow: "#f1ebf7" },
    state: {
      hands: {
        hour: { visible: true, color: "#2d233d", length: 0.42, lumeVisible: false, lumeColor: "#f8f1fd", shape: "pointed" },
        minute: { visible: true, color: "#3c2d52", length: 0.63, lumeVisible: false, lumeColor: "#f8f1fd", shape: "pointed" },
        second: { visible: true, color: "#9b7fd1", length: 0.68 }
      },
      indices: {
        hourMarkers: { visible: true, color: "#483462", cardinalOnly: false, displayAsDot: false },
        minuteMarkers: { visible: true, color: "#a18ec8", displayAsDot: true }
      },
      numbers: {
        visible: true,
        color: "#3d2f54",
        fontFamily: '"Playfair Display", serif',
        cardinalOnly: false,
        fontSize: 26,
        fontWeight: 600
      },
      base: {
        clockFaceBackgroundColor: "#fbfaf8",
        clockFaceBackgroundAlpha: 0.96,
        pageBackgroundColor: "#ece7ef",
        pageBackgroundPattern: "assets/patterns/padded.png"
      }
    }
  },
  {
    id: "futuristic-mono",
    name: "Futuristic Mono",
    swatch: { accent: "#93f7ff", ring: "#0d1820", border: "#04070b", glow: "#dcfbff" },
    state: {
      hands: {
        hour: { visible: true, color: "#d8fdff", length: 0.4, lumeVisible: false, lumeColor: "#b8fbff", shape: "rounded" },
        minute: { visible: true, color: "#8ef8ff", length: 0.72, lumeVisible: false, lumeColor: "#b8fbff", shape: "rounded" },
        second: { visible: true, color: "#00e7ff", length: 0.75 }
      },
      indices: {
        hourMarkers: { visible: true, color: "#7ce9f6", cardinalOnly: false, displayAsDot: true },
        minuteMarkers: { visible: true, color: "#4abfcd", displayAsDot: true }
      },
      numbers: {
        visible: true,
        color: "#b8fbff",
        fontFamily: '"IBM Plex Mono", monospace',
        cardinalOnly: false,
        fontSize: 22,
        fontWeight: 500
      },
      base: {
        clockFaceBackgroundColor: "#0d1820",
        clockFaceBackgroundAlpha: 0.94,
        pageBackgroundColor: "#091116",
        pageBackgroundPattern: "assets/patterns/pyramid.png"
      }
    }
  }
];

const state = {
  hands: {
    hour: {
      visible: true,
      color: "#1f1f1f",
      length: 0.45,
      lumeVisible: false,
      lumeColor: "#f5f5f5",
      shape: "rounded"
    },
    minute: {
      visible: true,
      color: "#2c2c2c",
      length: 0.65,
      lumeVisible: false,
      lumeColor: "#f5f5f5",
      shape: "rounded"
    },
    second: {
      visible: true,
      color: "#d4151e",
      length: 0.7
    }
  },
  indices: {
    hourMarkers: {
      visible: true,
      color: "#2d2d2d",
      cardinalOnly: false,
      displayAsDot: false
    },
    minuteMarkers: {
      visible: true,
      color: "#2d2d2d",
      displayAsDot: false
    }
  },
  numbers: {
    visible: true,
    color: "#202020",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    cardinalOnly: false,
    fontSize: 24,
    fontWeight: 400
  },
  base: {
    clockFaceBackgroundColor: "#ececec",
    clockFaceBackgroundAlpha: 1,
    pageBackgroundColor: "#e8e9e9",
    pageBackgroundPattern: ""
  },
  styleLibrary: {
    isOpen: false,
    selectedStyleId: "classic-black",
    pageIndex: 0
  }
};

const styleLibraryConfig = {
  visibleSlots: 5
};

const handSelectors = {
  hour: ".clock-hand--hour",
  minute: ".clock-hand--minute",
  second: ".clock-hand--second"
};

const clockSelectors = {
  face: ".clock-face",
  markers: ".clock-markers",
  numbers: ".clock-numbers"
};

const handControlSelectors = {
  inputs: "[data-hand][data-control]",
  outputs: "[data-output='hour-length'], [data-output='minute-length'], [data-output='second-length']"
};

const indexControlSelectors = {
  inputs: "[data-section='hourMarkers'][data-control], [data-section='minuteMarkers'][data-control]"
};

const numberControlSelectors = {
  inputs: "[data-section='numbers'][data-control]"
};

const baseControlSelectors = {
  inputs: "[data-section='base'][data-control]"
};

const tabSelectors = {
  buttons: ".panel-tab[data-tab]",
  panels: ".tab-panel[data-panel]"
};

const accordionSelectors = {
  toggles: "[data-accordion-toggle]"
};

const panelSelectors = {
  appShell: ".app-shell",
  button: "#customise-button",
  panel: "#control-panel"
};

const styleLibrarySelectors = {
  appShell: ".app-shell",
  container: "#style-library",
  toggle: "#style-library-toggle",
  label: "[data-style-library-label]",
  slots: "#style-library-slots",
  prev: "#style-library-prev",
  next: "#style-library-next"
};

function createMarker(index) {
  const marker = document.createElement("span");
  const tick = document.createElement("span");
  const isHourMarker = index % 5 === 0;
  const angle = index * 6;

  marker.className = isHourMarker ? "clock-marker clock-marker--hour" : "clock-marker";
  marker.dataset.markerType = isHourMarker ? "hour" : "minute";
  marker.dataset.markerIndex = String(index);
  tick.className = "clock-marker__tick";
  marker.style.transform = `rotate(${angle}deg)`;
  marker.appendChild(tick);

  return marker;
}

function createNumber(value) {
  const number = document.createElement("span");
  const angle = value * 30 - 90;
  const radiusPercent = clockConfig.numberRadius;
  const x = 50 + Math.cos((angle * Math.PI) / 180) * radiusPercent;
  const y = 50 + Math.sin((angle * Math.PI) / 180) * radiusPercent;

  number.className = "clock-number";
  number.dataset.numberValue = String(value);
  number.textContent = String(value);
  number.style.left = `${x}%`;
  number.style.top = `${y}%`;

  return number;
}

function renderClockFace() {
  const markersContainer = document.querySelector(".clock-markers");
  const numbersContainer = document.querySelector(".clock-numbers");

  if (!markersContainer || !numbersContainer) {
    return;
  }

  markersContainer.replaceChildren();
  numbersContainer.replaceChildren();

  for (let index = 0; index < clockConfig.markerCount; index += 1) {
    markersContainer.appendChild(createMarker(index));
  }

  for (let value = 1; value <= clockConfig.numberCount; value += 1) {
    numbersContainer.appendChild(createNumber(value));
  }
}

function getClockElements() {
  return {
    face: document.querySelector(clockSelectors.face),
    markers: document.querySelector(clockSelectors.markers),
    numbers: document.querySelector(clockSelectors.numbers),
    hands: getClockHands()
  };
}

function getClockHands() {
  return {
    hour: document.querySelector(handSelectors.hour),
    minute: document.querySelector(handSelectors.minute),
    second: document.querySelector(handSelectors.second)
  };
}

function setHandRotation(handElement, degrees) {
  if (!handElement) {
    return;
  }

  handElement.style.transform = `rotate(${degrees}deg)`;
}

function setHandLength(handElement, lengthRatio, faceRadius) {
  if (!handElement) {
    return;
  }

  handElement.style.height = `${faceRadius * lengthRatio}px`;
}

function setHandLume(handElement, handState) {
  if (!handElement) {
    return;
  }

  const lumeElement = handElement.querySelector(".clock-hand__lume");

  if (!lumeElement) {
    return;
  }

  const isVisible = handState.visible && handState.lumeVisible;
  lumeElement.style.display = isVisible ? "block" : "none";
  lumeElement.style.background = handState.lumeColor;
}

function setHandShape(handElement, handState) {
  if (!handElement) {
    return;
  }

  const handShape = handState.shape || (handState.pointedTip ? "pointed" : "rounded");
  handElement.classList.toggle("clock-hand--pointed", handShape === "pointed");
}

function hexToRgb(hexColor) {
  const sanitized = hexColor.replace("#", "");

  if (sanitized.length !== 6) {
    return null;
  }

  return {
    red: Number.parseInt(sanitized.slice(0, 2), 16),
    green: Number.parseInt(sanitized.slice(2, 4), 16),
    blue: Number.parseInt(sanitized.slice(4, 6), 16)
  };
}

function formatRgbaColor(hexColor, alpha) {
  const rgb = hexToRgb(hexColor);

  if (!rgb) {
    return hexColor;
  }

  return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${alpha})`;
}

function applyStateToClock() {
  const clock = getClockElements();

  if (!clock.face || !clock.markers || !clock.numbers) {
    return;
  }

  const faceRadius = clock.face.getBoundingClientRect().width / 2;
  const pageBackgroundImage = state.base.pageBackgroundPattern ? `url("${state.base.pageBackgroundPattern}")` : "none";
  const clockFaceBackground = formatRgbaColor(
    state.base.clockFaceBackgroundColor,
    state.base.clockFaceBackgroundAlpha
  );

  document.documentElement.style.setProperty("--page-background", state.base.pageBackgroundColor);
  document.documentElement.style.setProperty("--page-background-image", pageBackgroundImage);
  clock.face.style.setProperty("--clock-face-background", clockFaceBackground);
  clock.face.style.setProperty("--clock-minute-marker", state.indices.minuteMarkers.color);
  clock.face.style.setProperty("--clock-hour-marker", state.indices.hourMarkers.color);
  clock.face.style.setProperty("--clock-number-color", state.numbers.color);
  clock.face.style.setProperty("--clock-number-font", state.numbers.fontFamily);
  clock.face.style.setProperty("--clock-number-size", `${state.numbers.fontSize}px`);
  clock.face.style.setProperty("--clock-number-weight", String(state.numbers.fontWeight));
  clock.face.style.setProperty("--clock-hour-hand", state.hands.hour.color);
  clock.face.style.setProperty("--clock-minute-hand", state.hands.minute.color);
  clock.face.style.setProperty("--clock-second-hand", state.hands.second.color);

  clock.hands.hour.style.display = state.hands.hour.visible ? "block" : "none";
  clock.hands.minute.style.display = state.hands.minute.visible ? "block" : "none";
  clock.hands.second.style.display = state.hands.second.visible ? "block" : "none";

  setHandLength(clock.hands.hour, state.hands.hour.length, faceRadius);
  setHandLength(clock.hands.minute, state.hands.minute.length, faceRadius);
  setHandLength(clock.hands.second, state.hands.second.length, faceRadius);
  setHandShape(clock.hands.hour, state.hands.hour);
  setHandShape(clock.hands.minute, state.hands.minute);
  setHandLume(clock.hands.hour, state.hands.hour);
  setHandLume(clock.hands.minute, state.hands.minute);

  const markers = clock.markers.querySelectorAll(".clock-marker");
  const cardinalMarkerIndexes = new Set([0, 15, 30, 45]);

  markers.forEach((marker) => {
    const markerType = marker.dataset.markerType;
    const markerIndex = Number(marker.dataset.markerIndex);

    if (markerType === "hour") {
      const isVisible =
        state.indices.hourMarkers.visible &&
        (!state.indices.hourMarkers.cardinalOnly || cardinalMarkerIndexes.has(markerIndex));
      marker.classList.toggle("clock-marker--dot", state.indices.hourMarkers.displayAsDot);
      marker.style.display = isVisible ? "block" : "none";
      return;
    }

    marker.classList.toggle("clock-marker--dot", state.indices.minuteMarkers.displayAsDot);
    marker.style.display = state.indices.minuteMarkers.visible ? "block" : "none";
  });

  const numbers = clock.numbers.querySelectorAll(".clock-number");
  const cardinalNumberValues = new Set(["12", "3", "6", "9"]);

  numbers.forEach((number) => {
    const numberValue = number.dataset.numberValue;
    const isVisible =
      state.numbers.visible &&
      (!state.numbers.cardinalOnly || cardinalNumberValues.has(String(numberValue)));

    number.style.display = isVisible ? "block" : "none";
  });
}

function formatLengthValue(value) {
  return Number(value).toFixed(2);
}

function formatAlphaValue(value) {
  return Number(value).toFixed(2);
}

function cloneStateValue(value) {
  return JSON.parse(JSON.stringify(value));
}

function getVisibleStyleLibraryStyles() {
  const startIndex = state.styleLibrary.pageIndex * styleLibraryConfig.visibleSlots;
  return stylePresets.slice(startIndex, startIndex + styleLibraryConfig.visibleSlots);
}

function getStyleLibraryPageCount() {
  return Math.ceil(stylePresets.length / styleLibraryConfig.visibleSlots);
}

function updateControlOutputs() {
  const outputs = document.querySelectorAll(handControlSelectors.outputs);

  outputs.forEach((output) => {
    const outputKey = output.dataset.output;

    if (!outputKey) {
      return;
    }

    const [handName] = outputKey.split("-");
    output.value = formatLengthValue(state.hands[handName].length);
    output.textContent = formatLengthValue(state.hands[handName].length);
  });
}

function updateControlsFromState() {
  const controls = document.querySelectorAll(handControlSelectors.inputs);

  controls.forEach((control) => {
    const handName = control.dataset.hand;
    const controlName = control.dataset.control;

    if (!handName || !controlName) {
      return;
    }

    const value = state.hands[handName][controlName];

    if (control.type === "radio") {
      control.checked = String(value) === control.value;
      return;
    }

    if (control.type === "checkbox") {
      control.checked = Boolean(value);
      return;
    }

    control.value = String(value);
  });

  updateControlOutputs();
}

function updateIndexControlsFromState() {
  const controls = document.querySelectorAll(indexControlSelectors.inputs);

  controls.forEach((control) => {
    const sectionName = control.dataset.section;
    const controlName = control.dataset.control;

    if (!sectionName || !controlName) {
      return;
    }

    const value = state.indices[sectionName][controlName];

    if (control instanceof HTMLInputElement && control.type === "checkbox") {
      control.checked = Boolean(value);
      return;
    }

    control.value = String(value);
  });
}

function updateNumberControlsFromState() {
  const controls = document.querySelectorAll(numberControlSelectors.inputs);

  controls.forEach((control) => {
    const controlName = control.dataset.control;

    if (!controlName) {
      return;
    }

    const value = state.numbers[controlName];

    if (control instanceof HTMLInputElement && control.type === "checkbox") {
      control.checked = Boolean(value);
      return;
    }

    control.value = String(value);
  });

  updateSectionOutputs("numbers");
}

function updateBaseControlsFromState() {
  const controls = document.querySelectorAll(baseControlSelectors.inputs);

  controls.forEach((control) => {
    const controlName = control.dataset.control;

    if (!controlName) {
      return;
    }

    control.value = String(state.base[controlName]);
  });

  const alphaOutput = document.querySelector("[data-output='base-clockFaceBackgroundAlpha']");

  if (alphaOutput) {
    const alphaValue = formatAlphaValue(state.base.clockFaceBackgroundAlpha);
    alphaOutput.value = alphaValue;
    alphaOutput.textContent = alphaValue;
  }
}

function updateAllControlsFromState() {
  updateControlsFromState();
  updateIndexControlsFromState();
  updateNumberControlsFromState();
  updateBaseControlsFromState();
}

function updateSectionOutputs(sectionName) {
  const outputs = document.querySelectorAll(`[data-output^='${sectionName}-']`);

  outputs.forEach((output) => {
    const outputKey = output.dataset.output;

    if (!outputKey) {
      return;
    }

    const [, controlName] = outputKey.split("-");
    const value = state[sectionName][controlName];
    output.value = String(value);
    output.textContent = String(value);
  });
}

function handleHandControlChange(event) {
  const control = event.target;

  if (!(control instanceof HTMLInputElement)) {
    return;
  }

  const handName = control.dataset.hand;
  const controlName = control.dataset.control;

  if (!handName || !controlName || !state.hands[handName]) {
    return;
  }

  if (control.type === "radio") {
    state.hands[handName][controlName] = control.value;
  } else if (control.type === "checkbox") {
    state.hands[handName][controlName] = control.checked;
  } else if (control.type === "range") {
    state.hands[handName][controlName] = Number(control.value);
  } else {
    state.hands[handName][controlName] = control.value;
  }

  applyStateToClock();
  updateControlsFromState();
}

function bindHandControls() {
  const controls = document.querySelectorAll(handControlSelectors.inputs);

  controls.forEach((control) => {
    const eventName = control.getAttribute("type") === "range" ? "input" : "change";
    control.addEventListener(eventName, handleHandControlChange);
  });
}

function handleIndexControlChange(event) {
  const control = event.target;

  if (!(control instanceof HTMLInputElement)) {
    return;
  }

  const sectionName = control.dataset.section;
  const controlName = control.dataset.control;

  if (!sectionName || !controlName) {
    return;
  }

  state.indices[sectionName][controlName] = control.type === "checkbox" ? control.checked : control.value;

  applyStateToClock();
  updateIndexControlsFromState();
}

function bindIndexControls() {
  const controls = document.querySelectorAll(indexControlSelectors.inputs);

  controls.forEach((control) => {
    const eventName = control.getAttribute("type") === "color" ? "input" : "change";
    control.addEventListener(eventName, handleIndexControlChange);
  });
}

function handleNumberControlChange(event) {
  const control = event.target;

  if (!(control instanceof HTMLInputElement) && !(control instanceof HTMLSelectElement)) {
    return;
  }

  const controlName = control.dataset.control;

  if (!controlName) {
    return;
  }

  if (control instanceof HTMLInputElement && control.type === "checkbox") {
    state.numbers[controlName] = control.checked;
  } else if (control instanceof HTMLInputElement && control.type === "range") {
    state.numbers[controlName] = Number(control.value);
  } else {
    state.numbers[controlName] = control.value;
  }

  applyStateToClock();
  updateNumberControlsFromState();
}

function bindNumberControls() {
  const controls = document.querySelectorAll(numberControlSelectors.inputs);

  controls.forEach((control) => {
    const eventName =
      control instanceof HTMLInputElement &&
      (control.getAttribute("type") === "color" || control.getAttribute("type") === "range")
        ? "input"
        : "change";
    control.addEventListener(eventName, handleNumberControlChange);
  });
}

function handleBaseControlChange(event) {
  const control = event.target;

  if (!(control instanceof HTMLInputElement) && !(control instanceof HTMLSelectElement)) {
    return;
  }

  const controlName = control.dataset.control;

  if (!controlName) {
    return;
  }

  if (control instanceof HTMLInputElement && control.type === "range") {
    state.base[controlName] = Number(control.value);
  } else {
    state.base[controlName] = control.value;
  }

  applyStateToClock();
  updateBaseControlsFromState();
}

function bindBaseControls() {
  const controls = document.querySelectorAll(baseControlSelectors.inputs);

  controls.forEach((control) => {
    const eventName =
      control instanceof HTMLInputElement &&
      (control.getAttribute("type") === "color" || control.getAttribute("type") === "range")
        ? "input"
        : "change";
    control.addEventListener(eventName, handleBaseControlChange);
  });
}

function activateTab(tabName) {
  const tabButtons = document.querySelectorAll(tabSelectors.buttons);
  const tabPanels = document.querySelectorAll(tabSelectors.panels);

  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle("panel-tab--active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.dataset.panel === tabName;
    panel.classList.toggle("tab-panel--active", isActive);
    panel.hidden = !isActive;
  });
}

function bindTabs() {
  const tabButtons = document.querySelectorAll(tabSelectors.buttons);

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabName = button.dataset.tab;

      if (!tabName) {
        return;
      }

      activateTab(tabName);
    });
  });
}

function toggleAccordionSection(toggleButton) {
  const section = toggleButton.closest(".accordion-section");

  if (!section) {
    return;
  }

  const isOpen = section.classList.toggle("accordion-section--open");
  toggleButton.setAttribute("aria-expanded", String(isOpen));
}

function bindAccordions() {
  const toggles = document.querySelectorAll(accordionSelectors.toggles);

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggleAccordionSection(toggle);
    });
  });
}

function setPanelOpen(isOpen) {
  const appShell = document.querySelector(panelSelectors.appShell);
  const button = document.querySelector(panelSelectors.button);
  const panel = document.querySelector(panelSelectors.panel);

  if (!appShell || !button || !panel) {
    return;
  }

  appShell.classList.toggle("panel-collapsed", !isOpen);
  button.setAttribute("aria-expanded", String(isOpen));
  panel.setAttribute("aria-hidden", String(!isOpen));
}

function bindPanelToggle() {
  const button = document.querySelector(panelSelectors.button);

  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    setPanelOpen(!isOpen);
  });
}

function applyStylePreset(stylePreset) {
  if (!stylePreset) {
    return;
  }

  state.hands = cloneStateValue(stylePreset.state.hands);
  state.indices = cloneStateValue(stylePreset.state.indices);
  state.numbers = cloneStateValue(stylePreset.state.numbers);
  state.base = cloneStateValue(stylePreset.state.base);
  state.styleLibrary.selectedStyleId = stylePreset.id;

  applyStateToClock();
  updateAllControlsFromState();
  renderStyleLibrary();
}

function createStyleLibrarySlot(styleOption) {
  const button = document.createElement("button");
  const outer = document.createElement("span");
  const middle = document.createElement("span");
  const inner = document.createElement("span");

  button.className = "style-library__slot";
  button.type = "button";
  button.dataset.styleId = styleOption.id;
  button.setAttribute("role", "listitem");
  button.setAttribute("aria-label", styleOption.name);
  button.classList.toggle("style-library__slot--selected", state.styleLibrary.selectedStyleId === styleOption.id);
  button.setAttribute("aria-pressed", String(state.styleLibrary.selectedStyleId === styleOption.id));

  outer.className = "style-library__swatch style-library__swatch--outer";
  middle.className = "style-library__swatch style-library__swatch--middle";
  inner.className = "style-library__swatch style-library__swatch--inner";

  outer.style.background = styleOption.swatch.border;
  middle.style.background = styleOption.swatch.ring;
  middle.style.boxShadow = `0 10px 18px ${styleOption.swatch.glow}`;
  inner.style.background = styleOption.swatch.accent;

  middle.appendChild(inner);
  outer.appendChild(middle);
  button.appendChild(outer);

  return button;
}

function renderStyleLibrary() {
  const appShell = document.querySelector(styleLibrarySelectors.appShell);
  const container = document.querySelector(styleLibrarySelectors.container);
  const toggle = document.querySelector(styleLibrarySelectors.toggle);
  const label = document.querySelector(styleLibrarySelectors.label);
  const slots = document.querySelector(styleLibrarySelectors.slots);
  const prevButton = document.querySelector(styleLibrarySelectors.prev);
  const nextButton = document.querySelector(styleLibrarySelectors.next);

  if (!appShell || !container || !toggle || !label || !slots || !prevButton || !nextButton) {
    return;
  }

  const isOpen = state.styleLibrary.isOpen;
  const pageCount = getStyleLibraryPageCount();
  const visibleStyles = getVisibleStyleLibraryStyles();

  appShell.classList.toggle("style-library-open", isOpen);
  container.setAttribute("aria-hidden", String(!isOpen));
  toggle.setAttribute("aria-expanded", String(isOpen));
  label.textContent = isOpen ? "CLOSE LIBRARY" : "STYLE LIBRARY";

  slots.replaceChildren();
  visibleStyles.forEach((styleOption) => {
    slots.appendChild(createStyleLibrarySlot(styleOption));
  });

  prevButton.disabled = state.styleLibrary.pageIndex === 0;
  nextButton.disabled = state.styleLibrary.pageIndex >= pageCount - 1;
}

function handleStyleLibraryToggle() {
  state.styleLibrary.isOpen = !state.styleLibrary.isOpen;
  renderStyleLibrary();
}

function handleStyleLibraryPageChange(direction) {
  const nextPageIndex = state.styleLibrary.pageIndex + direction;
  const maxPageIndex = getStyleLibraryPageCount() - 1;

  if (nextPageIndex < 0 || nextPageIndex > maxPageIndex) {
    return;
  }

  state.styleLibrary.pageIndex = nextPageIndex;
  renderStyleLibrary();
}

function handleStyleLibrarySlotSelection(event) {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const slotButton = target.closest(".style-library__slot");

  if (!(slotButton instanceof HTMLButtonElement)) {
    return;
  }

  const { styleId } = slotButton.dataset;

  if (!styleId) {
    return;
  }

  const stylePreset = stylePresets.find((preset) => preset.id === styleId);

  if (!stylePreset) {
    return;
  }

  applyStylePreset(stylePreset);
}

function bindStyleLibrary() {
  const toggle = document.querySelector(styleLibrarySelectors.toggle);
  const slots = document.querySelector(styleLibrarySelectors.slots);
  const prevButton = document.querySelector(styleLibrarySelectors.prev);
  const nextButton = document.querySelector(styleLibrarySelectors.next);

  if (!toggle || !slots || !prevButton || !nextButton) {
    return;
  }

  toggle.addEventListener("click", handleStyleLibraryToggle);
  prevButton.addEventListener("click", () => {
    handleStyleLibraryPageChange(-1);
  });
  nextButton.addEventListener("click", () => {
    handleStyleLibraryPageChange(1);
  });
  slots.addEventListener("click", handleStyleLibrarySlotSelection);
}

function updateClockTime() {
  const hands = getClockHands();
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const secondDegrees = seconds * 6;
  const minuteDegrees = (minutes + seconds / 60) * 6;
  const hourDegrees = (hours + minutes / 60) * 30;

  setHandRotation(hands.hour, hourDegrees);
  setHandRotation(hands.minute, minuteDegrees);
  setHandRotation(hands.second, secondDegrees);
}

document.addEventListener("DOMContentLoaded", () => {
  renderClockFace();
  applyStateToClock();
  updateControlsFromState();
  updateIndexControlsFromState();
  updateNumberControlsFromState();
  updateBaseControlsFromState();
  bindHandControls();
  bindIndexControls();
  bindNumberControls();
  bindBaseControls();
  bindTabs();
  bindAccordions();
  bindPanelToggle();
  bindStyleLibrary();
  activateTab("hands");
  setPanelOpen(false);
  renderStyleLibrary();
  updateClockTime();
  window.setInterval(updateClockTime, 1000);
  window.addEventListener("resize", applyStateToClock);
});
