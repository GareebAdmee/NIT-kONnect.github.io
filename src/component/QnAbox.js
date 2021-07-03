import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import '../css/QnAbox.css';
import { selectUser } from "../features/userSlice";
function QnAbox() {
    const user = useSelector(selectUser)
    return (
    <div className= "QnAbox">
        <div className = "box_info">
            <Avatar src={user.photo} />
            <h5> {user.displayName} </h5>
        </div>
        <div className = "box_QnA">
            <p>What's your question?</p>
        </div>
    </div>
    );
}
export default QnAbox