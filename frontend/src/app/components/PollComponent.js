import React, {Component} from "react"

export class PollComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {poll, answer, actions} = this.props
        const {goBack} = actions

        return (
            <div>
                <header className="header">
                    <div className="header__buttons-container">
                        <div className="header__item header__item--back-link" onClick={() => goBack()}></div>
                        <div className="header__item header__item--user"></div>
                    </div>
                </header>

                <div className="content-container">

                    <div className="pull">
                        <div className="pull__question">{poll.question}</div>

                        {poll.answers.map(answer => <label>
                            <input type="radio" name="answer" value="0" checked/>

                            <div className={`pull__item ${answer.type === 'emodji' ? 'emodji' : ''}`}>{answer.value}
                                <div className="pull__icon"></div>
                            </div>
                        </label>)}

                        <button type="submit" className="pull__submit-btn" onClick={() => answer()}>Ответить</button>


                    </div>
                </div>
            </div>


        )
    }
}