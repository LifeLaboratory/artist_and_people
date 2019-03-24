import React, {Component} from 'react'
import {connect} from 'react-redux'
import {EventsComponent} from "../components/EventsComponent";
import {bindActionCreators} from "redux";
import * as ActionTypes from "../constants/ActionTypes";

class EventsContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }


    render() {
        const {dispatch} = this.props

        return (<EventsComponent actions={{
            openPoll: bindActionCreators(() => ({
                type: ActionTypes.OPEN_POLL,
            }), dispatch)
        }}/>)
    }
}

export default connect()(EventsContainer)
