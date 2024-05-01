import { CHAMPIONS, BELTS } from "./src/data";

import { getLastName } from "./src/lib";

const sortedChampions = CHAMPIONS.toSorted((a, b) =>
  getLastName(a).localeCompare(getLastName(b)),
);

const CHAMPIONSHIPS = BELTS.map((title, index) => ({
  title,
  champion: CHAMPIONS[index],
}))
  .sort((a, b) => a.champion.localeCompare(b.champion))
  .filter((championship) => championship.champion !== "Vacant Title");

/**
 * 1. Sort the CHAMPIONS array by last name
 * 2. SPLIT the fill name into first and last name
 * 3. Compare just the last names
 */

console.log(sortedChampions, CHAMPIONSHIPS);
