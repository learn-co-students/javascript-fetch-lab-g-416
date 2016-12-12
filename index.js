
const userName = 'Louiefigz'
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`
const token = '7b3e60192e3350e13007d348177310343bda6d5a'

function getIssues() {

  fetch(`${baseApi}repos/${fork}/issues`).
    then(resp => resp.json()).
    then(json => showIssues(json))
}

function showIssues(json) {
  debugger
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }

  fetch(`${baseApi}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
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

  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp =>resp.json()).
    then(json => showResults(json))
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
