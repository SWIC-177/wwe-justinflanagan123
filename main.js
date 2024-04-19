import { setupCounter } from "./counter";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="p-8">
      <button id="counter" type="button" class="btn"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
