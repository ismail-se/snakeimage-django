var canvas;
var context;

var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");

var image = document.querySelector("img");
console.log(image.width);
canvas.width = image.width;
canvas.height = image.height;

var color = document.querySelector("#color");
var time = document.querySelector("#duration");
console.log(time.value);

let interval = "";

const createSnake = () => {
  console.log(time + "ajhd");
  if (interval !== "") {
    clearInterval(interval);
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  let tl = 0,
    tr = 0,
    br = 1,
    bl = 1,
    col = 1,
    row = 1,
    width = image.width,
    height = image.height,
    topRight = 0,
    topLeft = 0,
    count = 0;

  context.fillStyle = color.value;
  interval = setInterval(() => {
    if (count === 1) {
      topRight++;
      topLeft++;
      width--;
      height--;
      tr = topRight;
      tl = topLeft;
      br = topRight + 1;
      bl = topLeft + 1;
      console.log("count ", count % 4);
      count = 0;
    }
    if (br < width && tr == topRight && tl == topLeft) {
      console.log("first");
      context.rect(tl, tr, br, bl);
      context.fillRect(tl, tr, br, bl);
      br++;
    } else if (bl < height && br >= width - 1) {
      tl = width - 1;
      tr = 0;
      console.log("second");
      context.rect(tl, tr, br, bl);
      context.fillRect(tl, tr, br, bl);
      bl++;
    } else if (bl > height - 1 && tl > topLeft) {
      tr = height - 1;
      console.log("third");
      context.rect(tl, tr, br, bl);
      context.fillRect(tl, tr, br, bl);
      tl--;
    } else if (tr > topRight) {
      br = topRight + 1;
      bl = topLeft + 1;
      tl = topLeft;
      console.log("last");
      context.rect(tl, tr, br, bl);
      context.fillRect(tl, tr, br, bl);
      tr--;
      if (tr === topRight + 1) {
        count = 1;
      }
    }
  }, time.value);
};
const stopSnake = () => {
  if (interval !== "") {
    clearInterval(interval);
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
};
