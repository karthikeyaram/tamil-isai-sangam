import React from 'react'
import { useSelector } from "react-redux";
import principals from '../Data/Data.json'

const Formerpincipals = () => {
    const { language } = useSelector((state) => state.language);
    const pincipal = principals[language]?.principals || [];
  return (
    <>
    <div className="about inner padding-lg">
        <div className="container1">
          <div className="row">
            {pincipal.map((item, index) => (
              <div className="col-md-12" key={index}>
                <div className="row">
                    <h3 style={{textAlign:"center"}}>{item.title}</h3>
                    {item.paragraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
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

export default Formerpincipals
