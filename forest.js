// 1. A burning cell turns into an empty cell
// 2. A tree will burn if at least one neighbor is burning
// 3. A tree ignites with probability f even if no neighbor is burning
// 4. An empty space fills with a tree with probability p

function Forest(w, h) {
  this.w = 16; //size of a cell
  this.columns = floor(w / this.w);
  this.rows = floor(h / this.w);
  this.cells = [this.columns/w]; //stores the positions of "trees"


  //Probabilities
  this.fc = 1000; //Flame chance
  this.tc = 200; //Tree chance

  for (var i = 0; i < this.cells.length; i++) {
    this.cells[i] = []; //create nested grid == " empty Forest"
    //0 = empty,
    //1 = tree,
    //2 = on fire
  }

  this.show = function() {
    //Draw forest border
    noFill();
    strokeWeight(10);
    stroke(140, 0, 0); //TODO change this color
    rect(0, 0, w, h);

    noFill();
    stroke(255);
    strokeWeight(1);

    for (var i = 0; i < this.columns; i++) {
      for (var j = 0; j < this.rows; j++) {
        rect(i * this.w, j * this.w, this.w, this.w);

        if this.cells[i][j] == 1) { //If cell has a tree
          fill(255);
          text("T", i * this.w, j * this.w);
        } else if (this.cells[i][j] == 2) { //If cell has a burning tree
          //TODO usea counter to keep track of how many "steps" it has been burning
          fill(255, 0, 0);
          text("T", i * this.w, j * this.w);
        }
      }
    }
  }

  this.simulate = function() {
    for (var i = 0; i < this.cells.length; i++) {
      for (var j = 0; j < this.cells[i].length; j++) {
        var ignite = random(this.fc);
        var grow = random(this.tc);

        if (grow == 1) {
          this.cells[i][j] = 1;
        }

      }
    }
  }

}
