export interface WindowLayoutConfig {
  position: number;
  padding?: number; 
  size: Point,
  offset?: Point,
}

export type Point = {
  x: number,
  y: number
}

export interface WindowLayout {
    title: string,
    layout: Record<string, WindowLayoutConfig>
}