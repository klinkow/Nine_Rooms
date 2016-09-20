var key = false;
var unlocked = false;
var board = false;

function checkForKey() {
  if (key === true);
  $("#useKey").show();
  // return true;
};

$(document).ready(function()  {

  $("#eto1").click(function(event) {
    $("#room1").show();
    board = true;
    // event.preventDefault();
  });

  $("#eto2").click(function(event) {
    $("#room2").show();
    key = true;
    // event.preventDefault();
  });

  $("#eto4").click(function(event) {
    $("#room4").show();
    // event.preventDefault();
  });


  $("#1to3").click(function(event) {
    $("#room3").show();
    checkForKey();

  });

  $("#useKey").click(function(event) {
    $("keyUsed").show();
    // event.preventDefault();
  });


  $("#1toe").click(function(event) {
  });


});
