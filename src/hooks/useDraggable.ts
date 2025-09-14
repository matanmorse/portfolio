import { useEffect, useState } from "react";

interface useDraggableProps {
    pos: {x: number, y: number},
    setPos: ({x, y}: {x: number, y: number}) => void,
}

export function useDraggable({pos, setPos} : useDraggableProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const onMouseDown = (e: MouseEvent) => {
        setIsDragging(true);
        setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
    };

    const onMouseMove = (e: MouseEvent) => {
        if (isDragging) setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    };

    const onMouseUp = () => setIsDragging(false);

    useEffect(() => {
        if (isDragging) {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        }
        return () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        };
  }, [isDragging, offset]);
  return { pos, setPos, isDragging, onMouseMove, onMouseDown, onMouseUp };
}