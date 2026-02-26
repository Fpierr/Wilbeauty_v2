import { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import PaperRain from './components/PaperRain';
import Testimonials from './components/Testimonials';
import ProductDetail from './components/ProductDetail';
// import ProductList from './components/ProductList';
import VideoBgSection from "./components/VideoBgSection";
import { fetchProducts, fetchProductBySlug } from './services/products';
import accueilImage from './assets/accueil.png';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Chargement de la boutique...</div>;

  return (
    <div className="bg-base-100 text-gray-600 min-h-screen">
      <PaperRain />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <VideoBgSection products={products} />
              <section className="w-full mt-10 overflow-hidden">
                <img
                  src={accueilImage}
                  alt="Image d'accueil"
                  className="w-full h-auto block"
                />
              </section>
              {/* <ProductList products={products}/> */}
              <Testimonials />
              <Footer />
            </>
          }
        />

        <Route
          path="/product/:productId"
          element={<ProductDetailWrapper />}
        />
      </Routes>
    </div>
  );
}

function ProductDetailWrapper() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductBySlug(productId)
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <div className="text-center py-20">Chargement du produit...</div>;
  if (!product) return <div className="text-center py-20">Produit non trouvé.</div>;

  return (
    <>
      <ProductDetail product={product} />
      <div className="text-center pb-10">
        <button className="btn btn-outline" onClick={() => navigate("/")}>
          ← Retour à la boutique
        </button>
      </div>
    </>
  );
}

export default App;