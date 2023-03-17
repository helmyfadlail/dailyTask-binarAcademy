const { jumlah, kurang, bagi, kali, totalHarga } = require("./sum");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("1 hasil tambah inputan user ");
console.log("==================================");
rl.question("input your first number? ", (firstNum) => {
  rl.question("input your second number? ", (secondNum) => {
    const result = jumlah(parseInt(firstNum), parseInt(secondNum));
    console.log(`the result for ${firstNum} + ${secondNum} is ${result}`);
    rl.close();
  });
});

console.log("2 hasil kurang inputan user");
console.log("==================================");
rl.question("input your first number? ", (firstNum) => {
  rl.question("input your second number? ", (secondNum) => {
    const result = kurang(parseInt(firstNum), parseInt(secondNum));
    console.log(`the result for ${firstNum} - ${secondNum} is ${result}`);
    rl.close();
  });
});

console.log("3 hasil kali inputan user");
console.log("==================================");
rl.question("input your first number? ", (firstNum) => {
  rl.question("input your second number? ", (secondNum) => {
    const result = bagi(parseInt(firstNum), parseInt(secondNum));
    console.log(`the result for ${firstNum} / ${secondNum} is ${result}`);
    rl.close();
  });
});

console.log("4 hasil bagi inputan user");
rl.question("input your first number? ", (firstNum) => {
  rl.question("input your second number? ", (secondNum) => {
    const result = kali(parseInt(firstNum), parseInt(secondNum));
    console.log(`the result for ${firstNum} x ${secondNum} is ${result}`);
    rl.close();
  });
});

console.log("5 hasil total harga kali quantitas barang");
console.log("==================================");
rl.question("input the price of item? ", (price) => {
  rl.question("input how many item are taken? ", (quantity) => {
    const result = totalHarga(parseInt(price), parseInt(quantity));
    console.log(`so the total price to be paid is ${result}`);
    rl.close();
  });
});
