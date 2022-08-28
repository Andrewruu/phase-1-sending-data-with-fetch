// Add your code here

function submitData(n, em){
    const userInfo = {
        name: n,
        email: em
    }
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => showID(data))
    .catch(function (error) {
        errorMessage(error.message)
      })
}

function showID(data){
    let h1 = document.createElement('h1')
    h1.textContent = data.id
    document.body.appendChild(h1)
}

function errorMessage(data){
    let newDiv = document.createElement('div')
    newDiv.innerHTML = `<h2>${data}</h2>`
    document.body.appendChild(newDiv)
    console.log(data)
    /*
    let h2 = document.createElement('h2')
    h2.textContent = data
    document.body.appendChild(h2)
    console.log(h2.textContent)
    console.log(data)*/
}



