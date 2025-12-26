import { useParams } from "react-router-dom";
import {
  menData,
  womenData,
  kidsData,
  data,
  collectionData,
} from "../store/data";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { Star } from "lucide-react";
import { useCart } from "../context/CartContext";
import Toast from "../components/Toast";

const ProductDetail = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [toast, setToast] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);


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
        <div className="flex text-[10px] sm:text-sm items-center gap-0.5 flex-wrap">
          Home <ArrowRight className="w-2" /> Shop{" "}
          <ArrowRight className="w-2" /> {product.category}{" "}
          <ArrowRight className="w-2" />{" "}
          <span className="text-[#1F3D2B] font-medium">
            {product.title}
          </span>
        </div>
      </div>

      <section className="bg-[#FAF8F5] px-5 sm:px-10 md:px-16 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-10
                  grid grid-cols-1 lg:grid-cols-[90px_1.3fr_1.7fr] gap-6">

          <div className="flex lg:flex-col gap-3 order-2 lg:order-1 justify-center lg:justify-start">
            {[1, 2, 3].map((_, i) => (
              <img
                key={i}
                src={product.image.mobile}
                alt=""
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg object-cover cursor-pointer"
              />
            ))}
          </div>

          <div className="flex order-1 lg:order-2 justify-center items-center">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={product.image.desktop}
              />
              <img
                src={product.image.mobile}
                alt={product.title}
                loading="lazy"
                fetchPriority="high"
                className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[380px] object-cover rounded-xl"
              />
            </picture>

          </div>

          <div className="space-y-5 order-3 md:order-3 text-center lg:text-start md:text-left">

            <h1 className="text-2xl text-center lg:text-start md:text-3xl font-semibold text-gray-900">
              {product.title}
            </h1>

            <div className="flex gap-2 items-center justify-center lg:justify-start">
              <div>
                <Star className="w-4 text-gray-500" />
              </div>
              <div>
                <span className="text-sm text-gray-600 font-medium">
                  {product.rating}
                </span>
              </div>

            </div>

            <div className="flex gap-4 justify-center lg:justify-start items-center">
              <span className="text-gray-400 line-through text-lg">
                ${product.discountPrice}
              </span>
              <span className="text-[#1F3D2B] text-2xl font-bold">
                ${product.price}
              </span>
            </div>

            <p className="text-gray-600 text-sm text-center lg:text-start leading-relaxed">
              {product.description}
            </p>

            <div>
              <p className="font-semibold text-center lg:text-start text-gray-700 mb-2">
                Select Size
              </p>
              <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 outline-0 py-2 cursor-pointer rounded-lg text-sm border transition-all ${selectedSize === size ? "border-[#1F3D2B] bg-[#E6EEE8] text-[#1F3D2B] font-medium" : "border-gray-300 hover:border-[#1F3D2B]"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>

            </div>

            <button
              disabled={!selectedSize}
              onClick={() => {
                addToCart({ ...product, size: selectedSize }, quantity);
                setQuantity(1);
                setSelectedSize(null);
                setToast({ message: "Added to cart successfully", type: "success" });
                setTimeout(() => setToast(null), 2000);
              }}
              className={`mt-4 px-8 py-3 outline-0 rounded-lg font-medium transition ${selectedSize 
                  ? "bg-[#2F6B4F] hover:bg-[#24563F] cursor-pointer text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Add to Cart
            </button>

          </div>

        </div>
      </section>
      {toast && (
        <div className="fixed top-5 right-5 z-50">
          <Toast message={toast.message} type={toast.type} />
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProductDetail;
