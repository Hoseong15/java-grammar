const boxes = document.querySelectorAll(".alertBox");
const button = document.querySelector(".showAll");

function showAll() {
  // boxes.forEach(function (index) {
  //   index.style.display = "block";
  // });
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "block";
  }
}

function closeBox(str) {
  const box = document.querySelector(`.${str}`);
  box.style.display = "none";
}

button.addEventListener('click', showAll);

////////////////////////////////////////////////////////

// const colors = ['red', 'blue', 'pink', 'yellow']
// const materials = ['plastic', 'paper']

// for(let i = 0; i < colors.length; i++){
//   console.log(colors[i])
// }


// let a = [1,2,3];
// let b = a;
// b[1] = 5;
// console.log(a);
// console.log(b);

/////////////////////////////////////////////////////////

// function func1() {
//   console.log("func1")
// }
// func1();

// const func2 = function() {
//   console.log("func2")
// }
// func2();


// const func3 = () => {
//   console.log("func3")
// }
// func3();


// const func4 = function (name, age, height, address) {
//   console.log(`Hello,${name}`);
// }
// func4(`smith`)



// const user = {
//   name: "John",
//   age: "30",
//   favorite_Object: ['car', 'computer'],
//   size: {
//     height: 180,
//     weight:75
//   },
// };
// console.log(user.name,weight)

// kkk() {
//   console.log(user.name);
// }
// user.kkk();
// console.log(user.name, user.age, user.favorite_Object[0])
