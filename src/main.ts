import "./style.css";
import { setupScene } from "./scene";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="scene noselect">
    <div class="textWrapper row">
      <div class="text"></div> 
    </div>
    <div class="furcation disabled"></div>
  </div>
`;

setupScene();
