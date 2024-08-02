import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const handleItemClick = (item) => {
        if (onItemSelect) {
            onItemSelect(item);
        }
    };

    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        } else {
            return 0;
        }
    });

    const GroupSortItems = (items) => {
        const groupedItems = items.reduce((acc, item) => {
            (acc[item.category] = acc[item.category] || []).push(item);
            return acc;
        }, {});
         
        Object.keys(groupedItems).forEach(category => {
            groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
        });
    
        return groupedItems;
    };

    const groupedItems = GroupSortItems(items);

    return (
        <div>
            <span className="font-bold text-white">Sort By: </span>
            <button 
                onClick={() => setSortBy("name")} 
                className={`p-1 m-2 w-28 font-bold text-white rounded hover:bg-gray-400 ${sortBy === "name" ? "bg-gray-400" : "bg-gray-500"}`}
            >
                Name
            </button>
            <button 
                onClick={() => setSortBy("category")} 
                className={`p-1 m-2 w-28 font-bold text-white rounded hover:bg-gray-400 ${sortBy === "category" ? "bg-gray-400" : "bg-gray-500"}`}
            >
                Category
            </button>
            <button 
                onClick={() => setSortBy("groupCategory")} 
                className={`p-1 m-2 w-40 font-bold text-white rounded hover:bg-gray-400 ${sortBy === "groupCategory" ? "bg-gray-400" : "bg-gray-500"}`}
            >
                Group by Category
            </button>
          
            
            {
                sortBy === "groupCategory" ? (
                    Object.entries(groupedItems)
                        .sort(([a], [b]) => a.localeCompare(b))
                        .map(([category, items]) => (
                            <div key={category} className="mb-4">
                                <h2 className="font-bold text-lg capitalize mb-2">{category}</h2>
                                <ul>
                                    {items.map((item) => (
                                        <li key={item.id} className="mb-2">
                                            <Item
                                                name={item.name}
                                                quantity={item.quantity}
                                                category={item.category}
                                                onSelect={() => handleItemClick(item)}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                ) : (
                    <ul>
                        {sortedItems.map((item) => (
                            <li key={item.id} className="mb-2">
                                <Item
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}
                                    onSelect={() => handleItemClick(item)}
                                />
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
}
