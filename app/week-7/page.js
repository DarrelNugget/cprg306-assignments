"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";


export default function Week3() {
    let itemsArray = itemsData.map(
        (item) => ({ ...item })
    );
    
    const [items, setItems] = useState(itemsArray);

    const handleAddItem = (NewItem) => {
        setItems([...items, NewItem]);
    };

    const [selectedItemName, setSelectedItemName] = useState(null);
    const handleItemSelect = (selectedItem) => {
      const cleanedName = selectedItem.name.split(",")[0].trim().replace(/[^\w\s]/gi, "");
      setSelectedItemName(cleanedName);
    };

    return (
        
        <main>
            <body className="h-screen bg-gradient-to-b bg-gray-600"></body>
            <h1 className="font-bold text-3xl">
                Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem} />
            

            <div className="flex">
                <ItemList items={items} onItemSelect={handleItemSelect}/>
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );    
}
                        