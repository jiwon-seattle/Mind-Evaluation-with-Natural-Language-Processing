function updateUI(element, content) {
  if (content.confidence == undefined) {
    element.innerHTML = `Sorry, I can't analyze your feelings`;
  }

  else {
    element.innerHTML = `Confidence: ${content.confidence} <br>
    Score tag: ${content.score_tage} <br>
    Subjectivity: ${content.subjectivity}<br>
    Irony: ${content.irony}`;
  }
}

export { updateUI }