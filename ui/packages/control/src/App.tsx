import {render} from "solid-js/web";

import "./index.scss";
import {Button, ButtonKind} from "./components/Button";

const App = () => (
  <div class="row">
    <Button text="testButton" kind={ButtonKind.Secondary}/>
  </div>
);

render(App, document.getElementById("app"));
