var index = 0;
var max = 18;
var min = 0;
var divArray = [];

$(document).ready(function() {
  appendDom();
  addEventListener();
});


function appendDom() {
  $(".container").children().hide();
  $(".container").append("<h1>" + peopleArray[index].name + "<h1>");
  $(".container").append("<h2>" + peopleArray[index].shoutout + "<h2>");
  $(".container").append("<h2> Chiyak " + (index+1) + "/19<h2>");
  makeTickers();
  lightTicker();
  $(".container").append("<br><button id='prevButton'>Prev</button>");
  $(".container").append("<button id='nextButton'>Next</button>");
}

function makeTickers() {
  for(var k = 0; k < max+1; k++){
    $(".container").append("<div class='square noLit'></div>");
    var $el = $(".container").children().last();
    $el.data("id", k);
    divArray.push($el);
  }
}

function lightTicker() {
  $(".square").removeClass("litUp");
  for(var j = 0; j < divArray.length; j++){
    if(divArray[j].data("id") == index){
      divArray[j].removeClass("noLit");
      divArray[j].addClass("litUp");
    }
  }
}


function addEventListener() {
  $(".container").on("click", "#nextButton", function moveNext() {
    if (index<max) { index++; appendDom(); }
    else { index=0; appendDom(); }
  });
  $(".container").on("click", "#prevButton", function movePrev() {
    if (index>min) { index--; appendDom(); }
    else { index=18; appendDom(); }
  });

}
