import Cart from "../assets/icons/cart.svg";
import Search from "../assets/icons/search.svg";
import Profile from "../assets/icons/profile.svg";
import Logo from "../assets/logo.png";

function Navbar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Journal", href: "/journal" },
    { name: "Story", href: "/story" },
    { name: "Process", href: "/process" },
  ];

  return (
    <div className="bg-primary pt-7 px-8 flex items-center justify-between">
      <div className="container mx-auto flex items-center justify-between">
        <a className="flex items-center" href="/">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-3xl font-semibold text-secondary">ecoprint</h1>
        </a>

        <nav className="flex items-center space-x-12 text-secondary font-secondary font-medium">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                isActive
                  ? "text-primary hover:text-secondary font-medium"
                  : "text-secondary hover:text-primary"
              }
            >
              {item.name}
            </a>
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
