document.querySelector("#buttons").addEventListener("click", (event) => {
    if (event.target.id === 'users') 
        window.open(`../pages/users.html`, "_self");
    else
        loadCountries();
});

const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
        .then((response) => response.json())
        .then((countries) => displayCountries(countries));
};

const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv";
document.body.appendChild(containerDiv);

const displayCountries = (countries) => {
    console.log(countries[0])
    countries.forEach((country) => {
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("userDivStyle");

        countryDiv.innerHTML = `
            <img src="${country?.flags?.svg}" alt="">
            <p><b>Name:</b> ${country?.name?.official} <i>(${country?.name?.common})</i></p>
            <p><b>Capital:</b> ${country?.capital}</p> <br>
            <p><b>Population:</b> ${country?.population.toLocaleString()}</p>
            <p><b>Continent:</b> ${country?.continents.join(",")}</p>
            <p><b>Area:</b> ${country?.area.toLocaleString()}</p> <br>
            <p><b>Fun facts:</b><br> <b><i>FIFA code:</i></b> ${country?.fifa} <br> <b><i>Timezones:</i></b> ${country?.timezones?.join("\n")}</p>
        `;

        containerDiv.appendChild(countryDiv);
    });
};