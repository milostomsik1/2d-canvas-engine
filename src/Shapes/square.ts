import { SquareDimensions } from '../Interface/dimensions';
import { Point } from './../Interface/points';
import AbstractShape from './abstract-shape';

class Square extends AbstractShape {
  protected _dimensions: SquareDimensions = {
    side: 100
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

export default Square;