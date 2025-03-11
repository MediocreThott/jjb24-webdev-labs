// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

document.addEventListener('DOMContentLoaded', () => {
  // Part 1 - Handle 'click' event
  const userInput1 = document.getElementById('userInput1');
  const copyButton = document.getElementById('copy');
  const outputDiv = document.querySelector('.output');

  copyButton.addEventListener('click', () => {
    outputDiv.textContent = userInput1.value;
  });

  // Exercise #2:
  // when the user enters input text, copy the user input to the output area

  // Part 2 - Handle 'input' event
  const userInput2 = document.getElementById('userInput2');
  const inputEventExample = document.getElementById('inputEventExample');

  userInput2.addEventListener('input', () => {
    inputEventExample.querySelector('p').textContent = userInput2.value;
  });
});
