import React, { useState } from 'react';
import jsondata from '../Data/Data.json';
import { useSelector } from 'react-redux';

const Library = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  const { language } = useSelector((state) => state.language);
  const galleryd = jsondata[language]?.library || [];
  const categories = galleryd[0]?.categories || [];
  const rows = Math.ceil(categories.length / 3);

  const headingText =
    language === 'tamil' ? 'தமிழ் இசை கல்லூரி நூலகம்' : 'Tamil Isai Kalloori Library';

  return (
    <div className="library-container">
      <style>
        {`
          html, body {
            overflow-x: hidden;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }

          .library-container {
            width: 100%;
            padding: 20px;
            min-height: 100vh; /* Ensures the content takes up at least the full height of the page */
            display: flex;
            flex-direction: column;
            justify-content: space-between; /* Ensures the footer is pushed to the bottom */
          }

          .panel-group .panel {
            margin-bottom: 15px;
            padding: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: transform 0.2s ease-in-out;
            background-color: transparent;
          }

          .panel-heading {
            text-align: left;
            padding: 10px 15px;
          }

          .panel-title {
            font-size: 18px;
            font-weight: bold;
            margin: 0;
            display: flex;
            align-items: center;
          }

          .panel-body {
            padding: 15px;
            font-size: 14px;
            line-height: 1.5;
          }

          .panel-collapse {
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
            overflow: hidden;
            opacity: 0;
            transform: scaleY(0);
            transform-origin: top;
          }

          .panel-collapse.show {
            opacity: 1;
            transform: scaleY(1);
          }

          .panel-title a {
            display: flex;
            justify-content: space-between;
            width: 100%;
            color: #333;
            text-decoration: none;
          }

          .panel-title a:hover {
            color: #F39C12;
          }

          .panel-title a span {
            font-size: 14px;
            font-weight: bold;
            margin-left: 10px;
          }

          .panel-title a span:first-child {
            margin-left: 0;
          }

          .row {
            margin-bottom: 20px;
          }

          .footer {
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: auto; /* Ensures the footer stays at the bottom of the page */
            width: 100%;
          }
        `}
      </style>

      <div className="col-sm-12" style={{ backgroundColor: 'white' }}>
        {/* Header for the Gallery Section */}
        <div
          style={{
            textAlign: 'center',
            padding: '20px',
            fontSize: '30px',
            fontWeight: 'bold',
            borderRadius: '10px',
            marginBottom: '30px',
          }}
        >
          {headingText}
        </div>

        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          {[...Array(rows)].map((_, rowIndex) => (
            <div className="row" key={rowIndex}>
              {Array.from({ length: 3 }).map((_, colIndex) => {
                const categoryIndex = rowIndex * 3 + colIndex;
                if (categoryIndex < categories.length) {
                  const category = categories[categoryIndex];
                  return (
                    <div className="col-md-4" key={colIndex}>
                      <div
                        className="panel panel-default"
                        onMouseEnter={() => handleMouseEnter(categoryIndex)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="panel-heading" role="tab" id={`heading${categoryIndex}`}>
                          <h4 className="panel-title">
                            <a
                              role="button"
                              aria-expanded={openIndex === categoryIndex ? 'true' : 'false'}
                              aria-controls={`collapse${categoryIndex}`}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}
                            >
                              <span>{openIndex === categoryIndex ? '- ' : '+ '}{category?.title || 'No Title Available'}</span>
                            </a>
                          </h4>
                        </div>
                        <div
                          id={`collapse${categoryIndex}`}
                          className={`panel-collapse collapse ${openIndex === categoryIndex ? 'show' : ''}`}
                          role="tabpanel"
                          aria-labelledby={`heading${categoryIndex}`}
                        >
                          <div className="panel-body">
                            <p>{category?.description || 'No Description Available'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
