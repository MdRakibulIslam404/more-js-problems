// animal count \\
function animalCount(miles) {
    const animalDensityFirst10Miles = 10; // proti mile e 10 ta
    const animalDensitySecond10Miles = 50; // proti mile e 50 ta
    const animalDensityRestMiles = 100; // proti mile e 100 ta
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles; // joto mile dibo tar sathe 10 gun arki
        return count;
    }
    else if (miles <= 20) {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles; // ager 10 mile alada korlam
        const restMiles = miles - 10; // 10 mane prothpm 10 mile
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const secondDenseAnimals = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20; // 20 mane second 20 mile
        const restDenseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
        return totalAnimals;
    }
};
const animals = animalCount(23);
console.log(animals);