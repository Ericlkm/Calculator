const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");

function displayValue(val) {
  display.value += val;
}

function calc() {
  if (display.value !== "") {
    // if input is not empty solve equation;
    display.value = eval(display.value);
  } else {
    // else if input is empty set the value to "Error"
    display.value = "error";
    setTimeout(() => {
      // after one second clear value
      display.value = "";
    }, 1000);
  }
}

function clear() {
  // clears Value
  display.value = "";
}

function handleKeyPress(e) {
  if (e.key === "Enter") {
    calc();
  }
  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "+",
    "-",
    "*",
    "/",
    "Backspace",
    "Enter",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
  ];

  // If the key pressed is not in the allowed keys, prevent the default behavior
  if (!allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
}

clearBtn.addEventListener("click", clear);
// Add the event listener for keydown to allow typing on the keyboard
display.addEventListener("keydown", handleKeyPress);
