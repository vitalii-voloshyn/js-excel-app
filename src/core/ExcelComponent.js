import DomListener from '@core/DomListener';

class ExcelComponent extends DomListener {
  constructor($root, options = {} ) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscribers = []

    this.prepare()
  }

  // Setings component before init
  prepare() {

  }

  // Return markup of component
  toHTML() {
    return ''
  }

  // Inform subscribers about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Subscribes to event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // Initialize component
  // Add Dom Listeners
  init() {
    this.initDomListeners()
  }

  // Remove Dom Listeners
  destroy() {
    this.removeDomListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}

export default ExcelComponent
