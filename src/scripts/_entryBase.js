export default class EntryBase {
  constructor() {
    this.initialize()
  }

  initialize() {
    this.registerReadyEvent()
  }

  registerReadyEvent() {
    document.addEventListener('DOMContentLoaded', () => this._onReady() )

    window.addEventListener('load', () => this._onLoad() )
  }

  _onReady() {
    console.log('this is dom-content-loaded event')
    this.onReady()
  }

  onReady() {
  }

  _onLoad() {
    console.log('this is load event')
    this.onLoad()
  }

  onLoad() {
  }
}

