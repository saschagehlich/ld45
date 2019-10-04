import { autobind } from 'core-decorators'
import * as PIXI from 'pixi.js'
import Stats from 'stats.js'

export class Game {
  public static WIDTH = 640
  public static HEIGHT = 480

  private _container: HTMLElement
  private _app: PIXI.Application
  private _stats: Stats

  constructor (container: HTMLElement) {
    this._container = container
    this._init()
  }

  private _init () {
    // PIXI
    this._app = new PIXI.Application({
      width: Game.WIDTH,
      height: Game.HEIGHT
    })
    this._app.ticker.add(this._tick)
    this._container.appendChild(this._app.view)

    // FPS Counter
    this._stats = new Stats()
    this._container.appendChild(this._stats.dom)
  }

  @autobind
  private _tick (delta: number) {
    this._stats.end()

    this._stats.begin()
  }
}
