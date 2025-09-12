export interface WindowLayoutConfig {
  position: number;
  padding?: number; // optional
}

export interface WindowLayout {
    title: string,
    layout: Record<string, WindowLayoutConfig>
}