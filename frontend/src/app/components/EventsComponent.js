import React, {Component} from "react"

export class EventsComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {actions} = this.props
        const {openFire} = actions

        return (
            <div className="content-container">
                <div className="news-list">
                    <div className="news-list-item news-list__item" onClick={(e) => {
                        openFire()
                    }}>
                        <img src="https://www.2do2go.ru/uploads/ceed1ea18da1b30325280a8824b4cd79.jpg"
                             className="news-list-item__photo"/>

                        <div className="news-list-item__info-wrapper">
                            <div className="news-list-item__name">Skillet</div>
                            <div className="news-list-item__date">23 Апреля, 20:00</div>
                            <div className="news-list-item__place">Adrenaline Stadium</div>
                        </div>
                        <div className="news-list-item__graphic">
                            <img src="img/graphic-1.png" alt=""/>
                        </div>

                    </div>

                    <div className="news-list-item news-list__item" onClick={() => {
                        openFire()
                    }}>
                        <img src="https://metalheadzone.com/wp-content/uploads/2016/11/metallica-quiz.jpg"
                             className="news-list-item__photo"/>

                        <div className="news-list-item__info-wrapper">
                            <a href="#" className="news-list-item__name">METALLICA</a>
                            <div className="news-list-item__date">21 Июля, 18:00</div>
                            <div className="news-list-item__place">БСА Лужники</div>
                        </div>
                    </div>

                    <div className="news-list-item news-list__item" onClick={() => {
                        openFire()
                    }}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZ_ES_Gwn6jQzIPrADUtMhtMjfs0oLrOKs84fY0NoM01tGOk6"
                            className="news-list-item__photo"/>

                        <div className="news-list-item__info-wrapper">
                            <div className="news-list-item__name">BON JOVI</div>
                            <div className="news-list-item__date">31 Мая, 19:00</div>
                            <div className="news-list-item__place">БСА Лужники</div>
                        </div>
                        <div className="news-list-item__graphic">
                            <img src="img/graphic-2.png" alt=""/>
                        </div>
                    </div>

                    <div className="news-list-item news-list__item" onClick={() => {
                        openFire()
                    }}>
                        <img src="https://www.luzhniki.ru/uploads/event/image/285/small_slide_top2.jpg"
                             className="news-list-item__photo"/>

                        <div className="news-list-item__info-wrapper">
                            <a href="#" className="news-list-item__name">RAMMSTEIN</a>
                            <div className="news-list-item__date">29 Июля, 19:30</div>
                            <div className="news-list-item__place">БСА Лужники</div>
                        </div>
                        <div className="news-list-item__graphic">
                            <img src="img/graphic-1.png" alt=""/>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}