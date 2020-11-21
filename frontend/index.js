const PORT = 3000
const url = `http://localhost:${PORT}`

//fetch from API
const generateFortune = (url = `http://localhost:${PORT}`) => fetch(url, {
    mode: 'cors'
})
.then(function(response) {
    return response.text();
})
.then(function(text) {
    let result = JSON.parse(text)
    const fortuneElement = document.querySelector("#fortune")
    fortuneElement.value = result.description
    fortuneElement.setAttribute("data-id", result.id)
    fortuneElement.setAttribute("placeholder", result.description)
    fortuneElement.removeAttribute("disabled")
    notification()
})
.catch(function(error) {
    console.log('Request failed', error)
})

const selectAll = el => el.select()

const saveChanges = el => {
    let oldValue = el.getAttribute("placeholder")
    let newValue = el.value.trim()
    let id = el.getAttribute("data-id")
    if((oldValue != newValue) && id != '' && newValue != ""){
        let msg = "Congratulations! Your fortune is now saved."
        loading(true)
        updateDescription(url, id, newValue)
        notification(msg)
    }
    loading(false)
}

const updateDescription = (url, id, description) => fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        description: description
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => {
    return response.text()
})
.then(text => {
    loading(false)
})
.catch(function(error) {
    console.log('Request failed', error)
})

const loading = (status) => {
    let loader = document.querySelector("#btn-reveal")
    if(status) return loader.setAttribute("disabled", true); 
    return loader.removeAttribute("disabled");
}

const notification = (msg="") => {
    let loader = document.querySelector("#btn-reveal")
    let notification = document.querySelector("#notification")
    if(msg) return notification.innerHTML = msg
    return notification.innerHTML = "Click anywhere to save changes."
}