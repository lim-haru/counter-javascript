function setUpEvents() {
  const counterValue = document.querySelector('#counter-value');
  const btnIncrement = document.querySelector('#btn-increment');
  const btnDecrement = document.querySelector('#btn-decrement');
  const btnReset = document.querySelector('#btn-reset');
  
  btnIncrement.addEventListener('click', () => {
    counterValue.innerHTML++;
  });
  
  btnDecrement.addEventListener('click', () => {
    if (counterValue.innerHTML > 0) {
      counterValue.innerHTML--;
    }
  });
  
  btnReset.addEventListener('click', () => {
    counterValue.innerHTML = 0;
  });
}


window.onload = function() {
  setUpEvents();
};