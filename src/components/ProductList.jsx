import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <div className="text-center py-10">Aucun produit disponible</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 py-10">
      {products.map(product => (
        <ProductCard
          key={product.id}
          productId={product.slug}
          name={product.name}
          price={product.price}
          images={product.images.map(img => img.image)}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
