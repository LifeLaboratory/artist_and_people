import React, {Component} from "react"
import {Chart} from "react-charts";

export class ChartsComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {points, actions} = this.props

        return (
            <div>
                <header className="header">
                    <div className="header__buttons-container">
                        <div className="header__item header__item--back-link"></div>
                        <div className="header__item header__item--user"></div>
                    </div>
                </header>
                <div style={{
                    width: "600px",
                    height: "400px"
                }}>

                    <Chart
                        data={[{label: 'test', data: points}]}
                        brush={{style: {color:'#fff'}}}
                        series={{ type: 'area' }}
                        axes={[
                            { primary: true, position: 'bottom', type: 'time' },
                            { position: 'left', type: 'linear', stacked: true },
                        ]}
                        getSeriesStyle={series => ({
                            color: `#f58864`
                        })}
                        primaryCursor
                        secondaryCursor
                        tooltip
                    />

                </div>
                <div className="footer-chart">
                    <div className="footer-chart__title">1000</div>
                    <div className="footer-chart__progress"></div>
                </div>
            </div>

        )
    }
}