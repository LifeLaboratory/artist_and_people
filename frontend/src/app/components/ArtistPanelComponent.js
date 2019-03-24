import React, {Component} from "react"

export class ArtistPanelComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {actions, scale, count} = this.props

        const fireButtonStyle = {
            transform: `translateX(-50%) scale(${scale})`
        }

        return (
            <div>

                <header className="header">
                    <div className="header__buttons-container">
                        <div className="header__item header__item--back-link"></div>
                        <div className="header__item header__item--user"></div>
                    </div>
                </header>

                <div className="content-container">
                    <div className="fire-block ">
                        <div className="fire-block__count">
                            <span>{count}</span>
                        </div>
                        <div id="fire" className="fire-button fire-block__button">
                            <div className="fire-button__title">Fire!</div>
                        </div>

                        <div className="fire-block__round-fire" style={fireButtonStyle}></div>

                        <div className="fire-block__fire"></div>
                    </div>

                </div>


                <div className="footer-chart">
                    <div className="footer-chart__title">1000</div>
                    <div className="footer-chart__progress"></div>
                </div>


                <footer className="footer-menu disabled-block">
                    <div className="footer-menu__item footer-menu__item--text"></div>
                    <div className="footer-menu__item footer-menu__item--video"></div>
                    <div className="footer-menu__item footer-menu__item--fire active"></div>
                    <div className="footer-menu__item footer-menu__item--performance"></div>
                    <div className="footer-menu__item footer-menu__item--emergency"></div>
                </footer>

            </div>
        )
    }
}