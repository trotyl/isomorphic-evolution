import { elementStart, elementEnd, element, text, textBinding, bootstrap, detectChanges, listener, clear } from '../../lib/runtime.js'

const App_Context = {
  title: 'No Button Active',
  count: 0,
}

function App_Template(creationMode, context) {
  if (creationMode) {
    elementStart(0, 'div', ['class', 'btn-group', 'role', 'group', 'aria-label', 'Basic example'])
      elementStart(1, 'button', ['type', 'button', 'class', 'btn btn-secondary'])
        text(2, 'Button 1')
        listener('click', () => {
          App_Context.title = 'Button 1 Active'
          App_Context.count++
          detectChanges(App_Template, App_Context)
        })
      elementEnd()
      elementStart(3, 'button', ['type', 'button', 'class', 'btn btn-secondary'])
        text(4, 'Button 2')
        listener('click', () => {
          App_Context.title = 'Button 2 Active'
          App_Context.count++
          detectChanges(App_Template, App_Context)
        })
      elementEnd()
    elementEnd()
    element(5, 'br', [])
    elementStart(6, 'div', ['class', 'mt-2'])
      elementStart(7, 'div', ['class', 'card', 'style', 'width: 20rem;'])
        elementStart(8, 'div', ['class', 'card-body'])
          elementStart(9, 'h5', ['class', 'card-title'])
            text(10, '')
          elementEnd()
          elementStart(11, 'h6', ['class', 'card-subtitle mb-2 text-muted'])
            text(12, 'Hi, Blabla')
          elementEnd()
          elementStart(13, 'p', ['class', 'card-text'])
            text(14, '')
          elementEnd()
          elementStart(15, 'a', ['href', '#', 'class', 'card-link'])
            text(16, 'Card link')
          elementEnd()
          elementStart(17, 'a', ['href', '#', 'class', 'card-link'])
            text(18, 'Another link')
          elementEnd()
        elementEnd()
      elementEnd()
    elementEnd()
  }

  textBinding(10, context.title)
  textBinding(14, `Card has been changed for ${context.count} time(s).`)
}

document.addEventListener('DOMContentLoaded', () => {
  let countdown = 5
  const interval = setInterval(() => {
    countdown--
    document.querySelector('#countdown').textContent = `${countdown}`
    if (countdown <= 0) {
      clearInterval(interval)
      const container = document.querySelector('.container')
      clear(container)
      bootstrap(container, App_Template, App_Context)
    }
  }, 1000)
})
