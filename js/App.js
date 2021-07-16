$(document).on("click", ".one", function () {
  $(this).toggleClass("red-on");
  if ($(".two").hasClass("yellow-on")) {
    $(".two").toggleClass("yellow-on");
  }
  if ($(".three").hasClass("green-on")) {
    $(".three").toggleClass("green-on");
  }
});
$(document).on("click", ".two", function () {
  $(this).toggleClass("yellow-on");
  if ($(".one").hasClass("red-on")) {
    $(".one").toggleClass("red-on");
  }
  if ($(".three").hasClass("green-on")) {
    $(".three").toggleClass("green-on");
  }
});
$(document).on("click", ".three", function () {
  $(this).toggleClass("green-on");
  if ($(".one").hasClass("red-on")) {
    $(".one").toggleClass("red-on");
  }
  if ($(".two").hasClass("yellow-on")) {
    $(".two").toggleClass("yellow-on");
  }
});