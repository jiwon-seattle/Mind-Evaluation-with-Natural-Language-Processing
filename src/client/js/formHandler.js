function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })

    let reqBody = {
        theText : formText
    }

    fetch('/analysis', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {"Content-Type" : "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        // document.getElementById('results').innerHTML = res.polarity
        console.log(res);
        alert(dataText);
    })

    // const postData = async () => {
    //     try {
    //         const response = await fetch('/analysis', {
    //             method: 'POST',
    //             body: JSON.stringify(formText),
    //             headers: {"Content-Type" : "application/json"}
    //         })
    //         const newData = await response.json();
    //         console.log(newData)
    //     } catch (error) {
    //         console.log(error)
    //     }
        
    // }
    
}

export { handleSubmit }
