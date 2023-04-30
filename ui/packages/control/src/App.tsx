import {render} from "solid-js/web";

import "./index.scss";
import {Button} from "./components/Button";
import {Color} from "./components/Color";
import {ProcessButton} from "./components/ProcessButton";

const App = () => (
  <div class="row">
    <ProcessButton text="Start" color={Color.Teal}/>
  </div>
);

render(App, document.getElementById("app"));
