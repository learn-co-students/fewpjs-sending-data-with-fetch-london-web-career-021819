const testVar = {};


function registerSelf() {
  const url = "http://guestbook.example.com/register";
  const data = {
    firstName: "Alex",
    registryMessage: "Yo"
  };
  
  
  const config = {
    method: "POST",
    body: JSON.stringify(data)
  };

  return fetch(url, config)
    .then(resp => resp.json())
    .then(js => js.message)
      .catch(err => console.log(err))
}

function errorSelf() {
  const errUrl = "http://guestbook.example.com/register-error";

  const data = {
    firstName: "Alex",
    registryMessage: "Yo"
  };
  
  
  const config = {
    method: "POST",
    body: JSON.stringify(data)
  };

  return fetch(errUrl, config)
  .then(resp => resp.json())
  .then(js => js.message)
    .catch(err => {
      console.log(err)
      return ':('
    })

}