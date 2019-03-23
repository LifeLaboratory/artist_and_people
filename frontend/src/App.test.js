import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { MemoryRouter } from "react-router-dom"
import WelcomeComponent from "./app/components/WelcomeComponent"
import { configure, mount } from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<App/>, div)
    ReactDOM.unmountComponentAtNode(div)
})

test("invalid path should redirect to 404", () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
            <App/>
        </MemoryRouter>
    )
    expect(wrapper.find(WelcomeComponent))
        .toHaveLength(1)
})
