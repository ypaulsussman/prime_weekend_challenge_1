var i = 1;
var max = 18;
var min = 1;
var divArray = [];

$(document).ready(function() {
  appendDom();
  addEventListener();
});


function appendDom() {
  $(".container").children().hide();
  $(".container").append("<h1>" + peopleArray[i].name + "<h1>");
  $(".container").append("<h2>" + peopleArray[i].shoutout + "<h2>");
  $(".container").append("<h2> Chiyak " + i + "/18<h2>");
  makeTickers();
  lightTicker();
  $(".container").append("<br><button id='prevButton'>Prev</button>");
  $(".container").append("<button id='nextButton'>Next</button>");
}

function makeTickers() {
  for(var k = 1; k < max+1; k++){
    $(".container").append("<div class='square noLit'></div>");
    var $el = $(".container").children().last();
    $el.data("id", k);
    divArray.push($el);
  }
}

function lightTicker() {
  $(".square").removeClass("litUp");
  for(var j = 0; j < divArray.length; j++){
    if(divArray[j].data("id") == i){
      divArray[j].removeClass("noLit");
      divArray[j].addClass("litUp");
    }
  }
}


function addEventListener() {
  $(".container").on("click", "#nextButton", function moveNext() {
    if (i<max) {
      i++;
      appendDom();
    } else {
      i=1;
      appendDom();
    }
  });
  $(".container").on("click", "#prevButton", function movePrev() {
    if (i>min) {
      i--;
      appendDom();
    } else {
      i=18;
      appendDom();
    }
  });

}
