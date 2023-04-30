import {render} from "solid-js/web";
import {Plot} from "./Plot"
import "./index.scss";
import {createSignal, onCleanup} from 'solid-js';
import type {PlotProps} from './Plot'
//import {createClient} from 'redis';

//const cleint = createClient();
//client.on('error', err => console.log('Redis Client Error', err));

//await client.connect();

const [data, setData] = createSignal<PlotProps['data']>([{
    x: [],
    y: [],
}]);

let counter = 0;

// Add data every second
const intervalId = setInterval(() => {
    setData(oldData => [{
        x: [...oldData[0].x, counter],
        y: [...oldData[0].y, Math.random() * 10],
    }]);
    counter++;
}, 1000);

onCleanup(() => {
    clearInterval(intervalId);
});

const App = () => (

    <div class="row">
        <Plot data={data()}/>
    </div>
);
render(App, document.getElementById("app"));
