const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=200')
        .then(response => response.json())
        .then(users => console.log(users))
}

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/independent?status=true')
        .then(response => response.json())
        .then(countries => console.log(countries))
}

const usersButton = document.getElementById('users');
const countriesButton = document.getElementById('countries');

document.querySelector("#buttons").addEventListener("click", (event) => {
    if (event.target.id == 'users') {
        usersButton.classList.add('selected-button'); 
        countriesButton.classList.remove('selected-button');

        loadUsers();
    } else {
        countriesButton.classList.toggle('selected-button'); 
        usersButton.classList.remove('selected-button');

        loadCountries();
    }
})