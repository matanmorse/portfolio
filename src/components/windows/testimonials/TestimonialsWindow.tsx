import { useEffect, useRef, useState, type ReactNode } from 'react'
import '../Window.css'
import './TestimonalsWindow.css'
const TestimonialsWindow = () => {
    return ( 
        <>
            <div className="testimonial">
                <h5 className="testimonial-author">Joe Damaris, IT Manager @ Intact Insurance</h5>
                <div className="bubble-wrap">
                    <div className="testimonial-wrapper">
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
            </div>
            <div className="testimonial">
                <h5 className="testimonial-author">Keroles Hakem, Lead Engineer @ CoStar Group</h5>
                <div className="bubble-wrap">
                    <div className="testimonial-wrapper">
                        <svg className="testimonial-arrow" viewBox="0 0 8 13" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="presentation"><path fill="rgba(255,255,255,0.075)" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path></svg>
                        <p className='speech-bubble'>
                            <ExpandableText>
                                <p>I had the pleasure of mentoring Matan during his internship this summer. I was consistently impressed by his strong technical knowledge, initiative, and professionalism. Before starting any task, he took the time to thoroughly understand the requirements, identify potential gaps, and clarify any ambiguities to ensure success.</p><br />
                                <p>Matan was quick to deliver MVPs, demonstrated strong problem-solving skills, and proactively took ownership as challenges became more complex. He adapted well to changing requirements, contributed thoughtful ideas, and added value beyond what was expected.</p><br />
                                <p>I truly enjoyed working with Matan and would be excited to have him as a teammate in the future. He has all the qualities needed to be a highly successful engineer.</p>
                            </ExpandableText>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

// @ts-ignore
interface ExpandableTextProps {
    children: ReactNode;
    clampLines?: number;
}

function ExpandableText({ children, clampLines = 10 }: ExpandableTextProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isClamped, setIsClamped] = useState<boolean>(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const el = textRef.current;
        if (el) {
            setIsClamped(el.scrollHeight > el.clientHeight);
        }
    }, [children]);

    return (
        <div>
            <p
                ref={textRef}
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: isExpanded ? 'none' : clampLines,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}
            >
                {children}
            </p>
            {isClamped && (
                <div className="show-more-wrapper">
                    {!isExpanded && <button className="show-more-button" onClick={() => setIsExpanded(!isExpanded)}>Show More...</button>}

                </div>
            )}
        </div>
    );
}
export default TestimonialsWindow;