
const optionsA = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'e22f94d494msh38033a92e3d0750p1548a6jsn35a14fbbd1d8',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};
// //(console.log(city))
// fetch('https://airbnb13.p.rapidapi.com/search-location?location=' + city + '&checkin=2023-04-15&checkout=2023-04-20&adults=1&children=0&infants=0&page=1&currency=USD', optionsA)
// 	.then(response => response.json())
// 	//.then(response => console.log(response))
//     //.then (console.log(city))

//           .then((response) =>{
    //             console.log('response',response);
    
    
    //             const {deeplink}= response.deeplink[0];
    //             const {Airb}= response.results[0].name;
    //             const {rating}= response.results[0].rating;
    //             //Query all the weather data and pass it to the app
    
    //             document.querySelector("#deeplink").innerText = deeplink;
    //             document.querySelector("#name").innerText = Airb;
//             document.querySelector("#rating").innerText = rating;
//           });

//const { icon, description } = data.weather[0];

// function showmyHotels(response) {
    //const {response_time}= response.headers;
    //const {deeplink}= response.deeplink[0];
    //const {Airb}= results(0).name;
    //const {rating}= results(0).rating;
    //Query all the weather data and pass it to the app
    //document.querySelector("#deeplink").innerText = deeplink;
    //document.querySelector("#name").innerText = Airb;
    //document.querySelector("#rating").innerText = rating;
    
    // }
    
    
    
    
    
    
    
    async function getshowmyHotels(){
        let city = document.querySelector('#content').value;
        console.log('city',city)
        
        await fetch('https://airbnb13.p.rapidapi.com/search-location?location=' + city + '&checkin=2023-04-15&checkout=2023-04-20&adults=1&children=0&infants=0&page=1&currency=USD', optionsA,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e22f94d494msh38033a92e3d0750p1548a6jsn35a14fbbd1d8',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
        
    })
    .then(response => response.json())
    .then(response => {
        console.log("COVID 19 API object:");
        console.log(response);
        console.log("\n");

        const deeplink= response.results[0].deeplink;
            const Airb= response.results[0].name;
            const rating= response.results[0].rating;
            //Query all the weather data and pass it to the app
        document.querySelector('.deeplink').innerText = deeplink;
        document.querySelector('.name').innerHTML = Airb;
        document.querySelector('.rating').innerText = rating;
        console.log('deeplink',deeplink)
        console.log('Airb',Airb)
        console.log('rating',rating)
        console.log(document.querySelector('#name'))

         // add all countries to select element
         //response.response.forEach(c => {
            //const option = document.createElement('option');
           // option.innerHTML = c.country;
            //document.getElementById('#deeplink').appendChild(option);
});


}
document
  .querySelector(".navigation button")
  .addEventListener("click", function (){

      getshowmyHotels();
  });