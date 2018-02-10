import Draw from './draw';

abstract class AbstractObject {
  constructor(
    protected _ctx: CanvasRenderingContext2D,
    protected _draw: Draw = new Draw(_ctx)
  ) {}

  public abstract draw(): void;
}

export default AbstractObject;