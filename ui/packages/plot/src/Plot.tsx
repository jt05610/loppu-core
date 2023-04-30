import { onMount, createEffect } from 'solid-js';
import type { Component } from "solid-js";
import Plotly from 'plotly.js/dist/plotly';

export type PlotProps = {
    data: {
        x: number[];
        y: number[];
        type?: string;
        mode?: string;
        marker?: { color: string, size: number };
    }[],
    layout?: {
        title: string;
        autosize: boolean;
        margin: {
            l: number;
            r: number;
            b: number;
            t: number;
            pad: number;
        };
    };
};

const defaultLayout = {
    autosize: true,
    margin: {
        l: 50,
        r: 50,
        b: 50,
        t: 50,
        pad: 4,
    },
};

export const Plot: Component<PlotProps> = (props) => {
    let divRef!: HTMLDivElement;
    let layout = props.layout || defaultLayout;

    onMount(() => {
        Plotly.newPlot(divRef, props.data, layout);
    });

    createEffect(() => {
        Plotly.react(divRef, props.data, props.layout || layout);
    });

    return (
        <div ref={divRef} />
    );
};

