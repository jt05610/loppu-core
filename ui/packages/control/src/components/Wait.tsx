import {Component} from "solid-js";
import {Color} from "./Color";

export enum WaitType {
    Growing = "grow",
    Border = "border"
}

type WaitProps = {
    type: WaitType
    color: Color
    text: string
}

export const Wait: Component<WaitProps> = (props) => {
    return (
        <div class={"spinner-" + props.type + " text-" + props.color} role="status">
            <span class="visually-hidden">{props.text}</span>
        </div>
    )
}