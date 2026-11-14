import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Products() {
  return (
    <>
      <Topbar />
      <Navbar />
      <section className="bg-support" label="products">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-sm">HOME / SHOP</p>
              <h1 className="text-7xl font-primary w-150 mt-5">
                Naturally one of a kind.
              </h1>
              <p className="w-150 mt-5">
                Botanical pieces for your wardrobe, your home, your everyday.
                Printed with real leaves. Made to be loved for years.
              </p>
            </div>
            <img
              src="./src/assets/product.png"
              alt="product"
              className="w-180 h-100"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
