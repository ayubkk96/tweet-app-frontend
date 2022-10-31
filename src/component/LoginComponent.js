import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {useNavigate} from "react-router-dom";



export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/register', {replace: true}), [navigate]);

    const handleSubmit = async e => {
        e.preventDefault();
        axios.get("http://localhost:8080/api/v1.0/tweets/users/all").then((response) => {
            response.data.forEach((element) => {
                if (username === element.loginId && password === element.password) {
                    const token = "test"
                    setToken(token);
                    localStorage.setItem("handleName", element.loginId)
                }
            })
        })

    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <div>
                <button type="submit" onClick={handleOnClick}>Register</button>
                </div>
            </form>
        </div>
    )
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
};