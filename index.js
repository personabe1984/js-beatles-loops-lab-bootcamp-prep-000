function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];
  for (let i = 0; i < musicians.length; i++) {
    theBeatles[i] = musicians[i] + " plays " + instruments[i]; 
  }
  return theBeatles;
}

function johnLennonFacts(facts) {
  let n = facts.length;
  
  while(n > 0) {
    facts[n] = facts[n] + "!!!";
    n--;
  }
  
  return facts;
}

function iLoveTheBeatles() {
  
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

console.log(johnLennonFacts(facts));
