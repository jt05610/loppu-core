import {Component} from "solid-js";

type WaitProps = {

}

export const Wait: Component<WaitProps> = (props) => {
    return (
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    )
}