import './Window.css'
import './ProjectsWindow.css'
import './Project.tsx'

import image from '../../assets/project-icons/steamulator-icon.png'
import projectPalladiumImage from '../../assets/project-icons/ProjectPalladium_Image.png'
import osrsLeaderboardImage from '../../assets/project-icons/osrsleaderboard-icon.png'
import placeImage from '../../assets/project-icons/place.jpg'
import odinProjectImage from '../../assets/project-icons/odin_proj.png'
import { useState } from "react"
import Project from './Project.tsx'


const ProjectsWindow = () => {
        const [projectSelector, setProjectSelector] = useState("featured");
    return (
        <>
        <div className="project-type-selector">
            <button id="featured" onClick={()=>setProjectSelector("featured")}>Featured</button>
            <button id="completed" onClick={()=>setProjectSelector("completed")}>Completed</button>
            <button id="shame" onClick={()=>setProjectSelector("shame")}>Wall of Shame</button>
        </div>
        {(projectSelector == 'featured' || projectSelector == 'completed') &&
            <div className="projects">
                <div className="project">
                    <div className="project-image" style={{backgroundColor: '#363442'}}>
                        <img src={image} className="project-image" alt="project-image" />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">
                            Steamulator
                            <a href=".." className="blog-link">Read the blog post</a>
                        </h3>
                        <p className="project-summary">
                            A steam-styled launcher for video game emulators like Citra, and MelonDS that runs on your PC
                        </p>
                        <div className="technology-stack">
                            <p className="skill react">React</p>
                            <p className="skill electron">Electron</p>
                            <p className="skill node">Node.js</p>
                        </div>
                    </div>
                </div>
                 <div className="project">
                    <div className="project-image" >
                        <img src={osrsLeaderboardImage} className="project-image" alt="project-image" />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">
                            OSRSLeaderboard
                            <a href=".." className="blog-link">Read the blog post</a>
                        </h3>
                        <p className="project-summary">
                            A website for Old-School Runescape players to track their skills, quests, and progress and share with others
                        </p>
                        <div className="technology-stack">
                            <p className="skill vue">Vue</p>
                            <p className="skill node">Node.js</p>
                            <p className="skill mongo">MongoDB</p>
                            <p className="skill express">Express</p>
                            <p className="skill azure">Azure</p>
                        </div>
                    </div>
                </div>
                 <div className="project">
                    <div className="project-image">
                        <img src={projectPalladiumImage} className="project-image" alt="project-image" />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">
                            Project Palladium
                            <a href=".." className="blog-link">Read the blog post</a>
                        </h3>
                        <p className="project-summary">
                            Video game engine written using the Monogame framework, used to make a mystical farm simulation game
                        </p>
                        <div className="technology-stack">
                            <p className="skill csharp">C#</p>
                            <p className="skill monogame">Monogame</p>
                            <p className="skill pixelart">Pixel Art</p>
                        </div>
                    </div>
                </div>
                 <div className="project">
                    <div className="project-image">
                        <img src={placeImage} className="project-image" alt="project-image" />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">
                            Place
                            <a href=".." className="blog-link">Read the blog post</a>
                        </h3>
                        <p className="project-summary">
                            An r/place clone, deployed on a self-managed server within the UVA's network + bonus message board
                        </p>
                        <div className="technology-stack">
                            <p className="skill vue">Vue</p>
                            <p className="skill flask">Flask</p>
                            <p className="skill ubuntu">Ubuntu</p>
                            <p className="skill nginx">Nginx</p>
                        </div>
                    </div>
                </div>
                 <div className="project">
                    <div className="project-image">
                        <img src={odinProjectImage} className="project-image" alt="project-image" />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">
                            The Odin Project
                            <a href=".." className="blog-link">Read the blog post</a>
                        </h3>
                        <p className="project-summary">
                            A steam-styled launcher for video game emulators like Citra, and MelonDS that runs on your PC
                        </p>
                        <div className="technology-stack">
                            <p className="skill react">React</p>
                            <p className="skill electron">Electron</p>
                            <p className="skill node">Node.js</p>
                        </div>
                    </div>
                </div>
            </div>
            }
            {projectSelector == 'shame' && 
            <>
            <h4>A collection of unfinished projects I hope to complete one day</h4>
                <Project
                    image={osrsLeaderboardImage}
                    title={"Osrs Leaderboard"}
                    description='Description here'
                    skills={['node', 'react']} />
            </>
            }
        </>
        
    )
  
}

export default ProjectsWindow