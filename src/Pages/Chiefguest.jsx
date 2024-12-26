import React from "react";
import { useSelector } from "react-redux";
import gusedata from "../Data/Data.json";
const Chiefguest = () => {
  const { language } = useSelector((state) => state.language);
  const tabled = gusedata[language]?.guest || [];
  const guest = gusedata[language]?.guest1 || [];

  return (
    <>
      <div className="about inner padding-lg">
        <div className="container1">
          <div className="row">
            {tabled.map((item, index) => (
              <div className="col-md-12" key={index}>
                <div className="row">
                  <h3 style={{ textAlign: "center" }}>{item.title1}</h3>
                  {item.para.map((paras, idx) => (
                    <div key={idx} className="col-md-12">
                      <p>{paras}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="row">
              <div className="col-md-12">
              <div className="col-md-6 table-container">
                {tabled.map((item, index) => (
                  <div key={index} className="table-wrapper">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>{item["s.no"]}</th>
                          <th>{item.title}</th>
                          <th>{item.title3}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.data &&
                          item.data.map((dataItem, idx) => (
                            <tr key={idx}>
                              <td>{dataItem.no}</td>
                              <td>{dataItem.name}</td>
                              <td>{dataItem.period}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
              <div className="col-md-6 table-container">
                {guest.map((item, index) => (
                  <div key={index} className="table-wrapper">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>{item["s.no"]}</th>
                          <th>{item.title}</th>
                          <th>{item.title3}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.data &&
                          item.data.map((dataItem, idx) => (
                            <tr key={idx}>
                              <td>{dataItem.no}</td>
                              <td>{dataItem.name}</td>
                              <td>{dataItem.period}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chiefguest;
