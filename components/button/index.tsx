import { LucideIcon } from "lucide-react"
import { twMerge } from 'tailwind-merge'

type button = {
    text?: string,
    icon?: LucideIcon,
    className? : string,
    disabled? : boolean,
    onClick? : () => void
}

export default function Button({text, icon : Icon, className, disabled, onClick} : button){
    return (
        <button disabled = {disabled} onClick={onClick}
        className={twMerge('px-3 py-1.5 rounded-xl text-xs font-sans font-medium flex items-center gap-1 transition-all bg-amber-700 text-white shadow-sm', disabled ? 'cursor-not-allowed  bg-slate-200' : 'active:scale-95 hover:bg-amber-500 cursor-pointer', className)}
            >
            {Icon && <Icon/>}
            {text}
        </button>
    )
}