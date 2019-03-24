import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"

import {ConnectedRouter} from "connected-react-router";
import PrivateRoute from "./PrivateRoute";
import LoginContainer from "../containers/LoginContainer";
import FireContainer from "../containers/FireContainer";
import ChartsContainer from "../containers/ChartsContainer";
import EventsContainer from "../containers/EventsContainer";
import PollContainer from "../containers/PollContainer";

const NoMatch = () => <h2>404 (Not found)</h2>

const Home = () => <h2>Home</h2>

const AppRouter = ({history}) => (
    <ConnectedRouter history={history}>
        <div className={"app_container"}>
            <Switch>
                <Route path="/fire" exact component={FireContainer}/>
                <Route path="/events" exact component={EventsContainer}/>
                <Route path="/charts" exact component={ChartsContainer}/>
                <Route path="/login" exact component={LoginContainer}/>
                <Route path="/poll" exact component={PollContainer}/>

                <Redirect exact from="/" to="/login"/>

                <Route component={NoMatch}/>

            </Switch>
        </div>
    </ConnectedRouter>
)

export default AppRouter
