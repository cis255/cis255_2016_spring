$("#celsius").keyup(function() {
  $("#fahrenheit").val(this.value * 1.8 + 32);
  $("#kelvin").val((parseFloat(this.value) + 273.15).toFixed(2));
});