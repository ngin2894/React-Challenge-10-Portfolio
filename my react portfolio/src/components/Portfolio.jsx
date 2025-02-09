function Portfolio() {
    const projects = [
      { title: "SQL Employee Database", image: "/public/assets/SQLDB.png", github: "https://github.com/ngin2894/SQL-Challenge-10-CMS" },
      { title: "Foodie", image: "/public/assets/logo2.jpg", github: "https://github.com/musserdn/Foodie" },
      { title: "Weather Dashboard", image: "/public/assets/weatherdashboard.png", github: "https://github.com/ngin2894/weather-challenge-9"},
      { title: "Typescript Vehicles", image: "/public/assets/vehicles.png", github: "https://github.com/ngin2894/Challenge-8-Typescript-Vehicles"},
      { title: "ReadMe Generator", image: "/public/assets/ReadMe.png", github: "https://github.com/ngin2894/ReadMe-Generator"},
      { title: "React Portfolio", image: "/public/assets/ReactPortfolio.png", github: "https://github.com/ngin2894/React-Challenge-10-Portfolio"}
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
  