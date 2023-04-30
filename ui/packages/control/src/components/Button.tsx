import {Component} from "solid-js";
import {Color} from "./Color";

type ButtonProps = {
    text: string
    kind: Color;

};

export const Button: Component<ButtonProps> = (props) => {
    return (
        <button type="button" class={"btn btn-" + props.kind}>{props.text}</button>
    )
}

