import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs'

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <div className="experience-details">
              <BsPatchCheckFill  className='experience-details-icon'/>
              <div className="details">
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill  className='experience-details-icon'/>
              <div className="details">
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill  className='experience-details-icon'/>
              <div className="details">
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill  className='experience-details-icon'/>
              <div className="details">
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill  className='experience-details-icon'/>
              <div className="details">
              <h4>Tailwind</h4>
              <small className='text-light'>Intermdiate</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill  className='experience-details-icon'/>
              <div className="details">
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill  className='experience-details-icon'/>
              <div className="details">
              <h4>Angular</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill  className='experience-details-icon'/>
              <div className="details">
              <h4>Ionic</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <div className="experience-details">
              <BsPatchCheckFill  className='experience-details-icon'/>
              <div className="details">
              <h4>Node JS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill  className='experience-details-icon'/>
              <div className="details">
              <h4>GraphQl</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill  className='experience-details-icon'/>
              <div className="details">
              <h4>MySql</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill  className='experience-details-icon'/>
              <div className="details">
              <h4>MongoDB</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </div>
            <div className="experience-details">
              <BsPatchCheckFill  className='experience-details-icon'/>
              <div className="details">
              <h4>Python</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience