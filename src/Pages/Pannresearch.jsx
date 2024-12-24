import React from "react";
import { useSelector } from "react-redux";
import pandata from "../Data/Data.json";

const Pannresearch = () => {
  const { language } = useSelector((state) => state.language);
  const president = pandata[language]?.panresearch || []; // Corrected access to panresearch
  const table = pandata[language]?.table || []; 
  const tabled = pandata[language]?.table2 || [];

  return (
    <div className="about inner padding-lg">
      <div className="container1">
        <div className="row">
          {president.map((item, index) => (
            <div className="col-md-12" key={index}>
              <div className="row">
                <div className="col-md-5">
                  <div className="video-block">
                    <img
                      src={item.head1?.thumbnail} // Added optional chaining to avoid errors
                      alt="Video Thumbnail"
                      className="img-responsive"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <h2>{item.content?.title}</h2>{" "}
                  {/* Added optional chaining here too */}
                  {item.content?.paragraphs?.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <div className="col-md-12">
                  {item.content?.para?.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-6 table-container">
            {table.map((item, index) => (
              <div key={index} className="table-wrapper">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>{item["s.no"]}</th>
                      <th>{item.title}</th>
                      <th>{item.title2}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.data.map((dataItem, idx) => (
                      <tr key={idx}>
                        <td>{dataItem.no}</td>
                        <td>{dataItem.name}</td>
                        <td>{dataItem.subname}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <div className="col-md-6 table-container">
            {tabled.map((item, index) => (
              <div key={index} className="table-wrapper">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>{item["s.no"]}</th>
                      <th>{item.title}</th>
                      <th>{item.title2}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.data.map((dataItem, idx) => (
                      <tr key={idx}>
                        <td>{dataItem.no}</td>
                        <td>{dataItem.name}</td>
                        <td>{dataItem.subname}</td>
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
  );
};

export default Pannresearch;
