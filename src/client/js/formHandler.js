function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value


    let reqBody = {
        theText : formText
    }

    fetch('http://localhost:8083/analysis', {
        body: JSON.stringify({input: formText}),
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
    })
    .then(res => res.json())
    .then(function(res) {
        let element = document.getElementById('results');
        Client.updateUI(element, res);
    })
}

const polarityChecker = (score) => {
    let display;
    switch(score) {
        case 'P+' : display = 'strong positive';
        break;
        case 'P' : display = 'positive';
        break;
        case 'NEW': display = 'neutral';
        break;
        case 'N' : display = 'negative';
        break;
        case 'N+' : display = 'strong negative';
        break;
        case 'NONE' : display = 'no sentiment';
        break;
    }
    return display.toUpperCase();
}

export { handleSubmit }
export { polarityChecker }