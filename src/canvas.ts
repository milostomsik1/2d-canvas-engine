class Canvas {
  private _framerate = 60;

  private _canvas: HTMLCanvasElement;

  private _onKeyDown: Function;
  private _onKeyDownEvent: KeyboardEvent;

  private _onKeyUp: Function;
  private _onKeyUpEvent: KeyboardEvent;

  constructor() {
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const body = document.body;
    body.appendChild(canvas);
    this._canvas = canvas;
  }

  get framerate(): number {
    return this._framerate;
  }

  set framerate(framerate: number) {
    if (typeof framerate === 'number' && framerate > 0 && framerate <= 100) {
      this._framerate = framerate;
    } else {
      throw new Error('Framerate must be a number between 1 and 100')
    }
  }

  public getContext(): CanvasRenderingContext2D {
    return this._canvas.getContext("2d");
  }

  public render(fn: Function): void {
    setInterval(() => {
      // Executes key stroke functions only when the canvas re-renders to avoid
      // problems with synchronization between framerate and event listener
      this.executeKeyDown();
      this.executeKeyUp();
      fn();
    }, 1000 / this._framerate);
  }

  private executeKeyDown(): void {
    if (this._onKeyDown) {
      this._onKeyDown(this._onKeyDownEvent);
      this._onKeyDown = null;
      this._onKeyDownEvent = null;
    }
  }

  private executeKeyUp(): void {
    if (this._onKeyUp) {
      this._onKeyUp(this._onKeyUpEvent);
      this._onKeyUp = null;
      this._onKeyUpEvent = null;
    }
  }

  public onKeyDown(fn: Function) {
    let prevKey: Number;

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      // Disables key repeat and limits to one event firing
      if (event.keyCode !== prevKey) {
        this._onKeyDownEvent = event;
        this._onKeyDown = fn.bind(this, event);
      }
      prevKey = event.keyCode;
    });

    window.addEventListener('keyup', (event: KeyboardEvent) => {
      prevKey = null;
    });
  }

  public onKeyUp(fn: Function) {
    window.addEventListener('keyup', (event: KeyboardEvent) => {
        this._onKeyUpEvent = event;
        this._onKeyUp = fn.bind(this, event);
    });
  }
}

export default Canvas;
