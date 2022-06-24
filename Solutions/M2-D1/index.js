/* EXERCISE 1 
        Translate this recipe into code by using variables, strings, numbers and console.log()
         
        - spaghetti 400g,
        - guanciale 250g,
        - very fresh egg yolks 6,
        - aged grated Pecorino Romano cheese 50g,
        - black pepper 4g,


        To make classic carbonara, first cut the guanciale into 1cm layers, then into long strips.
        Combine the egg yolks with the finely grated Pecorino Romano.
        Roast the black pepper on a pan until it smokes and sizzles, and combine a small amount of it to the yolks and chees mixture, set aside the rest.
        Brown the strips of guanciale for 3 minutes at medium heat, then 1 minune on high heat til crisp, then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down.
        Cook the pasta with a pinch of salt in the water (guanciale is already very salty);
        set aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente.
        Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat:
        this will create a creamy sauce with the pasta starch contained in that water.
        TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix together.
        Add the yolk and cheese mixture, stirring rapidly. In the warm pan with the hot pasta, the eggs will cook gently and become creamy.
        It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs.
        Add the remaining roasted black pepper and serve immediately.
        */

let spaghetti = 400;
let guanciale = 250;
let eggYolks = 6;
let pecorinoRomano = 50;
let blackPepper = 4;
let water = 4000;
let salt = 15;

console.log("INGREDIENTS");
console.log("\nSPAGHETTI: ", spaghetti); // \n is for creating a new line empty line in the console
console.log("\nGUANCIALE: ", guanciale);
console.log("\nPECORINO ROMANO: ", pecorinoRomano);
console.log("\nRAW BLACK PEPPER: ", blackPepper);
console.log("\nWATER: ", water);
console.log("\nSALT: ", salt);

// taking a pinch (1g) from whatever amount blackPepper is at the time
let pinchOfBlackPepper = blackPepper - 1;
// removing a pinch from blackPepper amount
blackPepper -= 1;

let eggsAndCheese = eggYolks + pecorinoRomano;
console.log("\nINCORPORATED EGG YOLKS AND PECORINO: ", eggsAndCheese);
let rawEggSauce = eggsAndCheese + pinchOfBlackPepper;
console.log("\nADDED A PINCH OF PEPPER: ", rawEggSauce);

// cooking the spaghetti
let pot = water + salt;
console.log("\nBOILING THE WATER WITH A LITTLE SALT: ", pot);
pot += spaghetti;
console.log("\nDROPPING SPAGHETTI IN THE WATER: ", pot);
let pastaWater = 350 + 2; // we are taking just 350ml of water and a bit of salt dissolved in it
console.log("\nSETTING ASIDE A LITTLE BIT OF STARCHY, SALTY, PASTA WATER: ", pastaWater);
pot -= pastaWater; // updating pot quantity by removing the cup of water we set aside
salt -= 2; // updating salt quantity with the amount removed with the pastaWater

let absorbingRate = 1.8; // pasta will absorb 117% of its weight on average

let absorbedWater = spaghetti * absorbingRate; // the amount of water that will be incorporated with the pasta

let drainedWater = water - pastaWater - absorbedWater; // the amount of water that will be drained from the pot

let cookedSpaghetti = pot - drainedWater - salt; // draining the cooked spaghetti

console.log("\nSPAGHETTI ARE READY: ", cookedSpaghetti);

let fryPan = guanciale + pastaWater; // creating the cream with pasta starch in the pasta water
console.log("\nCREATING THE SAUCE WITH GUANCIALE AND PASTA WATER: ", fryPan);
console.log(blackPepper);
let carbonara = cookedSpaghetti + fryPan + rawEggSauce + blackPepper; // rawEggs will cook with the remaining heat of the pasta and the pan
console.log("\nSERVING CARBONARA: ", carbonara);
