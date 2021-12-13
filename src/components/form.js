import React from "react";
import "./Form.css"

function form() {
  return (

    <div className="slash"><br/>

      <div style={{textAlign: "center",fontSize: "25px",fontFamily:"Open Sans, sans-serif",fontWeight: "600",color:"#fffffe"}}>

        <h1>Get Started with Classoos Pro</h1>

      </div>

      <div style={{textAlign: "center",fontSize: "23.5px",fontFamily: "Open Sans, sans-serif",fontWeight: "400",color:"#fffffe"}}>
        <p>Give your students less to carry (and less to forget!), better access
          to learning, and save upto 70% with <br />
          digital textbooks on classoos - exact replicas of the physical books
          used in the classroom!
        </p>
      </div><br />

      
      <div className="kolokm" >

        <form >
          <label for="fname">First Name</label><br/>
          <input type="text" id="fname" name="firstname" className="inputf" placeholder="Your name.." style={{width:"180px"}}/>

          <div style={{marginTop:"-75px",marginLeft:"12em"}}>
            <label for="lname">Last Name</label>
          </div>
          

          <div style={{marginLeft:"12em", marginTop:"-3px"}}>
            <input type="text" id="lname" name="lastname"  className="inputf" placeholder="Your last name.." style={{width:"180px"}}/>
          </div>

          <div style={{marginTop:"-75px",marginLeft:"384px"}}>
            <label for="country">Role</label>
          </div>

          <div style={{marginLeft:"384px",marginTop:"-3px"}}>
            <select id="country" name="country" style={{width:"180px"}}  className="inputf">
                <option value="australia">Select Role</option>
                <option value="canada">Teacher</option>
                <option value="usa">Head of Department</option>
                <option value="australia">Deputy Head/Assistant Head</option>
                <option value="canada">Head Teacher</option>
                <option value="usa">Head of eLearning</option>
                <option value="australia">Director of IT</option>
                <option value="canada">IT Technician</option>
                <option value="usa">Coordinator</option>
                <option value="australia">Other</option>
            </select>
          </div>

          <div>
              <label>School/Institute Name</label>  
          </div>

          <div>
            <input type="text"  className="inputf" placeholder="School/Institute Name" style={{width:"278px"}}></input>
          </div>

          <div style={{marginLeft:"51%",marginTop:"-76px"}}>
            <label>Country</label>
          </div>

          <div style={{marginTop:"-3px", marginLeft:"51%"}}>
            <select style={{width:"270px",}}  className="inputf">
              <option value="australia">Country</option>
              <option value="canada">India</option>
              <option value="usa">australia</option>
              <option value="australia">Pakistan</option>
              <option value="canada">Maldives</option>
            </select>
          </div>

          <div>
            <label>Email</label>  
          </div>

          <div>
            <input type="text"  className="inputf" placeholder="Email" style={{width:"278px"}}></input>
          </div>

          <div style={{marginLeft:"51%",marginTop:"-76px"}}>
            <label>Phone</label>
          </div>

          <div style={{marginTop:"-3px", marginLeft:"51%"}}>
          <input type="text"  className="inputf" placeholder="Phone" style={{width:"270px"}}></input>
          </div>

          <div>
            <label>What timescales are you working too?</label>
          </div>

          <div>
            <input type="radio" />
            <label>Now</label>&nbsp;&nbsp;&nbsp;&nbsp;
          
            <input type="radio" />
            <label>Next Term</label>&nbsp;&nbsp;&nbsp;&nbsp;
         
            <input type="radio" />
            <label>Next Academic Year</label>

          </div><br/>

          <div>
            <label>Ask about Classoos or tell us which book you need (title + ISBN or Classoos code)</label>
            <textarea style={{width:"97%",height:"60px"}}></textarea>
          </div>

          <input type="submit"  className="inputf" value="Submit"/>

        </form>
      </div>

      
    </div>
  );
}

export default form;
