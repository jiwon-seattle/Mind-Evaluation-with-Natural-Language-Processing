function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })

    let reqBody = {
        theText : formText
    }
    console.log('checking');
    console.log(formText);
    console.log(reqBody);

    fetch('http://localhost:8083/analysis', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify({input: formText}),
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = res.polarity
        alert(dataText);
    })

}

export { handleSubmit }
