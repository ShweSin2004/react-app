import { items } from "@/components/items/data";
import Card from "@/components/card";

export default function Cafe() {
    return (
        <>
            <div className="grid grid-cols-<3> gap-4">
                {
                    items.map((i) =>
                        <Card name={i.name}
                            description={i.description}
                            price={i.price}
                            category={i.category}
                            state={i.state}
                        />)
                }
            </div>
        </>
    )
}