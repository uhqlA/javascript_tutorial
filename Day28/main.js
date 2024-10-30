import { car1, car2,driverCar } from "./car";
import { track1,track2,buildingTrack } from "./track";
import { buildBuilding,building1,building2 } from "./building";



console.log(buildingTrack(track2))

console.log(buildBuilding(building1))

console.log(driverCar(car1))

document.getElementById("output").innerHTML= 
`
<p> ${buildBuilding(building2)}</p>
<p> ${buildingTrack(track1)}</p>
<p> ${driverCar(car2)}</p>
`