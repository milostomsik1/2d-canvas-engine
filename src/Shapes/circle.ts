import { CircleDimensions } from '../Interface/dimensions';
import { Point } from './../Interface/points';
import AbstractShape from './abstract-shape';

class Circle extends AbstractShape {
  protected _dimensions: CircleDimensions = {
    radius: 100
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
    console.log(this._dimensions.radius);

    this._draw.circle(this._x,
                      this._y,
                      this._dimensions.radius,
                      this._fillColor);
  }
}

export default Circle;