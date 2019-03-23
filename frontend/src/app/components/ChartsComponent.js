import React, {Component} from "react"
import {Chart} from "react-charts";

export class ChartsComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {points} = this.props

        return (
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
        )
    }
}