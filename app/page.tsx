"use client";
import { useState } from "react";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

export default function Home() {
  const [products, setProducts] = useState([
    { id: 1, name: "Black Hoodie", price: 2500, category: "Clothing" },
    { id: 2, name: "AirPods Pro", price: 5500, category: "Electronics" },
    { id: 3, name: "Running Shoes", price: 4000, category: "Shoes" },
  ]);
  const [search, setSearch] = useState("");
  const addProduct = (p: any) => setProducts([...products, { ...p, id: Date.now() }]);
  const deleteProduct = (id: number) => setProducts(products.filter(p => p.id !== id));
  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-zinc-900 text-white py-6 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-widest">SKYELAX STORE</h1>
        <span className="text-sm bg-white text-black px-3 py-1 rounded-full">{products.length} Products</span>
      </header>
      <main className="max-w-6xl mx-auto p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <AddProduct onAdd={addProduct} />
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products..." className="w-full mt-6 p-3 rounded-xl border border-zinc-200 outline-none" />
          </div>
          <div className="md:col-span-2">
            <ProductList products={filtered} onDelete={deleteProduct} />
          </div>
        </div>
      </main>
    </div>
  );
}