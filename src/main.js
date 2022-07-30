import { Game } from "./game.js";
import readline from 'readline';

let NewGame= new Game();
// celan all terminal for own code
process.stdout.write('\x1Bc');

function run(){
  readline.cursorTo(process.stdout,0,0);
  process.stdout.write(NewGame.print());
  
}

setInterval(run,300);