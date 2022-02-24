const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

const updateNumber = () =>{
  number.innerText = count;
}

const handlePlus = () => {
  count++;
  updateNumber();
}

const handleMinus = () => {
  count--;
  updateNumber();
}

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);