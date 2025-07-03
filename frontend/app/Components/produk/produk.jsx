import React from "react";
import Card from "./card";
import { useEffect } from "react";
const Produk = () => {
  return (
    <section className="px-4 mt-10">
      <h2 className="px-4 text-black font-bold text-2xl absolute left-52 mt-[-30]">
        Produk Populer
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        <Card  />
        <Card  />
        <Card  />
        <Card  />
        <Card  />
        <Card  />
      </div>
    </section>
  );
};

export default Produk;
