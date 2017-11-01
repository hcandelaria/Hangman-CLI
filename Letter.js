//Letter constructor
class Letter {
  constructor(letter) {
    //Var
    this.letter = letter;
    this.guessed = false;
    this.placeHolder = this.placeHolderCheck(letter);
  }
}
//Functions for letter
Letter.prototype.guessingLetter = function (g) {
  if(!this.guessed && this.letter.toLowerCase() === g.toLowerCase()) {
    this.placeHolder = this.letter;
    this.guessed = true;
    return true;
  }
  return false;
};
Letter.prototype.getLetter = function () {
  return this.placeHolder;
};
Letter.prototype.placeHolderCheck = function(letter){
  if(letter.length === 1 && letter.match(/[a-z]/i)){
    return '_';
  }
  else{
    this.guessed = true;
    return letter;
  }
}
//Exports Letter
module.exports = Letter;
