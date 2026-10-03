import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Wireless Headphones", price: "$99.00", emoji: "🎧", gradient: "from-violet-500 to-fuchsia-500" },
  { id: 2, name: "Smart Watch Series", price: "$199.00", emoji: "⌚", gradient: "from-blue-500 to-cyan-400" },
  { id: 3, name: "Premium Sneakers", price: "$129.00", emoji: "👟", gradient: "from-orange-400 to-red-500" },
  { id: 4, name: "Designer Handbag", price: "$249.00", emoji: "👜", gradient: "from-emerald-400 to-teal-500" },
  { id: 5, name: "Luxury Sunglasses", price: "$79.00", emoji: "🕶️", gradient: "from-yellow-400 to-orange-500" },
  { id: 6, name: "Gaming Console", price: "$399.00", emoji: "🎮", gradient: "from-indigo-500 to-violet-600" },
];

export default function ProductList() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
          <p className="text-gray-500 text-sm mt-2">Trending now • Limited stock</p>
        </div>
        <button className="text-sm font-medium underline">View All</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}