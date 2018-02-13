import { EllipseDimensions } from '../Interface/dimensions';
import { Point } from './../Interface/points';
import AbstractShape from './abstract-shape';

class Ellipse extends AbstractShape {
  protected _dimensions: EllipseDimensions = {
    radiusX: 100,
    radiusY: 150
  }

  public get dimensions(): EllipseDimensions {
    return this._dimensions;
  }

  public set dimensions(dimensions: EllipseDimensions) {
    if (typeof dimensions.radiusX === 'number' && dimensions.radiusX > 0 &&
        typeof dimensions.radiusY === 'number' && dimensions.radiusY > 0) {
      this._dimensions = {
        radiusX: dimensions.radiusX,
        radiusY: dimensions.radiusY
      };
    } else {
      throw new Error('Incorrect parameters: Radius X and Y must be numbers larger than zero.');
    }
  }

  public draw() {
    this.setup();

    this._draw.ellipse(this._x + this.dimensions.radiusX - (this._dimensions.radiusX * 2 * this._originPoint.x),
                       this._y + this.dimensions.radiusY - (this._dimensions.radiusY * 2 * this._originPoint.y),
                       this._dimensions.radiusX,
                       this._dimensions.radiusY,
                       this._fillColor);
  }
}

export default Ellipse;