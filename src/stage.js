export default class Stage{
 
  constructor(size,character){
    this.Schema=[];
    this.createSchema(size,character);
    this.PutBorderSchema(size);
    this.scenario = this.GenerateBoard(size);

  }
  createSchema(size,character){
    for (let row = 0; row < size; row++) {
      this.Schema[row] = [];
      for (let column = 0; column < size; column++) {
        this.Schema[row][column] = character;
      }
    }
  }

  PutBorderSchema(size){
    for (let i = 0; i < size; i++) {
      this.Schema[0][i] = '---';
      this.Schema[size - 1][i] = '---';
      this.Schema[i][0] = ' | ';
      this.Schema[i][size - 1] = ' | ';
    }
    this.Schema[0][0] = ' ╔-';
    this.Schema[0][size - 1] = '-╗ ';
    this.Schema[size - 1][0] = ' ╚-';
    this.Schema[size - 1][size - 1] = '-╝ ';
    return this.Schema;
  }

  GenerateBoard(size){
    let ScenarioBuild= '';
    for(let i=0;i<size;i++){
      for(let j=0;j<size;j++){
        ScenarioBuild+=this.Schema[i][j];
      }
      ScenarioBuild+='\n';
    }
    return ScenarioBuild;
  }

  getStage(){
    return this.scenario;
  }
  
}