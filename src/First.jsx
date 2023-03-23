import React, { Component } from 'react';
import Second from './Second';
class First extends Component {

    state={
        collection:[
            {
                title: "Great supportnjnmnmnnmnn",
        paragraph:
          "we strive to understand our ients bussiness goals first then all decisions are made with those",
        some: "learn more",
        photo:"https://imgggggggages.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
      },
      {
        title: "Pixel-Perfect Drsign",
        paragraph:
          "we strive to understand our ients bussiness goals first then all decisions are made with those",
        some: "learn more",
        photo:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
      },
      {
        title: "SEO Optimized",
        paragraph:
          "we strive to understand our ients bussiness goals first then all decisions are made with those",
        some: "learn more",
        photo:"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
            }
        ]
    }
    render() {
        return (
            <div className='main'>
                     <div className="market">
          <h1>
            Marketing <br></br>& Design
          </h1>
          <p>
           As a Digital marketing agency.we strive <br></br> to understand our
            client's bussiness goals first then <br></br> all decisions are made
            with those
          </p>
        </div>
         <div className="row">
        {this.state.collection.map((prod) => {
          return <Second key={prod.title} Second={prod}></Second>;
        })}
        </div>

            </div>
        )
    }
}

export default First;