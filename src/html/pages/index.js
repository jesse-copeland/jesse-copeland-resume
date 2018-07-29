import { Component } from 'react';
import data from '../../data';

import TitleSection from '../components/TitleSection';
import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';

class Index extends Component {
  static async getInitialProps(props) {
    return data;
  }

  render() {
    const { contact, experience, education } = this.props;
    return(
      <div>
        <div className="contents">
          <TitleSection {...contact} />
          <ContactSection {...contact} />
          <ExperienceSection experience={experience} />
          <EducationSection education={education} />
        </div>
      </div>
    )
  }

}

export default Index;