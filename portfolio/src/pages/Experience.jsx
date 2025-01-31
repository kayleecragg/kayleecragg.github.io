import { experienceData } from '../data'; // Create this data file
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Experience() {
  return (
    <>
      <Navbar />
      <main>
        <p id="aboutme">experience</p>
        {experienceData.map((exp, index) => (
          <section key={index} id={`experience-section${index + 1}`} className="experience-section">
            <div className="experience-content">
              <div className="experience-image">
                <img src={`/images/${exp.logo}`} alt={exp.company} />
              </div>
              <div className="experience-text">
                <h2>{exp.company}</h2>
                <h3>{exp.role}</h3>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="button-container">
                  {exp.tags.map((tag, i) => (
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