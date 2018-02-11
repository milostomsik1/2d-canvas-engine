import { Point } from './interfaces';

class OriginPoint {
  static get TOP_LEFT(): Point {
    return {
      x: 0,
      y: 0
    }
  }

  static get TOP(): Point {
    return {
      x: 0.5,
      y: 0
    }
  }

  static get TOP_RIGHT(): Point {
    return {
      x: 1,
      y: 0
    }
  }

  static get LEFT(): Point {
    return {
      x: 0,
      y: 0.5
    }
  }

  static get CENTER(): Point {
    return {
      x: 0.5,
      y: 0.5
    }
  }

  static get RIGHT(): Point {
    return {
      x: 1,
      y: 0.5
    }
  }

  static get BOTTOM_LEFT(): Point {
    return {
      x: 0,
      y: 1
    }
  }

  static get BOTTOM(): Point {
    return {
      x: 0.5,
      y: 1
    }
  }

  static get BOTTOM_RIGHT(): Point {
    return {
      x: 1,
      y: 1
    }
  }

}

export default OriginPoint;