import React from "react";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      title: "Tango Burger",
      price: "R$29",
      image: "/assets/img/tangoburger.png",
    },
    {
      id: 2,
      title: "Punch Burger",
      price: "R$25",
      image: "/assets/img/punchburger.png",
    },
    {
      id: 3,
      title: "Crunch Burger",
      price: "R$20",
      image: "/assets/img/crunchburger.png",
    },
    {
      id: 4,
      title: "Carnival Burger",
      price: "R$42",
      image: "/assets/img/carnivalburger.png",
    },
    {
      id: 5,
      title: "Twist Burger",
      price: "R$40",
      image: "/assets/img/twistburger.png",
    },
    {
      id: 6,
      title: "Burst Burger",
      price: "R$45",
      image: "/assets/img/burstburger.png",
    },
  ];

  return (
    <div className="bg-tertiary">
      <div className="min-h-screen container flex flex-col justify-center py-4">
        {/* heading / cabeçalho  */}
        <h1 className="font-semibold text-4xl text-center text-secondary mt-5">
          Explore o Cardápio
        </h1>

        {/* cards section / seção de cartões  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 pt-8">
          {menuData.map(burger => (
            <MenuCard
              key={burger.id}
              id={burger.id}
              title={burger.title}
              price={burger.price}
              image={burger.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
