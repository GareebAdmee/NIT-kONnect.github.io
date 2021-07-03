import React, { useState } from 'react'
import HomeIcon from '@material-ui/icons/Home'
import '../css/Navbar.css'
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined'
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined'
import PeopleAltOutlinedIcon  from '@material-ui/icons/PeopleAltOutlined'
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from '@material-ui/icons/Search'
import Avatar from '@material-ui/core/Avatar'
import LanguageIcon from '@material-ui/icons/Language'
import { Button, Input } from '@material-ui/core';
import "../css/Navbar.css";
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import Modal from 'react-modal'
import db,{auth} from "../firebase";
import { ExpandMore, Link } from '@material-ui/icons'
import firebase from 'firebase'
Modal.setAppElement("#root");
function Navbar() {
    const user= useSelector(selectUser)
    const [openModal, setOpenModal]=useState(false)
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    const questionName = input;
    const handleQuestion = (e) => {
        e.preventDefault();
        setOpenModal(false);
    
        if (questionName) {
          db.collection("questions").add({
            user: user,
            question: input,
            imageUrl: inputUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
        }
    
        setInput("");
        setInputUrl("");
      };
    return (
        <div className ="Navbar">
        <div className="qHeader_logo">
        <img src="https://1.bp.blogspot.com/-yN68iYnyELE/YL344Z1VUdI/AAAAAAAAABY/UvDvzpAosX0exwUebJS34T7eyaEF_DcjgCLcBGAsYHQ/s364/qna_logo.png" alt=""/>
         <div className = "qHeader_icons">
             <div className ="qHeader_icon">
                 <HomeIcon/>
             </div>
             <div className ="qHeader_icon">
               <FeaturedPlayListOutlinedIcon/>  
             </div>
             <div className ="qHeader_icon">
               <AssignmentTurnedInOutlinedIcon/>  
             </div>
             <div className ="qHeader_icon">
                <PeopleAltOutlinedIcon/>
             </div>
             <div className ="qHeader_icon">
                <NotificationsOutlinedIcon/> 
             </div>
             <div className ="qHeader_input">
                <SearchIcon/> 
                <input type = "text" placeholder ="Ask and get enriched"/>
             </div>
             <div className = "qHeader_Rem">
                 <div className = "qHeader_avatar">
                     <Avatar onClick={()=>auth.signOut()}src= {user.photo}/>
                 </div>
                 <LanguageIcon/>
                 <Button onClick={()=> setOpenModal(true)}>Ask Question</Button>
                 <Modal isOpen={openModal}
                 onRequestClose= {()=>setOpenModal(false)}
                 shouldCloseOnOverlayClick={false}
                 style ={
                     { 
                         overlay:{
                             width : 700,
                             height: 600,
                             backgroundColor: "rgba(0,0,0,0.8)",
                             zIndex:"1000",
                             top:"50%",
                             left: "50%",
                             marginTop:"-300px",
                             marginLeft:"-350px",
                         },
                     }
                 }
                 >
                          <div className="modal__title">
                              <h5>Ask Question</h5>
                              <h5>Share Link</h5>
                              </div>
                              <div className="modal__info">
                                  <Avatar className= "avatar"
                                  src = {user.photo}
                                  />
                                  <p> {user.disPlayName? user.disPlayName:user.email}asked
                                  </p>
                                  <div className= "modal__scope"><PeopleAltOutlinedIcon/>
                                  <p>Public</p>
                                  <ExpandMore/>
                                  </div>
                              </div>
                              <div className= "modal__Field">
                                  <Input
                                   
                                   value={input}
                                   onChange={(e) => setInput(e.target.value)}
                                  type ="text"
                                  placeholder="Ask Questions and Get Enriched"
                                  />
                              <div className= "modal__fieldLink">
                                  <Link/>
                                  <input 
                                  value={inputUrl}
                                  onChange={(e) => setInputUrl(e.target.value)}
                                  type ="text"
                                  placeholder="Include link of context if needed (Optional)"
                                  ></input>
                                  </div>
                              </div>
                              <div className = "modal__buttons">
                              <button className="cancel" onClick={()=>setOpenModal(false)}>close</button>
                              <button type ="submit" onClick={handleQuestion} className="add">
                                  Submit Your Query
                              </button>

                              </div>

                        
                      </Modal>
                  </div>
                  </div>
                  </div>
              </div>
    );
}
export default Navbar;