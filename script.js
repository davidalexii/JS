const button1 = document.getElementById("smth");
const button2 = document.getElementById("smth2");
const counter = document.getElementById("counter-display");
let cookieNumber = 1;

button1.addEventListener("click", increaseCounter);
button2.addEventListener("click", decreaseCounter);

function increaseCounter() {
  button1.style.padding = "1rem 2rem";
  button2.style.padding = "10px";
  cookieNumber++;
  counter.innerHTML = cookieNumber;
}

function decreaseCounter() {
  button2.style.padding = "1rem 2rem";
  button1.style.padding = "10px";
  if (cookieNumber > 0) {
    cookieNumber--;
  }
  counter.innerHTML = cookieNumber;
  if (cookieNumber == 0) {
    counter.innerText = "No more cookies :(";
  }
}

