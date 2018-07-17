//BACKGROUND 'DESK'
document.body.style.backgroundImage = "url('wood.jpeg')";
//VARIABLES
let gridSize = 40;
let reset = false;
let rainbows = false;
let rainColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
//RED PART OF ETCH A SKETCH
const container = document.querySelector('container');
container.style.display = 'block';
container.style.width = '80%';
container.style.backgroundColor = '#FF4500';
container.style.background = 'linear-gradient(#FF4500, #FF0000, #FF6347)';
container.style.borderRadius = '30px';
container.style.border = 'solid';
container.style.borderStyle = 'outset';
container.style.borderColor = 'black';
container.style.boxShadow = '-10px 8px 10px black';
container.style.marginLeft = '10%';
container.style.marginBottom = '10%';
container.style.marginTop = '2%';
//TITLE AND SIZE ADJUSTER
const topEtch = document.createElement('section');
topEtch.style.display = 'inline-block';
topEtch.style.position = 'relative';
topEtch.style.width = '100%';
topEtch.style.color = 'white';
container.appendChild(topEtch);
//DISPLAY
const grid = document.createElement('section');
grid.style.cssText = 'display: grid';
container.appendChild(grid);
//BUTTONS
const buttons = document.createElement('section');
buttons.style.marginBottom = '2%';
buttons.style.marginTop = '2%';
container.appendChild(buttons);
//CREATE OUR GRID
function createGrid(){
  for (i=0; i<40; i++){
    for (j=0; j<gridSize; j++){
      let box = document.createElement('div');
      box.classList.add('box');
      box.style.cssText = 'width: 1/`${gridSize}`; height: 16px ;';
      box.style.backgroundColor = '#DCDCDC';
      hover(box);
      grid.appendChild(box);
    }
  };
    grid.style.setProperty('grid-template-columns', `repeat(${gridSize}, auto)`);
    grid.style.width = '90%';
    grid.style.height = '60%';
    grid.style.margin = '1% 5% 0 5%';
};
//ADDS HOVER TO EACH BOX
function hover(box){
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };
  box.addEventListener("mouseover", function() {
    if (rainbows == true) {
      box.style.backgroundColor = `${rainColors[getRandomInt(6)]}`;
      } else if (rainbows == false) {
        box.style.backgroundColor = 'black';
        }
    });
};
//ETCH A SKETCH CLEARS AND STARTS OVER
function resetGrid(){
    let clear = document.querySelectorAll('.box').forEach(function(element){
      element.style.backgroundColor = 'white';
    });
    deleteGrid();
    createGrid();
};
function deleteGrid(){
  document.querySelectorAll(".box").forEach(function(element) {
        element.remove();
      });
};
// CREATES SKETCH BUTTON
function sketchButton() {
  let sketch = document.createElement('button');
  sketch.innerHTML = 'Sketch';
  sketch.id = 'sketch';
  sketch.classList.add('sketchActive');
  sketch.style.display = 'inline-block';
  sketch.style.border = 'solid';
  sketch.style.cssText = 'padding-bottom: 5%; padding-top: 5%; height: 0; width: 10%; border: solid; overflow: hidden;';
  sketch.style.marginLeft = '5%';
  sketch.style.marginRight = '30%';
  sketch.style.borderRadius = '50%';
  sketch.style.backgroundColor = 'white';
  sketch.style.outline = '0';
  sketch.style.boxShadow = '-0px 5px 10px black';
  sketch.style.backgroundColor = 'black';
  sketch.style.lineHeight = '1em';
//ON CLICK SKETCHES
  function changeColorBack() {
    rainbows = false;
    sketch.classList.remove('sketch');
    sketch.classList.add('sketchActive');
    let switchRainbow = document.getElementById('rainbow');
    switchRainbow.classList.remove('rainbowActive');
    switchRainbow.classList.add('rainbow');
    }
  sketch.addEventListener('click', changeColorBack);
  buttons.appendChild(sketch);
  return buttons;
}
sketchButton();
// CREATES RESTART BUTTON
function restartButton() {
  const section = document.querySelector('section');
  let restart = document.createElement('button');
  restart.innerHTML = 'Restart';
  restart.id = 'restart';
  restart.style.display = 'inline-block';
  restart.style.border = 'solid';
  restart.style.cssText = 'padding-bottom: 5%; padding-top: 5%; height: 0; width: 10%; border: solid;';
  restart.style.borderRadius = '50%';
  restart.style.marginRight = '30%';
  restart.style.backgroundColor = 'white';
  restart.style.outline = '0';
  restart.style.boxShadow = '0px 5px 10px black';
  restart.style.background = '#DCDCDC';
  function shake(){
    container.classList.add('gridActive');
  }
// BUTTON PRESSED ANIMATION
 function transform(){
    restart.style.transitionDuration = '0.5s';
    restart.style.transform = 'translateY(4px)';
    restart.style.boxShadow = '0px 0px 0px';
  }
// BUTTON RELEASED ANIMATION
 function transformBack(){
   restart.style.transitionDuration = '0.5s';
   restart.style.transform = 'translateY(-4px)';
   restart.style.boxShadow = '0px 5px 10px black';
   container.classList.remove('gridActive');
 }
    restart.addEventListener('click', shake);
    restart.addEventListener('click', resetGrid);
    restart.addEventListener('click', transform);
    restart.addEventListener('mouseover', transformBack);
    buttons.appendChild(restart);
    return buttons;
}
restartButton();
//Rainbow Button
function rainbowButton() {
  let rainbow = document.createElement('button');
  rainbow.innerHTML = 'Rainbow';
  rainbow.id = 'rainbow';
  rainbow.classList.add('rainbow');
  rainbow.style.display = 'inline-block';
  rainbow.style.border = 'solid';
  rainbow.style.cssText = 'padding-bottom: 5%; padding-top: 5%; height: 0; width: 10%; border: solid; overflow: hidden;';
  rainbow.style.left = '10%';
  rainbow.style.borderRadius = '50%';
  rainbow.style.backgroundColor = 'white';
  rainbow.style.outline = '0';
  rainbow.style.boxShadow = '0px 5px 10px black';
  rainbow.style.backgroundColor = 'black';
  rainbow.style.lineHeight = '1em';
//ON CLICK RAINBOW
function changeColor() {
    rainbows = true;
    rainbow.classList.remove('rainbow');
    rainbow.classList.add('rainbowActive');
    let switchSketch = document.getElementById('sketch');
    switchSketch.classList.remove('sketchActive');
    switchSketch.classList.add('sketch');
    }
  rainbow.addEventListener('click', changeColor);
  buttons.appendChild(rainbow);
  return buttons;
};
rainbowButton();
let createdBy = document.createElement('p');
createdBy.textContent = 'Created By: Kenneth Ofosu';
createdBy.style.display = 'inline-block';
createdBy.style.position = 'relative';
createdBy.style.margin = '1% 0 0 2%';
createdBy.style.fontSize = '0.8em';
topEtch.appendChild(createdBy);
//TITLE OF ETCH A SKETCH
let title = document.createElement('p');
title.textContent = 'Kenneth\'s Etch A Sketch';
title.style.width = '80%';
title.style.cssText = 'font-family: Bangers, cursive;';
title.style.textShadow = '2px 2px black';
title.style.textAlign = 'center';
title.style.fontSize = '3em';
title.style.marginBottom = '0';
title.style.marginTop = '1%';
topEtch.appendChild(title);
let sizeName = document.createElement('p');
sizeName.textContent = 'Size of Graph:';
sizeName.style.display = 'inline-block';
sizeName.style.position = 'relative';
sizeName.style.marginLeft = '40%';
sizeName.style.marginRight = '0';
topEtch.appendChild(sizeName);
//SIZE OF GRAPH
let size = document.createElement('Input');
size.id = 'newSize';
size.setAttribute('type', 'number');
size.setAttribute('value', gridSize);
size.style.width = '4%';
size.style.marginTop = '0';
size.style.marginLeft = '1%';
size.style.borderRadius = '10%';
size.style.paddingLeft = '3px';
topEtch.appendChild(size);
//SUBMIT BUTTON
let submit = document.createElement('Input');
submit.setAttribute('type', 'submit');
submit.style.marginTop = '0';
submit.style.borderRadius = '10%';
submit.style.backgroundColor = '#F0F8FF';
topEtch.appendChild(submit);
submit.addEventListener("click", function() {
  deleteGrid();
  gridSize = document.getElementById('newSize').value;
  createGrid();
  });
createGrid();
