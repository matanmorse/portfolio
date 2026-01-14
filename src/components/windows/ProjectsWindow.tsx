import './Window.css'
import './ProjectsWindow.css'
import './Project.tsx'

import image from '../../assets/project-icons/steamulator-icon.png'
import projectPalladiumImage from '../../assets/project-icons/ProjectPalladium_Image.png'
import osrsLeaderboardImage from '../../assets/project-icons/osrsleaderboard-icon.png'
import placeImage from '../../assets/project-icons/place.jpg'
import odinProjectImage from '../../assets/project-icons/odin_proj.png'
import couponScraperImage from '../../assets/project-icons/couponwebscraper.png'
import codeblogImage from '../../assets/project-icons/codeblog.png'
import chessengineImage from '../../assets/project-icons/chessengine.png'
import okosImage from '../../assets/project-icons/okos.png'

import { useState } from "react"
import Project from './Project.tsx'


const ProjectsWindow = () => {
        const [projectSelector, setProjectSelector] = useState("featured");
    return (
        <>
        <div className="project-type-selector">
            <button id="featured" onClick={()=>setProjectSelector("featured")} className={projectSelector == 'featured' ? 'selected' : ''}>Featured</button>
            <button id="completed" onClick={()=>setProjectSelector("completed")} className={projectSelector == 'completed' ? 'selected' : ''}>Completed</button>
            <button id="shame" onClick={()=>setProjectSelector("shame")} className={projectSelector == 'shame' ? 'selected' : ''}>Wall of Shame</button>
        </div>
        {(projectSelector == 'completed') && 
        <>
            <div className="projects">
                <Project
                        image={couponScraperImage}
                        title={"Web Scraper"}
                        description='An app to scrape coupon websites and extract the best deals into an excel spreadsheet'
                        skills={['python', 'selenium']}
                        />
                <Project
                        image={codeblogImage}
                        title={"matan.morse (Code Blog)"}
                        description='A blog site to post articles about my coding journey and share tips and tricks I have learned along the way'
                        skills={['flask', 'jinja', 'sqlite', 'azure', 'bootstrap']} />
            </div>
        </>
        }
        {(projectSelector == 'featured' || projectSelector == 'completed') &&
            <div className="projects">
                <Project
                    image={image}
                    title={"Steamulator"}
                    description='A steam-styled launcher for video game emulators like Citra, and MelonDS that runs on your PC'
                    skills={['react', 'electron', 'node']} />
                <Project
                    image={osrsLeaderboardImage}
                    title="OSRSLeaderboard"
                    description='A website for Old-School Runescape players to track their skills, quests, and progress and share with others'
                    skills={['vue', 'node', 'mongoDB', 'express', 'azure']} />
                <Project
                    image={projectPalladiumImage}
                    title="Project Palladium"
                    description='Video game engine written using the Monogame framework, used to make a mystical farm simulation game'
                    skills={['csharp', 'monogame', 'pixel Art']} />
                <Project
                    image={placeImage}
                    title="Place"
                    description="An r/place clone, deployed on a self-managed server within the UVA's network + bonus message board"
                    skills={['vue', 'flask', 'ubuntu', 'nginx']} />
                
                <Project
                    image={odinProjectImage}
                    title="The Odin Project"
                    description="A collection of small web projects focusing on web development and design fundamentals"
                    skills={['html', 'css', 'javascript']} />
            </div>
            }
            {projectSelector == 'shame' && 
            <>
                <div className="projects">
                    <Project
                        image={chessengineImage}
                        title={"[WIP] Chess Engine"}
                        description='A chess engine in C, using traditional algorithmic techniques and aggressive optimization'
                        skills={['c']} />
                    <Project
                        image={okosImage}
                        title={"[WIP] OKOS"}
                        description="An operating system written in C using the GRUB bootloader, with a custom kernel and basic drivers (like the name-- it's just O.K.)"
                        skills={['c']} />
                </div>
            </>
            }
        </>
        
    )
  
}

export default ProjectsWindow