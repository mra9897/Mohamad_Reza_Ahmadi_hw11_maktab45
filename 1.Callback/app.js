const getName = (firstName, lastName, callback) => callback(firstName, lastName);
const setName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(getName("ali","ahmadi",setName));