import { projectsData } from '../data'; // Create this data file
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Projects() {
  return (
    <>
      <Navbar />
      <main>
        <p id="aboutme">projects</p>
        {projectsData.map((project, index) => (
          <section key={index} id={`project-section${index + 1}`} className="project-section">
            <div className="project-content">
              <div className="project-image">
                {project.images.map((img, i) => (
                  <img key={i} src={`/images/${img}`} alt={project.title} />
                ))}
              </div>
              <div className="project-text">
                <h2>{project.title}</h2>
                {project.links.map((link, i) => (
                  <a key={i} href={link.url} className="button">{link.label}</a>
                ))}
                <ul>
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="button-container">
                  {project.tags.map((tag, i) => (
                    <button key={i} className="non-clickable">{tag}</button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}