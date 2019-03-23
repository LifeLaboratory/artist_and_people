import React, {Component} from "react"

export class FireComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {clicked, onClick, count, rating} = this.props

        console.log(rating)

        const fireBlockStyle = {
            opacity: (rating)
        }

        return (
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


        )
    }
}