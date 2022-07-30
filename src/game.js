import Stage from "./stage.js";

export class Game{
  constructor(){
    this.size=25;
    this.character= '   ';
    this.StageStructure= new Stage(this.size+2,this.character);
  }
  print(){
    return 'SCORE\n'+this.StageStructure.getStage();
  }

}