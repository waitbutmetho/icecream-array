$(function(){
  var flavors = ["rocky-road", "pistacio", "cookiedough"];
  // try using index ++ in the for loop, will do the same as index += 1
  for (var index = 0; index < flavors.length; index += 1){
    //I'm guessing you meant to take out this debugger line after you found the problem in your loop
    debugger;
    //The line below needs to have #creamflav because you are selecting an id, not a class. I have commented out your line and placed one that works.
    // $(".creamflav").append( "<li>" + flavors[index] + "</li>");
    $("#creamflav").append( "<li>" + flavors[index] + "</li>");
  };
});
