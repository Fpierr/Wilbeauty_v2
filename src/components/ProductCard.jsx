import { useState } from 'react';
import { Link } from "react-router-dom";

const ProductCard = ({ images, name, price, description, productId, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="card w-full max-w-sm bg-base-100 shadow-2xl hover:scale-[1.02] transition-transform duration-300"
      onClick={onClick}
    >
      {!loaded && (
        <div className="skeleton h-64 w-full rounded-t-xl "></div>
      )}

      <figure className={`hover-gallery  ${!loaded ? "hidden" : ""}`}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={name}
            className="w-full h-64 object-cover cursor-pointer"
            onLoad={() => setLoaded(true)}
          />
        ))}
      </figure>

      <div className="card-body-1 text-center  shrink-0">
        <div className="card-body-0 text-center p-2 space-y-0">
            <div className="flex flex-wrap justify-between items-center gap-1 text-xs mt-1 px-0 shrink-0">
                <span className="font-bold text-xl text-black shrink-0">${price} USD</span>
                <span className="badge badge-error px-2 py-0 text-xs md:text-sm">Stock Limité</span>
                <span className="badge badge-success px-2 py-0 text-xs md:text-sm">100% Naturel</span>
            </div>
            <h2 className="card-title justify-center text-sm md:text-base font-bold truncate shrink-0">
                {name}
            </h2>
            <p className="text-gray-500 text-xs">
                {description}
            </p>
            </div>

        <div className="card-actions justify-center mt-1 mb-3 text-xs md:text-sm cursor-pointer">
            <Link
                to={`/product/${productId}`}
                className="btn text-white border-none text-xs md:text-sm"
                style={{ backgroundColor: "#2c1e6b" }}
                onClick={(e) => e.stopPropagation()}
            >
                Commandez maintenant
            </Link>
            </div>
      </div>
    </div>
  );
};

export default ProductCard;
