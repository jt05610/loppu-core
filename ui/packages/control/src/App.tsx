import {render} from "solid-js/web";

import "./index.scss";
import {Button} from "./components/Button";
import {Color} from "./components/Color";
import {ProcessButton} from "./components/ProcessButton";
import {CheckBox} from "./components/CheckBox";

const App = () => (
    <div class="row">
        <div class ="col">
            <ProcessButton text="Process button" color={Color.Teal}/>
        </div>
        <div class="col">
            <CheckBox text="Check box"/>
        </div>
    </div>
);

render(App, document.getElementById("app"));
