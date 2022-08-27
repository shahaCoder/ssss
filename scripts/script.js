// const url = 'https://api.openweathermap.org/data/2.5/weather?q='
// const api_key = '&appid=356579183d4977b1dc06380549a29a56'
// const city = 'London'

// fetch(url + city + api_key)
//    .then(response => response.json())
//    .then((data) => console.log(data))

let weather = {
   url: 'https://api.openweathermap.org/data/2.5/weather?q=',
   apiKey: '&appid=356579183d4977b1dc06380549a29a56',
   fetchWeather: function (city) {
      fetch(this.url + city + this.apiKey)
   .then(response => response.json())
   .then((data) => this.displayWeather(data))
   },
   displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      console.log(name,icon,description,temp,humidity,speed);
      document.querySelector('.city').innerHTML = name;
      document.querySelector('.weather-text').innerHTML = description[0].toUpperCase() + description.slice(1);
      document.querySelector('.persent').innerHTML = humidity;
      document.querySelector('.speed').innerHTML = speed;
      document.querySelector('.temp').innerHTML = Math.round(temp - 273) + '℃ ';
      document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + '.png';
   },
   search: function () {
      this.fetchWeather(document.querySelector('.search-inp').value)
   }  
} 
let inp = document.querySelector('.search-inp')
let img = document.querySelector('.search-btn')
img.onclick = () => {
   weather.search()
   inp.value = ''
}



// weather.fetchWeather('London')
