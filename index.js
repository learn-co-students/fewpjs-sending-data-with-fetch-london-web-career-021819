const testVar = {}

function testFunc() {
  return "hi"
}

let formData = {
  "firstName": "Mariam",
  "registryMessage": "message"
};

let configObj = {
  method: "POST",
  body: JSON.stringify(formData)
};
function registerSelf(){
  fetch("http://guestbook.example.com/register", configObj)
    .then(function(response) { return response.json()})
    .then(function(json){ return json.message;})
}

function errorSelf(){
  fetch("http://guestbook.example.com/register-error", configObj)
    .then(function(response) {return response.json()})
    .then(function(json){return json.message})
    .catch(function(error){return ":(";})
}
