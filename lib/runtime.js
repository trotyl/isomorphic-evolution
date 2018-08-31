let elementStack = []
let nodes = {}

export function elementStart(id, tag, attrs) {
  const parent = elementStack[elementStack.length - 1]
  let node = parent.element.childNodes[parent.count]
  let created = false

  if (node == null || node.nodeType !== Node.ELEMENT_NODE || node.tagName.toLowerCase() !== tag.toLowerCase()) {
    for (let i = parent.count; i < parent.element.childNodes.length; i++) {
      const child = parent.element.childNodes[i]
      parent.element.removeChild(child)
    }
    node = document.createElement(tag)
    created = true
  }

  for (let i = 0; i < attrs.length; i += 2) {
    node.setAttribute(attrs[i], attrs[i + 1])
  }

  if (created) {
    parent.element.appendChild(node)
  }
  
  elementStack.push({element: node, count: 0})
  nodes[id] = node
  parent.count++
}

export function elementEnd() {
  elementStack.pop()
}

export function element(id, tag, attrs) {
  elementStart(id, tag, attrs)
  elementEnd()
}

export function listener(eventName, handler) {
  const { element } = elementStack[elementStack.length - 1]
  element.addEventListener(eventName, handler)
}

export function text(id, content) {
  const parent = elementStack[elementStack.length - 1]
  let node = parent.element.childNodes[parent.count]
  let created = false

  if (node == null || node.nodeType !== Node.TEXT_NODE) {
    for (let i = parent.count; i < parent.element.childNodes.length; i++) {
      const child = parent.element.childNodes[i]
      parent.element.removeChild(child)
    }
    node = document.createTextNode(content)
    created = true
  }

  if (created) {
    parent.element.appendChild(node)
  } else if (node.textContent !== content) {
    node.textContent = content
  }

  nodes[id] = node
  parent.count++
}

export function textBinding(id, content) {
  const node = nodes[id]
  node.textContent = content
}

export function bootstrap(element, template, context) {
  elementStack.push({element, count: 0})
  template(true, context)
}

export function detectChanges(template, context) {
  template(false, context)
}

export function clear(element) {
  for (const child of [...element.childNodes]) {
    element.removeChild(child)
  }
}

