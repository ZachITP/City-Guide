let lat = 0 
let lon = 0

//event listener for calendar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });
  

//display current date and time
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
  }
  //clock milliseconds refresh rate 
    setInterval(refreshTime, 1000);




    
  
  let weather = {
      //OpenWeatherMap api current weather, forecast
      "apiKey": "53308346e662bc908243590c79903419",
      pullWeather: function (city) {
       fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
           "&units=imperial&appid=" +
          this.apiKey
          )
          .then((response) => response.json())
          .then((data) => {this.showWeather(data)
              lon = data.coord.lon
              lat = data.coord.lat
          console.log (data,lon,lat) })
          .then(fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=`+lat+`&lon=`+lon+`&units=imperial&appid=`+this.apiKey)
          .then((response) => response.json())
          .then((data) => this.showForecast(data)))
         
      
          
      },
       //weather data
       showWeather: function(data) {
          const { name } = data; 
          const { icon, description } = data.weather[0];
          const { temp, humidity } = data.main;
          const { speed, } = data.wind;
      //Query all the weather data and pass it to the app
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src = 
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°F";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
      document.querySelector(".weather").classList.remove("loading")
      
      },
  
      //forecast data 
      showForecast: function (data) {
          const date1= data.list[4].dt_txt.split(" ")[0]
          const date2= data.list[12].dt_txt.split(" ")[0]
          const date3= data.list[20].dt_txt.split(" ")[0]
          const date4= data.list[28].dt_txt.split(" ")[0]
          
  
          document.querySelector(".img1").src="https://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + ".png";
          document.querySelector(".img2").src="https://openweathermap.org/img/wn/" + data.list[12].weather[0].icon + ".png";
          document.querySelector(".img3").src="https://openweathermap.org/img/wn/" + data.list[20].weather[0].icon + ".png";
          document.querySelector(".img4").src="https://openweathermap.org/img/wn/" + data.list[28].weather[0].icon + ".png";
          
          const temp1= data.list[4].main.temp;
          const temp2= data.list[12].main.temp;
          const temp3= data.list[20].main.temp;
          const temp4= data.list[28].main.temp;
          const temp5= data.list[36].main.temp;
  
          document.querySelector(".temp1").textContent=temp1;
          document.querySelector(".temp2").textContent=temp2;
          document.querySelector(".temp3").textContent=temp3;
          document.querySelector(".temp4").textContent=temp4;
         
      },
      //save city to local storage
      savecity: function(newCity) {
          let allCities = JSON.parse(localStorage.getItem('saved-cities')) || [];
          allCities.push(newCity);
          localStorage.setItem('saved-cities', JSON.stringify(allCities))
          
      },
     
     //navigation bar function
      navigation: function () {
      this.pullWeather(document.querySelector(".navigation-bar").value);
     this.savecity(document.querySelector(".navigation-bar").value);
     this.displayCities();
      }
   
  };
  
  //event listener for MOUSE CLICK
  document
  .querySelector(".navigation button")
  .addEventListener("click", function () {
  weather.navigation();
  
  
  //event listener for ENTER key
  document
  .querySelector(".navigation-bar")
  .addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
          weather.navigation();
       
      }
  });
  
  });
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e22f94d494msh38033a92e3d0750p1548a6jsn35a14fbbd1d8',
		'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
	}
};

fetch('https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=Berlin&countryName=Germany', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    localStorage.setItem('data', JSON.stringify(data));


   function showHotels(data) {
    const  link = data.list; 
    const rating= data.list;
    const name= data.list;
   
//Query all the weather data and pass it to the app
document.querySelector(".link").textContent= 
document.querySelector(".rating").innerText =  
document.querySelector(".name").innerText

   }
   

  //display search history 
  weather.displayCities();

  

  
  
  
