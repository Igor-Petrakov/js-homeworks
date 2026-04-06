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

var validEmails = [];

for (let i = 0; i < arr.length; i++) {
    let email = arr[i].email;

    if (email.includes("@")) {

        let parts = email.split("@");

        if (parts.length === 2) {

            let name = parts[0];   
            let domain = parts[1]; 

            if (domain === "gmail.com" || domain === "yahoo.com") {

                let nameParts = name.split(".");

                if (nameParts.length === 1 || nameParts.length === 2) {
                    validEmails.push(email);
                }
            }
        }
    }
}

console.log(validEmails);