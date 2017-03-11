var index = 0;
var max = 18;
var min = 0;
var divArray = [];

$(document).ready(function() {
  appendDom();
  addEventListener();
});


function appendDom() {
  for (var i = 0; i < peopleArray.length; i++) {
    if (i === index) {
      $(".container").append("<h1 class='select-name'>" + peopleArray[i].name + "<h1>");
      $(".container").append("<h2 class='select-shout'>" + peopleArray[i].shoutout + "<h2>");
      $(".container").append("<h2 class='select-tally'> Chiyak " + (i+1) + "/19<h2>");
    } else {
      $(".container").append("<h1>" + peopleArray[i].name + "<h1>");
      $(".container").append("<h2>" + peopleArray[i].shoutout + "<h2>");
      $(".container").append("<h2> Chiyak " + (i+1) + "/19<h2>");
    }
  }
  $(".container").children().hide();
  makeTickers();
  lightTicker();
  $(".container").append("<br><button id='prevButton'>Prev</button>");
  $(".container").append("<button id='nextButton'>Next</button>");
  $('.select-name').fadeIn();
  $('.select-shout').fadeIn();
  $('.select-tally').fadeIn();
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
    if (index<max) {
      index++;
      updateSelected();
      appendDom(); }
    else {
      index=0;
      updateSelected();
      appendDom(); }
  });
  $(".container").on("click", "#prevButton", function movePrev() {
    if (index>min) {
      index--;
      updateSelected();
      appendDom();
    }
    else {
      index=18;
      updateSelected();
      appendDom();
    }
  });

}

function updateSelected() {
  $('.select-name').fadeOut();
  $('.select-shout').fadeOut();
  $('.select-tally').fadeOut();
  $('.select-name').removeClass('select-name');
  $('.select-shout').removeClass('select-shout');
  $('.select-tally').removeClass('select-tally');
}
