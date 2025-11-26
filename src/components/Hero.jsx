import { useState } from 'react';
import accueilImage from '../assets/accueil.png';
import iconWhatsapp from '../assets/icon_whatsp.png';
import iconTel from '../assets/icon_tel.png';

const Hero = () => {
  const [modalData, setModalData] = useState({ open: false, type: '' });

  const openModal = (type) => {
    setModalData({ open: true, type });
  };

  const closeModal = () => setModalData({ open: false, type: '' });

  const confirmAction = () => {
    if (modalData.type === 'whatsapp') {
      window.open(
        "https://wa.me/18099929258?text=Bonjour,%0AVia%20le%20site%20WilBeauty,%20je%20souhaite%20passer%20une%20commande.",
        "_blank"
      );
    } else if (modalData.type === 'call') {
      window.open("tel:+18099929258", "_self");
    }
    closeModal();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="text-center pt-[100px] pb-[30px] px-5 bg-white">
        <div className="hero-text">
          <h1 className="text-4xl mb-2.5 font-bold">WilBeauty</h1>
          <h2 className="mb-2.5 text-2xl">Huile et Pomade Naturelle pour Cheveux</h2>
          <p className="text-lg mb-7">
            Stimule la croissance rapide des cheveux grâce à des extraits de plantes et de feuilles soigneusement sélectionnés. 
            Offrez à votre cuir chevelu une nutrition profonde et durable avec un soin 100 % naturel. 
            Disponible en huile et en pomade.
          </p>
          <p className="text-lg mb-7">
            Cliquez ci-dessous pour commender par Téléphone :
          </p>
          
          <div className="flex justify-center gap-5 mt-5 mb-7">
            <button 
              onClick={() => openModal('whatsapp')}
              className="block w-[50px] h-[50px]"
            >
              <img 
                src={iconWhatsapp} 
                alt="WhatsApp" 
                className="w-full h-auto block transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </button>
            <button 
              onClick={() => openModal('call')}
              className="block w-[50px] h-[50px]"
            >
              <img 
                src={iconTel} 
                alt="Téléphone" 
                className="w-full h-auto block transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </button>
          </div>
          
          <a 
            href="#produit" 
            className="inline-block py-2.5 px-5 bg-[var(--color-button)] text-white no-underline font-bold rounded-[5px] mb-7 transition-colors duration-300 hover:bg-[var(--color-button-hover)]"
          >
            Découvrir le Produit
          </a>
        </div>
      </section>

      {/* Image Hero */}
      <section className="w-full mt-[50px] overflow-hidden">
        <img src={accueilImage} alt="Image d'accueil" className="w-full h-auto block" />
      </section>

      {/* Modal DaisyUI */}
      {modalData.open && (
        <div className="modal modal-open">
          <div className="modal-box text-center">
            <h3 className="font-bold text-lg mb-4">
              {modalData.type === 'whatsapp' ? "Ouvrir WhatsApp ?" : "Passer l'appel ?"}
            </h3>
            <p className="mb-6">
              {modalData.type === 'whatsapp'
                ? "Voulez-vous ouvrir WhatsApp pour passer votre commande en toute sécurité ?"
                : "Voulez-vous appeler pour passer votre commande en toute sécurité ?"}
            </p>
            <div className="flex justify-center gap-4 ">
              <button className="btn btn-primary " onClick={confirmAction}>
                Confirmer
              </button>
              <button className="btn btn-outline" onClick={closeModal}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
