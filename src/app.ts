//-------------------------
// IMPORTS
//-------------------------
import Canvas from './Engine/canvas';
import Draw from './Engine/draw';
import { OriginPoint } from './Interface/points';
import Rectangle from './Shapes/rectangle';

//-------------------------
// SETUP
//-------------------------
const canvas = Canvas.getInstance();
const draw = Draw.getInstance();
const rect = new Rectangle();

rect.dimensions = {
  width: 200,
  height: 200
}
rect.originPoint = OriginPoint.CENTER;
rect.fillColor = '#fff000';
//-------------------------
// EXECUTION
//-------------------------
canvas.render(() => {
  draw.background([50, 50, 50]);
  rect.draw();
  console.log(canvas.framerate);
});

canvas.onKeyDown((event: KeyboardEvent) => {
});

canvas.onKeyUp((event: KeyboardEvent) => {
});
