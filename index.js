function registerSelf() {
  return fetch("http://guestbook.example.com/register", {
    method: "POST",
    body: {
      firstName: "Calie",
      message: "Did it work???"
    }
  })
    .then(resp => resp.json())
    .then(content => {
      return content.message;
    });
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", {
    method: "POST",
    body: {
      firstName: "Calie",
      message: "Did it work???"
    }
  })
    .then(resp => resp.json())
    .then(content => {
      return content.message;
    })
    .catch(error => {
      return ":(";
    });
}
