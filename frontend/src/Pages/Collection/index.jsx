import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Announcement from "../../Components/Announcement";
import Card from "../../Components/Card";
import Header from "../../Components/Header";
import SkeletonLoader from "../../Components/SkeletonLoader";
import "./style.scss";
const Collection = () => {
  let { collection } = useParams();

  const [res, setRes] = useState(false);
  const fetchHandle = async () => {
    const output = await fetch(
      `${process.env.REACT_APP_API_URL}/api/products/${collection}`
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
            <Link to={`/product/${res._id}/${item.id}`}>
              <Card
                img={item.image}
                price={`$${item.price}`}
                name={item.name}
              />
            </Link>
          ))
        ) : (
          <>
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </>
        )}
      </div>
    </div>
  );
};

export default Collection;
