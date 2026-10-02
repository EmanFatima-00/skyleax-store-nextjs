import ProductCard from "./ProductCard";

export default function ProductList({ products, onDelete }: { products: any[], onDelete: (id:number)=>void }) {
  if(products.length===0) return <div className="bg-white p-10 rounded-2xl text-center text-zinc-500 border">No products found</div>
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {products.map(p => <ProductCard key={p.id} product={p} onDelete={onDelete} />)}
    </div>
  );
}