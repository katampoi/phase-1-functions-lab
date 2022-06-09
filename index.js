// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    // ternary operator 
    return (someValue > 42 ? someValue-42: 42-someValue)

  }
  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    return (someValue > 42 ? (someValue-42)*264: (42-someValue)*264)
  }
  function distanceTravelledInFeet(start, destination) {
    return (start<destination ? (destination-start)*264:(start-destination)*264)
  }
  function calculatesFarePrice(start, destination) {
    return(distanceTravelledInFeet(start, destination)<=400 ? 0 : distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000 ? 
    (distanceTravelledInFeet(start, destination)-400) * 0.02: distanceTravelledInFeet(start, destination) >2000 && distanceTravelledInFeet(start, destination) <= 2500 ? 
    25:  distanceTravelledInFeet(start, destination) >2500 ? 'cannot travel that far':" ")
  }
