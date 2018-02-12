import { SquareDimensions } from '../Interface/dimensions';
import { Point } from './../Interface/points';
import AbstractShape from './abstract-shape';

class Rectangle extends AbstractShape {
  protected _dimensions: SquareDimensions = {
    side: 100
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

  public get dimensions(): SquareDimensions {
    return this._dimensions;
  }

  public set dimensions(dimensions: SquareDimensions) {
    if (typeof dimensions.side === 'number' && dimensions.side > 0) {
      this._dimensions = {
        side: dimensions.side
      };
    } else {
      throw new Error('Incorrect parameters: side must be number larger than zero.');
    }
  }

  public draw() {
    this.setup();

    this._draw.rectangle(this._x - (this._dimensions.side * this._originPoint.x),
                         this._y - (this._dimensions.side * this._originPoint.y),
                         {
                           width: this._dimensions.side,
                           height: this._dimensions.side
                         },
                         this._fillColor);
  }
}

export default Rectangle;