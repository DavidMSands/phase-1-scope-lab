var customerName = 'bob'
const leastFavoriteCustomer = "karen"

function upperCaseCustomerName() {
    customerName = `${customerName.toUpperCase()}`; 
}

function setBestCustomer() {
    globalThis.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = `maybe bob`;
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "bob"
}