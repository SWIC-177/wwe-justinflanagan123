import { CHAMPIONS } from "./src/data";

import { getLastName } from "./src/lib";

const sortedChampions = CHAMPIONS.toSorted((a, b) =>
  getLastName(a).localeCompare(getLastName(b)),
);

/**
 * 1. Sort the CHAMPIONS array by last name
 * 2. SPLIT the fill name into first and last name
 * 3. Compare just the last names
 */

console.log(sortedChampions);
