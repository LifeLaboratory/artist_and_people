import React from "react"
import { Provider } from "react-redux"
import AppRouter from "./app/router/AppRouter"
import DevTools from "./app/components/DevTools"

const Root = ({ store , history}) => (
    <Provider store={store}>
        <div>
            <AppRouter history={history}/>
            <DevTools store={store}/>
        </div>
    </Provider>
)

export default Root
