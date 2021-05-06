const counter = document.querySelector('#counter')

let counterInterval = setInterval(function() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1
}, 1000)

const plusButton = document.querySelector('#plus')
plusButton.addEventListener('click', function(e) {
    counter.textContent++
})

const minusButton = document.querySelector('#minus')
minusButton.addEventListener('click', function(e) {
    counter.textContent = counter.textContent - 1
})

const heartButton = document.querySelector('#heart')
const likesList = document.querySelector('.likes')
heartButton.addEventListener('click', function(e) {
    const li = document.createElement('li')
    currentCount = parseInt(counter.innerText)
    li.innerText = `${currentCount} was liked`
    likesList.append(li)
})

const pauseButton = document.querySelector('#pause')
pauseButton.addEventListener('click', function(e) {
    clearInterval(counterInterval)
})

const commentForm = document.querySelector('#comment-form')
commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const comment = e.target.querySelector("#comment-input")
    const div = document.querySelector(".comments")
    const p = document.createElement("p")
    div.appendChild(p)
    p.textContent = comment.value
    comment.value = ""
})

