// Write your code here!

// AssertionError: Make sure you remove the <main> with id 'main': expected <main id="main"></main> to not exist

let main = document.querySelector('main')
main.remove()

let newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = "I is the champion"