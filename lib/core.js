const list = []

export function record(eventNames) {
  for (const eventName of eventNames) {
    document.addEventListener(eventName, (event) => {
      list.push({ name: eventName, element: event.target })
    })
  }
}

export function replay() {
  for (const { name: eventName, element } of list) {
    element.dispatchEvent(new Event(eventName))
  }
}
