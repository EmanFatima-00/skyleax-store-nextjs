"use client"
import { useState } from "react";

export default function AddProduct() {
  const [name, setName] = useState("");

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-white border-2 border-gray-200 rounded-[2rem] p-8 md:p-10 shadow-sm">
        <h3 className="text-2xl font-black text-black">Add New Product</h3>
        <p className="text-gray-600 text-sm mt-1 font-medium">Quick add for demo purpose</p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter product name..."
            className="flex-1 bg-gray-100 border-2 border-gray-300 rounded-full px-6 py-3.5 text-sm text-black placeholder:text-gray-500 font-medium outline-none focus:border-black focus:bg-white transition"
          />
          <button className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-gray-900 transition">
            + Add Product
          </button>
        </div>
      </div>
    </section>
  );
}