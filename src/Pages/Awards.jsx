import React from "react";
import { useSelector } from "react-redux";
import awards from "../Data/Data.json";

const Awards = () => {
  const { language } = useSelector((state) => state.language);
  const award = awards[language]?.awards || [];
  const tabled = awards[language]?.awards2 || [];
  const tabled3 = awards[language]?.awards3 || [];

  return (
    <>
      <div className="about inner padding-lg">
        <div className="container1">
          <div className="row">
            {award.map((item, index) => (
              <div className="col-md-12" key={index}>
                <div className="row">
                  <h3 style={{ textAlign: "center" }}>{item.title1}</h3>
                  {item.para.map((paras, idx) => (
                    <div key={idx} className="col-md-12">
                      <p>{paras}</p>
                    </div>
                  ))}

                  <h3 style={{ textAlign: "center" }}>{item.title2}</h3>
                </div>
              </div>
            ))}

            <div className="col-md-6 table-container">
              {award.map((item, index) => (
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
                      {/* Check if 'data' exists before mapping */}
                      {item.data &&
                        item.data.map((dataItem, idx) => (
                          <tr key={idx}>
                            <td>{dataItem.no}</td>
                            <td>{dataItem.name}</td>
                            <td>{dataItem.year}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>

            {/* Tabled Data Tables */}
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
                      {/* Check if 'data' exists before mapping */}
                      {item.data &&
                        item.data.map((dataItem, idx) => (
                          <tr key={idx}>
                            <td>{dataItem.no}</td>
                            <td>{dataItem.name}</td>
                            <td>{dataItem.year}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
            <div className="col-md-7 table-containers">
              {tabled3.map((item, index) => (
                <div key={index} className="table-wrapper">
                  <h3 style={{ textAlign: "center" }}>{item.title1}</h3>
                  <table
                    className="table table-bordered"
                    style={{ margin: "0 auto" }}
                  >
                    <thead>
                      <tr>
                        <th>{item["s.no"]}</th>
                        <th>{item.title}</th>
                        <th>{item.title3}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Check if 'data' exists before mapping */}
                      {item.data &&
                        item.data.map((dataItem, idx) => (
                          <tr key={idx}>
                            <td>{dataItem.no}</td>
                            <td>{dataItem.name}</td>
                            <td>{dataItem.year}</td>
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
    </>
  );
};

export default Awards;
