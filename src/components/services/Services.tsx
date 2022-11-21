import './services.css';
import { BiCheck } from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        {/* Mobile App Development */}
        <article className='service'>
          <div className="service-head">
            <h3>Mobile App Development</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BiCheck  className='service-list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck  className='service-list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck  className='service-list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck  className='service-list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className='service'>
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BiCheck  className='service-list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck  className='service-list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck  className='service-list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck  className='service-list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck  className='service-list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* UI/UX Development */}
        <article className='service'>
          <div className="service-head">
            <h3>UI/UX Developer</h3>
          </div>
          <ul className='service-list'>
            <li>
              <BiCheck  className='service-list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck  className='service-list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck  className='service-list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck  className='service-list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services