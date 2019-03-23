import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ChartsComponent} from "../components/ChartsComponent";

class ChartsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {points: []}
        this.fetchPoints = this.fetchPoints.bind(this)
    }

    componentDidMount() {
        setInterval(this.fetchPoints, 1000)
    }

    fetchPoints() {
        fetch('http://192.168.43.35:12451/api/v1/fire')
            .then((response) => {
                return response.json()
            })
            .then(json => {
                this.setState({points: json.data})
            })
    }

    render() {
        return (<ChartsComponent points={this.state.points}/>)
    }
}

export default connect()(ChartsContainer)
