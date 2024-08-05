import React from "react";
import img from "../assets/img/deals.jpg";

const Deals = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className=" min-h-screen container flex flex-col justify-center pt-16 md:pt-0">
        {/* heading  */}
        <h1 className=" font-semibold text-4xl text-center text-secondary mt-5">
          Ofertas Exclusivas
        </h1>

        <div className=" flex flex-col md:flex-row gap-10 mt-8">
          <div className=" w-full md:w-2/4">
            <img className="rounded-lg" src={img} alt="img" />
          </div>

          {/* content section  */}
          <div className=" w-full md:w-2/4 text-center md:text-start space-y-4">
            <h1 className=" text-4xl md:text-5xl font-bold text-primary">
              Combo Especial Exclusivo!
            </h1>
            <h3 className=" text-3xl md:text-4xl font-semibold text-secondary">
              Deixe sua refeição ainda mais especial com nosso pacote exclusivo!
            </h3>
            <p className=" text-sm md:text-base text-gray-400">
              Saboreie nosso Hambúrguer Duplo Clássico: dois suculentos
              hambúrgueres de carne, queijo derretido e alface fresca, servidos
              em um pão macio e tostado. Acompanhe com uma porção generosa de
              batatas fritas crocantes e douradas, temperadas com um toque
              especial. Refresque-se com nossa bebida à sua escolha entre
              refrigerantes, sucos ou água gelada. Este combo é a combinação
              perfeita para uma refeição deliciosa na nossa lanchonete!
            </p>
            <button className=" bg-primary py-2 px-4 text-white font-semibold rounded-md hover:scale-105 transition duration-300 ease-in-out">
              Visite Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
