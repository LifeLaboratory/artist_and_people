import React, {Component} from "react"
import {Redirect, Route} from "react-router-dom"
import {connect} from "react-redux";

const PrivateRoute = ({component: Component, auth: auth, ...rest}) => (
    <Route {...rest} render={(props) => (
        auth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login'/>)}/>
)

const mapStateToProps = (state) => {
    return {
        auth: {
            isAuthenticated: state.auth.authenticated
        }
    }
}

export default connect(mapStateToProps)(PrivateRoute);
