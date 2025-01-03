import React from "react";
import { useSelector } from "react-redux";
import boardData from "../Data/Data.json";
import "./page.css";

const Boardtrustees = () => {
  const { language } = useSelector((state) => state.language);
  const board = boardData[language]?.board[0] || {};

  return (
    <>
      <div className="container1">
        <h1 className="text-center my-4">
          {board.title || "Board of Trustees"}
        </h1>
        <div className="row">
          {board.images?.map((member) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={member.id}>
              <div className="card-container">
                <div className="card text-center">
                  <div className="card-front">
                    <div className="image-wrapper">
                      <img
                        src={member.img}
                        alt={member.title}
                        className="card-img-top"
                      />
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="card-body">
                      <h5 className="card-title">{member.title}</h5>
                      {member.subtitle && (
                        <p className="card-text">{member.subtitle}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Boardtrustees;
