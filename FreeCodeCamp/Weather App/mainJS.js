// api.openweathermap.org/data/2.5/weather?lat=35&lon=139

$(document).ready(function() {

})

var currentLat;
var currentLong;
var apiKey = "f09845db27d443151cf8dd1a43e66d67";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    currentLat = position.coords.latitude;
    currentLong = position.coords.longitude;

    //console.log ()

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + currentLat + "&lon=" + currentLong + "&units=metric" + "&APPID=" + apiKey, function(data){
      //$("#showWeather").html("latitude: " + currentLat + "<br/>" + "longitude: " + currentLong + "<br/>");
      // $("#showWeather").html("Temperature: " + data.main.temp + "&deg;" + "<br/>" + "Humidity: " + data.main.humidity);
      $("#showLocation").html(data.name);
      $("#showDegrees").html(Math.floor(data.main.temp) + "&deg;");
      $("#showHumidty").html(data.main.humidity + "%");

      weatherTypes();

      function weatherTypes() {
        switch (data.weather[0].description) {
          case "clear sky":
            $(".weatherType").html("clear sky");
            //$("body").css("background-image", "url('Resources/clearsky.jpg')")
            break;
          case "few clouds":
            $(".weatherType").html("few clouds");
            break;
          case "scattered clouds":
            $(".weatherType").html("scattered clouds");
            break;
          case "broken clouds":
            $(".weatherType").html("broken clouds");
            break;
          case "shower rain":
            $(".weatherType").html("shower rain");
            break;
          case "rain":
            $(".weatherType").html("rain");
            break;
          case "thunderstorm":
            $(".weatherType").html("thunderstorm");
            break;
          case "snow":
            $(".weatherType").html("snow");
            break;
          case "mist":
            $(".weatherType").html("mist");
            break;
        }
      }


    }); // json end


    // $("#showWeather").html("latitude: " + currentLat + "<br/>" + "longitude: " + currentLong);
    console.log("lat: "+currentLat + " long: " + currentLong);
  }); // navigator end
}
