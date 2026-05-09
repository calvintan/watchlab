const clockConfig = {
  markerCount: 60,
  numberCount: 12,
  numberRadius: 32
};

const state = {
  hands: {
    hour: {
      visible: true,
      color: "#1f1f1f",
      length: 0.45,
      lumeVisible: false,
      lumeColor: "#f5f5f5",
      pointedTip: false
    },
    minute: {
      visible: true,
      color: "#2c2c2c",
      length: 0.65,
      lumeVisible: false,
      lumeColor: "#f5f5f5",
      pointedTip: false
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
    pageBackgroundColor: "#e8e9e9"
  }
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
  if (!handElement || typeof handState.pointedTip === "undefined") {
    return;
  }

  handElement.classList.toggle("clock-hand--pointed", Boolean(handState.pointedTip));
}

function applyStateToClock() {
  const clock = getClockElements();

  if (!clock.face || !clock.markers || !clock.numbers) {
    return;
  }

  const faceRadius = clock.face.getBoundingClientRect().width / 2;

  document.documentElement.style.setProperty("--page-background", state.base.pageBackgroundColor);
  clock.face.style.setProperty("--clock-face-background", state.base.clockFaceBackgroundColor);
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

  if (control.type === "checkbox") {
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

  if (!(control instanceof HTMLInputElement)) {
    return;
  }

  const controlName = control.dataset.control;

  if (!controlName) {
    return;
  }

  state.base[controlName] = control.value;

  applyStateToClock();
  updateBaseControlsFromState();
}

function bindBaseControls() {
  const controls = document.querySelectorAll(baseControlSelectors.inputs);

  controls.forEach((control) => {
    control.addEventListener("input", handleBaseControlChange);
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
  activateTab("hands");
  setPanelOpen(true);
  updateClockTime();
  window.setInterval(updateClockTime, 1000);
  window.addEventListener("resize", applyStateToClock);
});
