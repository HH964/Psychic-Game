var compAlpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
    var numofWins= 0;
        var numofLosses= 0;
            var guessesLeft= 9;
                var choicesGuessed= [];

document.onkeydown= function (event){
    var userInput= event.key;
        var compGuess= compAlpha[Math.floor(Math.random() * compAlpha.length)];
            var choice=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

    // console.log(userInput);
    // console.log(choicesGuessed);
    // console.log(numofWins);
    // console.log(numofLosses);
    // console.log(guessesLeft);
    // console.log();
    if (choice.indexOf(userInput) > -1){
        
        if (userInput === compGuess){
            numofWins++;
            choicesGuessed=[];
            guessesLeft= 9;
        }
        // else{
        //     if (choicesGuessed.includes(userInput)){
        //         var isSameKey= true;
        //         for (var i=0; i<userInput.length; i++){
        //             if(userInput === userInput[i]){
        //                 isSameKey= false;
        //                 break;
        //             }
        //         }
        //     }
        // }

        if (guessesLeft === 0){
            guessesLeft= 9;
            numofLosses++;
            choicesGuessed= [];
        }

        if (userInput != compGuess){
            guessesLeft--;
            choicesGuessed.push(userInput);
        }

        var html =
            "<h1><strong>The Psychic Games</strong></h1>" +
        
            "<hr />" +
            
            "<h3>Guess what letter I'm thinking of</h3>" +
            "<h3>Total number of Wins: " + numofWins +"</h3>" +
            "<h3>Total number of Loses: " + numofLosses + "</h3>" +
            "<h3>Number of guesses left: " + guessesLeft + "</h3>" +
            "<h3>Letters guessed so far: " + choicesGuessed.join(",") + "</h3>"
            document.querySelector("#textChange").innerHTML = html;
    }
}
