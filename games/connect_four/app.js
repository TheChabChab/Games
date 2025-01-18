// Initialize game variables //
let currentPlayer = "P1"
let gameon = true
const grid=document.querySelector(".grid")
// Function to generate the gameplay //
function generateGamePlay(){
    for(let i=0;i<49; i++){
        const sq=document.createElement("div")
        if(i>=42) sq.classList.add("playable")
        grid.appendChild(sq)
    }
}
generateGamePlay();
const sq = document.querySelectorAll(".grid div")
console.log(currentPlayer);
for(let i=0;i<sq.length;i++){
    sq[i].onclick = () => {
        if(!sq[i].classList.contains("playable")) {
            alert("You can't play here")
        }else if(currentPlayer=="P1"){
            sq[i].classList.add("P1")
            sq[i].classList.remove("playable")
            if(i>6) sq[i-7].classList.add("playable")
            currentPlayer="P2"
        }else if(currentPlayer=="P2"){
            sq[i].classList.add("P2")
            sq[i].classList.remove("playable")
            if(i>6) sq[i-7].classList.add("playable")
            currentPlayer="P1"
        }
        checkWin();
        
    }
}


function checkWin(){



    for(let i=48;i>0;i--){
        let player = ""
        let matches = 0
        console.log("cheking for....."+i)
        if(sq[i].classList.contains("P1")) player="P1"
        else if(sq[i].classList.contains("P2")) player="P2"
        console.log(player)
        //check Top 3
        if(i>14){
            for(let m=3;m>0;m--){
                let r=m*7;
                try{
                    if(sq[i-r].classList.contains(player)) matches++
                    else{matches=0;break;}
                }catch(e){continue;}
            }
        }
        if(matches==3){
            alert(player +" wins")
            break;
        }
        //check Left 3
        if(i%7>2){
            for(let m=3;m>0;m--){
                try{
                    if(sq[i-m].classList.contains(player)) matches++
                    else {matches=0;break;}
                }catch(e){continue}
            }
        }
        if(matches==3){
            alert(player +" wins")
            break
        }
        //check Top-Right 3
        if(i>20 && i%7<4){
            for(let m=3;m>0;m--){
                let r=m*6
                try{
                  if(sq[i-r].classList.contains(player)) matches++
                  else {matches=0;break;}
                }catch(e){continue}
            }
        }
        if(matches==3){
            alert(player +" wins")
            break
        }
        //check Top-Left 3
        if(i>14 && i%7>2){
            for(let m=3;m>0;m--){
                let r=m*8
                try{
                  if(sq[i-r].classList.contains(player)) matches++
                  else {matches=0;break;}
                }catch(e){continue}
            }
        }
        if(matches==3){
            alert(player +" wins")
            break
        }
    }
}

