//NAVBAR
function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("navbarSupportedContent").classList.toggle("change");
  }
//COUNTER
var counters = document.getElementsByClassName("counter");

for (var i = 0; i < counters.length; i++) {
  handleCounter(counters[i]);
}

function handleCounter(counter) {
  var c = 0;
  var interval = setInterval(() => {
    if (c == counter.dataset.count) {
      clearInterval(interval);
    }
    counter.innerText = c;
    c += 1;
  }, 0.5);
}