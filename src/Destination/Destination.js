import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Destination = () => {
  const [listDestination, setlistDestination] = useState([]);
  useEffect(() => {
    fetch(
      "https://63f201664f17278c9a1e3f09.mockapi.io/duong"

    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setlistDestination(data);
      });
  }, []);
  return (
    <section className="destination" id="destination">
      <div className="heading">
        <span>a</span>
        <h1>Địa Điểm Gợi Ý </h1>
      </div>
      <div className="box-container">
        {listDestination.map((product, index) => {
          return (
            <NavLink to={`/Product-detail/${product.id}`}>
              <div className="box" data-aos="fade-up" data-aos-delay={150}>
                <div className="image">
                  <img src={product.image} alt="" />
                </div>
                <div className="content">
                  <p>{product.title}</p>
                  <NavLink to={`/Product-detail/${product.id}`}>
                    {product.city} <i className="fas fa-angle-right" />
                  </NavLink>
                </div>
              </div>
            </NavLink>
          )
        })}
      </div>
    </section>
  );
};

export default Destination;
