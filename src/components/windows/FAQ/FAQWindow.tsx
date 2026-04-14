import { UseWindowContext } from '../../../contexts/WindowContext'
import NewLayout from '../../../data/layouts/WorkLayout';
import './FAQWindow.css'
const FAQWindow = () => {
	const {onLayoutChange} = UseWindowContext();
	return (
		<>
			<h4 className="question-title">Where am I?</h4>
			<p>	&emsp; You are on my portfolio site!
			</p>
			<h4 className="question-title">Your basic bio?</h4>
			<ul>
				<li>I'm Matan, 3rd year CS Student at University of Virginia </li>
				<li>Aspiring Software Engineer</li>
				<li>Originally from Southwest Virginia</li>
				<li>Enjoy learning new things and building cool stuff</li>
			</ul>

			<h4 className="question-title">What can I find here?</h4>
			<p> &emsp; Some of my work experience and showcase of my projects, as well as my interests and skills. I might post a blog
				every now and again if I'm doing something particularly interesting I want to share.
			</p>
			<h4 className="question-title">What do you like to do in your free time?</h4>
			<p>&emsp; Well, I love cooking, woodworking, and exercise (hiking or weightlifting). But I'm always drawn to learning new things, especially when I get to make something
				and share it with others (see: this site!).
			</p>
			<h4 className="question-title">What technologies do you like working with?</h4>
			<p>&emsp; Excellent question! I've worked with a lot of languages and tools, but the better part of my experience
				is with web technologies. You can look at my <a href="" onClick={(e) => {
					e.preventDefault();
					onLayoutChange(NewLayout);
				}}>
				projects
				</a> page to see some of the things I've used, but I really 
				pride myself on being able to learn new techs quickly.
			</p>
			<h4 className="question-title">Your career aspirations?</h4>
			<p>&emsp; I hope to start a full-time software position when I graduate, but I'm especially interested in distributed
				systems and cloud technologies. Long term, I want to become an expert in large scale systems architecture, including
				design and implementation.
			</p>
			<h4 className="question-title">Can I contact you?</h4>
			<p>&emsp; <a href="mailto:matanmorse@gmail.com">Yes!</a> Please reach out with opportunities, questions, or just to chat.
			</p>
			<hr></hr>
			
		</>
	)
}
export default FAQWindow;