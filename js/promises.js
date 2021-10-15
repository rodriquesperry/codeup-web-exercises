"use strict";
function lastCommit(userName) {
    const url = `https://api.github.com/users/${userName}/events`;
    let gitHubAPI = fetch(url, {headers: {'Authorization': gitHubToken}})
        .then((results)=> results.json())
        .then(objData => console.log(`${userName}'s Most recent commit is ${new Date(objData[0].created_at)}`));
    return gitHubAPI
}

lastCommit('rodriquesperry');
lastCommit('jackiedallas');
lastCommit('maryawhite');



