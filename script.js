// function caclulate() {
//     fetch('items.json')
//         .then(res => res.json())
//         .then(data=> console.log(data));
// }
// caclulate()

const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//Fetch exchange rates and update the DOM
function caclulate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/e2a5ada88d79547250b33c2c/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      const rate = data.conversion_rates[currency_two];
      // console.log(rate)
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}
caclulate();

//Event Listeners
swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;

  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  caclulate();
});
currencyEl_one.addEventListener("change", caclulate);
amountEl_one.addEventListener("input", caclulate);
currencyEl_two.addEventListener("change", caclulate);
amountEl_two.addEventListener("change", caclulate);
