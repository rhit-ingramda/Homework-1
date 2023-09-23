main = function() {
    console.log("Ready");

    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement");
        counter --;
        updateNumber();
    };
    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset");
        counter = 0;
        updateNumber();
    };
    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment");
        counter++;
        updateNumber();
    };

    btns = document.getElementsByClassName("color-btn");
    console.log(btns);
    let btn;
    for (btn of btns){
        document.querySelector("#" + btn.id).onclick = (event) => {
            id = event.target.id;
            color = id.replace("Button","")
            console.log(color);
            favoriteColor = color;
            updateColor(color);
        };
    }
}

main();

let counter = 0;

updateNumber = function() {
    document.querySelector("#counterText").innerHTML = counter;
}

updateColor = function(favoriteColor){
    document.querySelector("#favoriteColorBox").style.backgroundColor = favoriteColor;
    document.querySelector("#favoriteColorBox").innerHTML = favoriteColor;
}