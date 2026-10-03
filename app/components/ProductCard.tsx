type Product = {
  id: number;
  name: string;
  price: string;
  emoji: string;
  gradient: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-[1.8rem] p-5 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className={`h-52 rounded-[1.3rem] bg-gradient-to-br ${product.gradient} flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300`}>
        {product.emoji}
      </div>
      <div className="mt-5">
        <h3 className="font-bold text-[16px] text-black">{product.name}</h3>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-black text-black">{product.price}</span>
          <button className="bg-black text-white w-9 h-9 rounded-full flex items-center justify-center group-hover:bg-violet-600 transition">+</button>
        </div>
      </div>
    </div>
  );
}