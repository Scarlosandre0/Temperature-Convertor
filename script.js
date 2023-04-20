const celsiusEl = document.querySelector(".Celsius");
const fahrenheit = document.querySelector(".Fahrenheit")

celsiusEl.addEventListener("input", () => {
  const result = (parseFloat(celsiusEl.value) * 9/5) + 32;
  fahrenheit.value = parseFloat(result.toFixed(2));
})

fahrenheit.addEventListener("input", () => {
  const result = ( parseFloat(fahrenheit.value) - 32) * 5/9;
  celsiusEl.value = parseFloat(result.toFixed(2));
})