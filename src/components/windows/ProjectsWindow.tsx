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
import VideoGameLendingSiteImage from '../../assets/project-icons/videogamelendingsite.png'
import { useState } from "react"
import Project from './Project.tsx'

interface ProjectsWindowProps {
    lockedType?: string
}
const ProjectsWindow = ({lockedType=''}:ProjectsWindowProps) => {
        const [projectSelector, setProjectSelector] = useState(lockedType=='' ? 'featured' : lockedType);
        console.log(lockedType)
    return (
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
                <Project 
                    image={VideoGameLendingSiteImage}
                    title={"Video Game Lending Site"}
                    description="A lending/loaning site made for UVA's 'Software Engineering' course in a team of 5"
                    skills={['django','heroku','AWS','postgreSQL','bootstrap','agile']}
                    repoLink='https://polar-plateau-38917-b4d76ee652e1.herokuapp.com/'
                    />
                <Project
                        image={couponScraperImage}
                        title={"Web Scraper"}
                        description='An app to scrape coupon websites and extract the best deals into an excel spreadsheet'
                        skills={['python', 'selenium']}
                        repoLink='https://github.com/matanmorse/CouponWebScraper'
                        />
                <Project
                        image={codeblogImage}
                        title={"matan.morse (Code Blog)"}
                        description='A blog site to post articles about my coding journey and share tips and tricks I have learned along the way'
                        skills={['flask', 'jinja', 'sqlite', 'azure', 'bootstrap']} 
                        repoLink='https://github.com/matanmorse/codeblog'/>
            </div>
        </>
        }
        {(projectSelector == 'featured' || projectSelector == 'completed') &&
            <div className="projects">
                <Project
                    image={image}
                    title={"Steamulator"}
                    description='A steam-styled launcher for video game emulators like Citra, and MelonDS that runs on your PC'
                    skills={['react', 'electron', 'node']} 
                    repoLink='https://github.com/matanmorse/steamulation'
                    />
                <Project
                    image={osrsLeaderboardImage}
                    title="OSRSLeaderboard"
                    description='A website for Old-School Runescape players to track their skills, quests, and progress and share with others'
                    skills={['vue', 'node', 'mongoDB', 'express', 'azure']} 
                    repoLink='https://github.com/matanmorse/OSRSLeaderboard'/>
                <Project
                    image={projectPalladiumImage}
                    title="Project Palladium"
                    description='Video game engine written using the Monogame framework, used to make a mystical farm simulation game'
                    skills={['csharp', 'monogame', 'pixel Art']} 
                    repoLink='https://github.com/matanmorse/ProjectPalladium'/>
                <Project
                    image={placeImage}
                    title="Place"
                    description="An r/place clone, deployed on a self-managed server within the UVA's network + bonus message board"
                    skills={['vue', 'flask', 'ubuntu', 'nginx']} 
                    repoLink='https://github.com/matanmorse/placeUVA'
                    />
                
                <Project
                    image={odinProjectImage}
                    title="The Odin Project"
                    description="A collection of small web projects focusing on web development and design fundamentals"
                    skills={['html', 'css', 'javascript']} 
                    repoLink='https://github.com/matanmorse/admin-dashboard'
                    />
            </div>
            }
            {projectSelector == 'shame' && 
            <>
                <div className="projects">
                    <Project
                        image={chessengineImage}
                        title={"[WIP] Chess Engine"}
                        description='A chess engine in C, using traditional algorithmic techniques and aggressive optimization'
                        skills={['c']} 
                        repoLink='https://github.com/matanmorse/chess-engine'/>
                    <Project
                        image={okosImage}
                        title={"[WIP] OKOS"}
                        description="An operating system written in C using the GRUB bootloader, with a custom kernel and basic drivers (like the name-- it's just O.K.)"
                        skills={['c']} 
                        repoLink='https://github.com/matanmorse/OKOS'/>
                </div>
            </>
            }
        </>
        
    )
  
}

export default ProjectsWindow