const BASE_WIDTH = 2560
const BASE_HEIGHT = 1440

const getScale = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        return {
            sx: w / BASE_WIDTH,
            sy: h / BASE_HEIGHT,
        }
    }

export default getScale;