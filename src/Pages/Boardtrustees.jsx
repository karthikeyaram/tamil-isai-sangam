import React from "react";
import { useSelector } from "react-redux";
import boardData from "../Data/Data.json";
import "./page.css";

const Boardtrustees = () => {
  const { language } = useSelector((state) => state.language);

  // Access the correct data structure
  const board = boardData[language]?.board[0] || {}; // Assuming the first element in the board array

  return (
    <>
      <div className="container1">
        <h1 className="text-center my-4">{board.title || "Board of Trustees"}</h1>
        <div className="row">
          {board.images?.map((member) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              key={member.id}
            >
              <div className="card-container">
                <div className="card text-center">
                  <div className="card-front">
                    <img
                      src={member.img}
                      alt={member.title}
                      className="card-img-top"
                      style={{ width: "100%", height: "100%" }}
                    />
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
