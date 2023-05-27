const btn = document.querySelector('.btn')
const btnAfter = window.getComputedStyle(btn, "::before")

btn.addEventListener('mouseover', (event) => {
    const x = event.pageX - btn.offsetLeft
    const y = event.pageY - btn.offsetTop 
    btn.style.setProperty('--left',`${x}px`)
    btn.style.setProperty('--top',`${y}px`)
  })