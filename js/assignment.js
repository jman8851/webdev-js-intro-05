"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables
let shiftValue;
let popValue;


// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    answerOneEl.innerText = todos.join(", ");   
}

function updateAnswerTwo() {
    answerTwoEl.innerText = todos[2];

}

function removeLastValue() {
    popValue = todos.pop();
    
    
}

function updateAnswerThree() {
    answerThreeEl.innerText = todos.join(", ");
}

function reverseTodoList() {
    todos.reverse();
    updateAnswerFour();
    
}

function updateAnswerFour() {
    answerFourEl.innerText = todos.join(", ");
}

function removeFirstValue() {
    shiftValue = todos.shift();
    updateAnswerFive();
    
}

function updateAnswerFive() {
    answerFiveEl.innerText = todos.join(", ");
}

function addShiftAndPopValues() {
    todos.push(shiftValue, popValue);
    updateAnswerSix();
    
}

function updateAnswerSix() {
    answerSixEl.innerText = todos.join(", ");
    
}

function render() {
    updateAnswerOne();
    updateAnswerTwo();
    removeLastValue();
    reverseTodoList();
    removeFirstValue();
    updateAnswerFive();
    addShiftAndPopValues();
    updateAnswerSix();

}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});
    