import './ExperienceWindow.css'
import './Window.css'
const ExperienceWindow = () => {
    return (
        <>
            <h4 className="experience-title">A brief timeline of some of my professional work and my proudest achievments in each </h4>
            <h5 className="date-today">Today</h5>
            <div className="work-timeline">
                <div className="timeline-line">
                    <div className="timeline-dash"></div>
                    <div className="timeline-dash started-2nd-year">
                    </div>
                    <div className="timeline-dash started-3rd-year">
                    </div>
                    <div className="timeline-dash start-2025 right">
                    </div>
                </div>
                <div className="experiences">
                    <div className="work">
                            <div className="hidden">
                            </div>
                            <div className="work-content">
                                <h6 className="dates-worked">
                                    May 2025 - Present
                                </h6>
                                <h3 className="title">
                                    Software Developer Intern
                                </h3>
                                <h5 className="company-location">
                                    Intact Speciality Solutions - Salem, VA
                                </h5>
                                <div className="job-content">
                                    <ul className="responsibilities">
                                        <li className="job-function">
                                            Rewrote or upgraded 2 legacy apps to C# ASP.NET
                                        </li>
                                        <li className="job-function">
                                            Gave presentation on React, Typescript, and Spring Boot
                                        </li>
                                        <li className="job-function">
                                            Learned and used Docker, MSSQL, C#, SSIS, and much more...
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                    <div className="work">
                            <div className="work-content">
                                <h6 className="dates-worked">
                                    October 2024 - Present
                                </h6>
                                <h3 className="title">
                                    Computing Support Intern
                                </h3>
                                <h5 className="company-location">
                                    University of Virginia - Charlottesville, VA
                                </h5>
                                <div className="job-content">
                                    <ul className="responsibilities">
                                        <li className="job-function">
                                            Assisted in server/network installation, repair, configuration, and maintenence of University's CS server network
                                        </li>
                                        <li className="job-function">
                                            Shadowed and learned about computer network fundamentals like TCP/IP, DHCP, Firewalls, DNS, etc.
                                        </li>
                                        <li className="job-function">
                                            Set up my own server running Ubuntu, used it to host various apps (<a target="_blank" href="http://matanmorse.cs.virginia.edu">matanmorse.cs.virginia.edu</a>)- only accessible to Wahoos!
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden">
                            </div>
                    </div>
                     <div className="work">
                            <div className="hidden">
                            </div>
                            <div className="work-content">
                                <h6 className="dates-worked">
                                    August 2024 - August 2025
                                </h6>
                                <h3 className="title">
                                    Teaching Assistant- CS1112
                                </h3>
                                <h5 className="company-location">
                                    University of Virginia - Charlottesville, VA
                                </h5>
                                <div className="job-content">
                                    <ul className="responsibilities">
                                        <li className="job-function">
                                            Helped run an intro class of 120+, became junior head TA
                                        </li>
                                        <li className="job-function">
                                            Made and delivered exam review sessions
                                        </li>
                                        <li className="job-function">
                                            Got to guide and teach students on the art of programming
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            <h5 className="date-today">Jobs in food service, construction, and other tangents...</h5>
        </>
    )
}

export default ExperienceWindow