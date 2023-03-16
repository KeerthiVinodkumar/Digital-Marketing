import React, { Component } from 'react';
import { AiFillTwitterCircle ,AiFillLinkedin} from "react-icons/ai";
import {BsFacebook,BsGithub} from "react-icons/bs";
class Teamchild extends Component {

  state ={
    informantion:this.props.Teamchild
  }

    render() {
        return (
            <div>
                <div className="wholecontainer">
            <div className="card4" >
            <img className="card-top" src={this.state.informantion.photo}/>
             {/* style={{objectFit: "cover", borderRadius:"20px 20px 0px 0px"}} */}
            <div className="c-body">
              <h3 className="c-title">{this.state.informantion.name}</h3>
              <h5 className="c-role">{this.state.informantion.role}</h5>
              <p className="c-text">{this.state.informantion. description}</p>
              <div className="icons">
          <a href="#">
            <AiFillTwitterCircle />
          </a>
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <BsGithub/>
          </a>
          <a href="#">
            <AiFillLinkedin/>
          </a>
          </div>
            </div>
          </div>
          
          </div>
         
            </div>
        );
    }
}

export default Teamchild;