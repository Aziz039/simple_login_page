import React, { Component } from 'react';
import APP_CONSTANTS from "../../../core/app_constants";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formControls: {

            }
        }
    }
    // add email and password to the state everytime user change the input
    handleChange = async (e) => {
        await this.setState({
            ...this.state,
            formControls: {
                ...this.state.formControls,
                [e.target.name]: e.target.value
            }
        });
    }
    // handle login button
    handleSubmit = async (e) => {
        // prevent the page from reloading
        e.preventDefault();
        // chack if the values are not NULL
        if (!this.state.formControls.username || !this.state.formControls.password) {
            let emptyFieldsAlert = `Enter email and password`;
            alert(emptyFieldsAlert);
        }  else {
            //TODO: validate the email and password 
            //TODO: create a request to the DB to check credentials
            console.log(this.state.formControls);
            //TODO: If successfull add the user ID and token to the session storage
            sessionStorage.setItem(APP_CONSTANTS.CONFIG.sessionStorage.isLogged, true);
            //TODO: navigate to the dashboard if logged in
            window.location.href = "/dashboard";
        }
    }
    render() {
        return (
            <div>
                <form>
                    <input placeholder="Email.." id="username" type="text" name="username" onChange={this.handleChange}/>                
                    <input placeholder="Password.." id="password" type="password" name="password" onChange={this.handleChange}/>
                    <input  value="login" type="submit" onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}

export default Login;