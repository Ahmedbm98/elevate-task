"use client";
import Loader from "@/app/_Components/loader/page";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductsDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchProductDetails(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(true);
  }

  useEffect(() => {
    fetchProductDetails(id);
  }, [id]);

  return (
    <>
      {!loading && <Loader />}
      {loading && (
        <main className="container flex items-center gap-7 py-5 min-h-screen">
          <div className="w-2/5  group overflow-hidden border border-gray-200 rounded-lg hover:shadow-xl transition-all ease-linear duration-300 p-5">
            <img
              className="group-hover:scale-105 transition-all duration-300 ease-linear"
              src={product?.image}
              alt={product?.title}
            />
          </div>
          <div className="flex flex-col gap-5 ">
            <h1 className="text-maincolor text-2xl">{product?.title}</h1>
            <h2 className="capitalize">{product?.category}</h2>
            <p className="text-gray-600">{product?.description}</p>
            <div className="flex flex-col gap-2 capitalize font-medium">
              <span>
                price :{" "}
                <small className="text-maincolor">{product?.price} EGP</small>
              </span>
              <span>
                rate :{" "}
                <small className="text-maincolor">{product?.rating.rate}</small>
              </span>
              <span>
                count :{" "}
                <small className="text-maincolor">
                  {product?.rating.count}
                </small>
              </span>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
