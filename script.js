const dreamSymbols = {
  "Water": "Emotions, the subconscious, flow of life",
  "Flying": "Freedom, escape, new perspectives",
  "Tree": "Growth, stability, connection to roots"
  // ... Add more symbols and interpretations
};

const pastLifePrompts = {
  "Water": "Imagine yourself near a large body of water in another lifetime. What do you see, hear, and feel?",
  "Flying": "Visualize yourself soaring through the sky in a past life. What emotions arise?",
  "Tree": "Picture yourself as a tree in a previous existence. How did you experience the world?"
  // ... Add more prompts linked to symbols
};

function analyzeDream() {
  const dreamInput = document.getElementById("dream-input").value.toLowerCase();
  const dreamAnalysisDiv = document.getElementById("dream-analysis");
  let foundSymbols = [];

  for (const symbol in dreamSymbols) {
    if (dreamInput.includes(symbol.toLowerCase())) {
      foundSymbols.push(symbol);
    }
  }

  if (foundSymbols.length > 0) {
    const chosenSymbol = foundSymbols[Math.floor(Math.random() * foundSymbols.length)];
    document.getElementById("past-life-prompt").innerText = pastLifePrompts[chosenSymbol];
    document.getElementById("dream-section").style.display = "none";
    document.getElementById("past-life-section").style.display = "block";
  } else {
    dreamAnalysisDiv.innerText = "No matching symbols found. Try describing your dream differently.";
  }
}

function showHigherSelf() {
  document.getElementById("past-life-section").style.display = "none";
  document.getElementById("higher-self-section").style.display = "block";
}
