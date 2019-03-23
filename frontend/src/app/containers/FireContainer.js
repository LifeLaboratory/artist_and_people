import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FireComponent} from "../components/FireComponent";
import fetch from "cross-fetch"

class FireContainer extends Component {
    constructor(props) {
        super(props)

        // const {dispatch} = props
        // this.action = bindActionCreators(ActionCreator, dispatch)
        this.state = {clicked: true, count: 0, lastClickDate: null, rating: 0, aura: false}
        this.onFireClick = this.onFireClick.bind(this)
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(prevState => ({rating: prevState.rating > 0 ? prevState.rating - 0.1 : 0}));
        }, 500);
        // store intervalId in the state so it can be accessed later:
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    clickServer() {
        const formData = new FormData()
        formData.set("id_user", 1)
        formData.set("id_concert", 1)

        fetch(`http://192.168.43.35:12451/api/v1/fire`, {
            method: "POST",
            headers: {"Authorization": "application/json"},
            body: formData
        }).then((response) => {
            return response.json()
        }).then(json => {
            const {data} = json
            const {count} = data
            this.setState({
                count: count
            })
        })
            .catch(e => this.text = e)
    }

    onFireClick() {
        const now = new Date()
        const {lastClickDate} = this.state
        const rating = 100 / (now - lastClickDate)

        this.clickServer()
        this.setState({
            clicked: true,
            rating,
            lastClickDate: now
        });

        setTimeout(() => {
            this.setState({
                clicked: false
            });
        }, 100)
    }

    render() {
        return (<FireComponent
            clicked={this.state.clicked}
            rating={this.state.rating}
            count={this.state.count}
            text={this.text}
            onClick={this.onFireClick}/>)
    }
}

export default connect()(FireContainer)
