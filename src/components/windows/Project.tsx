import './ProjectsWindow.css'

interface ProjectProps  {
	image: string,
	title: string,
	description: string,
	skills: string[],
    repoLink: string,
    hasBlogPost?: boolean
}
const Project = ({image, title, description, skills, repoLink="", hasBlogPost=false} : ProjectProps) => {
	return (
                <div className="project">
                    <div className="project-image" style={{backgroundImage: 'url('+image+')'}}>
                    </div>
                    <div className="project-content">
                        <a className="project-title" href={repoLink} target='_blank'>
                            {title}
                            {hasBlogPost && <a href=".." className="blog-link">Read the blog post</a>}
                        </a>
                        <p className="project-summary">
                            {description}
                        </p>
                        <div className="technology-stack">
							{skills.map((skill, index) => (
								<p key={index} className={"skill " + skill}>{skill[0].toUpperCase()+skill.slice(1)}</p>
							))}
                        </div>
                    </div>
                </div>

	)
}

export default Project