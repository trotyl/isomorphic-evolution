const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const outlet = document.querySelector('#outlet')

document.addEventListener('DOMContentLoaded', () => {
  outlet.innerHTML = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">No Button Active</h5>
        <h6 class="card-subtitle mb-2 text-muted">Blabla</h6>
        <p class="card-text">Some quick example text to build on the card: <span>none</span>.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  `
})

btn1.addEventListener('click', () => {
  const title = outlet.querySelector('.card-title')
  const keyword = outlet.querySelector('.card-text span')

  title.textContent = 'Button 1 Active'
  keyword.textContent = 'foo'
})

btn2.addEventListener('click', () => {
  const title = outlet.querySelector('.card-title')
  const keyword = outlet.querySelector('.card-text span')

  title.textContent = 'Button 2 Active'
  keyword.textContent = 'bar'
})
