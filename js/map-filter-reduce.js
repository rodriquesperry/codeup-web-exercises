const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLanguages = users.filter(user => user.languages.length > 2);
console.log(threeLanguages);

let userEmail = users.map(user => user.email);
console.log(userEmail);

let totalExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(totalExperience);

let avgExperience = totalExperience/users.length;
console.log(avgExperience);

let longestEmail = users.reduce((total, user) => {
    console.log( user.email + " " + user.email.length);
    if (total.email.length > user.email.length) {
        return total;
    } else {
        return user;
    }
}).email;
console.log(longestEmail);


let singleString = users.reduce((name, user) => {
     return name = [...name, user.name];
},[]).join(", ");
console.log(singleString);

