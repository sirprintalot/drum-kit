var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keydown", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "w":
            var kick = new Audio("/sounds/KICK.wav");
            kick.play();
            break;

        case "e":
            var snare = new Audio("/sounds/SNARE.wav");
            snare.play();
            break;

        case "r":
            var hihat = new Audio("/sounds/HIHAT.wav");
            hihat.play();
            break;

        case "y":
            var tom1 = new Audio("/sounds/TOM1.wav");
            tom1.play();
            break;

        case "u":
            var tom2 = new Audio("/sounds/TOM2.wav");
            tom2.play();
            break;

        case "i":
            var tom3 = new Audio("/sounds/TOM3.wav");
            tom3.play();
            break;

        case "o":
            var crash = new Audio("/sounds/CRASH.wav");
            crash.play();
            break;


        default:
            console.log(key);

    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}
