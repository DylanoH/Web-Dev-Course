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

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + currentLat + "&lon=" + currentLong + "&units=metric" + "&APPID=" + apiKey, function(data){
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
            $("body").css({"background": "url('http://allswalls.com/images/clear-sky-wallpaper-3.jpg')", "background-size": "100%"});
            break;

          case "few clouds":
            $(".weatherType").html("few clouds");
            $("body").css({"background": "url('https://billysauerlandphotography.files.wordpress.com/2013/03/2013-march.jpg')", "background-size": "100%"});
            break;

          case "scattered clouds":
            $(".weatherType").html("scattered clouds");
            $("body").css({"background": "url('https://wallpapercave.com/wp/iHUonse.jpg')", "background-size": "100%"});
            break;

          case "broken clouds":
            $(".weatherType").html("broken clouds");
            $("body").css({"background": "url('http://danwrayphoto.com/wp-content/uploads/2014/06/WRA4814.jpg')", "background-size": "100%"});
            break;

          case "shower rain":
            $(".weatherType").html("shower rain");
            $("body").css({"background": "url('http://1.bp.blogspot.com/-lpD4c7VuPgY/VIluclNGrkI/AAAAAAAABl4/13IA8yvnjGc/s1600/5.jpg')", "background-size": "100%"});
            break;

          case "rain":
            $(".weatherType").html("rain");
            $("body").css({"background": "url('https://wallpapercave.com/wp/0Rjh2Oo.jpg')", "background-size": "100%"});
            break;

          case "thunderstorm":
            $(".weatherType").html("thunderstorm");
            $("body").css({"background": "url('https://i.ytimg.com/vi/g3FDedAYeXo/maxresdefault.jpg')", "background-size": "100%"});
            break;
          case "snow":

            $(".weatherType").html("snow");
            $("body").css({"background": "url('https://vignette4.wikia.nocookie.net/phobia/images/a/aa/Snow.jpg/revision/latest?cb=20161109045734')", "background-size": "100%"});
            break;

          case "mist":
            $(".weatherType").html("mist");
            $("body").css({"background": "url('http://www.guoguiyan.com/data/out/128/69386731-mist-wallpapers.jpg')", "background-size": "100%"});
            break;
        }
      }

      
      console.log(data.weather[0].description);

    }); // json end


    // $("#showWeather").html("latitude: " + currentLat + "<br/>" + "longitude: " + currentLong);
    console.log("lat: "+currentLat + " long: " + currentLong);
  }); // navigator end
}
