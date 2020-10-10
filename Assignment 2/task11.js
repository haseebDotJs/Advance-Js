let myMarks = [30,45,68,32,45];
let criteria = 30; 
let bonusPoints = 5;

for (let i = 0; i < myMarks.length; i++){
  myMarks[i] = myMarks[i] + bonusPoints
  myMarks[i] < criteria ? console.log("Failed") : console.log("Passed");
}