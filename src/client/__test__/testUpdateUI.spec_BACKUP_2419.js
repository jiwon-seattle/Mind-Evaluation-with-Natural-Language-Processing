import { formHandler } from '../js/formHandler';
import { updateUI } from '../js/updateUI';

const jsdom = require("jsdom");
const {JSDOM} = jsdom;

describe("Testing the submit functionality", () => {
  test('Checking if UI is updated properly with results of API call', () => {
    const dom = new JSDOM(`<div id ="results"></div>`);
    const content = { score_tag: "P", confidence : "100", subjectivity: "SUBJECTIVE", irony: "NONIRONIC"};
    const element = dom.window.document.getElementById('results');

    updateUI(element, content);
<<<<<<< HEAD
    expect(element.innerHTML).toBe(`<div class="output"><div>Polarity: POSITIVE <br></div>
    <div>Confidence: 100 <br></div>
    <div>Subjectivity: SUBJECTIVE <br></div>
    <div>Irony: NONIRONIC</div></div>`);
=======
    expect(element.innerHTML).toBe(`<div>Polarity: POSITIVE <br></div>
    <div>Confidence: 100 <br></div>
    <div>Subjectivity: SUBJECTIVE <br></div>
    <div>Irony: NONIRONIC</div>`);
>>>>>>> 8b6d3a5d6fe348522cc3f521ff34e09713f99dac
  });
});
