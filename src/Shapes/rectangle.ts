import { RectangleDimensions } from '../Interface/dimensions';
import { Point } from './../Interface/points';
import AbstractShape from './abstract-shape';

class Rectangle extends AbstractShape {
  protected _dimensions: RectangleDimensions = {
    width: 150,
    height: 100
  }

  public get dimensions(): RectangleDimensions {
    return this._dimensions;
  }

  public set dimensions(dimensions: RectangleDimensions) {
    if (typeof dimensions.width === 'number' && dimensions.width > 0 &&
        typeof dimensions.height === 'number' && dimensions.height > 0) {
      this._dimensions = {
        width: dimensions.width,
        height: dimensions.height
      };
    } else {
      throw new Error('Incorrect parameters: width and height must be numbers larger than zero.');
    }
  }

  public draw() {
    this.setup();
    this._draw.rectangle(this._x - (this._dimensions.width * this._originPoint.x),
                         this._y - (this._dimensions.height * this._originPoint.y),
                         this._dimensions,
                         this._fillColor);
  }
}

export default Rectangle;