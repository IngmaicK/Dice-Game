let randomNumber1 = Math.floor(6 * Math.random() + 1);


randomDiceImage = "dice" + randomNumber1 + ".png";

let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



let randomNumber2 = Math.floor(6 * Math.random() + 1);
randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);