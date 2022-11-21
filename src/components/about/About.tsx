import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';
import { VscFolderLibrary } from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <FaAward className='about-icon' />
              <h5>Experince</h5>
              <small>1+ Years working</small>
            </div>
            <div className="about-card">
              <BiBuildingHouse className='about-icon' />
              <h5>Companies</h5>
              <small>2 Companies</small>
            </div>
            <div className="about-card">
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>Worked on 8+ Projects</small>
            </div>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, maiores quis pariatur 
            veritatis odio animi sapiente? Laboriosam dolor rem nihil.
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About