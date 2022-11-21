import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Contributed to if-me",
    github: "https://github.com/MuhammadAakash/ifme",
    demo: "https://www.if-me.org/"
  },
  {
    id: 2,
    image: IMG1,
    title: "Contributed to Symfony",
    github: "https://github.com/MuhammadAakash/ifme",
    demo: "https://www.if-me.org/"
  },
  {
    id: 3,
    image: IMG1,
    title: "Expense Tracker App",
    github: "https://github.com/MuhammadAakash/ifme",
    demo: "https://www.if-me.org/"
  },
  {
    id: 4,
    image: IMG1,
    title: "Simple Todo Task CLI",
    github: "https://github.com/MuhammadAakash/ifme",
    demo: "https://www.npmjs.com/package/todo_task_cli"
  },

]
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article className='portfolio-item'>
                <div className="portfolio-item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio