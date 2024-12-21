import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLanguage } from "../../Redux/Slice/LanguageSlice";
import { useNavigate } from "react-router-dom";
import galleryData from "../../Data/Data.json"; // Updated path

const DeivigaArulalarkal = () => {
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const gallery = galleryData[language].menu;

  return (
    <>
      <button onClick={() => dispatch(toggleLanguage())}>
        {language === "tamil" ? "ENGLISH" : "TAMIL"}
      </button>
      <div className="gallery">
        {gallery.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.title} className="gallery-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DeivigaArulalarkal;
