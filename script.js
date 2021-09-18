const clear = document.getElementById("clear");
const ce = document.getElementById("cancel-entry");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const num = document.querySelectorAll(".number-button");
const equal = document.getElementById("equal");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const view = document.getElementById("viewfinder");

clickSymbolButton(clear);
clickSymbolButton(ce);
clickSymbolButton(divide);
clickSymbolButton(multiply);
clickNumberButton(num);
clickSymbolButton(equal);
clickSymbolButton(plus);
clickSymbolButton(minus);

function clickNumberButton(button) {
  button.forEach((value) => {
    value.addEventListener("click", () => {
      view.innerHTML += value.textContent;
    });
  });
}

function clickSymbolButton(button) {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      view.innerHTML = "";
    }

    if (button.textContent === "CE") {
      const viewArray = view.textContent.split("");
      viewArray.pop();
      view.innerHTML = viewArray.join("");
    }

    if (button.textContent === "÷") {
      view.innerHTML += "/";
    }

    if (button.textContent === "x") {
      view.innerHTML += "*";
    }

    if (button.textContent === "-" || button.textContent === "+") {
      view.innerHTML += button.textContent;
    }

    if (button.textContent === "=") {
      view.innerHTML = eval(view.innerHTML);
    }
  });
}
