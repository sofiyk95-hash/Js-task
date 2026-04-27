// Messi Goals

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Make Negative

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

// Game Move

function move (position, roll) {
  return position + roll * 2;
}

// Personalized Message

function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}

// Keep Hydrated

function liters(time) {
  return Math.floor(time * 0.5);
}

// Opposites Attract

function lovefunc(flower1, flower2) {
  if (flower1 % 2 !== flower2 % 2) {
    return true;
  } else {
    return false;
  }
}
// DNA to RNA Conversion
function DNAtoRNA(dna) {
 let rna = dna.replaceAll("T","U");
  return rna;
  
}

// Convert a string
function stringToArray(string){
return string.split(" ");


}
// Add giveMeFive function to filter keys and values
function giveMeFive(obj) {
 let result = [];
for (let key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result;
}
