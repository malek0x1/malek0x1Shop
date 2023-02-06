import React, { useEffect, useState } from "react";
import Announcement from "../../Components/Announcement";
import BrandOverview from "../../Components/BrandOverview";
// import FeatureProduct from "../../Components/FeaturedProduct";
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import ItemsSlider from "../../Components/ItemsSlider";
import SkeletonLoader from "../../Components/SkeletonLoader";
import "./style.scss";

const Home = () => {
  const [res, setRes] = useState([]);

  const fetchHandle = async () => {
    const output = await fetch(
      `${process.env.REACT_APP_API_URL}/api/collections/all/5`
    )
      .then((res) => res.json())
      .then((r) => setRes(r))
      .catch((e) => console.log(`error ${e}`));
  };
  useEffect(() => {
    fetchHandle();
  }, []);
  console.log(res);
  return (
    <div className="home">
      <Announcement message="Welcome To Our Store !" />
      <Header />
      <Hero image="https://cdn.shopify.com/s/files/1/0709/9442/8202/files/mintosko-Ro0PNXcpCus-unsplash_1.jpg?v=1674256479&width=1500" />
      <BrandOverview
        title="The Latest Styles for Adults & Kids"
        paragraph="Stay cozy and stylish with our collection of comfortable and trendy hoodies, sweatpants, sweatshirts."
        btnText="Shop Now"
      />
      {res ? (
        res.map((collection) => <ItemsSlider data={collection} />)
      ) : (
        <ItemsSlider data="" skeleton />
      )}
    </div>
  );
};

export default Home;
