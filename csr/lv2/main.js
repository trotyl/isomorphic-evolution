const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const outlet = document.querySelector('#outlet')

let counter = 0;

document.addEventListener('DOMContentLoaded', () => {
  outlet.innerHTML = `
    <div class="card" style="width: 20rem;">
      <div class="card-body">
        <h5 class="card-title">No Button Active</h5>
        <h6 class="card-subtitle mb-2 text-muted">Hi, Blabla</h6>
        <p class="card-text">Card has been changed for <span>${counter}</span> time(s).</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  `
})

btn1.addEventListener('click', () => {
  counter++
  outlet.querySelector('.card-title').textContent = 'Button 1 Active'
  outlet.querySelector('.card-text span').textContent = `${counter}`
})

btn2.addEventListener('click', () => {
  counter++
  outlet.querySelector('.card-title').textContent = 'Button 2 Active'
  outlet.querySelector('.card-text span').textContent = `${counter}`
})
