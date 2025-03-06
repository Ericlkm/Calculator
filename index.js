const display = document.getElementById("display");

function displayValue(val) {
  display.value += val;
  console.log(display.value);
}

function calc() {
  try {
    display.value = eval(display.value);
    console.log(typeof display.value);
  } catch (err) {
    display.value = "Error";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}
const clearBtn = document.getElementById("clear");

function clear() {
  display.value = "";
  console.log("clear");
}

clearBtn.addEventListener("click", clear);
