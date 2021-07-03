import { Add } from "@material-ui/icons";
import React from "react";
import '../css/SidebarOptions.css';
function SidebarOptions() {
    return (
        <div className = "SidebarOptions">
            <div className = "SidebarOption">
                <img 
                src= "https://static.vecteezy.com/system/resources/previews/001/252/133/non_2x/light-bulb-icon-vector.jpg"
                alt= "" width="25" height="20"/>
                <p>Ideas</p>
             </div>
             <div className = "SidebarOption">
                <img 
                src= "https://images.shiksha.com/mediadata/images/1488190632phpzn94a5.jpeg"
                alt= "" width="25" height="20"/>
                <p>NIT's Culture</p>
             </div>
             <div className = "SidebarOption">
                <img 
                src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WF05Nz1-0dGeDHa5Cl1Nj7rKKv_aO8oN6qzom8is_UbASZM26p5WBsFvKXJ43d_v3to&usqp=CAU"
                alt= "" width="25" height="20"/>
                <p>College Experiencs</p>
             </div>
             <div className = "SidebarOption">
                <img 
                src= "https://appliedmachinelearning.files.wordpress.com/2018/04/interview_exp.jpg"
                alt= "" width="25" height="20"/>
                <p>Interview Experiencs</p>
             </div>
             <div className = "SidebarOption">
                <img 
                src= "http://questionsofdifference.com/wp-content/uploads/2020/04/opportunity3.jpg"
                alt= "" width="25" height="20"/>
                <p>Opportunities</p>
             </div>
             <div className = "SidebarOption">
                <img 
                src= "https://spiderimg.amarujala.com/assets/images/2016/09/05/job_1473068678.jpeg"
                alt= "" width="25" height="20"/>
                <p>Internships/Jobs</p>
             </div>
             <div className = "SidebarOption">
                <img 
                src= "https://icon-library.com/images/discover-icon/discover-icon-7.jpg"
                alt= "" width="25" height="20"/>
                <Add />
                <p>Discover</p>
             </div>
        </div>
    );

}
export default SidebarOptions