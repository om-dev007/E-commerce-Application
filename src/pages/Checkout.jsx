import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#FAF8F5] px-4 sm:px-8 md:px-16 py-12">
        <div className="max-w-4xl mx-auto">

          {/* PAGE TITLE */}
          <h1 className="text-3xl md:text-4xl font-semibold text-[#1F3D2B] text-center mb-12">
            Checkout
          </h1>

          {/* MAIN CARD */}
          <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-10">

            {/* ORDER ITEMS */}
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center text-sm text-gray-700"
                  >
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-gray-500">
                        Qty {item.quantity}
                      </p>
                    </div>

                    <p className="font-medium">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* PRICE BREAKDOWN */}
            <div className="border-t pt-6 space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>

              <div className="border-t pt-4 flex justify-between text-lg font-semibold text-gray-900">
                <span>Total</span>
                <span>${subtotal}</span>
              </div>
            </div>

            {/* PAYMENT BUTTON */}
            <button
              disabled
              className="mt-10 w-full bg-[#2F6B4F]/80 text-white py-4 rounded-xl
                         text-sm font-medium cursor-not-allowed"
            >
              Payment Coming Soon
            </button>

            {/* INFO TEXT */}
            <p className="mt-4 text-center text-xs text-gray-400">
              Secure payment integration will be available soon.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Checkout;
