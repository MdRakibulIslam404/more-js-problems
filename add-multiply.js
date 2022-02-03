/*
chairWood = 3cft/chair;
tableWood = 10cft/table;
bedWood = 50cft/bed;
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    // total wood required
    const totalWoodQuantity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWoodQuantity;
};
const firstOption = woodCalculator(1, 1, 1);
console.log(firstOption);