var fahrenheit = parseFloat(prompt("Introduzca una temperatura (Cº): "));
var kelvin = fahrenheit;
fahrenheit = (fahrenheit * 9 / 5) + 32;
kelvin = kelvin + 273.15;
alert("Fahrenheit: " + fahrenheit);
alert("Kelvin: " + kelvin);
