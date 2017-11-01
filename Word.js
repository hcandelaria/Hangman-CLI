//Packages
const Letter = require ('./Letter')
const Chance = require('chance'),
      chance = new Chance();

//Array of video game to guess
const games = ["Super Smash Bros","Pokemon","The Legend of Zelda","Mario Kart",
                "Animal Crossing","Super Mario 3D Land", "Super Mario Maker",
                "Luigi's Mansion","Fire Emblem","Monster Hunter Generation",
                "Donkey Kong Country Returns","Dragon Quest","Kirbi: Triple Deluxe",
                "Mario & Luigi","Yoshi's Wolly World","Metroid: Samus Returns"];

//Word constructor
class Word {
  constructor() {
    this.tempWord = chance.pickone(games);
    this.word = [];
    this.randomGame();
  }
};

//Functions for Word
Word.prototype.randomGame = function() {
  for(var i = 0; i < this.tempWord.length; i++){
    var newLetter = new Letter(this.tempWord.charAt(i));
    this.word.push(newLetter);
  }
};
Word.prototype.wordGuessed = function() {
  for(var i = 0; i < this.word.length; i++){
    if(!this.word[i].guessed){
      return false
    ;}
  }
  return true;
};
Word.prototype.displayWord = function(){
  var tempWord = '';
  for(var i = 0; i < this.word.length; i++){
    tempWord += this.word[i].getLetter();
  }
  console.log(tempWord);
};

//Export Word
module.exports = Word;
