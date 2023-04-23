// function to return the first two drivers from a given array of drivers
function returnFirstTwoDrivers(driversArray) {
    return driversArray.slice(0, 2);
  }
  
  // function to return the last two drivers from a given array of drivers
  function returnLastTwoDrivers(driversArray) {
    return driversArray.slice(-2);
  }
  
  // array of functions to choose from (in this case, just two)
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // function generator to create fare multiplier functions
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  // function to return the first two drivers from a given array of drivers
  function returnFirstTwoDrivers(driversArray) {
    return driversArray.slice(0, 2);
  }
  // function to return the last two drivers from a given array of drivers
  function returnLastTwoDrivers(driversArray) {
    return driversArray.slice(-2);
  }
  // function to apply a given function to an array of drivers
  function selectDifferentDrivers(driversArray, returnFunction) {
    return returnFunction(driversArray);
  }
  // example usage of each function
  const driversArray = ["Bob", "Alice", "John", "Anna"];
  console.log(returnFirstTwoDrivers(driversArray)); // should log ["Bob", "Alice"]
  console.log(returnLastTwoDrivers(driversArray)); // should log ["John", "Anna"]
  console.log(selectingDrivers); // should log [returnFirstTwoDrivers, returnLastTwoDrivers]
  
  const fareDoubler = createFareMultiplier(2); // creates a new function that doubles the fare
  console.log(fareDoubler(10)); // should log 20
  
  const fareTripler = createFareMultiplier(3); // creates a new function that triples the fare
  console.log(fareTripler(10)); // should log 30
  
  console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers)); // should log ["Bob", "Alice"]
  console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers)); // should log ["John", "Anna"]