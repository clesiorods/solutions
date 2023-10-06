import "./style.css";
import { ReactNode } from "react";


interface CardProps {
    children: ReactNode;
    className?: string;
}


export default function Card(props: CardProps) {
    return (
        <article className={`card ${props.className}`} >
            {props.children}
        </article>
    );
}