let elementStack = []
let nodes = {}

export function elementStart(id, tag, attrs) {
  const element = document.createElement(tag)
  for (let i = 0; i < attrs.length; i += 2) {
    element.setAttribute(attrs[i], attrs[i + 1])
  }
  elementStack[elementStack.length - 1].appendChild(element)
  elementStack.push(element)
  nodes[id] = element
}

export function elementEnd() {
  elementStack.pop()
}

export function text(id, content) {
  const node = document.createTextNode(content)
  elementStack[elementStack.length - 1].appendChild(node)
  nodes[id] = node
}

export function textBinding(id, content) {
  const node = nodes[id]
  node.textContent = content
}

export function bootstrap(element, template, context) {
  elementStack.push(element)
  template(true, context)
}

export function detectChanges(template, context) {
  template(false, context)
}
