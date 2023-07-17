function quantityCalculate(inputId, isTrue) {
  const quantity = document.getElementById(inputId);
  const totalQuantity = parseInt(quantity.innerText);
  if (isTrue == true) {
    if (totalQuantity > 0) {
      quantity.innerText = totalQuantity - 1;
    }
    return quantity.innerText;
  } else {
    quantity.innerText = totalQuantity + 1;
    return quantity.innerText;
  }
}

function priceUpdate(priceId, Quantity) {
  const priceDisplay = document.getElementById(priceId);
  if (priceId == "case-price") {
    const totalPhonePrice = 50 * parseInt(Quantity);
    priceDisplay.innerText = totalPhonePrice;
  } else {
    const totalPhonePrice = 1200 * parseInt(Quantity);
    priceDisplay.innerText = totalPhonePrice;
  }
  totalPriceUpdate();
}
function totalPriceUpdate() {
  const phoneTotal = parseFloat(
    document.getElementById("phone-price").innerText
  );
  const caseTotal = parseFloat(document.getElementById("case-price").innerText);
  const subTotalDisplay = document.getElementById("sub-total");
  const taxDisplay = document.getElementById("tax");
  const totalDisplay = document.getElementById("total");
  const subTotal = phoneTotal + caseTotal;
  subTotalDisplay.innerText = subTotal;
  const totalTax = (subTotal * 5) / 100;
  taxDisplay.innerText = totalTax;
  const inTotal = subTotal + totalTax;
  totalDisplay.innerText = inTotal;
}

function phoneQuantityPlus() {
  const phoneQuantity = quantityCalculate("phone-quantity");
  priceUpdate("phone-price", phoneQuantity);
}
function caseQuantityPlus() {
  const caseQuantity = quantityCalculate("case-quantity");
  priceUpdate("case-price", caseQuantity);
}
function phoneQuantityLess() {
  const phoneQuantity = quantityCalculate("phone-quantity", true);
  priceUpdate("phone-price", phoneQuantity);
}
function caseQuantityLess() {
  const caseQuantity = quantityCalculate("case-quantity", true);
  priceUpdate("case-price", caseQuantity);
}
