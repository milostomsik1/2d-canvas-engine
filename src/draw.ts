class Draw {
  constructor(private ctx: CanvasRenderingContext2D) {}

  private setFillColor(color: string | number[]): void {
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
      throw new Error(`Invalid color format. Proper color formats: hex || rgb`);
    }
  }

  public background(...color: any[]): void {
    this.setFillColor(color);
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  public rectangle(x: number, y: number, width: number, height: number, color: string | number[]): void {
    if (typeof x === 'number' &&
        typeof y === 'number' &&
        typeof width === 'number' && width > 0 &&
        typeof height === 'number' && height > 0) {
      this.setFillColor(color);
      this.ctx.fillRect(x, y, width, height);
    } else {
      throw new Error('Incorrect parameters: x, y, width, height must be numbers, width and height must be larger than 0');
    }
  }
}

export default Draw;