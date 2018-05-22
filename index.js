function theBeatlesPlay(musicians, instruments){
  var theBeatles = [];
  for (let i = 0; i < musicians.length; i++){
    theBeatles[i] = musicians[i] + " plays " + instruments[i]; 
  }
  return theBeatles;
}