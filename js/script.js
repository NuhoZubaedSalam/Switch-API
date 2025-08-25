document.querySelector("#buttons").addEventListener("click", (event) => {
    const usersButton = document.getElementById('users');
    const countriesButton = document.getElementById('countries');
    
    if (event.target.id === 'users') {
        usersButton.classList.add('selected-button'); 
        countriesButton.classList.remove('selected-button');

        loadUsers();
    } else {
        countriesButton.classList.add('selected-button'); 
        usersButton.classList.remove('selected-button');

        loadCountries();
    }
})

const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=200')
        .then(response => response.json())
        .then(users => displayUsers(users))
}

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/independent?status=true')
        .then(response => response.json())
        .then(countries => displayCountries(countries))
}

const displayCountries = (countries) => {
    countries.forEach(country => {
        console.log(country);
    });
}

const displayUsers = (users) => {
    users.forEach(user => {
        console.log(user);
    });
}