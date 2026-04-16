var arr = [
    {
        userName: "Igor",
        lastName: "Petrakov",
        email: "igor.petrakov@gmail.com"
    },
    {
        userName: "Igor",
        lastName: "Petrakov",
        email: "igor.petrakov@yahoo.com"
    },
    {
        userName: "Igor",
        lastName: "Petrakov",
        email: "igor@mail.ru"
    }
];

var regex = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail\.com|yahoo\.com)$/;

var validEmails = [];

for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i].email)) {
        validEmails.push(arr[i].email);
    }
}

console.log(validEmails);