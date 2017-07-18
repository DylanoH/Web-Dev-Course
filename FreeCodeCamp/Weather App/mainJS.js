// api.openweathermap.org/data/2.5/weather?lat=35&lon=139


var currentLat;
var currentLong;
var apiKey = "f09845db27d443151cf8dd1a43e66d67";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    currentLat = position.coords.latitude;
    currentLong = position.coords.longitude;

    //console.log ()

   $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + currentLat + "&lon=" + currentLong + "&APPID=" + apiKey, function(data){
     $("#showWeather").html("latitude: " + currentLat + "<br/>" + "longitude: " + currentLong + "<br/>");
   });
//data.weather[0].icon

    $("#showWeather").html("latitude: " + currentLat + "<br/>" + "longitude: " + currentLong);
    console.log("lat: "+currentLat + " long: " + currentLong);
  });
}
