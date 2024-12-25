import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import onlined from '../Data/Data.json';

const Skypeclass = () => {
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const head = onlined[language]?.skypeclass || [];

  return (
    <>
      <div className="about inner padding-lg">
        <div className="container1">
          <div className="row">
            {head.map((item, index) => (
              <div className="col-md-12" key={index}>
                <div className="row">
                  <div className="col-md-5">
                    <div className="video-block">
                      <img
                        src={item.img}
                        alt="Video Thumbnail"
                        className="img-responsive"
                      />
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                  <h6>{item.title1}</h6>
                  <div className="col-md-7">
                    {/* Render card items */}
                    {item.card?.map((cardItem, cardIndex) => (
                      <div key={cardIndex}>
                        <h5>{cardItem.title}</h5>
                        {/* Render paragraphs if they exist */}
                        {cardItem.para?.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skypeclass;
