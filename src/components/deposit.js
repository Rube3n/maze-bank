let curentSold = 900;
let retirSold = getElementById("retir-sold");
let transacSold = getElementById("transac-sold");
let transacValide = getElementById("transac-valide");
// ****get button deposit****
let btnDeposit = getElementById("btn-deposit");

const depositeSold = () => {
    let dep = parseInt(transacSold.value);
    curentSold += dep;
    spanDepo.textContent = curentSold;
    transacValide.classList.add("block");
    transacValide.textContent = "Transaction effecuter";
    return curentSold;
  };
  btnDeposit.addEventListener("click", depositeSold);
  export default depositeSold;