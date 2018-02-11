import { RectangleDimensions } from '../Interface/dimensions';
import { Point } from './../Interface/points';
import AbstractShape from './abstract-shape';

class Rectangle extends AbstractShape {
  protected _dimensions: RectangleDimensions = {
    width: 150,
    height: 100
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