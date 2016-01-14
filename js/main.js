$(function(){
  var flavors = ["rocky-road", "pistacio", "cookiedough"];
  for (var index = 0; index < flavors.length; index += 1){
    debugger;
    $(".creamflav").append( "<li>" + flavors[index] + "</li>");
  };
});
