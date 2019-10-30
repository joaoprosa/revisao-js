let titulo = document.getElementById('inpTitle')

let rendTitle = document.getElementById('renderTitle')

let changeColor = document.getElementsByClassName('rainbow')

function clickSend(event){
    event.preventDefault()
    rendTitle.innerHTML = inpTitle.value;
}
function onColor(event) {
    rendTitle.style.color = 'green';
    rendTitle.classList.remove('rainbow')
}
function outColor (event) {
    rendTitle.classList.add('rainbow')
}
