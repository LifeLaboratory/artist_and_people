import React, {Component} from "react"

export class FireComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {clicked, onClick, count, rating, actions, progress, overallCount} = this.props
        const {goBack} = actions

        const fireBlockStyle = {
            opacity: (rating)
        }

        const progressStyle = {
            width: `${progress}%`
        }

        return (
            <div>
                <header className="header">
                    <div className="header__buttons-container">
                        <div className="header__item header__item--back-link" onClick={() => goBack()}></div>
                        <div className="header__item header__item--user"></div>
                    </div>
                </header>

                <div className="content-container">
                    <div className="fire-block">
                        <div className={`fire-block__count ${rating > 0.8 ? "fire" : ""}`}><span>{count}</span></div>
                        <div id="fire" onClick={onClick} className={`
                    fire-button fire-block__button
                    ${clicked ? "trigger" : ""}
                    `}>
                            <div className="fire-button__title">Fire!</div>
                        </div>

                        <div className="fire-block__fire" style={fireBlockStyle}/>
                    </div>

                </div>

                <div className="footer-chart">
                    <div className="footer-chart__title">{overallCount}</div>
                    <div className="footer-chart__progress" style={progressStyle}/>
                </div>
            </div>

        )
    }
}