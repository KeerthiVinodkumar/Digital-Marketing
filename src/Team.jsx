import React, { Component } from 'react';
import Teamchild from './Teamchild';

class Team extends Component {
    state={
        information:[
            {
             name:"Justin Pierre",
             role:"Devoloper",
             description:"our clients bussiness goals first then all",
             photo:"https://img.freepik.com/premium-photo/perfect-smile-handsome-guy-portrait-facial-hair-skin-care-concept-handsome-face-handsome-man-unshaven-face-stylish-hair-caucasian-man-urban-background-bearded-man-casual-style_474717-5574.jpg",   
            },
            {
                name:"Maha Chy",
                role:"Developer",
                description:"our clients bussiness goals first then all",
                photo:"https://img.freepik.com/premium-photo/perfect-smile-handsome-guy-portrait-facial-hair-skin-care-concept-handsome-face-handsome-man-unshaven-face-stylish-hair-caucasian-man-urban-background-bearded-man-casual-style_474717-5574.jpg", 
            },
            {
                name:"Maher Zain",
                role:"Developer",
                description:"our clients bussiness goals first then all",
                photo:"https://img.freepik.com/premium-photo/perfect-smile-handsome-guy-portrait-facial-hair-skin-care-concept-handsome-face-handsome-man-unshaven-face-stylish-hair-caucasian-man-urban-background-bearded-man-casual-style_474717-5574.jpg",
            },
            {
                name:"Mahmud Hasan",
                role:"Developer",
                description:"our clients bussiness goals first then all",
                photo:"https://img.freepik.com/premium-photo/perfect-smile-handsome-guy-portrait-facial-hair-skin-care-concept-handsome-face-handsome-man-unshaven-face-stylish-hair-caucasian-man-urban-background-bearded-man-casual-style_474717-5574.jpg", 
            },
        ]

    }
    render() {

        return (
            <div className='team'>
            <div className='para1'>
                <center>
                    <h1> Our Special <br></br> Team</h1>
                    <p>we've strive to understand our clients bussiness<br></br> goals first then all </p>
                </center> 
            </div>
            <div className='row1'>
               {this.state.information.map((prod)=>{
                return <Teamchild key={prod.name} Teamchild={prod}>

                </Teamchild>
               })}
            </div>
            </div>
        );
    }
}

export default Team;