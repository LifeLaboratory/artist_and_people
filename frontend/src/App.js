import React, { Component } from "react"
import "./App.css"
import "./scss/main.scss"
import Root from "./Root"
import configureStore from "./app/store/configureStore"

const {store, history} = configureStore()

class App extends Component {
    render() {
        return <Root store={store} history={history}/>
    }
}

export default App
