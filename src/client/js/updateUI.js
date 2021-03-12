import { polarityChecker } from '../js/formHandler'

function updateUI(element, content) {
  if (content.confidence == undefined) {
    element.innerHTML = `<div class="results">Sorry, I can't analyze your feelings</div>`;
  }

  else {

    element.innerHTML = `<div>Polarity: POSITIVE <br></div>
    <div>Confidence: 100 <br></div>
    <div>Subjectivity: SUBJECTIVE <br></div>
    <div>Irony: NONIRONIC</div>`;
  }
}

export { updateUI }
