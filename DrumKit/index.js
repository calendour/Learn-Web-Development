for (let i = 0; i < document.querySelectorAll(".drum").length; i ++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        return playSound(buttonInnerHTML) && animateButton(buttonInnerHTML);

    });
}

document.addEventListener("keydown", function (event) {
    animateButton(event.key);
    return playSound(event.key);
});

function playSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            return tom1.play();
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            return tom2.play();
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            return tom3.play();
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            return tom4.play();
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            return snare.play();
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            return crash.play();
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            return kick.play();
        default:
            console.log(this);
            break;
    }

}

function animateButton(key) {
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);

}
