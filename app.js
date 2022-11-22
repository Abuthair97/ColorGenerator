const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumbers() {
    return Math.floor(Math.random()*colors.length);
}

btn.addEventListener("click",function () {
    const randomNumbers = getRandomNumbers();
    
    document.body.style.backgroundColor = colors[randomNumbers]
    color.textContent = colors[randomNumbers]

})