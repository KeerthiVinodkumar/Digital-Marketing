import React, { Component } from "react";

class Branding extends Component {
  render() {
    return (
      <div className="everything">
        <div className="allitemsc">
          <div className="second-container">
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"></img>
          </div>
          <div className="first">
            <h1>What we do</h1>
            <h2>
              Inovative Design &<br />
              Branding
            </h2>
 
            <p>
              We understand our clients bussiness goals <br />
              first then all decisions are made with those
            </p>

            <button>Learn more</button>
            <div class="pagination">
              <a href="#">❮</a>
              <a href="#">❯</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Branding;
