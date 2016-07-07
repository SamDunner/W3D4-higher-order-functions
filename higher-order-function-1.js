var lyrics = [];

function map(arr, callback) {
  for(word of arr) {
    lyrics.push(callback(word))
  }
}

map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });

console.log(lyrics)

//[6, 7, 2, 5, 3]