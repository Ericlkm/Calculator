const display = document.getElementById("display");

function displayValue(val) {
  display.value += val;
  console.log(display.value);
}
let value = display.value;
function calc() {
  if (display.value !== "") {
    display.value = eval(display.value);
  } else {
    display.value = "Error";
    setTimeout(() => {
      display.value = "";
    }, 1000);
  }
}
const clearBtn = document.getElementById("clear");

function clear() {
  display.value = "";
}

clearBtn.addEventListener("click", clear);

addEventListener("keyup", (e) => {
  console.log(display.value);
  if (e.key === "Enter" && display.value === "") {
    display.value = "error";
    setTimeout(() => {
      display.value = "";
    }, 1000);
  }
  if (e.key === "Enter") {
    display.value = eval(display.value);
  }
});
