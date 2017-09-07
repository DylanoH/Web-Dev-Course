$(document).ready(function() {

  $(".searchBar").keypress(function(event){
    var keycode = (event.keyCode);
    if (keycode == 13) {
      $(".searchButton").click();
    }
  });

  $(".searchButton").on("click", function() {
    var searchValue = $(".searchBar").val();

    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchValue + "&callback=?";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        //clear outcome
        $(".outcome").html("");
        //select outcome, add data to it in a li
        for (var i = 0; i < data[1].length; i++) {
          $(".outcome").append("<li><a href=" + data[3][i] + " target='_blank'>" + data[1][i] + "<a/><p>" + data[2][i] + "</p></li>");
        }

      }
    });
  });

  $(".randomButton").on("click", function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
})
