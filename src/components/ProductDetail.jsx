import { useState, useEffect } from "react";

const ProductDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Update image on change product
  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedImage(product.images[0].image);
    }
  }, [product]);

  const totalPrice = product ? parseFloat(product.price) * quantity : 0;

  if (!product) return null;

  return (
    <div className="mt-12 container mx-auto px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE – IMAGES */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 overflow-x-auto">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img.image}
                alt={product.name}
                onClick={() => setSelectedImage(img.image)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all 
                  ${selectedImage === img.image ? "border-black" : "border-transparent"}`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* RIGHT SIDE – PRODUCT INFO */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-2xl font-bold mb-4">${product.price} USD</div>

          <p className="text-gray-500 mb-4">
            Livraison gratuite à partir de $125 USD d'achat.
          </p>

          <p className="mb-4">
            <strong>Qualité Premium</strong><br />
            Produit 100% naturel et testé.
          </p>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-4">
              <p className="font-semibold mb-2">Couleurs disponibles :</p>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Cart */}
          <div className="flex gap-4 items-center mb-4 mt-6">
            <div className="flex items-center gap-3">
              <button
                className="btn btn-outline"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              >
                −
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="input input-bordered w-16 text-center"
              />
              <button
                className="btn btn-outline"
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>

            <button className="btn btn-primary flex-1 text-white">
              Ajouter au panier
            </button>
          </div>

          <div className="text-2xl font-black text-primary mb-4">
            Total: ${totalPrice.toFixed(2)} USD
          </div>

          <button className="btn w-full bg-black text-white border-none hover:bg-gray-800">
            Acheter maintenant
          </button>

          {/* Accordion */}
          <div className="mt-8 space-y-2">
            <div className="collapse collapse-arrow border border-gray-200">
              <input type="checkbox" />
              <div className="collapse-title font-medium">Description détaillée</div>
              <div className="collapse-content text-sm text-gray-500">
                <p>{product.description}</p>
              </div>
            </div>
            <div className="collapse collapse-arrow border border-gray-200">
              <input type="checkbox" />
              <div className="collapse-title font-medium">Garantie & Retours</div>
              <div className="collapse-content text-sm text-gray-500">
                Retours gratuits sous 30 jours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;