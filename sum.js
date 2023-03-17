function jumlah(x, y) {
  return x + y;
}

function kurang(x, y) {
  return x - y;
}

function bagi(x, y) {
  return x / y;
}

function kali(x, y) {
  return x * y;
}

function totalHarga(price, quantity) {
  return price * quantity;
}
module.exports = { jumlah, kurang, bagi, kali, totalHarga };
