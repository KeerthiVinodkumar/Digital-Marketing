import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-rating-stars-component";

import { FreeMode, Pagination } from "swiper";
const Carosuel = () => {
  let reactSwipeE1;

  const [cards, setCards] = useState([
    {
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg",
      name: "appu", 
      description:
        "As a digital market agency, we strive to understand our client's business goals first then all decisions are made with those ",

      role: "developer",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      name: "appu",
      description:
        "As a digital market agency, we strive to understand our client's business goals first then all decisions are made with those ",

      role: "developer",
    },
    {
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg",
      name: "appu",
      description:
        "As a digital market agency, we strive to understand our client's business goals first then all decisions are made with those ",

      role: "developer",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      name: "appu",
      description:
        "As a digital market agency, we strive to understand our client's business goals first then all decisions are made with those ",

      role: "developer",
    },
    {
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg",
      name: "appu",
      description:
        "As a digital market agency, we strive to understand our client's business goals first then all decisions are made with those ",

      role: "developer",
    },
  ]);

  return (
    <>
      <div>
        <div className="last-container">
          <div className="below-container">
            <h1>What Our Clients Say</h1>
          </div>
          <div className="below2-container">
            <p>
              we understand client's bussiness goals first then and ,<br /> all
              decisions are made with those
            </p>
            <div className="dot-container">
              <span class="dot"></span>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className="car6"
              // style={{
              //   height: "300px",
              //   display: "flex",
              //   alignItems: "center",
              //   width: "350px",
              // }}
            >
              <div className="cars-body">
                <p className="cars-text">{card.description}</p>
                <ReactStars count={5} size={24} activeColor="#ffd700" />,
                <h5 className="cars-title"></h5>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    classNameName="car-img"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50px",
                      
                    }}
                    src={card.photo}
                    alt="Car image cap"
                  />
                  <div>
                    <p>{card.name}</p>
                    <p>{card.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Carosuel;
