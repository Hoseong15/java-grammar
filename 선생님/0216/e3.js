const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const button = document.querySelector("button");

function changeBackground() {
  //배열 colorsCopy에서 colors를 값복사한다
  //colorCopy에서 랜덤넘버를 얻는다  = math.floor(math.random() * colorCopy.length);
  //colorCopy에서 랜덤넘버를 빼서 color1에 넣는다.
  //colorCopy에서 랜덤넘버를 얻는다  = math.floor(math.random() * colorCopy.length);
  //colorCopy에서 랜덤넘버를 빼서 color2에 넣는다.
  const colorsCopy = colors.slice();  

  const randomIndex = Math.floor(Math.random() * colorsCopy.length);
  const randomColor = colorsCopy[randomIndex];
  colorsCopy.splice(randomIndex, 1);

  const randomIndex2 = Math.floor(Math.random() * colorsCopy.length);
  const randomColor2 = colorsCopy[randomIndex2];
  colorsCopy.splice(randomIndex2, 1);
  
  const color1 = randomColor
  const color2 = randomColor2

  document.body.style.background =
    "linear-gradient(to right, " + color1 + ", " + color2 + ")";
}

button.addEventListener("click", changeBackground);
