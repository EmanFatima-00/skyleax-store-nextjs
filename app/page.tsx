import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tighter">SKYELAX<span className="text-violet-600">.</span></h1>
          <div className="flex gap-3">
            <span className="hidden md:block text-sm text-gray-500 mt-1.5">Task 05 - Eman Fatima</span>
            <button className="border border-gray-300 px-8 py-3.5 rounded-full font-medium bg-white text-black hover:bg-black hover:text-white transition">Watch Video</button>
          </div>
        </div>
      </header>

      {/* Premium Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">NEW COLLECTION 2025</span>
          <h2 className="text-5xl md:text-6xl font-black mt-6 leading-[0.9]">LEVEL UP<br/>YOUR STYLE</h2>
          <p className="text-gray-500 mt-5 text-lg">Premium products curated for modern lifestyle. Built with Next.js 14.</p>
          <div className="flex gap-4 mt-8">
            <button className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-900 transition">Explore Store</button>
            <button className="border border-gray-300 px-8 py-3.5 rounded-full font-medium hover:bg-white transition">Watch Video</button>
          </div>
        </div>
        <div className="h-[420px] rounded-[2.5rem] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 p-1.5">
          <div className="w-full h-full bg-white rounded-[2.3rem] flex items-center justify-center text-8xl">🛍️</div>
        </div>
      </section>

      <ProductList />
      <AddProduct />

      <footer className="bg-black text-white py-10 text-center mt-16">
        <p className="font-bold">SKYELAX. - Built by Eman Fatima</p>
        <p className="text-gray-400 text-xs mt-2">Task 05 - Next.js E-commerce Store</p>
      </footer>
    </main>
  );
}