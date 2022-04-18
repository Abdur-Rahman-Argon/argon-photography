import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h2>শিফা ডায়াগনস্টিক সেন্টার</h2>
        <h1>বিশ্বস্ত এবং বন্ধুত্ব সম্পূর্ণ মেডিকেল চিকিৎসক দ্বারা পরিচালিত।</h1>
        <button className="detail-btn">বিস্তারিত দেখুন &#8594;</button>
      </div>
    </div>
  );
};

export default Banner;
