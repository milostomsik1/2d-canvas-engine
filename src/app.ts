//-------------------------
// IMPORTS
//-------------------------
import Canvas from './canvas';
import Draw from './draw';
import AbstractObject from './abstract-object';

class Rect extends AbstractObject {
  public draw(): void {
    const color = [50, 100, 50]
    this._draw.rectangle(100, 200, 100, 300, color);
  }
}

//-------------------------
// SETUP
//-------------------------
const canvas = new Canvas();
canvas.framerate = 60;
const ctx = canvas.getContext();
const draw = new Draw(ctx);
const rect = new Rect(ctx, draw);

//-------------------------
// EXECUTION
//-------------------------
canvas.render(() => {
  draw.background(50, 50, 50);
  rect.draw();
});

canvas.onKeyDown((event: KeyboardEvent) => {
  console.log('Key Down');
});

canvas.onKeyUp((event: KeyboardEvent) => {
  console.log('Key Up');
});
