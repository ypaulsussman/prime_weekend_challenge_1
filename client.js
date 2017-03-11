var i = 1;
var max = 18;
var min = 1;

$(document).ready(function() {
  appendDom();
  addEventListener();
});


function appendDom() {
  $(".container").children().hide();
  $(".container").append("<h1>" + peopleArray[i].name + "<h1>");
  $(".container").append("<h2>" + peopleArray[i].shoutout + "<h2>");
  $(".container").append("<h2> Chiyak " + i + "/18<h2>");
  $(".container").append("<button id='prevButton'>Prev</button>");
  $(".container").append("<button id='nextButton'>Next</button>");
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
