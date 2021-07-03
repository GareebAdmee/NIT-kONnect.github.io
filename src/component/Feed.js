import React, { useEffect, useState } from "react";
import "../css/Feed.css";
import db from "../firebase";
import Post from "./Post";
import QnAbox from "./QnAbox";

function Feed() {
    const [posts,setPosts]= useState([])
    useEffect(()=>{
        db.collection('questions').orderBy('timestamp',"desc").onSnapshot(snapshot=>setPosts(snapshot.docs.map((doc)=>
        (({
            id:doc.id,
            question:doc.data()
        })))))
    },[])
    return(
    <div className ="Feed">
        <QnAbox/>
        {
        posts.map(({id,question})=>(
            <Post 
            key ={id}
            Id={id}
            image= {question.imageUrl}
            question ={question.question}
            timestamp = {question.timestamp}
            NITuser={question.user}/>
        ))}
        
    </div>
);

}
export default Feed;