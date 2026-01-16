import '../Window.css'
import './TestimonalsWindow.css'
const TestimonialsWindow = () => {
    return ( 
        <>
            <div className="testimonial">
                <h5 className="testimonial-author">Joe Damaris, Intact Insurance</h5>
                <div className="bubble-wrap">
                    <svg className="testimonial-arrow" viewBox="0 0 8 13" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="presentation"><path fill="rgba(255,255,255,0.075)" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path></svg>
                    <p className='speech-bubble'>
                    Matan Morse served as an IT Intern on our team at Intact Insurance and consistently demonstrated exceptional dedication and talent.
                    During the internship, Matan successfully completed several key projects that delivered significant value to Intact.
                    His ability to quickly adapt and become productive was truly impressive.
                    Beyond technical skills, Matan brought a positive attitude that energized the team and contributed meaningfully to achieving our goals.
                    It was a pleasure working with Matan, and I am confident he will excel in any future endeavor.
                    </p>
                </div>
            </div>
        </>
    )
}

export default TestimonialsWindow;