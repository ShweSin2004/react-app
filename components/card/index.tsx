'use client'
import { twMerge } from "tailwind-merge"
import Badge from "../badge"
import Button from "../button"
import {Plus} from "lucide-react"

type coffeegroup = 'BREW' | 'ESPRESSO' | 'BAKERY' | 'SIGNATURE'
type label = 'POPULAR' | 'SOLD OUT'
export type cardProp = {
    name: string,
    description: string,
    price: number,
    category: coffeegroup,
    state?: label,
    className?: string
}



export default function Card({name, description, price, category, state, className} : cardProp){

    const getCategoryBadgeColor = (category:coffeegroup ) => {
        switch (category) {
            case "BREW":
                return 'bg-amber-100 text-amber-800'
            case "ESPRESSO":
                return 'bg-blue-100 text-blue-800'
            case "BAKERY":
                return 'bg-orange-100 text-orange-800'
            case "SIGNATURE":
                return 'bg-purple-100 text-purple-800'
            default:
                break;
        }
    }

    return (
        <div className= {twMerge(`bg-white rounded-2xl border p-4 transition-all duration-300 border-slate-100 hover:border-amber-200 hover:shadow-md hover:shadow-amber-50/50 ${state == 'SOLD OUT' ? 'opacity-60' : ''}`, className)}>
            <div className="flex items-center justify-between gap-2 mb-3">
                <Badge text={category} className={getCategoryBadgeColor(category)} />
                {state && 
                <Badge text={state} className = "bg-orange-100 text-orange-800" />            
            }
            </div>

            <div>
                <h3 className="text-slate-800 font-sans font-semibold text-sm leading-tight mb-1">{name}</h3>
                <p className="text-[11px] text-slate-400 font-sans line-clamp-2 mb-3">{description}</p>
            </div>

            <div className="pt-3 border-t border-slate-50 flex items-center justify-between mt-auto">
                <span>${price}</span>
                <Button icon = {Plus} text = "Add to Card" disabled = {state == 'SOLD OUT'} />
            </div>

        </div>
    )
}