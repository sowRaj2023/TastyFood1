import {Component} from "react"
import Cookies from "js-cookie"
import {Redirect} from "react-router-dom"
import "./index.css"

class LoginForm extends Component{
    state = {
        username:'',
        password:'',
        showErrorMsg:false,
        errorMsg:""
    }
    onLoginSuccess =jwtToken =>{
        Cookies.set("jwt_token",jwtToken,{expires:30})
        const {history} = this.props
        history.replace("/")

    }

    onSubmitFailure = errorMsg =>{
        this.setState({
            showErrorMsg:true,
            errorMsg
        })
    }

    onChangeUsername = event => {
        this.setState({username: event.target.value})
      }
    
      onChangePassword = event => {
        this.setState({password: event.target.value})
      }
      
      onSubmitForm = async event =>{
        event.preventDefault()
        const {username,password} = this.state
        const userDetails = {username,password}
        const url = "https://apis.ccbp.in/login"
        const options = {
            method:'POST',
            body:JSON.stringify(userDetails)
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        console.log(response)

        if(response.ok === true){
            this.onLoginSuccess(data.jwt_token)
        }else{
            this.onSubmitFailure(data.error_msg)
        }
      }
      renderPasswordField = () => {
        const {password} = this.state
        return (
          <>
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="password-input-filed"
              value={password}
              placeholder="Enter Password"
              onChange={this.onChangePassword}
            />
          </>
        )
      }
    
      renderUsernameField = () => {
        const {username} = this.state
        return (
          <>
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="username-input-filed"
              value={username}
              placeholder="Enter Username"
              onChange={this.onChangeUsername}
            />
          </>
        )
      }
    

    render(){
        const jwtToken = Cookies.get("jwt_token")

        if(jwtToken !== undefined){
            return <Redirect to="/" />
        }

        const {showErrorMsg,errorMsg} = this.state

        return(
         <div className="loginform-details-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showErrorMsg && <p className = "error-msge">*{errorMsg}</p>}
        </form>
         </div>
        )
    }
}

export default LoginForm
