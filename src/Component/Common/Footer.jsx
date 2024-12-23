import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "../../Assets/css/Custom.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import footData from "../../Data/Data.json";

const Footer = () => {
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const footer = footData[language]?.footers || [];

  const footerData = {
    aboutUs: [
      { name: "Edumart Group of Institutions", link: "#" },
      { name: "Our Institutes and Universities", link: "#" },
      { name: "Management Team", link: "#" },
      { name: "Approval and Recognition", link: "#" },
      { name: "Evaluation & Assessments", link: "#" },
    ],
    courses: [
      { name: "2 Year Online MBA General", link: "#" },
      { name: "Certificate in HRM", link: "#" },
      { name: "Certificate in Marketing", link: "#" },
      { name: "Certificate in Finance", link: "#" },
      { name: "Corporate Programs", link: "#" },
    ],
    whyEdumart: [
      { name: "Introduction", link: "#" },
      { name: "Learn Everywhere", link: "#" },
      { name: "Modern Curriculum", link: "#" },
      { name: "Placement Assistance", link: "#" },
      { name: "Eligibility", link: "#" },
    ],
    learningExperience: [
      { name: "Course Preparations", link: "#" },
      { name: "Guided lessons", link: "#" },
      { name: "Interactive Practice", link: "#" },
      { name: "Virtual Classroom", link: "#" },
      { name: "Peer Learning", link: "#" },
    ],
    socialLinks: [
      { icon: <FaFacebook />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaGooglePlus />, link: "#" },
      { icon: <FaYoutube />, link: "#" },
      { icon: <FaInstagram />, link: "#" },
    ],
    instagramImages: [
      "images/insta-img1.jpg",
      "images/insta-img2.jpg",
      "images/insta-img3.jpg",
      "images/insta-img4.jpg",
      "images/insta-img5.jpg",
      "images/insta-img6.jpg",
    ],
  };

  return (
    <footer className="footer">
      {/* Footer Top */}
      {/* <div className="container1">
        <div className="row row1">
          <div className="col-sm-9 clearfix">
            {['aboutUs', 'courses', 'whyEdumart', 'learningExperience'].map((section, index) => (
              <div className="foot-nav" key={index}>
                <h3>{section.replace(/([A-Z])/g, ' $1').toUpperCase()}</h3>
                <ul>
                  {footerData[section].map((item, idx) => (
                    <li key={idx}><a href={item.link}>{item.name}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="col-sm-3">
            <div className="footer-logo hidden-xs">
              <a href="index.html"><img src="images/footer-logo.png" className="img-responsive" alt="Edumart Logo" /></a>
            </div>
            <p>© 2020 <span>Edumart</span>. All rights reserved</p>
            <ul className="terms clearfix">
              <li><a href="terms.html">TERMS OF USE</a></li>
              <li><a href="privacy.html">PRIVACY POLICY</a></li>
              <li><a href="#">SITEMAP</a></li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* Footer Bottom */}
      <div className="bottom">
        <div className="container1">
          <div className="row">
            {/* Connect with Us Section */}
            <div className="col-sm-4">
              {footer.map((footerItem, index) => (
                <div key={index}>
                  {footerItem.titles.map((titleItem, titleIndex) => (
                    <h3 key={titleIndex}>{titleItem.title}</h3>
                  ))}
                </div>
              ))}
              <div className="connect-us">
                <h3>Connect with Us</h3>
                <ul className="follow-us clearfix">
                  {footerData.socialLinks.map((social, idx) => (
                    <li key={idx}>
                      <a href={social.link}>{social.icon}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="col-sm-4">
              <div className="subscribe">
                <h3>Subscribe with Us</h3>
                <div id="mc_embed_signup">
                  <form
                    action="http://protechtheme.us16.list-manage.com/subscribe/post?u=cd5f66d2922f9e808f57e7d42&amp;id=ec6767feee"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    novalidate
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
                        style={{ position: "absolute", left: "-5000px" }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_cd5f66d2922f9e808f57e7d42_ec6767feee"
                          tabindex="-1"
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
              </div>
            </div>

            {/* Instagram Section */}
            <div className="col-sm-4">
              <div className="instagram">
                <h3>@INSTAGRAM</h3>
                <ul className="clearfix">
                  {footerData.instagramImages.map((img, idx) => (
                    <li key={idx}>
                      <a href="#">
                        <img
                          src={img}
                          className="img-responsive"
                          alt="Instagram"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
