$(document).ready(function(){
  $("button").click(function(){
    $("button").removeClass("selected");
    $(this).addClass("selected");
    var url = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var options = {
      tags : animal,
      format : "json"
    };
    
    function displayPhotos(data){
    var statusHTML = "<ul>";
      $.each(data.items, function(i, photo){
      statusHTML += "<li class = 'grid-25 tablet-grid-50'>";
        statusHTML += "<a href ='" + photo.link + "' class='image'>";
        statusHTML += "<img src ='" +photo.media.m + "'></a></li>";
      });
      statusHTML += "</ul>";
      $("#photos").html(statusHTML);
    }
    $.getJSON(url, options, displayPhotos);
  });
});
