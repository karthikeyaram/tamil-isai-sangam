import React from 'react'
import { useSelector } from "react-redux";
import clghistory from '../Data/Data.json'

const Collegehistory = () => {
    const { language } = useSelector((state) => state.language);
    const history = clghistory[language]?.collegehistory || [];

  return (
    <>
    <div className="about inner padding-lg">
        <div className="container1">
          <div className="row">
            {history.map((item, index) => (
              <div className="col-md-12" key={index}>
                <div className="row">
                  <div className="col-md-5">
                    <div className="video-block">
                      <img
                        src={item.head.thumbnail}
                        alt="Video Thumbnail"
                        className="img-responsive"
                      />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h3 style={{textAlign:"center"}}>{item.title}</h3>
                    <h5 style={{textAlign:"center",paddingBottom:"50px",fontWeight:"bold" ,color:"#128ce3"}}>{item.title2}</h5>
                    {item.paragraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Collegehistory
