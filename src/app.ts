//-------------------------
// IMPORTS
//-------------------------
import Canvas from './canvas';
import Draw from './draw';
import Rectangle from './rectangle';

//-------------------------
// SETUP
//-------------------------
const canvas = new Canvas();
canvas.framerate = 60;
const ctx = canvas.getContext();
const draw = new Draw(ctx);
const rect = new Rectangle(ctx, draw);
rect.dimensions = {
  width: 200,
  height: 300
}
rect.fillColor = '#fff000';
//-------------------------
// EXECUTION
//-------------------------
canvas.render(() => {
  draw.background([50, 50, 50]);
  rect.draw();
});

canvas.onKeyDown((event: KeyboardEvent) => {
});

canvas.onKeyUp((event: KeyboardEvent) => {
});
