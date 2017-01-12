const baseApi = 'https://api.github.com';
const name = 'davdkm';
const fork = `${name}/javascript-fetch-lab`;

function getIssues() {
  fetch(`${baseApi}/repos/${name}/${fork}/issues`).
  then(res => res.json()).
  then(json => showIssuse(json));
}

function showIssues(json) {
  const source = document.getElementById('issues-template').innerHTML;
  const template = Handlebars.compile(source);
  document.getElementById('issues').innerHTML = template(json);
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const postData = { title: issueTitle, body: issueBody };
  fetch(`${baseApi}/repos/${name}/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => getIssues());
}

function showResults(json) {
  const source = document.getElementById('repo-template').innerHTML;
  const template = Handlebars.compile(source);
  document.getElementById('results').innerHTML = template(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${baseApi}/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
