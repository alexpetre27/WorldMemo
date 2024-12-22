import { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <nav className="fixed w-full h-[6vh] bg-gradient-to-b from-[#fafaf9] to-transparent z-10">
      <div className="max-w-7xl mx-auto px-2 flex items-center justify-between h-full">
        {!isSidebarOpen && (
          <img
            src="./travel.png"
            className="lg:w-16 lg:h-16 sm:w-12 sm:h-12 sm:mt-4"
          />
        )}
        <button
          className="lg:hidden text-2xl p-2 bg-secondaryLight/60 transition duration-200 absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "✕" : "☰"}
        </button>
        <div className="lg:flex lg:space-x-8 lg:ml-[17%] lg:font-medium hidden ">
          {["Home", "Memories", "Bucket List", "Maps"].map((item) => (
            <button
              key={item}
              className="text-2xl lg:text-black lg:hover:text-black lg:bg-secondaryLight/60 lg:hover:bg-secondaryLight/70 transition-colors duration-700 p-4 mt-4 rounded-lg"
            >
              <a href={`#${item}`} className="lg:text-black lg:hover:text-black ">{item}</a>
            </button>
          ))}
        </div>
        <button className="lg:bg-secondaryLight/60 text-2xl  font-medium ml-[10%]
                           lg:hover:bg-secondaryLight/70 transition-colors duration-700 p-4 mt-4 
                           rounded-lg hidden lg:block">
          <a href="#LogIn" className="lg:text-black lg:hover:text-black">Log In</a>
        </button>
      </div>
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700 lg:hidden z-20`}
      >
        <button
          className="absolute top-4 right-4 text-2xl p-2 text-white duration-300"
          onClick={toggleSidebar}
        >
          ✕
        </button>
        <ul className="flex flex-col items-center space-y-6 mt-16">
          {["Home", "Memories", "Bucket List", "Maps", "Log In"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-xl text-accent hover:bg-gray-400 transition-colors duration-300 px-6 py-2 rounded-lg"
                onClick={toggleSidebar}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
