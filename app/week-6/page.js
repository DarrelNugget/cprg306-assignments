"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Week3() {
    let itemsArray = itemsData.map(
        (item) => ({ ...item })
    );
    
    const [items, setItems] = useState(itemsArray);

    const handleAddItem = (NewItem) => {
        setItems([...items, NewItem]);
    };

    return (
        
        <main>
            <body className="h-screen bg-gradient-to-b bg-gray-600"></body>
            <h1 className="font-bold text-3xl">
                Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );    
}
                        