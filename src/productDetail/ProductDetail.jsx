import { useParams } from "react-router-dom";
import {
  menData,
  womenData,
  kidsData,
  data,
  collectionData,
} from "../store/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import star from "../assets/star_icon.png";
import halfstar from "../assets/star_dull_icon.png";
import { ArrowRight } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();

  const product =
    menData.find((item) => item.id == id) ||
    womenData.find((item) => item.id == id) ||
    kidsData.find((item) => item.id == id) ||
    data.find((item) => item.id == id) ||
    collectionData.find((item) => item.id == id);

  if (!product) return null;

  return (
    <>
      <Navbar />

      <div className="bg-[#FAF8F5] py-4text-sm text-gray-500 px-6 md:px-16">
        <div className="flex items-center gap-2 flex-wrap">
          Home <ArrowRight className="w-4" /> Shop{" "}
          <ArrowRight className="w-4" /> {product.category}{" "}
          <ArrowRight className="w-4" />{" "}
          <span className="text-[#1F3D2B] font-medium">
            {product.title}
          </span>
        </div>
      </div>

      <section className="bg-[#FAF8F5] px-4 md:px-16 py-12">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="flex md:flex-col gap-3 order-2 sm:order-1 justify-center md:justify-start">
            {[1, 2, 3].map((_, i) => (
              <img
                key={i}
                src={product.image}
                alt=""
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover hover:border-[#1F3D2B] cursor-pointer"
              />
            ))}
          </div>

          <div className="flex order-1 sm:order-2 justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-72 md:w-96 rounded-xl object-contain"
            />
          </div>

          <div className="space-y-5 order-3 sm:order-3 text-center md:text-left">

            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {product.title}
            </h1>

            <div className="flex gap-2 items-center justify-center md:justify-start">
              <img src={star} className="w-4" />
              <img src={star} className="w-4" />
              <img src={star} className="w-4" />
              <img src={star} className="w-4" />
              <img src={halfstar} className="w-4" />
              <span className="text-sm text-gray-600 font-medium">
                {product.rating}
              </span>
            </div>

            <div className="flex gap-4 justify-center md:justify-start items-center">
              <span className="text-gray-400 line-through text-lg">
                ${product.discountPrice}
              </span>
              <span className="text-[#1F3D2B] text-2xl font-bold">
                ${product.price}
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>

            <div>
              <p className="font-semibold text-gray-700 mb-2">
                Select Size
              </p>
              <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className="border border-gray-300 px-4 py-2 rounded-lg text-sm
                               hover:border-[#1F3D2B] hover:bg-[#E6EEE8]
                               transition-all cursor-pointer outline-0"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="mt-4 bg-[#2F6B4F] hover:bg-[#24563F] 
                         text-white px-8 py-3 rounded-lg font-medium
                         transition-all cursor-pointer outline-0"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetail;
