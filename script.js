let x = Math.ceil(Math.random()*6)
let y = Math.ceil(Math.random()*6)

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + x + ".png")
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + y + ".png")

if (x == y) {
        document.querySelector("h1").innerHTML = "draw";
}
else if (x > y) {
        document.querySelector("h1").innerHTML = "Player1 Won";
}
else{
        document.querySelector("h1").innerHTML = "Player2 Won";
}
