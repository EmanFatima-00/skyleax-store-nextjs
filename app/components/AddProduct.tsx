"use client";
import { useState } from "react";

export default function AddProduct({ onAdd }: { onAdd: (p:any)=>void }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Clothing");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if(!name || !price) return;
    onAdd({ name, price: Number(price), category });
    setName(""); setPrice("");
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200">
      <h2 className="font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Product Name" className="w-full p-3 rounded-xl border border-zinc-200 outline-none" />
        <input value={price} onChange={e=>setPrice(e.target.value)} type="number" placeholder="Price" className="w-full p-3 rounded-xl border border-zinc-200 outline-none" />
        <select value={category} onChange={e=>setCategory(e.target.value)} className="w-full p-3 rounded-xl border border-zinc-200">
          <option>Clothing</option><option>Electronics</option><option>Shoes</option><option>Accessories</option>
        </select>
        <button type="submit" className="w-full bg-zinc-900 text-white rounded-xl py-3 font-medium">Add Product</button>
      </form>
    </div>
  );
}