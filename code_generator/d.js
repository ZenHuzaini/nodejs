const userInformationUnconfirmed = {
    firstName: "pilot",
    lastName: "pilot",

    confirmed: false
};
const userInformationConfirmed = {
    ...userInformationUnconfirmed,
    confirmed: true
};

console.log(userInformationConfirmed)
console.log(userInformationUnconfirmed)
