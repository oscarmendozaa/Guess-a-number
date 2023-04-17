const input = document.querySelector("input")
const guess = document.querySelector(".guess")
const checkButton = document.querySelector("button")
const chances = document.querySelector(".chances")
const message = document.querySelector(".message")


input.focus();

const maxChances = 10;
let remainingChances = maxChances
let randomNum = Math.floor(Math.random() * 100) + 1



checkButton.addEventListener("click", ()=> {
    let inputValue = Number(input.value);
    guess.style.display = "block"
    console.log(randomNum)

    if (inputValue === randomNum){
        message.innerHTML= "You <span class='highlight'>win</span>!";
        input.disabled = true
        checkButton.disabled = true
        guess.remove()
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
    } else if (inputValue > randomNum){
        guess.textContent = "Your number is high";
        remainingChances --;
        chances.textContent = remainingChances
    } else if (inputValue < randomNum){
        guess.textContent = "Your number is low";
        remainingChances --;
        chances.textContent = remainingChances;
    } else if(remainingChances === 0){
        message.textContent = `You lost! The number was ${randomNum}`

    }




})