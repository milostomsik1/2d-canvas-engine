class Canvas {
  // Singleton instance
  private static _instance: Canvas;

  private _framerate = 60;

  private _canvas: HTMLCanvasElement;

  private _onKeyPress: Function;
  private _onKeyPressEvent: KeyboardEvent;

  private _onKeyUp: Function;
  private _onKeyUpEvent: KeyboardEvent;

  private _onKeyDown: Function;
  private _onKeyDownEvents: KeyboardEvent[] = [];

  // Get singleton instance
  static getInstance(): Canvas {
    if (!Canvas._instance) {
      Canvas._instance = new Canvas();
    }
    return Canvas._instance;
  }

  private constructor() {
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const body = document.body;
    body.style.padding = '0';
    body.style.margin = '0';
    body.style.boxSizing = 'border-box';
    body.style.cursor = 'none';
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
      this.executeKeyPress();
      this.executeKeyUp();
      this.executeKeyDown();
      fn();
    }, 1000 / this._framerate);
  }

  private executeKeyPress(): void {
    if (this._onKeyPress) {
      this._onKeyPress(this._onKeyPressEvent);
      this._onKeyPress = null;
      this._onKeyPressEvent = null;
    }
  }

  private executeKeyUp(): void {
    if (this._onKeyUp) {
      this._onKeyUp(this._onKeyUpEvent);
      this._onKeyUp = null;
      this._onKeyUpEvent = null;
    }
  }

  private executeKeyDown(): void {
    if (this._onKeyDownEvents.length > 0) {
      this._onKeyDown(this._onKeyDownEvents[this._onKeyDownEvents.length - 1]);
    }
  }

  public onKeyPress(fn: Function) {
    let prevKey: number;

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
      }
      // Disables key repeat and limits to one event firing
      if (event.keyCode !== prevKey) {
        this._onKeyPressEvent = event;
        this._onKeyPress = fn.bind(this, event);
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

  public onKeyDown(fn: Function) {
    setInterval(() => {
      // console.log('Keys Down: ', keysDown.map(key => String.fromCharCode(key)));
    }, 500);

    let prevKey: number;
    const keysDown: number[] = [];

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.keyCode !== prevKey && keysDown.indexOf(event.keyCode) === -1) {
        // console.log('Previous Key: ', String.fromCharCode(prevKey));
        keysDown.push(event.keyCode);
        this._onKeyDownEvents.push(event);
        this._onKeyDown = fn.bind(this, event);
      }
      prevKey = event.keyCode;
    });

    window.addEventListener('keyup', (event: KeyboardEvent) => {
      keysDown.splice(keysDown.indexOf(event.keyCode), 1);
      this._onKeyDownEvents.splice(this._onKeyDownEvents.map(event => event.keyCode).indexOf(event.keyCode), 1);
      prevKey = keysDown[keysDown.length - 1] || undefined;
      this._onKeyDown = fn.bind(this, this._onKeyDownEvents[this._onKeyDownEvents.length - 1]);
    });
  }
}

export default Canvas;
