import React, {useState, Component } from "react"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import "./login-register.css"
import axios from 'axios'

class Login extends Component {
    constructor(props){
      super(props);
      this.state={
      username:'',
      password:''
      }
    }

    handleClick() {
        console.log("handling...")
        var apiBaseURL = "http://127.0.0.1:8000/api/users";
        axios.get(apiBaseURL).then(
            res => {
                console.log(res.data)
            }
        )
    }


    render() {
        return (
            <div className = "outer">
                <div className= "container">
                    <h1>Login</h1>
                    <MuiThemeProvider>
                    <div>
                    {/* <AppBar
                        title="Service Booking"
                    /> */}
                    <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Username"
                        onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                    <br/>
                        <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                    </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Login;