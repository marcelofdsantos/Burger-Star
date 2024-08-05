import React from "react";

const MenuCard = ({ id, title, price, image }) => {
  return (
    <div
      className="group relative space-y-2 p-4 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md cursor-pointer hover:bg-primary transition duration-300 ease-in-out"
      key={id}
    >
      <img
        className=" absolute w-40 -right-6 sm:-right-14 bottom-0 mr-2 group-hover:-translate-y-8 transition duration-300 ease-in-out"
        src={image}
        alt={title}
      />
      <h1 className=" font-semibold text-2xl text-primary group-hover:text-black">
        {title}
      </h1>
      <p>
      Queijo cheddar derretido, alface fresca, tomate, cebola e molho especial. Servido em um pão macio e quentinho.
      </p>
      <h3 className=" font-semibold text-2xl text-secondary">{price}</h3>
    </div>
  );
};

export default MenuCard;
