import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import * as ActionTypes from "../constants/ActionTypes";
import {ArtistPanelComponent} from "../components/ArtistPanelComponent";

class ArtistPanelContainer extends Component {
    constructor(props) {
        super(props)

        this.fetchFireActor = this.fetchFireActor.bind(this)
        this.state = {count: 0, scale: 0}
    }

    componentDidMount() {
        setInterval(this.fetchFireActor, 1000)
    }

    fetchFireActor() {
        fetch('http://192.168.43.35:12451/api/v1/fireactor?id_user=1&id_concert=1')
            .then((response) => {
                return response.json()
            })
            .then(json => {
                this.setState({count: json.count_fire, scale: json.data.fire})
            })
    }


    render() {
        const {dispatch} = this.props

        return (<ArtistPanelComponent

            count={this.state.count}
            scale={this.state.scale}
            actions={{
                openPoll: bindActionCreators(() => ({
                    type: ActionTypes.OPEN_POLL,
                }), dispatch)
            }}/>)
    }
}

export default connect()(ArtistPanelContainer)
