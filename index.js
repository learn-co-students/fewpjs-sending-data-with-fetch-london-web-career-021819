const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf(){

  let formData = {
    "firstName": "Khang",
    "registryMessage": "Test"
  }

  let configObj = {
    method: "POST",
    body: formData
  }

  return fetch("http://guestbook.example.com/register", configObj)
  .then(response => response.json())
  .then(json => json.message)
}


function errorSelf(){

  let formData = {
    "firstName": "Name invalid bla bla bla",
    "registryMessage": "Test"
  }

  let configObj = {
    method: "POST",
    body: formData
  }

  return fetch("http://guestbook.example.com/register-error", configObj)
  .then(response => response.json())
  .then(json => json.message)
  .catch(function(error){
    alert("error")
    return ':('
  })
}
