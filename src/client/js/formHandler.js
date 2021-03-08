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

    const getData = async(url = 'http://localhost:8083/analysis', data = {}) => {
        let response = await fetch (url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data);
        });
    }
    fetch('http://localhost:8083/analysis', {
        body: JSON.stringify(data),
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
        console.log(res);
        document.getElementById('results').innerHTML = res.polarity
        alert(dataText);
    })

}

export { handleSubmit }
