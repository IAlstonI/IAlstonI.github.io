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
            (answer > 9){
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