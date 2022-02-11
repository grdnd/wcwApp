// pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}
const search = document.querySelector("#input");
const searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("searched")
    console.log(search.value)
    if (search.value === null || search.value === "") {

    }
})