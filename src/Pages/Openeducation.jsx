import React from 'react'
import { useSelector } from "react-redux";
import headData from "../Data/Data.json";

const Openeducation = () => {
    const { language } = useSelector((state) => state.language);
    const head = headData[language]?.openuniv || [];
    const head2 = headData[language]?.openuniv2 || [];


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
                                                src={item.head1.thumbnail}
                                                alt="Video Thumbnail"
                                                className="img-responsive"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <h2>{item.title}</h2>
                                        {item.para?.length > 0 ? (
                                            item.para.map((paragraph, idx) => (
                                                <p key={idx}>{paragraph}</p>
                                            ))
                                        ) : (
                                            <p>No paragraph content available</p>
                                        )}
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-6 table-container">
                                        {head.map((item, index) => (
                                            <div key={index} className="table-wrapper">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>{item["s.no"]}</th>
                                                            <th>{item.title}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* Check if 'data' exists before mapping */}
                                                        {item.data &&
                                                            item.data.map((dataItem, idx) => (
                                                                <tr key={idx}>
                                                                    <td>{dataItem.no}</td>
                                                                    <td style={{textAlign:"start"}}>{dataItem.name}</td>
                                                                </tr>
                                                            ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-md-6 table-container">
                                        {head2.map((item, index) => (
                                            <div key={index} className="table-wrapper">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>{item["s.no"]}</th>
                                                            <th>{item.title}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {item.data &&
                                                            item.data.map((dataItem, idx) => (
                                                                <tr key={idx}>
                                                                    <td>{dataItem.no}</td>
                                                                    <td style={{textAlign:"start"}}>{dataItem.name}</td>
                                                                </tr>
                                                            ))}
                                                    </tbody>
                                                </table>
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
}

export default Openeducation;
