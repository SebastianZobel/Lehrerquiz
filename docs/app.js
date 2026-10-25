"use strict";

const questions = [
  {
    section: "focus",
    title: "Du hast einen freien Nachmittag. Was machst du?",
    options: [
      ["Ich gehe raus, bewege mich und erlebe etwas.", "B"],
      ["Ich gestalte, zeichne, schreibe oder mache Musik.", "A"],
      ["Ich treffe Freunde oder nehme mir Zeit für jemanden.", "D"],
      ["Ich löse ein Rätsel oder entdecke ein neues Thema.", "C"],
    ],
  },
  {
    section: "focus",
    title: "Bei einem Gruppenprojekt übernimmst du am liebsten …",
    options: [
      ["Recherche, Planung und knifflige Fragen.", "C"],
      ["Absprachen und die gute Stimmung im Team.", "D"],
      ["Ideen, Gestaltung und Präsentation.", "A"],
      ["Aufbau, Action und praktische Aufgaben.", "B"],
    ],
  },
  {
    section: "focus",
    title: "Eine Aufgabe ist richtig schwierig. Was hilft dir?",
    options: [
      ["Gemeinsam nach einer Lösung suchen.", "D"],
      ["Einfach anfangen und ausprobieren.", "B"],
      ["Erst verstehen, wie alles zusammenhängt.", "C"],
      ["Einen ungewöhnlichen eigenen Weg finden.", "A"],
    ],
  },
  {
    section: "focus",
    title: "Beim Hoffest würdest du am liebsten …",
    options: [
      ["Motto, Plakate, Musik oder Deko gestalten.", "A"],
      ["Knifflige Fragen für ein Hoffest-Quiz ausdenken.", "C"],
      ["Beim Auf- und Abbau richtig mit anpacken.", "B"],
      ["Gäste begrüßen und dafür sorgen, dass sich alle wohlfühlen.", "D"],
    ],
  },
  {
    section: "focus",
    title: "Welches Kompliment freut dich am meisten?",
    options: [
      ["Du kannst schwierige Dinge gut erklären.", "C"],
      ["Du hast echt originelle Ideen.", "A"],
      ["Bei dir fühlt man sich verstanden.", "D"],
      ["Mit dir kommt Bewegung in die Sache.", "B"],
    ],
  },
  {
    section: "focus",
    title: "Welche Fähigkeit würdest du gern sofort erlernen?",
    options: [
      ["Eine neue Sportart richtig gut beherrschen.", "B"],
      ["In schwierigen Momenten die richtigen Worte finden.", "D"],
      ["Eine Idee so umsetzen, dass sie richtig Wirkung hat.", "A"],
      ["Komplizierte Zusammenhänge schneller durchschauen.", "C"],
    ],
  },
  {
    section: "style",
    title: "Ein Abgabetermin rückt näher. Du …",
    options: [
      ["… machst einen Plan und arbeitest ihn ab.", "1"],
      ["… motivierst alle zum gemeinsamen Endspurt.", "2"],
      ["… findest deinen eigenen Rhythmus.", "3"],
    ],
  },
  {
    section: "style",
    title: "Du sollst etwas präsentieren. Was ist dir wichtig?",
    options: [
      ["Die anderen mit Begeisterung mitzureißen.", "2"],
      ["Ein besonderer Auftritt, der im Kopf bleibt.", "3"],
      ["Ein klarer Aufbau, dem alle folgen können.", "1"],
    ],
  },
  {
    section: "style",
    title: "Etwas läuft anders als geplant. Was tust du zuerst?",
    options: [
      ["Ich improvisiere und nehme es mit Humor.", "3"],
      ["Ich bleibe ruhig und prüfe die Lage.", "1"],
      ["Ich hole andere dazu und wir legen gemeinsam los.", "2"],
    ],
  },
  {
    section: "style",
    title: "Was fällt anderen wahrscheinlich zuerst an dir auf?",
    options: [
      ["Meine ruhige und zuverlässige Art.", "1"],
      ["Mein eigener Stil und meine lockere Art.", "3"],
      ["Meine Energie und gute Stimmung.", "2"],
    ],
  },
];

const labels = {
  A: { name: "Ideen & Gestaltung", short: "Ich finde gern einen eigenen, kreativen Weg.", symbol: "A" },
  B: { name: "Bewegung & Anpacken", short: "Ich probiere aus und bringe Dinge ins Rollen.", symbol: "B" },
  C: { name: "Verstehen & Entdecken", short: "Ich will Zusammenhänge wirklich durchschauen.", symbol: "C" },
  D: { name: "Miteinander", short: "Ich habe Menschen und Stimmungen im Blick.", symbol: "D" },
  1: { name: "Ruhig & strukturiert", short: "Erst sortieren, dann loslegen.", symbol: "1" },
  2: { name: "Mitreißend", short: "Gemeinsam Schwung aufnehmen.", symbol: "2" },
  3: { name: "Individuell & locker", short: "Auf meine Art ans Ziel kommen.", symbol: "3" },
};

const results = {
  "A-1": {
    name: "Frau Bauersfeld",
    tagline: "ideenreich & überlegt",
    description:
      "Du wirkst ruhig und überlegt, hast aber viele Ideen. Wenn dir etwas wichtig ist, bleibst du konsequent dran.",
  },
  "A-2": {
    name: "Frau Müller-Senst",
    tagline: "persönlich & aufmerksam",
    description:
      "Du zeigst Persönlichkeit und spürst zugleich, was andere brauchen. Diese Mischung bleibt positiv in Erinnerung.",
  },
  "A-3": {
    name: "Frau Cersovski",
    tagline: "offen & eigenständig",
    description:
      "Du findest gern deinen eigenen Weg. Deine offene Art macht es anderen leicht, sich von dir mitnehmen zu lassen.",
  },
  "B-1": {
    name: "Herr Reichert",
    tagline: "aktiv & fokussiert",
    description:
      "Du magst Bewegung und gehst Aufgaben zielgerichtet an. Dabei bleibst du konzentriert und behältst den Überblick.",
  },
  "B-2": {
    name: "Frau Szabo",
    tagline: "energisch & motivierend",
    description:
      "Du bringst Energie in eine Gruppe und merkst schnell, wann andere neuen Schwung oder gute Laune brauchen.",
  },
  "B-3": {
    name: "Herr Klement",
    tagline: "direkt & unkompliziert",
    description:
      "Du machst lieber den ersten Schritt, als ewig zu überlegen. Dabei bleibst du locker und angenehm unkompliziert.",
  },
  "C-1": {
    name: "Herr Haake",
    tagline: "klar & zuverlässig",
    description:
      "Du erkennst gern einen klaren Weg und behältst auch bei schwierigen Aufgaben zuverlässig den Überblick.",
  },
  "C-2": {
    name: "Frau Gründel",
    tagline: "neugierig & begeistert",
    description:
      "Wenn dich etwas interessiert, willst du tiefer einsteigen. Deine Begeisterung kann schnell auf andere überspringen.",
  },
  "C-3": {
    name: "Herr Schulze",
    tagline: "gründlich & anschaulich",
    description:
      "Du möchtest Zusammenhänge wirklich verstehen und findest häufig einen eigenen, anschaulichen Zugang.",
  },
  "D-1": {
    name: "Herr Schwarzbach",
    tagline: "entschlossen & pointiert",
    description:
      "Du hast einen klaren Blick für das Wesentliche. Mit Entschlossenheit und pointiertem Humor setzt du besondere Akzente.",
  },
  "D-2": {
    name: "Frau Heppel",
    tagline: "positiv & zugewandt",
    description:
      "Du gibst Menschen das Gefühl, willkommen zu sein. Hinter deiner positiven Art steckt viel Gespür für Stimmungen.",
  },
  "D-3": {
    name: "Frau Reisener",
    tagline: "souverän & gelassen",
    description:
      "Du hörst genau zu und bewahrst trotzdem deine eigene Sicht. Vieles gehst du souverän an und vermittelst wohltuende Gelassenheit.",
  },
};

const screens = {
  intro: document.querySelector("#intro-screen"),
  quiz: document.querySelector("#quiz-screen"),
  tie: document.querySelector("#tie-screen"),
  result: document.querySelector("#result-screen"),
};

const ui = {
  start: document.querySelector("#start-button"),
  restartTop: document.querySelector("#restart-top"),
  restart: document.querySelector("#restart-button"),
  print: document.querySelector("#print-button"),
  back: document.querySelector("#back-button"),
  section: document.querySelector("#section-label"),
  counter: document.querySelector("#question-counter"),
  progress: document.querySelector(".progress-track"),
  progressFill: document.querySelector("#progress-fill"),
  kicker: document.querySelector("#question-kicker"),
  question: document.querySelector("#question-title"),
  answers: document.querySelector("#answer-list"),
  tieTitle: document.querySelector("#tie-title"),
  tieCopy: document.querySelector("#tie-copy"),
  tieOptions: document.querySelector("#tie-options"),
  resultName: document.querySelector("#result-name"),
  resultTagline: document.querySelector("#result-tagline"),
  resultDescription: document.querySelector("#result-description"),
  resultStamp: document.querySelector("#result-stamp"),
  scoreBars: document.querySelector("#score-bars"),
  live: document.querySelector("#live-region"),
};

let currentQuestion = 0;
let answers = [];
let resolved = { focus: null, style: null };
let pendingTies = [];
let scores = null;

function showScreen(name) {
  Object.entries(screens).forEach(([key, screen]) => {
    screen.hidden = key !== name;
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function announce(message) {
  ui.live.textContent = "";
  window.setTimeout(() => {
    ui.live.textContent = message;
  }, 30);
}

function startQuiz() {
  currentQuestion = 0;
  answers = [];
  resolved = { focus: null, style: null };
  pendingTies = [];
  scores = null;
  showScreen("quiz");
  renderQuestion();
  announce(`Quiz gestartet. Frage 1 von ${questions.length}.`);
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const number = currentQuestion + 1;
  ui.section.textContent =
    question.section === "focus"
      ? "Teil 1 · Was ist dein Ding?"
      : "Teil 2 · Wie machst du dein Ding?";
  ui.counter.textContent = `Frage ${number} von ${questions.length}`;
  ui.kicker.textContent = String(number).padStart(2, "0");
  ui.question.textContent = question.title;
  ui.progress.setAttribute("aria-valuenow", String(number));
  ui.progressFill.style.width = `${(number / questions.length) * 100}%`;
  ui.back.disabled = currentQuestion === 0;
  ui.answers.innerHTML = "";

  question.options.forEach(([text, value], index) => {
    const button = document.createElement("button");
    const letter = String.fromCharCode(65 + index);
    button.type = "button";
    button.className = "answer-button";
    button.dataset.value = value;
    button.setAttribute("aria-pressed", answers[currentQuestion] === value ? "true" : "false");
    button.innerHTML = `<span class="answer-letter" aria-hidden="true">${letter}</span>${text}`;
    button.addEventListener("click", () => chooseAnswer(value));
    ui.answers.append(button);
  });

  window.setTimeout(() => ui.question.focus?.(), 0);
}

function chooseAnswer(value) {
  answers[currentQuestion] = value;
  ui.answers.querySelectorAll(".answer-button").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.value === value ? "true" : "false");
    button.disabled = true;
  });

  window.setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion += 1;
      renderQuestion();
      announce(`Frage ${currentQuestion + 1} von ${questions.length}.`);
    } else {
      evaluateQuiz();
    }
  }, 180);
}

function goBack() {
  if (currentQuestion === 0) return;
  answers[currentQuestion] = undefined;
  currentQuestion -= 1;
  renderQuestion();
  announce(`Zurück zu Frage ${currentQuestion + 1}.`);
}

function countValues(keys) {
  return Object.fromEntries(
    keys.map((key) => [key, answers.filter((answer) => answer === key).length]),
  );
}

function highestKeys(groupScores) {
  const highest = Math.max(...Object.values(groupScores));
  return Object.keys(groupScores).filter((key) => groupScores[key] === highest);
}

function evaluateQuiz() {
  scores = {
    focus: countValues(["A", "B", "C", "D"]),
    style: countValues(["1", "2", "3"]),
  };

  const focusWinners = highestKeys(scores.focus);
  const styleWinners = highestKeys(scores.style);
  pendingTies = [];

  if (focusWinners.length === 1) {
    resolved.focus = focusWinners[0];
  } else {
    pendingTies.push({ group: "focus", options: focusWinners });
  }

  if (styleWinners.length === 1) {
    resolved.style = styleWinners[0];
  } else {
    pendingTies.push({ group: "style", options: styleWinners });
  }

  resolveNextTie();
}

function resolveNextTie() {
  if (pendingTies.length === 0) {
    showResult();
    return;
  }

  const tie = pendingTies.shift();
  const isFocus = tie.group === "focus";
  ui.tieTitle.textContent = isFocus
    ? "Was treibt dich wirklich an?"
    : "Wie gehst du am liebsten vor?";
  ui.tieCopy.textContent =
    "Deine Punkte liegen gleichauf. Welche Aussage passt spontan einen Tick besser?";
  ui.tieOptions.innerHTML = "";

  tie.options.forEach((key) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tie-option";
    button.textContent = `${labels[key].symbol} ${labels[key].short}`;
    button.addEventListener("click", () => {
      resolved[tie.group] = key;
      resolveNextTie();
    });
    ui.tieOptions.append(button);
  });

  showScreen("tie");
  ui.tieOptions.querySelector("button")?.focus();
  announce("Punktgleichstand. Bitte wähle eine zusätzliche Aussage.");
}

function showResult() {
  const result = results[`${resolved.focus}-${resolved.style}`];
  ui.resultName.textContent = result.name;
  ui.resultTagline.textContent = result.tagline;
  ui.resultDescription.textContent = result.description;
  ui.resultStamp.textContent = `${labels[resolved.focus].symbol}${labels[resolved.style].symbol}`;
  renderScoreBars();
  showScreen("result");
  ui.resultName.setAttribute("tabindex", "-1");
  ui.resultName.focus();
  announce(`Dein Ergebnis: ${result.name}, ${result.tagline}.`);
}

function renderScoreBars() {
  const ordered = ["A", "B", "C", "D", "1", "2", "3"];
  ui.scoreBars.innerHTML = "";

  ordered.forEach((key) => {
    const group = ["1", "2", "3"].includes(key) ? "style" : "focus";
    const max = group === "focus" ? 6 : 4;
    const value = scores[group][key];
    const row = document.createElement("div");
    row.className = "score-row";
    row.innerHTML = `
      <div class="score-label"><span>${labels[key].symbol} ${labels[key].name}</span><span>${value}/${max}</span></div>
      <div class="score-track"><div class="score-value" style="width: ${(value / max) * 100}%"></div></div>
    `;
    ui.scoreBars.append(row);
  });
}

ui.start.addEventListener("click", startQuiz);
ui.restartTop.addEventListener("click", startQuiz);
ui.restart.addEventListener("click", startQuiz);
ui.back.addEventListener("click", goBack);
ui.print.addEventListener("click", () => window.print());
