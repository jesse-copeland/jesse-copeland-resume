import React from 'react';

const ExperienceSection = ({ experience }) => (
  <section>
    <h2 className="section-title">[experience]</h2>
    {
      experience.map(job => {
        return (
          <article>
            <div className="block-left">
              <h3>{job.position}</h3>
              <h3>{job.company}</h3>
            </div>
            <div className="block-right">
              <h3>{job.start} - {job.end}</h3>
              <h3>{job.city}, {job.state}</h3>
            </div>
            <ul>
              {
                job.responsibilities.map((elem, idx) => {
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

export default ExperienceSection;