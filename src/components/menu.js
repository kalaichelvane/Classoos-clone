import React from "react";
import { GrFormSearch } from "react-icons/gr";
import logo from "../Image/katbook (2).png"

function menu() {


  return (
    
    

    <div className="back"><br/><br/>


      <div style={{position:"fixed",backgroundColor:"#009ada",width:"100%",height:"100px"}}>        
      
        <div className="menu">
          <img src={logo} style={{paddingTop:"2em"}}/>
        </div>

        <div className="list">
          <p> Textbooks Store</p> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p> Buy For Your Students</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p> Features</p>&nbsp;&nbsp;&nbsp;&nbsp;


          <div class="dropdown">
            <p class="drop">Help Hub</p>
            <div class="dropdown-content">
              <a href="#">Get Help</a>
              <a href="#">Tutorial Videos</a>
              <a href="#">Guides</a>
              <a href="#">Technical</a>
              <a href="#">FAQ</a>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p> Blog</p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p>My account </p> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


          <div className="free">
            <p>FREE Sign up</p>
          </div>
        </div>
      </div><br/><br/><br/><br/><br/><br/>




      <div className="head">
        <h1>
          
          Buy online textbooks for your students <br /> and if you're a student,
          buy for your own use
        </h1>
      </div>
      <div className="para">
        <p>Get started with a FREE trial on thousands of textboxes</p>
      </div>
      <br />
      <br />

      <div className="but">
        <p>Teacher? - Start Here</p>
      </div>

      <div className="but1">
        <p>Student? - Start Here</p>
      </div>

      <div>
        <div>
          <input
            id="query"
            type="text"
            name="query"
            className="search"
            placeholder="Search textbook by name, author, isbn"
            required=""
          ></input>
        </div>
        <div className="isea">
          <GrFormSearch className="sea" />
        </div>
      </div>

      <div className="save">
        <p>Save up to 66% with online textbooks</p>
      </div>


    </div> 
  );
}
export default menu;