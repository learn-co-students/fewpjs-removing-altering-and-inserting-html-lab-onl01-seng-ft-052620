// Write your code here!
let element = document.querySelector('main#main')
element.remove()
var newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "Eri is the champion"
document.body.appendChild(newHeader)

newHeader = document.querySelector('h1#victory')