import type { WindowLayout } from "../../types/LayoutTypes";

const AboutLayout : WindowLayout = {
	title: "About",
	layout: {
		'frequently asked questions': {
			position: 1,
			size: {x:1000,y:1000},
			offset: {x:0, y:0}
		},
		'testimonials': {
			position: 2,
			size: {x:1000,y:1000},
			offset: {x:0, y:-100}
		}
	}
}

export default AboutLayout