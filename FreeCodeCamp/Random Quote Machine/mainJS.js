$(document).ready(function(){
  function randomQuote(){
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function(response){

        $(".quoteText").html("<b>" + response.quoteText + "</b>");

        if (response.quoteAuthor === "") {
          response.quoteAuthor = "Unknown";
        }

        $(".quoteAuthor").html("&dash;" + " " + "<i>" + response.quoteAuthor + "</i>");

        $("#twitterButton").attr("href", "https://twitter.com/home/?status=" + '"' + response.quoteText+'"' + " - " + response.quoteAuthor);


      },
    });
  }

  randomQuote();

  $("button").on("click", function(){
    randomQuote();
  });




});

//////////////////// different attempt ///////////////////////////////////


// $(document).ready(function(){
//
//   $("#quoteButton").on("click", function(){
//
//     var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback="
//
//     $.ajaxSetup ({cache:false});
//
//     $.getJSON(url, function(data){
//       var post = data.shift();
//
//       $(".quotesText").html(post.content);
//       $(".quotesAuthor").html(post.title);
//
//     }); //getJSON end
//   }); // button click end
// }); // doc ready end

//////////////////// different attempt ///////////////////////////////////


// $(document).ready(function(){
//   $("#quoteButton").on("click", function(){
//
//     $.ajax({
//       url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
//       success: function(data) {
//         var post = data.shift();
//
//         $(".quotesText").html(post.content);
//         $(".quotesAuthor").html(post.title);
//       },
//       cache: false
//     });
//   }); // button click end
// }); // doc ready end
