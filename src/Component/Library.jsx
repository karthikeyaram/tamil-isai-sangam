import React, { useState } from 'react';

const Library = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  const categories = [
    'Tevaram Tiruppadigangal', 'Isai Tamil Noolgal', 'Samaya Noolgal',
    'Isai Araychi Noolgal', 'Isai Ilakkiya Vazhkai varalaru', 'Nattuppura Paadalgal',
    'Ilakkiyam (Literature)', 'Sitrilakkiyam', 'Ilakkanam (Grammar)',
    'Poems', 'Charittira Nayakarkalin varalaru', 'Ulagavaralaru (World History)',
    'Samaya Aadhinangalin Arikkai', 'Ninaivumalargal', 'Katturaigal (Essays)',
    'Ariviyal Noolgal', 'Nataka Noolgal (Books on Drama)', 'Taala Noolgal (Books on Tala)',
    'Satta Noolgal (Books on Law)', 'Poduvana Noolgal (General Books)', 'Arts (Sculpture, Painting and Dance)',
    'Books on Pann Aaraychi', 'Annual souvenir of Tamil Isai Sangam', 'Sastra Veda Noolgal',
    'Novels', 'Pann Aaraychi Noolgal', 'Tiruvachakam', 'Tiruppugazh'
  ];

  const descriptions = [
    'This section covers Tevaram Tiruppadigangal and its various interpretations in religious and cultural contexts.',
    'Isai Tamil Noolgal is a collection of Tamil music books that explore different genres and musical forms.',
    'Samaya Noolgal includes various religious texts and scriptures that highlight different aspects of spirituality.',
    'Isai Araychi Noolgal delves into the study of Tamil music theory and its cultural relevance.',
    'This category focuses on Isai Ilakkiya Vazhkai, exploring music in literature and its impact on the Tamil language.',
    'Nattuppura Paadalgal refers to folk songs and regional music forms, showcasing Tamil cultural heritage.',
    'Ilakkiyam (Literature) explores Tamil literary traditions and significant works by Tamil authors.',
    'Sitrilakkiyam discusses the lesser-known aspects of Tamil literature and unique literary forms.',
    'Ilakkanam (Grammar) is a comprehensive study of Tamil grammar, covering syntax, phonetics, and semantics.',
    'Poems in Tamil literature that encompass a variety of poetic forms and themes.',
    'This section talks about the historical contributions of famous Tamil scholars and their impact on culture.',
    'Ulagavaralaru covers world history from a Tamil perspective, emphasizing cultural intersections.',
    'Samaya Aadhinangalin Arikkai explores religious and spiritual literature from various traditions.',
    'Ninaivumalargal are works that examine memory and nostalgia in Tamil culture and literature.',
    'Katturaigal (Essays) includes critical essays on various aspects of Tamil society and culture.',
    'Ariviyal Noolgal presents scientific literature and its contributions to Tamil intellectual discourse.',
    'Nataka Noolgal (Books on Drama) focuses on Tamil plays and their performance art traditions.',
    'Taala Noolgal explores the musical beats and rhythm structures in Tamil classical music.',
    'Satta Noolgal (Books on Law) deals with the historical and modern development of Tamil legal literature.',
    'Poduvana Noolgal (General Books) covers a variety of topics such as general knowledge, philosophy, and more.',
    'Arts (Sculpture, Painting and Dance) explores the visual and performing arts in Tamil culture.',
    'Books on Pann Aaraychi discuss the traditional musical form of Pann and its cultural significance.',
    'Annual souvenir of Tamil Isai Sangam highlights the yearly contributions of the Tamil music community.',
    'Sastra Veda Noolgal discusses the religious and philosophical texts that form the basis of Tamil spiritual thought.',
    'Novels in Tamil literature that span various genres and narrate different facets of human experience.',
    'Pann Aaraychi Noolgal delves deeper into the study of Pann as a traditional Tamil music form.',
    'Tiruvachakam explores the religious significance and poetry of the sacred Tamil hymns.',
    'Tiruppugazh showcases the devotional songs and their connection to Tamil religious practices.'
  ];

  const rows = Math.ceil(categories.length / 3);

  return (
    <div className="row padding-lg">
      <div className="col-sm-12" style={{ marginLeft: "10px" }}>
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          {[...Array(rows)].map((_, rowIndex) => (
            <div className="row" key={rowIndex}>
              {Array.from({ length: 3 }).map((_, colIndex) => {
                const categoryIndex = rowIndex * 3 + colIndex;
                if (categoryIndex < categories.length) {
                  return (
                    <div className="col-md-4" key={colIndex}>
                      <div
                        className="panel panel-default"
                        onMouseEnter={() => handleMouseEnter(categoryIndex)} 
                        onMouseLeave={handleMouseLeave}
                        style={{ marginBottom: '15px', padding: '10px' }} // Add margin and padding for each panel
                      >
                        <div className="panel-heading" role="tab" id={`heading${categoryIndex}`}>
                          <h4 className="panel-title">
                            <a
                              role="button"
                              aria-expanded={openIndex === categoryIndex ? 'true' : 'false'}
                              aria-controls={`collapse${categoryIndex}`}
                            >
                              {openIndex === categoryIndex ? '- ' : '+ '}
                              {categories[categoryIndex]}
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
                            overflow: 'hidden'
                          }}
                        >
                          <div className="panel-body" style={{ padding: '15px' }}>
                            <p>{descriptions[categoryIndex]}</p>
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
