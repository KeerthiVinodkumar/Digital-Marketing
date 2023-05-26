import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            
                    <div className="header-container" > 
                {/* <div className="heading">
                <h1>
                    #Digital <br/> Marketing<br/> Agency
                </h1>
                       <p>As a digital marketing agency we strive to understand<br/> our clients business first then all decisions are <br/> made with those</p>
                </div>
                <div className="social-Media">
                <div className="facebook">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </div>
                <div className="instagram">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </div>
                <div className="twitter">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </div>
                </div>
                <div className="getstarted">
                      <button>Get Started
                        <a href='#'>❯</a>
                      </button>

                </div> */}
                <div className="image-1">
                <div className="image-flex">
                <img src={require('./girl.png')} />
                </div>
                <div className="social-Media">
                <div className="facebook">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </div>
                <div className="instagram">
                <FontAwesomeIcon icon={faInstagram }></FontAwesomeIcon>
                </div>
                <div className="twitter">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </div>
                </div>
                <div className="heading">
                <h1>
                    #Digital  Marketing Agency
                </h1>
                       <p>As a digital marketing agency we strive to understand<br/> our clients business first then all decisions are <br/> made with those</p>

                       <div className="button-1">
                        <div className="button-2">
                        <button>Get Started</button>
                        </div>
                        <div className="button-3">
                        <button>watchdemo</button>
                       </div>
                       </div>
                </div>
                </div>

              
            </div>
         
        );
    }
}

export default Header;