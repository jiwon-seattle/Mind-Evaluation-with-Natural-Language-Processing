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
    expect(element.innerHTML).toBe(`Polarity: POSITIVE <br>
    Confidence: 100 <br>
    Subjectivity: SUBJECTIVE <br>
    Irony: NONIRONIC`);
  });
});