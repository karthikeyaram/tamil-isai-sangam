import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import onlined from "../Data/Data.json";

const Skypeclass = () => {
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const head = onlined[language]?.skypeclass || [];
  const head2 = onlined[language]?.skype2 || [];
  const add = onlined[language]?.address || [];
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
                        src={item.head1?.thumbnail}
                        alt="Video Thumbnail"
                        className="img-responsive"
                      />
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                  <h6>{item.title1}</h6>
                  <div className="col-md-7">
                    {item.card?.map((cardItem, cardIndex) => (
                      <div key={cardIndex}>
                        <h5>{cardItem.title}</h5>
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
          <div className="row">
            {head2.map((item, index) => (
              <div className="col-md-12" key={`head2-${index}`}>
                <p>{item}</p> {/* Directly render the string from the array */}
              </div>
            ))}
          </div>
          <div className="row">
            {add.map((item, index) => (
              <div className="col-md-6" key={`add-${index}`}>
                <div className="card custom-card">
                  <div className="card-body">
                    <h5 className="card-title" style={{marginLeft:"10px"}}>{item.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted" style={{color:"black",marginLeft:"10px"}}>
                      {item.title2}
                    </h6>
                    <p className="card-text" style={{color:"black",marginLeft:"10px"}}>{item.title3}</p>
                    <p className="card-text" style={{color:"black",marginLeft:"10px"}}>{item.title4}</p>
                    <p className="card-text" style={{color:"black",marginLeft:"10px"}}>
                      <strong>Phone:</strong> {item.phone1}
                    </p>
                    <p className="card-text" style={{color:"black",marginLeft:"10px"}}>
                      <strong>Alternate Phone:</strong> {item.phone2}
                    </p>
                    <p className="card-text" style={{color:"black",marginLeft:"10px"}}>
                      <strong>Email:</strong> {item.email}
                    </p>
                    <p className="card-text" style={{color:"black",marginLeft:"10px"}}>
                      <strong>Email:</strong> {item.email2}
                    </p>
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
