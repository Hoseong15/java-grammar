// let id = document.getElementById('first');
// id.innerHTML = "<p style='color:blue;'>파이썬 강의</p>";
// document.getElementById('first').innerHTML="<strong style='color:blue;'>자바스크립트 강의</strong>";





let alertBox = document.getElementsByClassName("alertBox")[0];
let alertBox1 = document.getElementsByClassName("alertBox")[1];
let alertBox2 = document.getElementsByClassName("alertBox")[2];
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let button = document.querySelector('.btn4')

function toggleBox() {
  if (alertBox.style.display === "none") {
    alertBox.style.display = "block";
    alertBox1.style.display = "block";
    alertBox2.style.display = "block";
    button.innerHTML='Click to hide alert box';
  } else {
    alertBox.style.display = "none";
    alertBox1.style.display = "none";
    alertBox2.style.display = "none";
    button.innerHTML="<strong style='color:red;'>click to show alert box</strong>"
  }
}

function closebtn1() {alertBox.style.display = 'none'}
function closebtn2() {alertBox1.style.display = 'none'}
function closebtn3() {alertBox2.style.display = 'none'}
