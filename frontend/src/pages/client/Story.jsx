import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Topbar from "../../components/Topbar";

export default function Story() {
  return (
    <>
      <Topbar />
      <Navbar />
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          {/* BREADCRUMB */}
          <p className="flex text-sm text-gray-500 mb-8 gap-1 uppercase">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            / <p>Story</p>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
