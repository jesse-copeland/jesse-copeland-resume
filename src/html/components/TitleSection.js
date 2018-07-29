import React from 'react';

const TitleSection = ({ firstName, lastName }) => (
  <section className="name">
    <h1>{'{'}{ firstName.toLowerCase() }: { lastName.toLowerCase() }{'}'}</h1>
  </section>
);

export default TitleSection;