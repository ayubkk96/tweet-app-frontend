import React, {useState} from "react";
import axios from "axios";

export default function Tweetbox() {
    const [message, setMessage] = useState();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    }

    const handleSubmit = async e => {

        e.preventDefault();
        let username = localStorage.getItem("handleName")
        let items = {
            "handleName": username,
            "message" : message,
            "tweetTime" : Date.now(),
            "avatarLink" : "https://cataas.com/cat",
            "likesCount" : 0

        }
        let itemsJson = JSON.stringify(items);
        console.log(itemsJson)
        axios.post("http://localhost:8080/api/v1.0/tweets/" + username + "/add",
            JSON.stringify(items), {headers: headers}).then(function (response) {
            console.log(response.data);
        })
            .catch(function (error) {
                console.log(error)
            })
    }
    return (
        <div>

        <form onSubmit={handleSubmit}>
            <label>
                Write your tweet here, {localStorage.getItem("handleName")}:
                <textarea rows="4" cols="50" onChange={e => setMessage(e.target.value)} />
            </label>
            <button className="btn" type="submit">
                Submit
            </button>
        </form>
        </div>
    );
}