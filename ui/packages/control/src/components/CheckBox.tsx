import {Component, createSignal} from "solid-js";

const [toggled, toggle] = createSignal(false);

type CheckBoxProps = {
    text: string
}

export const CheckBox: Component<CheckBoxProps> = (props) => {
    return (
        <div className="form-check">
            <input
                onClick={() => toggle(!toggled())}
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked={toggled()}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
                {props.text}
            </label>
        </div>
    )
}
