//Packages
const inquirer = require ('inquirer');
const Word = require ('./Word')
const chalkPipe = require('chalk-pipe');

inquirer.registerPrompt('chalk-pipe', require('inquirer-chalk-pipe'));

//Var
var guessingWord = new Word();
var hangmanObject = {
  smsCorrectGame : () => {console.log(chalkPipe('bgGreen.#fff')('CORRECT!'));},
  smsCorrect : () => {console.log(chalkPipe('green')('CORRECT!'));},
  smsIncorrect : () => {console.log(chalkPipe('bgRed.#cccccc')('INCORRECT!'));},
  smsQuestion : () => {return (chalkPipe('#6c91ff')('Enter a letter please:'));},
  smsIntro : () => {console.log(chalkPipe('#6c91ff.underline')('Guess this video game.'));}
};

//Playing hangman
hangmanCli = () =>{
  if(!guessingWord.wordGuessed()){
    //Guess Letter
    inquirer.prompt([
      {
        name: 'letter',
        message: hangmanObject.smsQuestion()
      }
    ]).then(function (answers) {
      var correct = false;
      for(var i = 0; i < guessingWord.word.length; i++){
        if(guessingWord.word[i].guessingLetter(answers.letter.charAt(0))){
          correct = true;
        }
      }

      if(correct) hangmanObject.smsCorrect();
      else hangmanObject.smsIncorrect();

      guessingWord.displayWord();
      hangmanCli();
    });
  }
  else{
    hangmanObject.smsCorrectGame();
    guessingWord = new Word();
    hangmanObject.smsIntro();
    guessingWord.displayWord();
    hangmanCli();
  }
};
hangmanObject.smsIntro();
guessingWord.displayWord();
hangmanCli();
