// Code your solution in this file!
// index.js

// Function that returns the first two drivers from an array of drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Function that returns the last two drivers from an array of drivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing the first two and last two driver functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function that returns a function to multiply a fare by a given integer
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // Function that doubles the fare using createFareMultiplier
  const fareDoubler = createFareMultiplier(2);
  
  // Function that triples the fare using createFareMultiplier
  const fareTripler = createFareMultiplier(3);
  
  // Function that selects either the first two or last two drivers based on the selector function
  const selectDifferentDrivers = function(drivers, selectorFunction) {
    return selectorFunction(drivers);
  };
  
  // Testing the functions
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  
  console.log(returnFirstTwoDrivers(drivers)); // ['Antonia', 'Nuru']
  console.log(returnLastTwoDrivers(drivers));  // ['Amari', 'Mo']
  
  console.log(selectingDrivers[0](drivers));  // ['Antonia', 'Nuru']
  console.log(selectingDrivers[1](drivers));  // ['Amari', 'Mo']
  
  console.log(createFareMultiplier(4)(10));    // 40
  
  console.log(fareDoubler(10));                // 20
  console.log(fareTripler(10));                // 30
  
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));  // ['Amari', 'Mo']
  
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  