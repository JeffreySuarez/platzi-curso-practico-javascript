const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;

  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

calcularPrecioConDescuento();

function onClickButtonPriceDiscount() {
  const inputPrice = document.querySelector("#inputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.querySelector("#inputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultP = document.querySelector("#resultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

// console.log({
//   precioOriginal,
//   precioConDescuento,
//   porcentajePrecioConDescuento,
//   descuento,
// });
