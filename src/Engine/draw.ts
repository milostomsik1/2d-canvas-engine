import { RectangleDimensions } from '../Interface/dimensions';
import Canvas from './canvas';

const CTX = Canvas.getInstance().getContext();

class Draw {
  // Singleton instance
  private static _instance: Draw;

  private constructor(private ctx: CanvasRenderingContext2D = CTX) {}

  // Get singleton instance
  static getInstance(): Draw {
    if (!Draw._instance) {
      Draw._instance = new Draw();
    }
    return Draw._instance;
  }

  public setFillColor(color: string | number[]): void {
    if (typeof color === 'string') {
      this.ctx.fillStyle = color;
    } else if (color.length === 3 &&
               typeof color[0] === 'number' &&
               typeof color[1] === 'number' &&
               typeof color[2] === 'number') {
      const [R, G, B] = color;
      this.ctx.fillStyle = `rgb(${R}, ${G}, ${B})`;
    } else if (color.length === 4 &&
               typeof color[0] === 'number' &&
               typeof color[1] === 'number' &&
               typeof color[2] === 'number' &&
               typeof color[3] === 'number') {
      const [R, G, B, A] = color;
      this.ctx.fillStyle = `rgb(${R}, ${G}, ${B}, ${A})`;
    } else {
      throw new Error(`Invalid color format. Proper color formats: hex || rgb.`);
    }
  }

  public background(color: string | number[]): void {
    this.setFillColor(color);
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  public rectangle(x: number, y: number, dimensions: RectangleDimensions, color: string | number[]): void {
    if (typeof x === 'number' &&
        typeof y === 'number' &&
        typeof dimensions.width === 'number' && dimensions.width > 0 &&
        typeof dimensions.height === 'number' && dimensions.height > 0) {
      this.setFillColor(color);
      this.ctx.fillRect(x, y, dimensions.width, dimensions.height);
    } else {
      throw new Error('Incorrect parameters: x, y, width, height must be numbers, width and height must be larger than zero.');
    }
  }

  public circle(x: number, y: number, r: number, color: string | number[]) {
    if (typeof x === 'number' &&
        typeof y === 'number' &&
        typeof r === 'number' && r > 0) {
      this.setFillColor(color);
      this.ctx.ellipse(x, y, r * 2, r * 2, 0, 0, 360);
      this.ctx.fill();
    } else {
      throw new Error('Incorrect parameters: x, y, r must be numbers, r must be larger than zero.');
    }
  }

}

export default Draw;