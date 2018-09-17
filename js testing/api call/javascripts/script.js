$(document).ready(function() {

var $events = $('.list');

  $('.button').on('click', function(){
    $.ajax({
      url: 'https://rest.bandsintown.com/artists/Moeders%20Mooiste/events?app_id=3588eefe9e412527c83889757754197c&date=2015-05-05%2C2019-05-05',
      type: 'GET',
      success: function(events){
        console.log(events);
        $.each(events, function(i, event) {
          $events.append('<li>datetime: '+ event.datetime +' venue: '+ event.venue.city +', '+ event.venue.country +' </li>');
        });
      }
    });
  });
});
