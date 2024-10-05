import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto flex items-center justify-between py-4 px-4 md:px-12"
    >
      <div className="text-xl font-bold">Spany<span className="text-orange-500">Dev</span></div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <IconX size={32} /> : <IconMenu2 size={32} />}
        </button>
      </div>

      <motion.ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex space-y-2 md:space-y-0 md:space-x-4 text-black text-lg mt-4 md:mt-0`}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.li
          className="hover:text-orange-300"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <button
            style={{ fontFamily: "Heebo, sans-serif", fontWeight: 500 }}
            className="font-bold"
            onClick={() => handleScrollTo('about')}
          >
            Hakkımda
          </button>
        </motion.li>
        <motion.li
          className="hover:text-orange-300"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <button
            style={{ fontFamily: "Heebo, sans-serif", fontWeight: 500 }}
            className="font-bold"
            onClick={() => handleScrollTo('projects')}
          >
            Projelerim
          </button>
        </motion.li>
        <motion.li
          className="hover:text-orange-300"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <button
            style={{ fontFamily: "Heebo, sans-serif", fontWeight: 500 }}
            className="font-bold"
            onClick={() => handleScrollTo('works')}
          >
            Çalışmalarım
          </button>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;