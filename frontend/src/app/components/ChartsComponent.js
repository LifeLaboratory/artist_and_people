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
                    brush="#eaf0f6"
                    axes={[
                        {primary: true, type: "linear", position: "bottom"},
                        {type: "linear", position: "left", stacked: true}
                    ]}
                />
                <span>150</span>
            </div>
        )
    }
}