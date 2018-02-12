//-------------------------
// IMPORTS
//-------------------------
import { OriginPoint } from './Interface/points';
import Canvas from './Engine/canvas';
import Draw from './Engine/draw';
import Background from './Shapes/background';
import Rectangle from './Shapes/rectangle';
import Square from './Shapes/square';

//-------------------------
// SETUP
//-------------------------
const canvas = Canvas.getInstance();
const draw = Draw.getInstance();
const background = new Background();
background.fillColor = '#333';

const rect = new Rectangle();
rect.dimensions = {
  width: 300,
  height: 200
}
rect.originPoint = OriginPoint.CENTER;
rect.fillColor = '#fff000';

const square = new Square();
square.fillColor = '#00bfff';
square.dimensions.side = 333;

//-------------------------
// RENDERING
//-------------------------
canvas.render(() => {
  background.draw();
  square.draw();
  rect.draw();
});


//-------------------------
// KEY HANDLING
//-------------------------
canvas.onKeyPress((event: KeyboardEvent) => {
  rect.fillColor = [75, 255, 50];
});

canvas.onKeyUp((event: KeyboardEvent) => {
  rect.fillColor = '#fff000'
});

canvas.onKeyDown((event: KeyboardEvent) => {
  const keyUp = event.keyCode === 38 || event.keyCode === 87;
  const keyLeft = event.keyCode === 37 || event.keyCode === 65;
  const keyRight = event.keyCode === 39 || event.keyCode === 68;
  const keyDown = event.keyCode === 40 || event.keyCode === 83;

  // Move rectangle with arrow keys
  if      (keyUp)     rect.y -= 3;
  else if (keyDown)   rect.y += 3;
  else if (keyLeft)   rect.x -= 3;
  else if (keyRight)  rect.x += 3;
});
