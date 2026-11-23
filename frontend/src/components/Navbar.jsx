import Cart from "../assets/icons/cart.svg";
import Search from "../assets/icons/search.svg";
import Profile from "../assets/icons/profile.svg";
import Logo from "../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Journal", path: "/journal" },
  { name: "Story", path: "/story" },
  { name: "Process", path: "/process" },
];

function Navbar() {
  const location = useLocation();

  const isProductPage =
    location.pathname.startsWith("/products") ||
    location.pathname === "/checkout";

  return (
    <div className="bg-primary pt-7 pb-7 flex items-center justify-between">
      <div className="container mx-auto flex items-center justify-between">
        <a className="flex items-center gap-2" href="/">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-3xl font-semibold text-secondary mt-2">Arkaz</h1>
        </a>

        <nav className="flex items-center gap-8">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) => {
                const active =
                  item.path === "/products" ? isProductPage : isActive;

                return active
                  ? "text-secondary hover:text-secondary font-semibold underline underline-offset-8 decoration-2"
                  : "text-secondary font-medium";
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-8">
          <a href="/search">
            <img src={Search} alt="search" className="w-5 h-5" />
          </a>
          <a href="/cart">
            <img src={Cart} alt="cart" className="w-5 h-5" />
          </a>
          <a href="/profile">
            <img src={Profile} alt="profile" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
