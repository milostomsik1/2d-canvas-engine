import Canvas from '../Engine/canvas';
import Draw from '../Engine/draw';
import {
  SquareDimensions,
  RectangleDimensions,
  CircleDimensions,
  EllipseDimensions,
} from '../Interface/dimensions';
import {
  Point,
  OriginPoint
} from '../Interface/points';

const CTX = Canvas.getInstance().getContext();
const DRAW = Draw.getInstance();

abstract class AbstractObject {
  protected _fill: boolean = true;
  protected _stroke: boolean = false;

  protected _fillColor: string | number[] = '#ffffff';
  protected _strokeColor: string | number[] = '#ffffff';

  protected _x: number = window.innerWidth / 2;
  protected _y: number = window.innerHeight / 2;

  protected _originPoint: Point = OriginPoint.CENTER;

  protected _dimensions: SquareDimensions |
                         RectangleDimensions |
                         CircleDimensions |
                         EllipseDimensions;

  constructor(
    protected _ctx: CanvasRenderingContext2D = CTX,
    protected _draw: Draw = DRAW
  ) {}


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

  public get fill(): boolean {
    return this._fill;
  }

  public set fill(fill: boolean) {
    if (typeof fill === 'boolean') {
      this._fill = fill;
    } else {
      throw new Error('Entered value is not a boolean.');
    }
  }

  public get stroke(): boolean {
    return this._stroke;
  }

  public set stroke(stroke: boolean) {
    if (typeof stroke === 'boolean') {
      this._stroke = stroke;
    } else {
      throw new Error('Entered value is not a boolean.');
    }
  }

  public get fillColor(): string | number[] {
    return this._fillColor;
  }

  public set fillColor(color: string | number[]) {
    if (typeof color === 'string') {
      this._fillColor = color;
    } else if (color.length === 3 &&
               typeof color[0] === 'number' &&
               typeof color[1] === 'number' &&
               typeof color[2] === 'number') {
      const [R, G, B] = color;
      this._fillColor = `rgb(${R}, ${G}, ${B})`;
    } else if (color.length === 4 &&
               typeof color[0] === 'number' &&
               typeof color[1] === 'number' &&
               typeof color[2] === 'number' &&
               typeof color[3] === 'number') {
      const [R, G, B, A] = color;
      this._fillColor = `rgb(${R}, ${G}, ${B}, ${A})`;
    } else {
      throw new Error(`Invalid color format. Proper color formats: hex || rgb.`);
    }
  }

  protected setup(): void {
    this._draw.setFillColor(this._fillColor);
  }

  public abstract draw(): void;

}

export default AbstractObject;