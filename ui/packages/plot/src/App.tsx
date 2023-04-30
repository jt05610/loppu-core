import { createSignal, onMount } from 'solid-js';
import { render } from 'solid-js/web';
import Plotly from 'plotly.js/dist/plotly';
import * as d3 from '@plotly/d3';

function PlotlyComponent() {
    let divRef: HTMLDivElement;

    onMount(() => {
        Plotly.newPlot(divRef, [{
            x: [1, 2, 3, 4, 5],
            y: [1, 2, 4, 8, 16]
        }]);
    });

    return (
        <div ref={divRef} />
    );
}

render(() => <PlotlyComponent />, document.getElementById('app'));
