import React from 'react'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import headData from "../Data/Data.json";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Distanceeducation = () => {
    const { language } = useSelector((state) => state.language);

    const head = headData[language]?.distance || [];
    const tdata = headData[language]?.etable1 || [];
    const tdata2 = headData[language]?.etable2 || [];
    const tdata3 = headData[language]?.etable3 || [];
    const tdata4 = headData[language]?.etable4 || [];
    const tdata5 = headData[language]?.etitle || [];

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
                                        {item.para.map((paragraph, idx) => (
                                            <p key={idx}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-md-6 table-container">
                            {tdata.map((item, index) => (
                                <div key={index} className="table-wrapper">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>{item.title}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {item.data &&
                                                item.data.map((dataItem, id) => (
                                                    <tr key={id} style={{ textAlign: "left" }}>
                                                        <td><IoIosArrowDroprightCircle style={{ marginBottom: "-3px", color: "#1163B5" }} />{dataItem.name}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-6 table-container">
                            {tdata2.map((item, index) => (
                                <div key={index} className="table-wrapper">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>{item.title}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {item.data &&
                                                item.data.map((dataItem, id) => (
                                                    <tr key={id} style={{ textAlign: "left" }}>
                                                        <td><IoIosArrowDroprightCircle style={{ marginBottom: "-3px", color: "#1163B5" }} />{dataItem.name}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-6 table-container">
                            {tdata4.map((item, index) => (
                                <div key={index} className="table-wrapper">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>{item.title}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {item.data &&
                                                item.data.map((dataItem, id) => (
                                                    <tr key={id} style={{ textAlign: "left" }}>
                                                        <td><IoIosArrowDroprightCircle style={{ marginBottom: "-3px", color: "#1163B5" }} />{dataItem.name}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-6 table-container">
                            {tdata3.map((item, index) => (
                                <div key={index} className="table-wrapper">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>{item.title}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {item.data &&
                                                item.data.map((dataItem, id) => (
                                                    <tr key={id} style={{ textAlign: "left" }}>
                                                        <td><IoIosArrowDroprightCircle style={{ marginBottom: "-3px", color: "#1163B5" }} />{dataItem.name}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="row">
                        {tdata5.map((item1, index) => (
                            <div key={index} className="col-md-12 table-container">
                                <div className="row">
                                    <h3 style={{ color: "#4480BC" }}>{item1.title}</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 card-container">
                                        <div className="card">
                                            <h6 style={{ textAlign: "left" }}>{item1.para}</h6>
                                        </div>
                                    </div>
                                    {item1.add &&
                                        item1.add.map((addr, idx) => (
                                            <div key={idx} className="col-md-6 card-container">
                                                <div className="card">
                                                    <h4>{addr.title}</h4>
                                                    <h5>{addr.title1}</h5>
                                                    <h4>{addr.email}</h4>
                                                    <h4>{addr.phone}</h4>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Distanceeducation;
