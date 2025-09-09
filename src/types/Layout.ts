import type { JSX } from "react";

export interface Layout {
    layout: JSX.Element,
    setPos: ({x, y} : {x: number, y: number}) => void,
    setSize: ({width, height} : {width: number, height: number}) => void,
}

