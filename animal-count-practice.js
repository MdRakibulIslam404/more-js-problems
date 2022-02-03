// animal count practice \\
function animalsCount(miles) {
    const first15MilesAnimalDensityPerMile = 20;
    const second25MilesAnimalDensityPerMile = 60;
    const restMilesAnimalDensityPerMile = 120;
    if (miles <= 15) {
        const firstAnimalDensity = miles * first15MilesAnimalDensityPerMile;
        return firstAnimalDensity;
    }
    else if (miles <= 25) {
        const firstAnimalDensity = 15 * first15MilesAnimalDensityPerMile;
        const restMiles = miles - 15;
        const secondAnimalDensity = restMiles * second25MilesAnimalDensityPerMile;
        const totalAnimals = firstAnimalDensity + secondAnimalDensity;
        return totalAnimals;
    }
    else {
        const firstAnimalDensity = 15 * first15MilesAnimalDensityPerMile;
        const secondAnimalDensity = 10 * second25MilesAnimalDensityPerMile;
        const restMiles = miles - 25;
        const restAnimalDensity = restMiles * restMilesAnimalDensityPerMile;
        const totalAnimals = firstAnimalDensity + secondAnimalDensity + restAnimalDensity;
        return totalAnimals;
    }
};
const totalAnimals = animalsCount(30);
console.log(totalAnimals);