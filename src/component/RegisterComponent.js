import React, {useCallback, useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function RegisterComponent(){

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    }
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);

    // States for registration
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    // Handling the email change
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleUserName = (e) => {
        setUserName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError(true);
        } else {
            let items = {
                "firstName": firstName,
                "lastName" : lastName,
                "email": email,
                "loginId" : userName,
                "password" : password,
                "confirmPassword" : password,
                "contactNumber" : "3003",
                "username": userName,
                "loggedIn" : false
            }
            //items.put(firstName, lastName, email, userName, password, password, "3003", userName, true)
            let itemsJson = JSON.stringify(items);
            console.log(itemsJson)
            axios.post("http://localhost:8080/api/v1.0/tweets/register",
                JSON.stringify(items), {headers: headers}).then(function (response) {
               console.log(response.data);
               })
               .catch(function (error) {
                   console.log(error)
               })

            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {userName} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div>
                <h1>User Registration</h1>
            </div>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                {/* Labels and inputs for form data */}

                <label className="label">First Name</label>
                <input onChange={handleFirstName} className="input"
                       value={firstName} type="text" />

                <label className="label">Last Name</label>
                <input onChange={handleLastName} className="input"
                       value={lastName} type="text" />

                <label className="label">User Name</label>
                <input onChange={handleUserName} className="input"
                       value={userName} type="text" />


                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                       value={email} type="email" />

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                       value={password} type="password" />

                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>

                <button onClick={handleOnClick} type={"button"} >
                    Home
                </button>
            </form>
        </div>
    );
}