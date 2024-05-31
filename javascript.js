const userInputString = prompt(
  "Please enter the Froyo flavors you would like separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const arrFlavors = userInputString.split(",");

const CountFlavors = {};
for (let i = 0; i < arrFlavors.length; i++) {
  const flavors = arrFlavors[i];
  if (!(flavors in CountFlavors)) {
    CountFlavors[flavors] = 1;
  } else {
    CountFlavors[flavors] += 1;
  }
}

console.log(CountFlavors);
