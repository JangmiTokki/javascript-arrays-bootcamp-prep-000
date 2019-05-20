var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element)
{
  [...array, element]
  
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
}

function addElementToEndOfArray(array, element)
{
  [element, ...array]
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element)
}