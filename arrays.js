var chocolateBars = ("snickers" , "hundred grand", "kitkat", "skittles" )

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, things){
  chocolateBars.unshift(things);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, things){
  return [...chocolateBars, things];
}