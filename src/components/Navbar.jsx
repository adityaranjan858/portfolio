import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/slices/navbarSlice";
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { isMenuOpen } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="relative h-16">
        <nav
          className={`fixed top-0 left-0 right-0 z-50 w-full transition ease-in-out duration-300 h-16 ${
            isScrolled
              ? isAdmin
                ? "bg-gray-900 shadow-lg"
                : "bg-gray-700 opacity-90 "
              : "bg-gray-900"
          }`}
        >
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className=" flex items-center justify-between h-16 ">
              <div className="flex items-center">
                <div className="flex-shrink-0 ">
                  {/* // mobile view */}
                  <img
                    className="block lg:hidden h-12 w-auto text-white"
                    src={logo}
                    alt="Workflow"
                  />
                  {/* // desktop view */}
                  <img
                    className="hidden lg:block h-14 w-auto text-white"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="flex items-center md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => dispatch(toggleMenu())}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6L18 18"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* // desktop view */}
              <div className="hidden md:right-0 md:-translate-x-5 md:flex items-center justify-end bg-gray-800 rounded-xl">
                <div className=" flex items-baseline space-x-4 cursor-pointer">
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2  rounded-md"
                  >
                    Home
                  </Link>
                  <Link
                    to="/signIn"
                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-md"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* // mobile view */}
          <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
            <div className=" text-center space-y-2 cursor-pointer  bg-gray-800 rounded-xl w-1/5 right-0 -translate-x-5  absolute">
              {isMenuOpen && (
                <>
                  <Link
                    to="/"
                    className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-3xl"
                    onClick={() => dispatch(toggleMenu())}
                  >
                    Home
                  </Link>
                  <Link
                    to="/signIn"
                    className="block px-3 py-2 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-3xl"
                    onClick={() => dispatch(toggleMenu())}
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
