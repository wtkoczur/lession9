import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "../Home";
import { Movies } from "../Movies";
import { NavItems } from "../NavItems";
import Places from "../Places";


const Content = () => {
    return (
        <Router>
            <div>
                <NavItems />
                <Switch>
                    <Route exact path="/">
                            <Home />
                    </Route>
                    <Route  path="/movies">
                        <Movies />
                    </Route>
                    <Route  path="/places">
                        <Places />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Content;