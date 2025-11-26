import Header from './components/Header';
import Hero from './components/Hero';
import ProductDescription from './components/ProductDescription';
import Footer from './components/Footer';
import PaperRain from './components/PaperRain';

function App() {
  return (
    <>
      <div className="bg-base-100 text-gray-600 min-h-screen ">
        <PaperRain />
        <Header />
        <Hero />
        <ProductDescription />
        <Footer />
      </div>
    </>
  );
}

export default App;