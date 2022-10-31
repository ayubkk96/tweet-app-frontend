import React, {useState} from "react";
import TweetService from "../services/TweetService";
import axios from "axios";
import {Alert} from "react-bootstrap";
import Tweetbox from "./Tweetbox"

class TweetComponent extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            tweets:[]
        }
    }

    componentDidMount() {

        axios.get("http://localhost:8080/api/v1.0/tweets/all").then((response) => {
            this.setState({tweets: response.data})
        })
    }



    render() {
        return (

            <div>
                <h1 className= "text-center"> TweetApp </h1>
                <table className="table table-striped">
                    <thead>
                    <tr>

                        <td>Handle Name</td>
                        <td>Message</td>
                        <td>Tweet Time</td>
                        <td>Avatar Link</td>
                        <td>Likes Count</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.tweets.map(
                            tweet =>
                                <tr key = {tweet.id}>
                                    <td> {tweet.handleName}</td>
                                    <td> {tweet.message}</td>
                                    <td> {tweet.tweetTime}</td>
                                    <td> <img src={tweet.avatarLink} height={50} width={50}/></td>
                                    <td> {tweet.likesCount}</td>

                                </tr>
                        )
                    }
                    </tbody>
                </table>
                <Tweetbox/>
            </div>
        )
    }
}

export default TweetComponent