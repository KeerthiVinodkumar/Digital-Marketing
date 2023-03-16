import React, { Component } from 'react';

class Brand extends Component {
    state ={};
    
    render() {
        return (
            <div className="main-container">
        <div className="border">
          <h1>
            Digital branding<br></br> & Advertising
          </h1>
          <br></br>
          we understand our clients bussiness goals first<br></br> and then all
          decisions made with those
        </div>
        <div className="videos-container">
          <div className="video">
            <iframe className="youvi" src="https://www.youtube.com/watch?v=RNh8VHc8qkk" tittle="youtube video" allowFullScreen></iframe>
            <iframe className="youvi" src="https://www.youtube.com/embed/KJe7yDTEDTU?controls=0" tittle="youtube video" allowFullScreen></iframe>
            <iframe className="youvi" src="https://www.youtube.com/embed/dJQn4DqzMVQ?controls=0" tittle="youtube video" allowFullScreen></iframe>
          </div>
        </div>
      </div>
        );
    }
}

export default Brand;