import { EllipseDimensions } from '../Interface/dimensions';
import { Point } from './../Interface/points';
import AbstractShape from './abstract-shape';

class Ellipse extends AbstractShape {
  protected _dimensions: EllipseDimensions = {
    radiusX: 100,
    radiusY: 150
  }

  public get x(): number {
    return this._x;
  }

  public set x(x: number) {
    if (typeof x === 'number') {
      this._x = x;
    } else {
      throw new Error('X coordinate must be a number.');
    }
  }

  public get y(): number {
    return this._y;
  }

  public set y(y: number) {
    if (typeof y === 'number') {
      this._y = y;
    } else {
      throw new Error('Y coordinate must be a number.');
    }
  }

  public set originPoint(point: Point) {
    if (point.hasOwnProperty('x') &&
        point.hasOwnProperty('y')) {
      if (point.x >= 0 && point.x <= 1 &&
          point.y >= 0 && point.y <= 1) {
        this._originPoint = point;
      } else {
        throw new Error('Incorrect point value. X and Y must be between 0 and 1.');
      }
    } else {
      throw new Error('Incorrect point format. Must have x and y properties.');
    }
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