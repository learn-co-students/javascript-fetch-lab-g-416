const userName = ''
const baseURL = 'https://api.github.com/'
const theFork = `${userName}/javascript-fetch-lab`

function getIssues() {
  fetch(`${baseURL}repos/${theFork}/issues`)
  .then(resp => resp.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const postData = { title: title, body: body }

  fetch(`${baseURL}repos/${theFork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then((resp) => showResults(resp.json()))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
