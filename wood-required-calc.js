// wood required calculator \\

/* 
// products quantity
chair = 12 pcs;
table = 3 pcs;
bed = 1 psc;
door = 2 pcs; 

// per wood needed
chair = 4cft/chair;
table = 7cft/table;
bed = 45cft/bed;
door = 15cft/door;
*/

function woodRequiredCalc(chairQuantity, tableQuantity, bedQuantity, doorQuantity) {
    // wood need per product (cft)
    const perChairWood = 4;
    const perTableWood = 7;
    const perBedWood = 45;
    const perDoorWood = 15;
    // total wood quantity per products
    const totalChairWood = chairQuantity * perChairWood;
    const totalTableWood = tableQuantity * perTableWood;
    const totalBedWood = bedQuantity * perBedWood;
    const totalDoorWood = doorQuantity * perDoorWood;
    // total wood required for all products
    const totalWoodQuantity = totalChairWood + totalTableWood + totalBedWood + totalDoorWood;
    return totalWoodQuantity;
}
const chairTotal = 12;
const tableTotal = 3;
const bedTotal = 1;
const doorTotal = 2;
const totalWoodRequired = woodRequiredCalc(chairTotal, tableTotal, bedTotal, doorTotal);
console.log(totalWoodRequired);