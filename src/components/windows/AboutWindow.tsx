import './Window.css'
import './AboutWindow.css'
import matanPhoto from '../../assets/matan.jpg'
const AboutWindow = () => {
    return ( 
        <>

        <p className="about-title">Hi, I'm Matan.</p>

        <div className="portrait-container">
        <img src={matanPhoto} className="portrait" />
        <p className="portrait-caption">Me at UVA's "lighting of the lawn"</p>
        </div>

        <p className="about-text">
        I build things that sit at the intersection of software, math, and design. I care about how systems work under the hood, but I care just as much about how they feel to use. Most of my projects start with a question like “What happens if I try this?” and turn into something practical, weird, or unexpectedly useful.
        </p>
        <p className="about-text">You'll find a mix of experiments, polished projects, and half-serious ideas that got a little too serious. Some are about solving real problems, some are about learning by building, and some are just because they sounded fun.</p>

        <p className="about-text">If something here makes you curious, confused, or excited, it did its job. Welcome to my portfolio 😊​</p>
        </>
    )
}

export default AboutWindow;