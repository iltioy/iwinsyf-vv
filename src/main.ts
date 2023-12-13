import "./style.css";
import { setupScene } from "./scene";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="scene">
    <div class="text">I WISH</div> 
  </div>
`;

setupScene();
