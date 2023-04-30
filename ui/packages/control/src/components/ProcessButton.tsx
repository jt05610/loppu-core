import {Component} from "solid-js";
import {Button} from "./Button";
import {Wait, WaitType} from "./Wait";
import {Color} from "./Color";

type ProcessButtonProps = {
    text: string
    color: Color
}

function waitContent() {
   return <Wait type={WaitType.Border} color={Color.Yellow} text="processing..."/>
}

export const ProcessButton: Component<ProcessButtonProps> = (props) => {
    return (
        <Button content={props.text} secondaryContent={waitContent()} kind={props.color}/>
    )
}
