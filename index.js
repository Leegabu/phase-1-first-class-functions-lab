// Code your solution in this file!
function returnFirstTwoDrivers(Array){
    return Array.slice(0,2)
}
returnFirstTwoDrivers([`Antonia`,`Nuru`,`Amari`,`Mo`])

function returnLastTwoDrivers(Array) {
    return Array.slice(-2)
}
returnLastTwoDrivers([`Antonia`,`Nuru`,`Amari`,`Mo`])

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];
 
function  createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    }
}
function fareDoubler(fare){
    return fare * 2 ;
}
function fareTripler(fare){
    return fare * 3 ;
}
function selectDifferentDrivers(drivers, selectTwo) {
    if (typeof selectTwo !== 'function') {
      throw new Error('The second argument must be a function');
    }
    let selectedDrivers = selectTwo(drivers);
    return selectedDrivers;
  }
  function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  const drivers = [`Antonia`,`Nuru`,`Amari`,`Mo`];
  const selectedDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
  console.log(selectedDrivers); 
  