"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Added item: ${name}, Quantity: ${quantity}, Category: ${category}`);

        const item = {
            name, quantity, category
        };
        console.log(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main className="flex justify-center items-center w-full h-screen">
            <div class="w-full max-w-md bg-gray-400 p-10 rounded-lg shadow-md">
                <h1 className="text-2x1 text-white font-bold mb-8"> Order List</h1>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-10">
                        <input 
                        required onChange={handleNameChange} value={name}
                        type="text" placeholder="Item name" class="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans text-black">
                        </input>
                    </label>
                    <label className="flex justify-between block mb-4">
                        <input type="number" min="1" max="99" 
                        required onChange={handleQuantityChange} value={quantity}
                        className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans text-black"> 
                        </input> 
                        <select type="text"
                        required onChange={handleCategoryChange} value={category}
                        className="w-1/2 ml-10  border-2 border-gray-300 p-2 rounded-lg font-sans text-black">
                        <option value="" disabled selected>Category</option>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                        </select>  
                    </label>
                    <button type="submit" className="w-full mt-4 py-2 px-4 bg-blue-700 hover:bg-blue-500 text-white rounded-lg">Add Item</button> 
                </form>
                <label>
            
                   </label>
            </div>
            
        </main>
    );
}