import { polarityChecker } from '../js/formHandler'

function updateUI(element, content) {
  if (content.confidence == undefined) {
    element.innerHTML = `Sorry, I can't analyze your feelings`;
  }

  else {
    
    element.innerHTML = `Polarity: ${polarityChecker(content.score_tag)} <br>
    Confidence: ${content.confidence} <br>
    Subjectivity: ${content.subjectivity} <br>
    Irony: ${content.irony}`;
  }
}

export { updateUI }
