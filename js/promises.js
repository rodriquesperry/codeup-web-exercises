"use strict";
function username(name) {
    const url = `https://api.github.com/users/${name}/events`;

    let gitHubAPI = fetch(url, {headers: {'Authorization': gitHubToken}})
        .then((results)=> results.json())
        .then(objData => console.log(`Most recent commit is ${objData[0].created_at}`));
    return gitHubAPI
}

username('rodriquesperry');
username('jackiedallas');
username('maryawhite');



