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
  const galleryd = jsondata[language]?.library || []; // Get library data based on selected language

  const categories = galleryd[0]?.categories || []; // Access categories from the library object
  const rows = Math.ceil(categories.length / 3); // Determine the number of rows

  return (
    <div className="row padding-lg">
      <div className="col-sm-12" style={{ marginLeft: '10px' }}>
        
        {/* Header for the Gallery Section */}
        <div
          style={{
            color: '#F39C12',
            textAlign: 'center',
            padding: '20px',
            fontSize: '30px',
            fontWeight: 'bold',
            borderRadius: '10px',
            marginBottom: '30px',
          }}
        >
          Tamil Music Gallery
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
                        style={{ marginBottom: '15px', padding: '10px' }}
                      >
                        <div className="panel-heading" role="tab" id={`heading${categoryIndex}`}>
                          <h4 className="panel-title">
                            <a
                              role="button"
                              aria-expanded={openIndex === categoryIndex ? 'true' : 'false'}
                              aria-controls={`collapse${categoryIndex}`}
                            >
                              {openIndex === categoryIndex ? '- ' : '+ '}
                              {category?.title || 'No Title Available'}
                            </a>
                          </h4>
                        </div>
                        <div
                          id={`collapse${categoryIndex}`}
                          className={`panel-collapse collapse ${openIndex === categoryIndex ? 'show' : ''}`}
                          role="tabpanel"
                          aria-labelledby={`heading${categoryIndex}`}
                          style={{
                            maxHeight: openIndex === categoryIndex ? '500px' : '0',
                            transition: 'max-height 0.3s ease-in-out',
                            overflow: 'hidden',
                          }}
                        >
                          <div className="panel-body" style={{ padding: '15px' }}>
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
