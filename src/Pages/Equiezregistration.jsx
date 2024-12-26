import React from 'react'
import { useSelector } from "react-redux";
import forms from "../Data/Data.json";

const Equiezregistration = () => {
    const { language } = useSelector((state) => state.language);
    const formheadtitle = forms[language]?.formhead;

    const formheadArray = Array.isArray(formheadtitle) ? formheadtitle : [];
  return (
    <>
    <div className="generic-wrapper">
      <div className="container1">
        <div className="row padding-lg">
          <div className="col-sm-12 head-block">
            <div className="row">
              {formheadArray.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-sm-12 head-block"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <img
                        src={item.img2}
                        alt=""
                        style={{
                          maxWidth: "100px",
                          maxHeight: "100px",
                          objectFit: "contain",
                          backgroundColor: "red",
                        }}
                      />
                    </div>

                    <div style={{ flex: 2, textAlign: "center" }}>
                      <h3 style={{ marginBottom: "10px", color: "#0282c2" }}>
                        {item.title}
                      </h3>
                      <h6 style={{ marginTop: "10px" }}>{item.subtitle}</h6>
                      <p>{item.no}</p>
                      <h6>{item.subtitle2}</h6>
                    </div>

                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <img
                        src={item.img2}
                        alt=""
                        style={{
                          maxWidth: "100px",
                          maxHeight: "100px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </div>
          </div>
          </div>
    <div className="container-fluid coming-soon">
      <div className="row">
        <div className="col-md-6 left">
          <div className="inner">
            <a href="index.html" className="logo">
              <img src="images/logo.png" className="img-responsive" alt="" />
            </a>
            <div className="cnt-block">
              <h1>E-Quiz Registration</h1>
              <p>
              The form E-Quiz Registration is no longer accepting responses.Try contacting the owner of the form if you think that this is a mistake.
              </p>
            </div>
            <div className="stay-connected">
              <h2>Stay connected, Stay Updated</h2>
              <ul className="follow-us clearfix">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 right">
          <div className="inner">
            <div className="cnt-block">
              <div className="ready">
                <h2>We'll be ready in</h2>
                <ul className="count-dwn-cnt clearfix">
                  <li>
                    <span className="days count">10</span>
                    <span>Days</span>
                  </li>
                  <li>
                    <span className="hours count">16</span>
                    <span>Hours</span>
                  </li>
                  <li>
                    <span className="minutes count">57</span>
                    <span>Minutes</span>
                  </li>
                  <li>
                    <span className="seconds count">07</span>
                    <span>Seconds</span>
                  </li>
                </ul>
              </div>

              <div className="stay-tuned">
                <h2>Stay Tuned</h2>
                <p>
                  
                </p>

                {/* Mailchimp Signup Form */}
                <div id="mc_embed_signup">
                  <form
                    action="http://protechtheme.us16.list-manage.com/subscribe/post?u=cd5f66d2922f9e808f57e7d42&amp;id=ec6767feee"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <input
                        type="email"
                        value=""
                        name="EMAIL"
                        className="email"
                        id="mce-EMAIL"
                        placeholder="enter your email address"
                        required
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: "-5000px",
                        }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_cd5f66d2922f9e808f57e7d42_ec6767feee"
                          tabIndex="-1"
                          value=""
                        />
                      </div>
                      <div className="clear">
                        <input
                          type="submit"
                          value="Subscribe"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="button"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/* End Mailchimp Signup Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Equiezregistration
