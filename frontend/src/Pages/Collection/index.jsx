import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Announcement from "../../Components/Announcement";
import Card from "../../Components/Card";
import Header from "../../Components/Header";
import "./style.scss";
const Collection = () => {
  let { collection } = useParams();

  const [res, setRes] = useState(false);
  const fetchHandle = async () => {
    const output = await fetch(
      `http://192.168.1.8:3002/api/products/${collection}`
    )
      .then((res) => res.json())
      .then((r) => setRes(r))
      .catch((e) => console.log(`error ${e}`));
  };
  useEffect(() => {
    fetchHandle();
  }, []);
  return (
    <div className="collection">
      <Announcement message="Welcome To Our Store !" />
      <Header />
      <h1 className="collection__heading container">
        {res.category} Collection
      </h1>
      <div className="collection__wrapper container">
        {res ? (
          res.children.map((item) => (
            <Card img={item.image} price={`$${item.price}`} name={item.name} />
          ))
        ) : (
          <h1>LOADING.....</h1>
        )}
      </div>
    </div>
  );
};

export default Collection;
