import { elementStart, elementEnd, text, textBinding, bootstrap, detectChanges } from '../../lib/runtime.js'

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const outlet = document.querySelector('#outlet')

const App_Context = {
  title: 'No Button Active',
  keyword: 'none',
}

function App_Template(creationMode, context) {
  if (creationMode) {
    elementStart(0, 'div', ['class', 'card', 'style', 'width: 18rem;'])
      elementStart(1, 'div', ['class', 'card-body'])
        elementStart(2, 'h5', ['class', 'card-title'])
          text(3, '')
        elementEnd()
        elementStart(4, 'h6', ['class', 'card-subtitle mb-2 text-muted'])
          text(5, 'Blabla')
        elementEnd()
        elementStart(6, 'p', ['class', 'card-text'])
          text(7, 'Some quick example text to build on the card: ')
          text(8, '')
        elementEnd()
        elementStart(9, 'a', ['href', '#', 'class', 'card-link'])
          text(10, 'Card link')
        elementEnd()
        elementStart(11, 'a', ['href', '#', 'class', 'card-link'])
          text(12, 'Another link')
        elementEnd()
      elementEnd()
    elementEnd()
  }

  textBinding(3, context.title)
  textBinding(8, context.keyword)
}

document.addEventListener('DOMContentLoaded', () => {
  bootstrap(outlet, App_Template, App_Context)
})

btn1.addEventListener('click', () => {
  App_Context.title = 'Button 1 Active'
  App_Context.keyword = 'foo'

  detectChanges(App_Template, App_Context)
})

btn2.addEventListener('click', () => {
  App_Context.title = 'Button 2 Active'
  App_Context.keyword = 'bar'

  detectChanges(App_Template, App_Context)
})
