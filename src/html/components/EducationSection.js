import React from 'react';

const EducationSection = ({ education }) => (
  <section>
    <h2 className="section-title">[education]</h2>
    {
      education.map(school => {
        return (
          <article>
            <div className="block-left">
              <h3>{school.degree}</h3>
              <h3>{school.program}</h3>
              <h3>{school.institution}</h3>
            </div>
            <div className="block-right">
              <h3>{school.completed}</h3>
              <h3>{school.city}, {school.state}</h3>
            </div>
            <ul>
              {
                school.accomplishments.map((elem, idx) => {
                  return(
                    <li key={idx}>{elem}</li>
                  );
                })
              }
            </ul>
          </article>
        );
      })
    }
  </section>
);

export default EducationSection;