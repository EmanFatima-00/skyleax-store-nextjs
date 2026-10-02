export default function ProductCard({ product, onDelete }: { product: any, onDelete: (id:number)=>void }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-zinc-200 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-zinc-500">{product.category}</p>
        </div>
        <span className="bg-zinc-900 text-white text-sm px-3 py-1 rounded-full">Rs {product.price}</span>
      </div>
      <button onClick={()=>onDelete(product.id)} className="mt-4 w-full bg-zinc-100 hover:bg-red-50 hover:text-red-600 py-2 rounded-xl text-sm transition">Delete</button>
    </div>
  );
}