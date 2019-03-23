import {applyMiddleware, compose, createStore} from "redux"
import {createLogger} from "redux-logger"
import createSagaMiddleware from "redux-saga"
import DevTools from "../components/DevTools"
import mySaga from "../middleware/sagas"
import createRootReducer from "../reducers";
import {routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";

const history = createBrowserHistory()

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(
        createRootReducer(history),
        compose(
            applyMiddleware(routerMiddleware(history), sagaMiddleware, createLogger()),
            DevTools.instrument()
        )
    )

    sagaMiddleware.run(mySaga)

    return {store, history}
}

export default configureStore
