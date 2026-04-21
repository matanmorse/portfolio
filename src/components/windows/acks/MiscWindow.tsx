import { useNavigate } from "react-router";

const MiscWindow = () => {
    const navigate = useNavigate();
    return (
        <>
        <ul>
        <li>
            Icons from <a href="https://pixeliconlibrary.com/" target="_blank" rel="noopener noreferrer">Pixel Icon Library</a> by <a href="https://hackernoon.com/" target="_blank" rel="noopener noreferrer">HackerNoon</a> 
        </li>
        <li>
            <p>Background is "Night Landscape" by <a href="https://kawa_art.artstation.com/" target="_blank" rel="noopener noreferrer">Marta Vidal González</a> </p>
        </li>
        <li>
            I also want to thank everyone who took the time to write a <a href="/about" onClick={(e) => {
                e.preventDefault();
                navigate("/about");
            }}>testimonial</a> about my work. If you'd like to write one, please feel free
            to send me an <a href="mailto:matanmorse@gmail.com?subject=Testimonial - Matan Morse">email</a>.
        </li>
        </ul>
        </>
    )
}

export default MiscWindow;