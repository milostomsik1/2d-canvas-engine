import { CircleDimensions } from '../Interface/dimensions';
import { Point } from './../Interface/points';
import AbstractShape from './abstract-shape';

class Circle extends AbstractShape {
  protected _dimensions: CircleDimensions = {
    radius: 100
  }

  public get dimensions(): CircleDimensions {
    return this._dimensions;
  }

  public set dimensions(dimensions: CircleDimensions) {
    if (typeof dimensions.radius === 'number' && dimensions.radius > 0) {
      this._dimensions = {
        radius: dimensions.radius
      };
    } else {
      throw new Error('Incorrect parameters: radius must be number larger than zero.');
    }
  }

  public draw() {
    this.setup();

    this._draw.circle(this._x + this.dimensions.radius - (this._dimensions.radius * 2 * this._originPoint.x),
                      this._y + this.dimensions.radius - (this._dimensions.radius * 2 * this._originPoint.y),
                      this._dimensions.radius,
                      this._fillColor);
  }
}

export default Circle;