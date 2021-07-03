import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from "react";
import '../css/Post.css'
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import Modal from 'react-modal';
import "../css/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { selectQuestionId, selectQuestionName, setQuestionInfo } from "../features/questionSlice";
import firebase from "firebase";
import { selectUser } from "../features/userSlice";


  Modal.setAppElement('#root');
function Post({Id, question,image, timestamp,NITuser})
{
    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch();

    const questionId = useSelector(selectQuestionId);
    const questionName = useSelector(selectQuestionName)
     
    const [answer, setAnswer] = useState("");
    const [getAnswers, setGetAnswers] = useState([]);
    useEffect(() => {
        if (questionId) {
          db.collection("questions")
            .doc(questionId)
            .collection("answer")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
              setGetAnswers(
                snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
              )
            );
        }
      }, [questionId]);
  
    const handleAnswer = (e) => {
        e.preventDefault();
    
        if (questionId) {
          db.collection("questions").doc(questionId).collection("answer").add({
            questionId: questionId,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            answer: answer,
            user: user,
          });
        
        console.log(questionId , questionName);
        setAnswer("");
        setOpenModal(false);
        }
      };
    
  
  return (
    <div
      className="post"
      onClick={() =>
        dispatch(
          setQuestionInfo({
            questionId: Id,
            questionName: question,
          })
        )
      }
    >
      <div className="post_info">
        <Avatar
        src= {NITuser.photo}/>
        <h4>{NITuser.displayName?NITuser.displayName:NITuser.email}</h4>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            <div className="post_body">
                <div className= "post_question">
                    <p>{question}</p>
                    <button onClick ={() => setOpenModal(true)}
                    className="post_button">Answer
                    </button>
                    <Modal isOpen={openModal}
                 onRequestClose= {()=>setOpenModal(false)}
                 shouldCloseOnOverlayClick={false}
                 style ={
                     {
                         overlay:{
                             width : 600,
                             height:550,
                             backgroundColor: "rgba(0,0,0,0.8)",
                             zIndex:"1000",
                             top:"50%",
                             left: "50%",
                             marginTop:"-250px",
                             marginLeft:"-350px",
                         },
                     }
                 }
                 >
                          
                              <div className="modal_question">
              <h1>{question}</h1>
              <p>
                asked by
                <span className="name">
                {NITuser.displayName ? NITuser.displayName : NITuser.email}
                </span>{" "}
                on
                <span className="name">
                {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal_answer">
              <textarea
              required 
              value ={answer}
              onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
              />
                                
                                  </div>
                            
                              <div className = "modal__button">
                              <button className="cancel" onClick={()=>setOpenModal(false)}>Cancel</button>

                              <button type ="submit" onClick={handleAnswer} className="add">
                                  Submit Your Answer
                              </button>

                              </div>

                        </Modal>
                      
                 
                </div>
                <div className= "post_ans">
                {getAnswers.map(({ id, answers }) => (
            <p key={id} style={{ position: "relative", paddingBottom: "5px" }}>
              {Id === answers.questionId ? (
                <span>
                  {answers.answer}
                  <br />
                  <span
                    style={{
                      position: "absolute",
                      color: "gray",
                      fontSize: "small",
                      display: "flex",
                      right: "0px",
                    }}
                  >
                    <span style={{ color: "#b92b27" }}>
                      {answers.user.displayName
                        ? answers.user.displayName
                        : answers.user.email}{" "}
                      on{" "}
                      {new Date(answers.timestamp?.toDate()).toLocaleString()}
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ))}

                </div>
                <img src ={image}
                alt=""/>

            </div>
            <div className= "post_footer">
                <div className= "post_footerAction">
                    <ArrowUpwardOutlinedIcon />
                    <ArrowDownwardOutlinedIcon />
                </div>
                <RepeatOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <div className= "post_footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    </div>
    );

}
export default Post;