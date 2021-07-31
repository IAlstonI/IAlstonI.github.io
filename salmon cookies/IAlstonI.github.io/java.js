let User = prompt("Hello what's your name?");

alert("Hi there, " + User + " my name's Alston.");

x = prompt("Do you like math?");
alert("Okay.")
function askQuestion() {
    let answer = true;
    while (answer) {
        answer = prompt("What's 3x3?");
        if (answer == 9) {
            alert("That's correct.");
            answer = false;
        }
        else if
            (answer > 9) {
            alert("Your number is too high.");

        }
        else {
            alert("That's wrong.");
        }

        //alert("That's also wrong.");
        //answer = true;

    }
}


askQuestion();

alert("I got another question.");
let correctNumber = 3
let correctAnswer = true;
while (correctAnswer) {
    let newAnswer = prompt("What's 7-4?");
    if (newAnswer > correctNumber) {

        alert("That's too high.");
    }


    else if
        (newAnswer < correctNumber) {
        alert("That's too low.");
    }




    else {
        alert("That's right.");
        correctAnswer = false;
    }

}
alert("Good job.");

alert("We ain't done yet.");
let newQuestion = 8
let newGuess = true;
while (newGuess) {
    let newOption = prompt("What's 72/9?");
    if (newOption > newQuestion) {

        alert("That's incorrect, try again.");
    }


    else if
        (newOption < newQuestion) {
        alert("That's incorrect, try again.");
    }

    else {
        alert("That's right.")
        newGuess = false;
    }



}
alert("Your good at math!");
alert("Here's a harder one.");
let newProblem = 15
let newGuess2 = true;
while (newGuess2) {
    let newGuess3 = prompt("What's 52 - 82 + 45?");
    if (newGuess3 > newProblem) {
        alert("That ain't right.");
    }


    else if
        (newGuess3 < newProblem) {
        alert("Try again.");
    }

    else {
        alert("You got it.");
        newGuess2 = false;
    }
}

alert("Alright, last one.");
alert("This one's a challenge!");
let newProblem2 = 438
let newGuess4 = true;
while (newGuess4) {
    let newGuess5 = prompt("35 x 12 + 126 / 7");
    if (newGuess5 < newProblem2) {
        alert("You're way off.");
    }
    else if
        (newGuess5 > newProblem2) {
        alert("You'll never get this right lol.");
    }
    else {
        alert("I can't believe you solved that.");
        newGuess4 = false;
    }
} alert("Your smarter than I thought.");






//let theyGuess = prompt("Do you like math?")
//if ()
//alert("")




//alert("I like that form too!")
//function askshenron() {
    //var shenron = false;
    //while (shenron == false) {
      //  shenron = prompt("How many Dragon Balls do you need to make a wish?");
        //if (shenron < 7) {
            //alert("Incorrect, try again.");
            //shenron = false;


        //}
        //else {
            //alert("Correct, you need 7 Dragon Balls!");

       // }
    //}
//}
//askshenron();