import '../Window.css'
import './ProjectsWindow.css'
import './Project.tsx'

import { useState } from "react"
import Project from './Project.tsx'
import { featuredProjects, completedProjects, shameProjects } from '../../../data/projects.ts'

interface ProjectsWindowProps {
    lockedType?: string,
    carousel?: boolean,
}

const ProjectsWindow = ({lockedType='', carousel=false}:ProjectsWindowProps) => {
    const [projectSelector, setProjectSelector] = useState(lockedType=='' ? 'featured' : lockedType);
    const [index, setIndex] = useState(0);
    var projects;
    if (lockedType == 'featured') {
        projects = featuredProjects;
    } else if (lockedType == 'completed') {
        projects = completedProjects    ;
    }
    else if (lockedType == 'shame') {
        projects = shameProjects;
    }
    var current;
    if (projects) {
        current = projects[index];
    }

    const next = () => setIndex((index + 1) % projects.length)
    const prev = () => setIndex((index - 1 + projects.length) % projects.length)

    if (!carousel) return (
        <>
        {lockedType == '' &&
        <div className="project-type-selector">
            <button id="featured" onClick={()=>setProjectSelector("featured")} className={projectSelector == 'featured' ? 'selected' : ''}>Featured</button>
            <button id="completed" onClick={()=>setProjectSelector("completed")} className={projectSelector == 'completed' ? 'selected' : ''}>Completed</button>
            <button id="shame" onClick={()=>setProjectSelector("shame")} className={projectSelector == 'shame' ? 'selected' : ''}>Wall of Shame</button>
        </div>
        }
        
        {(projectSelector == 'completed') && 
        <>
            <div className="projects">
                {completedProjects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </>
        }
        {(projectSelector == 'featured' || projectSelector == 'completed') &&
            <div className="projects">
                {featuredProjects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
            }
            {projectSelector == 'shame' && 
            <>
                <div className="projects">
                    {shameProjects.map((project, index) => (
                    <Project key={index} {...project} />
                    ))}
                </div>
            </>
            }
        </>
        
    )
    else return(
        <>
        <div className="projects-carousel">
            {current && <Project {...current} />}
        </div>
            <div className="carousel-control">
                <button className="carousel-button left" onClick={prev}><i className="hn hn-arrow-left-solid"></i></button>
                <div className="carousel-dots">
                {projects && projects.map((_, i) => (
                    <span
                    key={i}
                    className={i === index ? "dot active" : "dot"}
                    onClick={() => setIndex(i)}
                    />
                ))}
                </div>
                <button className="carousel-button right" onClick={next}><i className="hn hn-arrow-right-solid"></i></button>
            </div>
        </>
    )
  
}

export default ProjectsWindow