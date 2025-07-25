import React, { useState } from "react";
import "./influencerAd.css";
import Ad from "../products/Ad.jsx";
import AddToCartButton from "../cart/AddToCartButton.jsx";
import WishButton from "../cart/WishButton.jsx";
import { productData } from "../data/productData.js";

const InfluencerAd = () => {
  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  const openWish = () => setShowWish(true);
  const closeWish = () => setShowWish(false);

  return (
    <div className="influWrapper">
      {showCart && <AddToCartButton onClose={closeCart} />}
      {showWish && <WishButton onClose={closeWish} />}

      <div className="adBanner">
        <img src="/ad/1.jpg" alt="광고 배너" />
      </div>

      <div className="adDetail">
        <div className="adDetailTop">
          <h2 style={{ fontSize: "28px", fontWeight: "400" }}>beauty_hana의 리얼 후기!</h2>
          <div className="review">
            <div>
              <img src="/review.svg" alt="리뷰아이콘" />
              <span>"여름에도 건조하지 않게 촉촉하게 유지되어요!"</span>
            </div>
            <div>
              <img src="/review.svg" alt="리뷰아이콘" />
              <span>"물처럼 가볍고, 백탁 없고 밀리지 않아요!"</span>
            </div>
          </div>
        </div>

        <div className="adProducts">
          <Ad clickCart={openCart} clickWish={openWish} data={productData[0]} />
          <Ad clickCart={openCart} clickWish={openWish} data={productData[1]} />
        </div>
      </div>
    </div>
  );
};

export default InfluencerAd;
