// const id = document.getElementById('noContexMenu');
// id.oncontextmenu= function() {
//   return false;
// }


// const id1 = document.querySelector('div');
// id1.oncontextmenu = function() {
//   return false;
// }

// const noContext = document.getElementById('noContexMenu');

// function myFunc(e){
// e.preventDefault();
// }
// noContext.addEventListener("contextmenu", myFunc)

///////////////////////////////////////////////////////////


const key = document.getElementById("name");

key.addEventListener("input", function() {
  console.log(key.value);
});


// const nameInput = document.getElementById('name');

// function myFunc(e) {
//   console.log(e.key);
// }
// nameInput.addEventListener("keydown", myFunc);