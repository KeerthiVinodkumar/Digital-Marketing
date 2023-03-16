import React, { Component } from 'react';

class Second extends Component {
state={
    collection:this.props.Second
}

    render() {
        return (
          <div className="totol-container">
            <div className="card" >
            <img className="card-img-top" src={this.state.collection.photo}
            style={{objectFit: "cover", borderRadius:"20px 20px 0px 0px"}} />
            <div className="card-body">
              <h5 className="card-title"><h2>{this.state.collection.title}</h2></h5>
              <p className="card-text">{this.state.collection. paragraph}</p>
              <a href="#" className="btn btn-primary">{this.state.collection.some}</a>
            </div>
          </div>
          </div>
        //   <div className="card" style="width: 18rem;">
        //   <img  className="card-img-top" src={this.state.collection.photo} alt="..."
        //   style={{objectFit: "cover", borderRadius:"20px 20px 0px 0px"}}/>
        //   <div className="card-body">
        //     <h5 className="card-title">{this.state.collection.title}</h5>
        //     <p className="card-text">{this.state.collection. paragraph}</p>
        //     <a href="#" className="btn btn-primary">{this.state.collection.some}</a>
        //   </div>
        // </div>
        );
    }
}

export default Second;