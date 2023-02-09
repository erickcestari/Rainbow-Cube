const myDiv = document.getElementById("myDiv");

window.addEventListener("keydown", move);
myDiv.addEventListener("mouseover", step)
let x = 0
let y = 0;
let color = 0
const divs = []
function move(event){
    
    switch(event.key){
        case "ArrowDown":
            y+= 5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x += 5;
            myDiv.style.left = x + "px"
            break;
        case "ArrowLeft":
            x -=5;
            myDiv.style.left = x + "px"
            break;
        case "ArrowUp":
            y -=5;
            myDiv.style.top = y + "px";
            break;

        default: break;
    }

};

function createDiv(){
    const width = window.outerWidth
    const height = window.outerHeight
    let numDiv = Math.floor(height/359)
    
    for(let i = 0; i< 359; i++){
        console.log(i)
        let div = document.createElement("div")
        div.style.width = width + "px";
        div.style.height = numDiv + "px"
        div.style.position = "absolute"
        div.style.marginTop = numDiv * i + "px"
        document.body.appendChild(div)
        divs.push(div)
    }
    console.log(divs)
    
    console.log(window.outerHeight)
}
createDiv()
function step()
{
    setInterval(changeBackground, 1);
}

function changeBackground(){
    let cont = 0
    color++
    
    color %= 359;
    myDiv.style.backgroundColor = "hsl(H,100%,50%)".replace(/H/g, color)
    document.body.style.backgroundColor = "hsl(H,100%,50%)".replace(/H/g, color)
    for(i of divs){
        i.style.backgroundColor = "hsl(H,100%,50%)".replace(/H/g, color + cont)
        i.style.transform = "rotateZ("+color+"deg)"
        cont--
    }
}

function rgb(r, g, b){
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    return ["rgb(",r,",",g,",",b,")"].join("");
  }

  