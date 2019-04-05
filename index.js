const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf () {
  return fetch('http://guestbook.example.com/register', {
    method: 'POST',
    body: JSON.stringify({
      'firstName': 'max',
      'registryMessage': 'test'
    })
  }).then(function(res) {
      return res.json()
  }).then(function(json) {
      return json.message
  })
}

function errorSelf () {
  return fetch('http://guestbook.example.com/register-error', {
    method: 'POST',
    body: JSON.stringify({
      'firstName': 'max',
      'registryMessage': 'test'
    })
  })
    .then(res => res.json())
    .then(json => json.message)
    .catch(() => ':(')
}
