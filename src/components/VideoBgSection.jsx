import ProductCard from "./ProductCard";
import ProductList from './ProductList';

const VideoBgSection = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="relative py-12 bg-gray-50 overflow-hidden">
      <video
        src="/src/videos/huiledemo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0"></div>

      <div className="relative z-10 container mx-auto px-5">
        <h2 className="text-2xl text-center font-bold text-white">
          Nos Produits naturels
        </h2>
        <p className="text-l text-center mb-8 text-white">Achetez et faites vous livrer en un click !</p>

        <div className="flex justify-bettwen items-start">
          <ProductList products={products}/>
        </div>
        

      </div>
    </section>
  );
};

export default VideoBgSection;