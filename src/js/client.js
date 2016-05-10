import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Layout from "./pages/Layout";
import Questions from "./pages/QuestionsPage";
import Responses from "./pages/ResponsesPage";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Questions}></IndexRoute>
            <Route path="responses" component={Responses}></Route>
        </Route>
    </Router>, app);


