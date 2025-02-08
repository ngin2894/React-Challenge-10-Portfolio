function Portfolio() {
    const projects = [
      { title: "SQL Employee Database", image: "/src/assets/SQLDB.png", github: "https://github.com/ngin2894/SQL-Challenge-10-CMS" },
      { title: "Foodie", image: "/src/assets/logo2.jpg", github: "https://github.com/musserdn/Foodie" },
      { title: "Weather Dashboard", image: "/src/assets/weatherdashboard.png", github: ""},
      { title: "Typescript Vehicles", image: "/src/assets/workdayscheduler.png", github: ""},
      { title: "ReadMe Generator", image: "/src/assets/reactportfolio.png", github: ""},
      { title: "React Portfolio", image: "/src/assets/reactportfolio.png", github: ""}
    ];
  
    return (
      <section>
        <h2>Portfolio</h2>
        <div>
          {projects.map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <img className="portfolio-image" src={project.image} alt={project.title} />
              <h3>
                <a href={project.github}>GitHub</a>
              </h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Portfolio;
  