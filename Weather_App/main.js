const apiKey = "dc6dd497613206d08894f81f51ee5bd0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=nairobi";


async function checkweather(){
    const response = await fetch(apiUrl +`&appid=${apiKey}`)
    var data = await response.json();


    console.log(data)
}

checkweather();