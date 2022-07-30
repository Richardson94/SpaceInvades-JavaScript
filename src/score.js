export default class Score{
  constructor(size){
    this.arrayScore = ['S', 'C', 'O', 'R', 'E', ':', ' ', '0', '0', '0', '0', '0'];
    this.arraySpace = [];
    this.arrayLives = ['L', 'I', 'V', 'E', 'S', ':', ' ', 'X', ' ', 'X',' ', 'X'];
        this.arraySpace = this.putSpaceScore(size);
        this.points = 0;
        this.lives = 3;
  }
  putSpaceScore(sizeValue) {
    for (let size = 0; size < (sizeValue) - (4 + 4); size++) {
        this.arraySpace.push('   ');
    }
    return this.arraySpace;
}
printScore() {
  let printed = '  ';
  for (let i = 0; i < this.arrayScore.length; i++) {
      printed += this.arrayScore[i];
  }
  for (let i = 0; i < this.arraySpace.length; i++) {
      printed += this.arraySpace[i];
  }
  for (let i = 0; i < this.arrayLives.length; i++) {
      printed += this.arrayLives[i];
  }
  return printed ;
}
}