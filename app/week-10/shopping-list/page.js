"use client";

import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from 'next/navigation';
import { getShoppingList, addItem, deleteItem } from '../_services/shopping-list-service';

function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);
    
  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      loadItems();
    }
  }, [user, router]);

  const handleAddItem = async (newItem) => {
    try {
      const itemToAdd = {
      ...newItem,
      category: newItem.category.toLowerCase()
    };
  
      const addedItem = await addItem(user.uid, itemToAdd);
      setItems(prevItems => [...prevItems, addedItem]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  

  const handleDeleteItem = async (itemId) => {
    console.log(`Deleting item with ID: ${itemId}`)
    if (!itemId) {
      throw new Error("itemId is undefined");
    }  
    try {
      await deleteItem(user.uid, itemId); 
      setItems(currentItems => currentItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  
  const handleItemSelect = (selectedItem) => {
    if (selectedItem && selectedItem.name) {
    const cleanedName = selectedItem.name.split(',')[0].trim().replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanedName);
    }
  };
  
  async function loadItems() {
    try {
      const itemsList = await getShoppingList(user.uid);
      setItems(itemsList);
    } catch (error) {
      console.error('There was an error retrieving the shopping list:', error);
    }
  }

  return (
    <main>
      <body className="h-screen bg-gradient-to-b bg-gray-600"></body>
      <h1 className="font-bold text-3xl">
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <div className="flex">
        <ItemList items={items} onItemSelect={handleItemSelect} onDeleteItem={handleDeleteItem}/>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );    
}

export default Page;