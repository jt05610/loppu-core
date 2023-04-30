import {Component, createSignal} from "solid-js";
import {Color} from "./Color";

const [toggled, toggle] = createSignal(true);

type ButtonProps = {
    content: any
    secondaryContent: any
    kind: Color;
};

export const Button: Component<ButtonProps> = (props) => {
    return (
        <button onClick={() => toggle(!toggled())} type="button" class={"btn btn-" + props.kind}>
            {toggled() ? props.content : props.secondaryContent}
        </button>
    )
}

