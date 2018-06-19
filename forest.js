// 1. A burning cell turns into an empty cell
// 2. A tree will burn if at least one neighbor is burning
// 3. A tree ignites with probability f even if no neighbor is burning
// 4. An empty space fills with a tree with probability p

function Forest(w, h) {
  this.w = 16; //size of a cell
  this.columns = floor(w / this.w);
  this.rows = floor(h / this.w);
  this.cells = []; //stores the positions of "trees"

  //"T" offset config
  var o = (this.w/2) - textWidth("T")/2;

  //Probabilities
  this.fc = 100000; //Flame chance
  this.tc = 20000; //Tree chance

  for (var i = 0; i < this.rows; i++) {
    this.cells[i] = []; //create nested grid == " empty Forest"
    for(var j = 0; j < this.columns; j++ ) {
      this.cells[i][j] = 0; //init the whole grid as empty trees
    }
    //0 = empty,
    //1 = tree,
    //2 = on fire
  }

  this.show = function() {
    //Draw forest border
    stroke(255);
    noFill();

    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) { //idk why this has to be <= but it do
        //offset
        var x = i * this.w;
        var y = j * this.w;
        strokeWeight(1);
        rect(x, y, this.w, this.w); //Draw grid cell
        strokeWeight(0);

        //Config color
        //If cell has a tree
        if (this.cells[i][j] == 1) { fill(255); } //white
        //If cell has a burning tree
        else if (this.cells[i][j] == 2) { fill(255, 0, 0); } //red            //TODO usea counter to keep track of how many "steps" it has been burning

        text("T", x + o, y - o);
        noFill();
        //console.log(i + ", " + j);

      }
    }
  }

  this.simulate = function() {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.columns; j++) {
        var ignite = floor( random(this.fc) );
        var grow = floor( random(this.tc) );

        if(grow == 1) { this.cells[i][j] = 1; } //Random grow TODO obfuscate
        if(ignite == 2) { this.cells[i][j] = 2; }
        if(this.hasNeighbor(i, j) && grow < this.tc/3) { //if has a neighbor, chance for tree growth increases
          this.cells[i][j] == 1;
        }


      }
    }
  }

  //checks if the cell at [x][y] has a neighboring "tree"
  this.hasNeighbor = function(x, y) {
    //var result = false; //default to false
    if(x < 1 || x > this.columns-1 || y < 1 || y > this.rows-1 ) { return false; } //avoid IOB error

    return this.cells[x+1][y] == 1 || this.cells[x-1][y] == 1 || this.cells[x][y+1] == 1 || this.cells[x][y-1] == 1;
  }

}
