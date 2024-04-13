const accountId = 144553
let accountEmail = "arpan1867@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"

accountEmail = "arpan@gmail.com"
accountPassword = "45678"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
Prefer not to use var because of issue in block scope and functional scope
Use let instead
*/
