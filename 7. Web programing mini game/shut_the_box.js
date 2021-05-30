let box_score = 45; // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
let dice_roll = []; // each roll of dice will add elements to this array

const btn_roll = document.getElementsByTagName('input')[0];
const btn_submit = document.getElementsByTagName('input')[10];
const btn_giveup = document.getElementsByTagName('input')[11];
const span = document.getElementsByTagName('span')[0];

window.onload = function() {
  // submit should be disabled before dice is rolled
  btn_submit.disabled = true;
  // use a for loop to assign event listeners to the table cells
  for (let i = 1; i < 10; ++i) {
    const checkbox = document.getElementsByTagName('input')[i];
    const num = document.getElementsByTagName('td')[i - 1];
    num.addEventListener('click', function() {
      checkbox.checked = !checkbox.checked;
    });
  }
};

function roll_dice() {
  // to count the remaining value of boxes
  // we figure out the sum of our previous dice rolls 
  let i = 0;
  for (let el of dice_roll) {
    i += el;
  }
  // if the box score - sum is greater than six then we can roll two dices
  if ((box_score - i) > 6) {
    let d1 = 1 + Math.floor(6 * Math.random());
    let d2 = 1 + Math.floor(6 * Math.random());
    span.innerHTML = ` ${d1} + ${d2} = ${d1 + d2}`;
    dice_roll.push(d1 + d2)
  }
  // other wise we only roll one die
  else {
    let d1 = 1 + Math.floor(6 * Math.random());
    span.innerHTML = ` ${d1}`;
    dice_roll.push(d1)
  }
  // then we change the button status
  btn_roll.disabled = !btn_roll.disabled;
  btn_submit.disabled = !btn_submit.disabled;
}


function sum_checked_values() {
  // we first collect the sum of index of the checkboxes that are activated and checked
  let sum = 0;
  for (let i = 1; i < 10; ++i) {
    const checkbox = document.getElementsByTagName('input')[i];
    if ((checkbox.disabled === false) && (checkbox.checked === true)) {
      sum = sum + i
    }
  }
  // check the selection
  // we compare it with our last dice roll
  if (sum === dice_roll[dice_roll.length - 1]) {
    // if it matches, we then disable the checkboxes and uncheck the boxes
    for (let i = 1; i < 10; ++i) {
      const checkbox = document.getElementsByTagName('input')[i];
      const num = document.getElementsByTagName('td')[i - 1];
      if (checkbox.checked === true) {
        checkbox.disabled = true;
        checkbox.checked = false;
      }
    }
    // we also change the button status and reset the span element
    btn_roll.disabled = !btn_roll.disabled;
    btn_submit.disabled = !btn_submit.disabled;
    span.innerHTML = "";
  }
  // if not match, we will print a warning message
  else {
    alert("The total of the boxes you selected does not match the dice roll. \nPlease make another selection and try again.");
  }
}


function finish() {
  // if the player rolled dice and give up, pop out the last dice roll
  if (btn_roll.disabled) {
    dice_roll.pop();
  }
  // otherwise just out the sum of all dice rolls 
  //except the last one since no valid move was made
  let i = 0;
  for (let el of dice_roll) {
    i += el;
  }
  // compute the score
  let score = box_score - i;
  if (score === 0) {
    alert(`You get ${score} points`);
    alert(`Congratulations! You successfully shut the box!`);
  } else {
    alert(`You get ${score} points`)
  }
  // end game, disable all buttons
  btn_roll.disabled = true;
  btn_submit.disabled = true;
  btn_giveup.disabled = true;
}
