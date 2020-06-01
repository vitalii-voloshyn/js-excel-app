class Emitter {
  constructor() {
    this.listeners = {}
  }

  // Уведомляем слушателей если они есть
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // Подписка на уведомление о событии
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
      this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

export default Emitter

// Exemple :
// const emitter = new Emitter()

// emitter.subscribe('sayHello', data => console.log(data))
// emitter.emit('Hello Vasya!', 20)

