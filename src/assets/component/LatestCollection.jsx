import React from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

import product2 from "../Products/p_img2.png";
import product3 from "../Products/p_img3.png";
import product4 from "../Products/p_img4.png";
import product5 from "../Products/p_img5.png";
import product1 from "../Products/p_img1.png";
import product6 from "../Products/p_img6.png";
import product7 from "../Products/p_img7.png";
import product8 from "../Products/p_img8.png";
import product9 from "../Products/p_img9.png";
import product10 from "../Products/p_img10.png";
function LatestCollection() {
  const products = [
    { id: 1, name: "Women Round Neck Cotton Top ", price: 100, image: product1 },
    { id: 2, name: "Men Round Neck Pure Cotton T-shirt", price: 200, image: product2 },
    { id: 3, name: "Girls Round Neck Cotton Top", price: 220, image: product3 },
    { id: 4, name: "Men Round Neck Pure Cotton T-shirt", price: 110, image: product4 },
    { id: 5, name: "Women Round Neck Cotton Top", price: 130, image: product5 },
    { id: 6, name: "Girls Round Neck Cotton Top", price: 140, image: product6 },
    { id: 7, name: "Man Tapered Fit Flat Front Trousers", price: 190, image: product7 },
    { id: 8, name: "Men Round Neck Pure Cotton T-shirt", price: 140, image: product8 },
    { id: 9, name: "Girls Round Neck Cotton Top", price: 100, image: product9 },
    {id: 10, name: "Man Tapered Fit Flat Front Trousers", price: 110, image: product10 },
    
  ];

  return (
    <section className=" my-5">
      <div className="d-flex flex-column align-items-center gap-3 mb-4">
        <Title className="mb-3" />
        <p
          className=" text-xs"
          style={{
            fontSize: "16px",
            fontFamily: "Outfit, sans-serif",
            fontWeight: 400,
            color: "rgb(75,85,99)",
            lineHeight: "24px",
          }}
        >
          Discover our newest arrivals that blend style and comfort. Explore the
          latest trends in fashion curated just for you.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    {products.map((item) => (
        <div className="col" key={item.id}>
            <ProductItem
                image={item.image}
                name={item.name}
                price={item.price}
            />
        </div>
    ))}
</div>
      
    </section>
  );
}

export default LatestCollection;