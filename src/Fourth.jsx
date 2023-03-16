import React, { Component } from "react";
import Fifth from "./Fifth";

class Fourth extends Component {
  state = {
    collection: [
      {
        title: "Fully Responsive.",
        paragraph:
          "Our client's business goals first then all decisions are made with those.",
        photo:
          "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
      },
      {
        title: "SEO Optimized.",
        paragraph:
          "Our client's business goals first then all decisions are made with those.",
        photo:
          "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
      },
      {
        title: "Awesome Features.",
        paragraph:
          "Our client's business goals first then all decisions are made with those.",
        photo:
          "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
      },
      {
        title: "Layer Slider.",
        paragraph:
          "Our client's business goals first then all decisions are made with those.",
        photo:
          "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
      },
      {
        title: "Layer Slider.",
        paragraph:
          "Our client's business goals first then all decisions are made with those.",
        photo:
          "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
      },
      {
        title: "Layer Slider.",
        paragraph:
          "Our client's business goals first then all decisions are made with those.",
        photo:
          "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-3680219.jpg&fm=jpg",
      },
    ],
  };

  render() {
    return (
      <div className="man">
        <div className="mark">
          <div className="mark-1">
          <h1>
            Marketing <br></br>& Design
          </h1>
          <p>
            As a Digital marketing agency.we strive <br></br> to understand our
            client's bussiness goals first then <br></br> all decisions are made
            with those
          </p>
          </div>
        <div className="explore">
            <p>Explore content</p>
        </div>
        </div>
        <div className="rows" >
          {this.state.collection.map((prods) => {
            return <Fifth key={prods.title} Fifth={prods}></Fifth>;
          })}
        </div>
      </div>
    );
  }
}

export default Fourth;
