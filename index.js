function getIssues() {
	const path = document.getElementById("results").children[1].pathname

	fetch(`https://api.github.com/repos${path}/issues`)
	.then(response => response.json())
	.then(json => showIssues(json))
}

function showIssues(issues) {
	const listDiv = document.getElementById("issues");
	const list = document.createElement("ul");

	listDiv.appendChild(list);
	for (x = 0; x < issues.length; x++) {
		const listItem = document.createElement("li")

		listItem.innerHTML = `Title: <a href="${issues[x].html_url}">${issues[x].title}</a><span> | Body: ${issues[x].body}</span>`;
		list.appendChild(listItem);
	}
}

function createIssue() {
	const path = document.getElementById("results").children[1].pathname;
	let title = document.getElementById("title");
	let body = document.getElementById("body");

	fetch(`https://api.github.com/repos${path}/issues`, {
		method: "post",
		headers: {Authorization: `token ${getToken()}`},
		body: JSON.stringify({title: title.value, body: body.value})
	})
	.then(response => getIssues());
	title.value = "";
	body.value = "";
}

function showResults(json) {
	document.getElementById("results").innerHTML = `<h3>Forked Successfully!</h3><a href=${json.html_url}>${json.html_url}</a>`
}

function forkRepo() {
	const repo = "learn-co-curriculum/javascript-fetch-lab"

	fetch(`https://api.github.com/repos/${repo}/forks`, {
		method: "post",
		headers: {Authorization: `token ${getToken()}`}
	})
	.then(response => response.json())
	.then(json => showResults(json))
}

function getToken() {
	return ""
}
