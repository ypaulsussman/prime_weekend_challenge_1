var index = 0;
var max = 18;
var min = 0;
var divArray = [];
var autoNext;

$(document).ready(function() {
  appendDom();
  addEventListener();
  autoMove();
});

function autoMove() {
  autoNext = setInterval(moveNext, 10000);
}

function resetAutoMove() {
  clearInterval(autoNext);
}

function appendDom() {
  for (var i = 0; i < peopleArray.length; i++) {
    if (i === index) {
      addSelected(i);
    } else {
      addUnselected(i);
    }
  }
  $(".container").children().hide();
  makeTickers();
  lightTicker();
  $(".container").append("<br><button id='prevButton'>Prev</button>");
  $(".container").append("<button id='nextButton'>Next</button>");
  $('.select').fadeIn();
}

function addSelected(i) {
  $(".container").append("<h1 class='select'>" + peopleArray[i].name + "<h1>");
  $(".container").append("<h2 class='select'>" + peopleArray[i].shoutout + "<h2>");
  $(".container").append("<h2 class='select'> Chiyak " + (i+1) + "/19<h2>");
}

function addUnselected(i) {
  $(".container").append("<h1>" + peopleArray[i].name + "<h1>");
  $(".container").append("<h2>" + peopleArray[i].shoutout + "<h2>");
  $(".container").append("<h2> Chiyak " + (i+1) + "/19<h2>");
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
  $(".container").on("click", "#nextButton", moveNext);
  $(".container").on("click", "#prevButton", movePrev);
}


function moveNext() {
  if (index<max) {
    index++;
    updateDomAndTimer();
  }
  else {
    index=0;
    updateDomAndTimer();
  }
}

function movePrev() {
 if (index>min) {
   index--;
   updateDomAndTimer();
 }
 else {
   index=18;
   updateDomAndTimer();
 }
}

function updateDomAndTimer() {
  updateSelected();
  appendDom();
  resetAutoMove();
  autoMove();
}


function updateSelected() {
  $('.select').fadeOut();
  $('.select').removeClass('select');
}
