//business logic
function Places(city, landmark, population) {
  this.city = city;
  this.landmark = landmark;
  this.population = population;
}
Places.prototype.upper = function(){
  return this.city.toUpperCase();
}

// user interface logic
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var inputCity = $("input#city").val();
    var inputLandmark = $("input#landmark").val();
    var inputPopulation = $("input#population").val();

    var newCity = new Places(inputCity, inputLandmark, inputPopulation);

    $("ul#cities").append("<li><span class='each-city'>" + newCity.upper()+ "</span></li>");

    $(".each-city").last().click(function() {
  $("#show-city").show();
  $("#show-city h2").text(newCity.city);
  $(".landmark").text(newCity.landmark);
  $(".population").text(newCity.population);
});
    $("input#city").val("");
    $("input#landmark").val("");
    $("input#population").val("");
  });
});
