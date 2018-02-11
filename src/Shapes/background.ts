import AbstractShape from './abstract-shape';

class Background extends AbstractShape {
  protected _fillColor: string | number[] = '#222222';

  public draw() {
    this.setup();
    this._draw.background(this._fillColor);
  }
}

export default Background;