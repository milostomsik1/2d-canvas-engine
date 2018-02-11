//-------------------------
// IMPORTS
//-------------------------
import { OriginPoint } from './Interface/points';
import Canvas from './Engine/canvas';
import Draw from './Engine/draw';
import Rectangle from './Shapes/rectangle';


//-------------------------
// SETUP
//-------------------------
const canvas = Canvas.getInstance();
const draw = Draw.getInstance();
const rect = new Rectangle();

rect.dimensions = {
  width: 300,
  height: 200
}
rect.originPoint = OriginPoint.CENTER;
// rect.fillColor = '#fff000';
rect.fillColor = [200, 200, 50];


//-------------------------
// RENDERING
//-------------------------
canvas.render(() => {
  draw.background([50, 50, 50]);
  rect.draw();
});


//-------------------------
// KEY HANDLING
//-------------------------
canvas.onKeyPress((event: KeyboardEvent) => {
  // Do something on key press
  console.log(event.keyCode);
  if (event.keyCode === 38) rect.y -= 10;
  else if (event.keyCode === 37) rect.x -= 10;
  else if (event.keyCode === 39) rect.x += 10;
  else if (event.keyCode === 40) rect.y += 10;
});

canvas.onKeyUp((event: KeyboardEvent) => {
  // Do something on key up
});
