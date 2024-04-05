const bordRegions = document.querySelectorAll('#gameBoard span')
const vBoard = []
let turnPlayer = ''

function updateTitle() {
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById ('turnPlayer').innerText = playerInput.value
}