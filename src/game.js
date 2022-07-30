import Score from "./score.js";
import Stage from "./stage.js";

export class Game{
  constructor(){
    this.size=25;
    this.character= ' . ';
    this.StageStructure= new Stage(this.size+2,this.character);
    this.StageScore=new Score(this.size);
  }
  print(){
    return this.StageStructure.getStage()+this.StageScore.printScore()+'\n';
  }

}