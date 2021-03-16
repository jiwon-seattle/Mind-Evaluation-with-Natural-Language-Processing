import { polarityChecker } from '../js/formHandler'

function updateUI(element, content) {
  if (content.confidence == undefined) {
    element.innerHTML = `<div class="output">Sorry, I can't analyze your feelings</div>`;
  }

  else {
    element.innerHTML = `<div class="output"><div>Polarity: ${polarityChecker(content.score_tag)} <br></div>
    <div>Confidence: ${content.confidence} <br></div>
    <div>Subjectivity: ${content.subjectivity} <br></div>
    <div>Irony: ${content.irony}</div></div>`;
  }
}

export { updateUI }