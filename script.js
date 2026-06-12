const FavMovie = "Avengers";
let guess = prompt("Enter Your Guess(Favorite Movie)");

while(true){
    if(guess=="quit"){
        console.log("Sorry! You Quit the game.");
        break;
    }
    else if(guess==FavMovie){
        console.log("Congrats You guessed Right");
        break;
    }
    else{
        guess = prompt("TRY TO GUESS AGAIN...");
    }
}