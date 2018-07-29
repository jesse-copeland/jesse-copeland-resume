import React from 'react';

const ContactSection = props => {
  const {
    email,
    phone,
    github,
    linkedin,
    address,
    city,
    state,
    zip
  } = props;
  return (
    <section>
      <div className="block-left">
        <h3><a href={`mailto:${email}`}>{email}</a></h3>
        <h3><a href={`tel:1${phone.split(' ').join('')}`}>{phone}</a></h3>
        <h3><a href={`https://github.com/${github}`}><i className="fa fa-github"></i> github.com/{github}</a></h3>
      </div>
      <div className="block-right">
        <h3>{address}</h3>
        <h3>{city}, {state} {zip}</h3>
        <h3><a href={`https://www.linkedin.com/in/${linkedin}`}><i className="fa fa-linkedin-square"></i> linkedin.com/in/{linkedin}</a></h3>       
      </div>
    </section>
  );
};

export default ContactSection;