import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
  const data = [
    {
      id: 1,
      desc: "A qualidade dos lanches é impecável, sempre frescos e deliciosos!",
      name: "Ricardo Santos",
    },
    {
      id: 2,
      desc: "O atendimento aqui é excelente, todos são muito atenciosos e simpáticos.",
      name: "Beatriz Costa",
    },
    {
      id: 3,
      desc: "O ambiente é super acolhedor, perfeito para relaxar e aproveitar uma boa refeição.",
      name: "Lucas Ferreira",
    },
    {
      id: 4,
      desc: "As opções no cardápio são variadas e todas incrivelmente saborosas. Sempre fico em dúvida do que escolher!",
      name: "Gabriela Almeida",
    },
    {
      id: 5,
      desc: "As promoções e combos são ótimos, proporcionando uma excelente relação custo-benefício.",
      name: "Mariana Oliveira",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="dark:bg-gray-900 dark:text-secondary">
      {/* heading  */}
      <h1 className="font-semibold text-4xl text-center text-secondary pt-24" id="Review">
        Nossa Avaliação
      </h1>
  
      {/* review card section  */}
      <div className=" py-10 mx-4 md:mx-0">
        <Slider {...settings}>
          {data.map((item) => (
            <ReviewCard key={item.id} name={item.name} desc={item.desc} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
