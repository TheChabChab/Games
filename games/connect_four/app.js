// your code goes here
const grid=document.querySelector(".grid")
const disp=document.querySelector(".disp")
let currentPlayer = "P1"
let gameon = true
for(let i=0;i<49; i++){
    const sq=document.createElement("div")
    if(i>=42) sq.classList.add("playable")
    grid.appendChild(sq)
}
const sq = document.querySelectorAll(".grid div")


for(let i=0;i<sq.length;i++){
    sq[i].onclick = () => {
        if(!sq[i].classList.contains("playable")) {
            alert("You can't play here")
        }else if(currentPlayer=="P1"){
            sq[i].classList.add("P1")
            sq[i].classList.remove("playable")
            sq[i-7].classList.add("playable")
            currentPlayer="P2"
        }else if(currentPlayer=="P2"){
            sq[i].classList.add("P2")
            sq[i].classList.remove("playable")
            sq[i-7].classList.add("playable")
            currentPlayer="P1"
        }
        checkWin();
    }
}