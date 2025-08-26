document.querySelector("#buttons").addEventListener("click", (event) => {
    if (event.target.id === 'countries') 
        window.open(`../pages/countries.html`, "_self");
});

const loadUsers = () => {
    fetch("https://randomuser.me/api/?results=200")
       .then((response) => response.json())
       .then((data) => displayUsers(data?.results));
};

const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv";
document.body.appendChild(containerDiv);

const displayUsers = (users) => {
    users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("userDivStyle");

        userDiv.innerHTML = `
            <img src="${user?.picture?.large}" alt="">
            <p><b>Name:</b> <i>${user?.name?.title}</i> ${user?.name?.first} ${user?.name?.last}</p>
            <p><b>Gender:</b> ${user?.gender}</p> <br>
            <p><b>Age:</b> ${user?.dob?.age}</p>
            <p><b>Location:</b> ${user?.location?.city}, ${user?.location?.country}</p>
            <p><b>Address:</b> ${user?.location?.street?.name}, ${user?.location?.street?.number}</p> <br>
            <p><b>Contacts:</b><br> <b><i>Email:</i></b> <i>${user?.email}</i> <br> <b><i>Number:</i></b> ${user?.phone}</p>
         `;

        containerDiv.appendChild(userDiv);
    });
};