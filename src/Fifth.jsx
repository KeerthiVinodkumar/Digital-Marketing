import React, { Component } from 'react';

class Fifth extends Component {
    state={
        collection:this.props.Fifth
    }
    render() {
        return (
            <div className="totol">
            <div className="card1" >
            <img className="card-img" src={this.state.collection.photo}
            style={{objectFit: "cover", borderRadius:"20px 20px 0px 0px"}} />
            <div className="card-b">
              <h5 className="card-tit"><h1>{this.state.collection.title}</h1></h5>
              <p className="card-te">{this.state.collection. paragraph}</p>
            </div> 
          </div>
          </div>
        );
    }
}

export default Fifth;