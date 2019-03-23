import React, {Component} from "react"

export class LoginComponent extends Component {
    constructor(props) {
        super(props)

        const {actions} = props
        const {login} = actions
        this.tryLogin = login

        this.onSubmit = this.onSubmit.bind(this)
        this.onLoginChange = this.onLoginChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        // Try to login
        this.tryLogin({login: this.login, password: this.password})
    }

    onLoginChange(e) {
        this.login = e.target.value
    }

    onPasswordChange(e) {
        this.password = e.target.value
    }

    render() {
        const {pending} = this.props

        return (
            <div className="content-container">
                <form className="auth-form" onSubmit={this.onSubmit}>
                    <div className="auth-form__title">Вход</div>

                    <input placeholder="Login" required className="auth-form__input" onChange={this.onLoginChange}/>
                    <input placeholder="Password" required type="password" className="auth-form__input" onChange={this.onPasswordChange}/>

                    <button type="submit" className="auth-form__submit-btn">Войти</button>

                    <a href="" className="auth-form__forgot-pass-link"/>
                </form>
            </div>

        )
    }
}