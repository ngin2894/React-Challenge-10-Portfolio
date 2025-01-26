// import NGLogo from './assets/NGlogo.jpg'

function Project() {
    return (
        <div className="project">
            <div className="project__container">
                <div className="project__container__left">
                    <h1>Project Title</h1>
                    <p>Project Description</p>
                    <div className="project__container__left__stack">
                        {/* <img src={NGLogo} alt="Logo" /> */}
                    </div>
                    <a href="/">View Project</a>
                </div>
                <div className="project__container__right">
                    {/* <img src={projectImage} alt="Project Image" /> */}
                </div>
            </div>
        </div>
    );
}

export default Project;