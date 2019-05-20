var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element)
{
    array = [e, element]
  
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element)
{
  [element, ...array]
  return array
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element)
  return array
}