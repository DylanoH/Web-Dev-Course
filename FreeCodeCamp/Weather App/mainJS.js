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

      var temperature = Math.floor(data.main.temp);
      var isCelsius = true;

      $(".degreeButton").on("click", function() {
        if (isCelsius == true) {
          temperature = temperature * 9 / 5 + 32;
          $("#showDegrees").html(temperature + "&deg;F");
          isCelsius = false;
        }
        else if (isCelsius == false) {
          temperature = Math.floor((temperature - 32) * 5 / 9);
          $("#showDegrees").html(temperature + "&deg;C");
          isCelsius = true;
        }
      });

      $("#showLocation").html(data.name);
      $("#showDegrees").html(temperature + "&deg;C");
      $("#showHumidty").html(data.main.humidity + "%");

      weatherTypes();

      function weatherTypes() {
        switch (data.weather[0].description) {
          case "clear sky":
            $(".weatherType").html("clear sky");
            $("body").css({"background": "url('http://allswalls.com/images/clear-sky-wallpaper-3.jpg')", "background-size": "cover"});
            break;

          case "few clouds":
            $(".weatherType").html("few clouds");
            $("body").css({"background": "url('https://billysauerlandphotography.files.wordpress.com/2013/03/2013-march.jpg')", "background-size": "cover"});
            break;

          case "scattered clouds":
            $(".weatherType").html("scattered clouds");
            $("body").css({"background": "url('https://wallpapercave.com/wp/iHUonse.jpg')", "background-size": "cover"});
            break;

          case "broken clouds":
            $(".weatherType").html("broken clouds");
            $("body").css({"background": "url('http://danwrayphoto.com/wp-content/uploads/2014/06/WRA4814.jpg')", "background-size": "cover"});
            break;

          case "shower rain":
            $(".weatherType").html("shower rain");
            $("body").css({"background": "url('http://1.bp.blogspot.com/-lpD4c7VuPgY/VIluclNGrkI/AAAAAAAABl4/13IA8yvnjGc/s1600/5.jpg')", "background-size": "cover"});
            break;

          case "rain":
            $(".weatherType").html("rain");
            $("body").css({"background": "url('https://wallpapercave.com/wp/0Rjh2Oo.jpg')", "background-size": "cover"});
            break;

          case "thunderstorm":
            $(".weatherType").html("thunderstorm");
            $("body").css({"background": "url('https://i.ytimg.com/vi/g3FDedAYeXo/maxresdefault.jpg')", "background-size": "cover"});
            break;
          case "snow":

            $(".weatherType").html("snow");
            $("body").css({"background": "url('https://vignette4.wikia.nocookie.net/phobia/images/a/aa/Snow.jpg/revision/latest?cb=20161109045734')", "background-size": "cover"});
            break;

          case "mist":
            $(".weatherType").html("mist");
            $("body").css({"background": "url('http://www.guoguiyan.com/data/out/128/69386731-mist-wallpapers.jpg')", "background-size": "cover"});
            break;

            default:
            $(".weatherType").html("rain");
            $("body").css({"background": "url('https://wallpapercave.com/wp/0Rjh2Oo.jpg')", "background-size": "cover"});
            break;
        }
      }
<<<<<<< HEAD

      
      console.log(data.weather[0].description);

=======
      console.log(data.weather[0].description);
>>>>>>> 9d71d82a6fc333cd8fd95c1fd46e6c00d6c2d822
    }); // json end
    console.log("lat: "+currentLat + " long: " + currentLong);
    
  }); // navigator end
}
