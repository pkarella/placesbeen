//business logic
function Places(city, landmark, population, date) {
  this.city = city;
  this.landmark = landmark;
  this.population = population;
  this.date = date;
}
Places.prototype.upper = function(){
  return this.city.toUpperCase();

}

var dog= function(){
  $("input#city").val("");
  $("input#landmark").val("");
  $("input#population").val("");
  $("input#dates").val("");
}

// user interface logic
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var inputCity = $("input#city").val();
    var inputLandmark = $("input#landmark").val();
    var inputPopulation = $("input#population").val();
    var inputDate = $("input#dates").val();

    var newCity = new Places(inputCity, inputLandmark, inputPopulation, inputDate);

    $("ul#cities").append("<li><span class='each-city'>" + newCity.upper()+ "</span></li>");

    $(".each-city").last().click(function() {
  $("#show-city").show();
  $("#show-city h2").text(newCity.city);
  $(".landmark").text(newCity.landmark);
  $(".population").text(newCity.population);
  $(".date").text(newCity.date);
});
  dog();

  });
});
