import {render} from "solid-js/web";

import "./index.scss";
import {Button} from "./components/Button";
import {Color} from "./components/Color";
import {ProcessButton} from "./components/ProcessButton";
import {CheckBox} from "./components/CheckBox";

const App = () => (
    <div className="grid gap-3">
        <div className="p-2 g-col-6">
            <Button content="Button" secondaryContent="Clicked button" kind={Color.Danger}/>
        </div>
        <div class="p-2 g-col-6">
            <ProcessButton text="Process button" color={Color.Teal}/>
        </div>
        <div className="p-2 g-col-6">
            <CheckBox text="Check box"/>
        </div>
    </div>
);

render(App, document.getElementById("app"));
