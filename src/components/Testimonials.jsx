import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie L.",
      text: "Incroyable produit ! Mes cheveux poussent vraiment plus vite.",
    },
    {
      name: "Sophie K.",
      text: "Texture parfaite et odeur naturelle. Je recommande à 100%.",
    },
    {
      name: "Clara D.",
      text: "Résultats visibles en quelques semaines seulement.",
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-5">

        <h2 className="text-3xl font-bold text-center mb-12">
          Ce que disent nos clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((t, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">


                <div className="flex justify-center mb-2 space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500" />
                </div>


                <p className="text-gray-600 italic">
                  "{t.text}"
                </p>

                <div className="font-bold mt-3">
                  {t.name}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
