import React, {Component} from 'react'
import {connect} from 'react-redux'
import {LoginComponent} from "../components/auth/LoginComponent";
import * as ActionTypes from "../constants/ActionTypes";
import {bindActionCreators} from "redux";

class LoginContainer extends Component {
    constructor(props) {
        super(props)
        const {dispatch} = props

        this.actions = {
            login: bindActionCreators((credentials) => ({
                type: ActionTypes.TRY_LOGIN,
                credentials
            }), dispatch)
        }
    }

    render() {
        const {login} = this.props
        const {pending} = login

        return (<LoginComponent actions={this.actions} pending={pending}/>)
    }
}

export default connect((state) => {
        const {login} = state
        return {login}
    }
)(LoginContainer)
