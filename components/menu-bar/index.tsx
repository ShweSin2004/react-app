'use client'
import { Coffee ,LayoutDashboard, ArrowUp, ChefHat, Award, type LucideIcon  } from "lucide-react"
import Button from "../button"
import { useState } from "react"


type menuType = {
    text : string,
    icon : LucideIcon
}

const menu : menuType[] = [
    {text: "All", icon: LayoutDashboard},
    {text: "Brew", icon: Coffee},
    {text: "Espresso", icon: ArrowUp},
    {text: "Bakery", icon: ChefHat},
    {text: "Signature", icon: Award},
]

export default function Menu(){
    const [active, setActive] = useState("All")
    return (
        <> <div 
        className="flex bg-slate-200 p-2 mr-10 ml-10 mt-3 mb-3 rounded-2xl border border-slate-200 gap-4 overflow-x-auto whitespace-nowrap scrollbar-none"
        > 
        {
            menu.map((m, i) => <Button text={m.text} 
            key = {i} 
            icon = {m.icon}
            className= {active != m.text ? 'bg-slate-200' : 'bg-amber-700'}
            onClick={() => setActive(m.text)}/>
            )
        }
        </div>
        </>
    )
}