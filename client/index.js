import React from "react";
import {render} from "react-dom";
import configureStore from "./redux/store";
import Page from "b:Page";


const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);
const rootElement = document.getElementById('root');

render(
    <Page store={store}/>,
    rootElement
);
