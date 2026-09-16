let price;
let quantity;
let total;
let subtotal;
let discount = 0;
const calcBtn = document.getElementById("calculate");
const priceres = document.getElementById("priceres");
const subtotalres = document.getElementById("subtotal");

calcBtn.addEventListener("click", function () {
  price = Number(document.getElementById("price").value);
  quantity = Number(document.getElementById("quantity").value);
  total = price*quantity
  subtotal = total
  if (total >= 50){
    discount = total *.1
    total = total - discount
  }
  priceres.innerHTML = `Price: $${price} and quantity: ${quantity}`
  subtotalres.innerHTML = `Subtotal: $${subtotal.toFixed(2)}    Discount: $${discount.toFixed(2)}    Final total: $${total.toFixed(2)}`
});
