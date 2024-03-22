
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function increment() {
    console.log("clicked")
    count += 1
    console.log(count)
    countEl.textContent = count
}

function save() {
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}




