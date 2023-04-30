import {Component} from "solid-js";

export enum ButtonKind {
    Primary = "primary",
    Secondary = "secondary",
    Success = "success",
    Danger = "danger",
    Warning = "warning",
    Info = "info",
    Light = "light",
    Dark = "dark",
    Link = "link"
}

type ButtonProps = {
    text: string
    kind: ButtonKind;

};

export const Button: Component<ButtonProps> = (props) => {
    return (
        <button type="button" class={"btn btn-" + props.kind}>{props.text}</button>
    )
}

