//event listener for calendar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });

//event listener for MOUSE CLICK
document
.querySelector(".navigation button")
.addEventListener("click", function () {
weather.navigation();

//event listener for ENTER key
document
.querySelector(".navigation-bar")
.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        weather.navigation();
     
    }
});


});