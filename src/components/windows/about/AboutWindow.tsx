import '../Window.css'
import './AboutWindow.css'
import matanPhoto from '../../../assets/matan.jpeg'
const AboutWindow = () => {
    return ( 
        <>

        <p className="about-title">Hi, I'm Matan.</p>

        <div className="portrait-container">
        <img src={matanPhoto} className="portrait" />
        <p className="portrait-caption">Me on a visit to the Tennessee River</p>
        </div>

        <p className="about-text">
        I'm a software engineer who loves building things. I've been programming for almost 7 years, and I've worked on a wide range of projects, from small personal projects to large-scale applications. I enjoy learning new technologies and experimenting with different ideas, which is what this portfolio is all about. 
        </p>
        <p className="about-text">On this site, you'll find information about me as a person and as a professional, along with blog posts and projects I've chosen to showcase. Some are about solving real problems, some are about learning by building, and some are just because they sounded fun.</p>

        <p className="about-text">Tip: Click the icons on the left to go to different views!</p>
        </>
    )
}

export default AboutWindow;