import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-secondary pt-20">
      <div className="container mx-auto">
        <div className="flex justify-between gap-30">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-semibold text-primary">ecoprint</h1>
            <p className="text-background w-100">
              A little closer to nature. Thoughtfully made botanical pieces for
              everyday living.
            </p>
            <p className="text-background">
              Handcrafted in Tangerang, Indonesia.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-50">
            <div className="flex flex-col gap-3">
              <p className="text-background mb-2">EXPLORE</p>
              <Link className="text-support">All products</Link>
              <Link className="text-support">Wear & carry</Link>
              <Link className="text-support">Home & living</Link>
              <Link className="text-support">Gift cards</Link>
            </div>
            <div className="flex flex-col gap-3 mb-2">
              <p className="text-background">OUR WORLD</p>
              <Link className="text-support">Our story</Link>
              <Link className="text-support">The process</Link>
              <Link className="text-support">Journal</Link>
              <Link className="text-support">Care guide</Link>
            </div>
            <div className="flex flex-col gap-3 mb-2">
              <p className="text-background">HERE TO HELP</p>
              <Link className="text-support">Shipping & returns</Link>
              <Link className="text-support">Track your order</Link>
              <Link className="text-support">Contact us</Link>
              <Link className="text-support">hello@ecoprint.studio</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 pb-5">
        <div className="container mx-auto flex items-center justify-between">
        <p className="text-support text-sm">© 2026 Ecoprint Studio. Made slowly, with care.</p>
        <div className="flex gap-5">
        <Link className="text-support text-sm">Instagram</Link>
        <Link className="text-support text-sm">Pinterest</Link>
        <Link className="text-support text-sm">Privacy policy</Link>
        <Link className="text-support text-sm">Terms</Link>
        </div>
        </div>
      </div>
    </div>
  );
}
