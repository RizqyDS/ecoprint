import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Products() {
  return (
    <>
      <Topbar />
      <Navbar />
      <section className="bg-support" label="products">
        <div className="container mx-auto">
          <div>
            <h1></h1>
            <img src="./src/assets/product.png" alt="product" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
