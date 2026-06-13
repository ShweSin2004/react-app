'use client'
import Menu from "@/components/menu-bar";
import { items } from "@/components/items/data";
import Card from "@/components/card";

export default function Home() {
  return (
    <>
      <Menu />
      
      <div className="grid grid-cols-3 gap-4 p-5">
        {
          items.map((i) =>
            <Card name={i.name}
              description={i.description}
              price={i.price}
              category={i.category}
              state={i.state}
              className="w-<20%>"
            />)
        }
      </div>
    </>
  );
}
