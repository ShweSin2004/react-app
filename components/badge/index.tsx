import { twMerge } from "tailwind-merge"

type badgeProp = {
    text: string, 
    className?: string
}

export default function Badge({text, className}: badgeProp) {
    return (
        <span className={twMerge("text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-md text-amber-800", className)}>
            {text}
        </span>
    )
}