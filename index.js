// detecting which button was pressed 

var numberOfButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    })
}

// detecting which key was pressed 

document.addEventListener("keydown", function(event){

    var keyPressed = event.key;
    makeSound(keyPressed);

    var drumButton = document.querySelector("." + keyPressed);
    if (drumButton) {
        drumButton.classList.add("pressed");

        setTimeout(() => {
            drumButton.classList.remove("pressed");
        }, 100);
    }

})

// playing sound 

function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;                
    
        default:
            break;
    }

}

