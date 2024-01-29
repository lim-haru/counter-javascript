function createCounterElements() {
  const container = document.querySelector('#container');

  //Add h1 to container
  const title = document.createElement('h1');
  title.textContent = 'JavaScript Counter';
  container.append(title);

  //Add div couter to container
  const divCounter = document.createElement('div');
  divCounter.setAttribute('class', 'counter');
  container.append(divCounter);
  
  //Add span counter value to counter
  const spanCounterValue = document.createElement('span');
  spanCounterValue.setAttribute('id', 'counter-value');
  spanCounterValue.textContent = 0;
  divCounter.append(spanCounterValue);

  //Add div change couter to counter
  const divChangeCounter = document.createElement('div');
  divChangeCounter.setAttribute('class', 'change-counter');
  divCounter.append(divChangeCounter);

  //Add button reset to counter
  const btnReset = document.createElement('button');
  btnReset.setAttribute('id', 'btn-reset');
  btnReset.textContent = 'Reset';
  divCounter.append(btnReset);

  //Add button decrement to counter value
  const btnDecrement = document.createElement('button');
  btnDecrement.setAttribute('id', 'btn-decrement');
  btnDecrement.textContent = '-';
  divChangeCounter.append(btnDecrement);

  //Add button increment to counter value
  const btnIncrement = document.createElement('button');
  btnIncrement.setAttribute('id', 'btn-increment');
  btnIncrement.textContent = '+';
  divChangeCounter.append(btnIncrement);
}


function setUpEvents() {
  createCounterElements();

  const spanCounterValue = document.querySelector('#counter-value');
  const btnIncrement = document.querySelector('#btn-increment');
  const btnDecrement = document.querySelector('#btn-decrement');
  const btnReset = document.querySelector('#btn-reset');
  
  btnIncrement.addEventListener('click', () => {
    spanCounterValue.textContent++;
  });
  
  btnDecrement.addEventListener('click', () => {
    spanCounterValue.textContent--;
  });
  
  btnReset.addEventListener('click', () => {
    spanCounterValue.textContent = 0;
  });
}


window.onload = function() {
  setUpEvents();
};