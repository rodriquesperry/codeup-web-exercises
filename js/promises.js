"use strict";
const token = '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';
const username = prompt("Enter your github username.")
const url = `https://api.github.com/users/${username}/events`;

let gitHubAPI = fetch(url, {headers: {'Authorization': token}})
    .then((results)=> results.json())
    .then(arrayData => console.log(arrayData[0].created_at));

