import React, {Component} from "react"
import {connect} from "react-redux"
import {PollComponent} from "../components/PollComponent";
import {bindActionCreators} from "redux";
import * as ActionTypes from "../constants/ActionTypes";

class PollContainer extends Component {
    constructor(props) {
        super(props)
        const {dispatch} = props

        this.polls = [
            {
                question: "Cколько раз вы были на концертах Red Hot Chili Peppers?",
                answers: [
                    {
                        type: "text",
                        value: "Не был"
                    },
                    {
                        type: "text",
                        value: "1-3 раза"
                    },
                    {
                        type: "text",
                        value: "4 и более раза"
                    }
                ]
            },
            {
                question: "Как настроение?",
                answers: [
                    {
                        type: "emodji",
                        value: "😁"
                    },
                    {
                        type: "emodji",
                        value: "😐"
                    },
                    {
                        type: "emodji",
                        value: "😔"
                    }
                ]
            }
        ]
        this.openFire = bindActionCreators(() => ({
            type: ActionTypes.OPEN_FIRE,
        }), dispatch)

        this.state = {
            pollId: 0
        }
        this.nextQuestion = this.nextQuestion.bind(this)
    }

    nextQuestion() {
        if (this.state.pollId >= this.polls.length - 1) {
            this.openFire()
        }

        this.setState(prevState => ({
            pollId: prevState.pollId + 1
        }))
    }

    render() {
        return (<PollComponent poll={this.polls[this.state.pollId]} answer={this.nextQuestion}/>)
    }
}

export default connect()(PollContainer)
