import { BELTS, CHAMPIONS } from "./src/data";

const beltsWithoutWomen = BELTS.filter(
  (belt) => belt !== "Women's World Champion",
);

const vacantTitle = CHAMPIONS.filter((belt) => belt !== "Vacant Title");

console.log(beltsWithoutWomen, vacantTitle);
