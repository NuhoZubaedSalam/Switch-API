const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv";
document.body.appendChild(containerDiv);

document.querySelector("#buttons").addEventListener("click", (event) => {
    const usersButton = document.getElementById("users");
    const countriesButton = document.getElementById("countries");

    if (event.target.id === "users") {
        usersButton.classList.add("selected-button");
        countriesButton.classList.remove("selected-button");

        loadUsers();
    } else {
        countriesButton.classList.add("selected-button");
        usersButton.classList.remove("selected-button");

        loadCountries();
    }
});

const loadUsers = () => {
    fetch("https://randomuser.me/api/?results=200")
        .then((response) => response.json())
        .then((data) => displayUsers(data?.results));
};

const displayUsers = (users) => {
    users.forEach((user) => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("userDivStyle");

        userDiv.innerHTML = `
        <img src="${user?.picture?.large}" alt="">
        <p><b>Name:</b> <i>${user?.name?.title} ${user?.name?.first} ${user?.name?.last}</i></p>
        <p><b>Gender:</b> ${user?.gender}</p> <br>
        <p><b>Age:</b> ${user?.dob?.age}</p>
        <p><b>Location:</b> ${user?.location?.city}, ${user?.location?.country}</p>
        <p><b>Address:</b> ${user?.l</p> <br>
        <p><b>Contacts:</b><br> <b><i>Email:</i></b> <i>${user?.email}</i> <br> <b><i>Number:</i></b> ${user?.phone}</p>
    `;

        containerDiv.appendChild(userDiv);
    });
};

const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
        .then((response) => response.json())
        .then((countries) => displayCountries(countries));
};

const displayCountries = (countries) => {
    countries.forEach((country) => {});
};
