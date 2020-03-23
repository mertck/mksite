function plPlayers(plObject){
  this.name = plObject.name;
  this.rank = plObject.rank;
  this.goals = plObject.goals;
  this.nationality = function(){
console.log(`They are from:  ${this.other}`)

  }
}
let plObjects = [];
plScorers.forEach(function(element, index){
    const plObject = new plPlayers(element);
    plObjects.push(plObject);

})

console.log(plObjects);
