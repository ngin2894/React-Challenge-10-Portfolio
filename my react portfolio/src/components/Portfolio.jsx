function Portfolio() {
    const projects = [
      { title: "Project 1", image: "path-to-image.jpg", link: "#", github: "#" },
      { title: "Project 2", image: "path-to-image.jpg", link: "#", github: "#" },
    ];
  
    return (
      <section>
        <h2>Portfolio</h2>
        <div>
          {projects.map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />
              <p>
                <a href={project.link}>Live Demo</a> | <a href={project.github}>GitHub</a>
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Portfolio;
  