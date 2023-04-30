import {Component, createSignal} from "solid-js";
import {Color} from "./Color";

type ButtonProps = {
    content: any
    secondaryContent: any
    kind: Color;
};

export const Button: Component<ButtonProps> = (props) => {
    const [toggled, toggle] = createSignal(true);
    return (
        <button onClick={() => toggle(!toggled())} type="button" class={"btn btn-" + props.kind}>
            {toggled() ? props.content : props.secondaryContent}
        </button>
    )
}

