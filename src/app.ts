//-------------------------
// IMPORTS
//-------------------------
import { OriginPoint } from './Interface/points';
import Canvas from './Engine/canvas';
import Draw from './Engine/draw';
import Rectangle from './Shapes/rectangle';
import Background from './Shapes/background';


//-------------------------
// SETUP
//-------------------------
const canvas = Canvas.getInstance();
const draw = Draw.getInstance();
const background = new Background();
background.fillColor = '#222222';

const rect = new Rectangle();
rect.dimensions = {
  width: 300,
  height: 200
}
rect.originPoint = OriginPoint.CENTER;
rect.fillColor = '#fff000';


//-------------------------
// RENDERING
//-------------------------
canvas.render(() => {
  background.draw();
  rect.draw();
});


//-------------------------
// KEY HANDLING
//-------------------------
canvas.onKeyPress((event: KeyboardEvent) => {
  const keyUp = event.keyCode === 38 || event.keyCode === 87;
  const keyLeft = event.keyCode === 37 || event.keyCode === 65;
  const keyRight = event.keyCode === 39 || event.keyCode === 68;
  const keyDown = event.keyCode === 40 || event.keyCode === 83;

  // Move rectangle with arrow keys
  if      (keyUp)     rect.y -= 15;
  else if (keyDown)   rect.y += 15;
  else if (keyLeft)   rect.x -= 15;
  else if (keyRight)  rect.x += 15;
});

canvas.onKeyUp((event: KeyboardEvent) => {
  // Do something on key up
});

canvas.onKeyDown((event: KeyboardEvent) => {
  if (rect.dimensions.width > 315) {
    rect.dimensions.width = 300;
    rect.dimensions.height = 200;
  }
  rect.dimensions = { width: rect.dimensions.width + 1, height: rect.dimensions.height + 1 };
});
