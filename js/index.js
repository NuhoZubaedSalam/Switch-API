document.querySelector("#buttons").addEventListener("click", (event) => {
    window.open(`./pages/${event.target.id}.html`, "_self");
});