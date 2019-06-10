var compAlpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
    var numofWins= 0;
        var numofLosses= 0;
            var guessesLeft= 9;
                var choicesGuessed= [];

document.onkeydown= function (event){
    var userInput= event.key;
        var compGuess= compAlpha[Math.floor(Math.random() * compAlpha.length)];
            var choice=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

    if (choice.includes(userInput) > -1){
        
        if (userInput === compGuess){
            numofWins++;
            choicesGuessed=[];
            guessesLeft= 9;
            console.log(userInput);
        }

        if (guessesLeft === 0){
            guessesLeft= 9;
            numofLosses++;
            choicesGuessed= [];
        }

        if (userInput != compGuess){
            guessesLeft--;
            choicesGuessed.push(userInput);
        }
    }
}
