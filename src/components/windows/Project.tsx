import './ProjectsWindow.css'

interface ProjectProps  {
	image: string,
	title: string,
	description: string,
	skills: string[],
    hasBlogPost?: boolean
}
const Project = ({image, title, description, skills, hasBlogPost=false} : ProjectProps) => {
	return (
                <div className="project">
                    <div className="project-image" style={{backgroundColor: '#363442'}}>
                        <img src={image} className="project-image" alt="project-image" />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">
                            {title}
                            {hasBlogPost && <a href=".." className="blog-link">Read the blog post</a>}
                        </h3>
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