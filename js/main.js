$(function(){
  var flavors = ["rocky-road", "pistacio", "cookiedough"];
  flavors.forEach(function(flavor) {
    $("#creamflav").append( "<li>" + flavor + "</li>");
  });
});
