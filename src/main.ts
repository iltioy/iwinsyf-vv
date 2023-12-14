import "./style.css";
import { setupScene } from "./scene";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="scene">
    <div class="textWrapper row">
      <div class="text">I WISH</div> 
    </div>
    <div class="furcation disabled"></div>
  </div>
`;

setupScene();
