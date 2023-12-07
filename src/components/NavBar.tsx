import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const navs = [
    { name: "Home", url: "#", delay: 1.2 },
    { name: "About", url: "#", delay: 1.0 },
    { name: "Services", url: "#", delay: 0.8 },
    { name: "Departments", url: "#", delay: 0.6 },
    { name: "Doctors", url: "#", delay: 0.4 },
    { name: "Contact", url: "#", delay: 0.2 },
  ];

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.6,
      },
    },
  };

  return (
    <div className="relative">
      <nav className="bg-blue-600 text-white fixed top-0 right-0 left-0 z-10">
        <div className="max-w-screen-2xl flex justify-between mx-auto items-center py-4">
          <div className="flex justify-between w-full">
            <h1 className="ml-6 font-semibold">HMS</h1>
            <Menu
              className="md:hidden mr-6 cursor-pointer"
              onClick={() => setVisible(!visible)}
            />
          </div>
          <div className="">
            <ul className="hidden md:flex justify-between">
              {navs.map((list, index) => (
                <li className="mr-8" key={index}>
                  <a href={list.url}>{list.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <AnimatePresence>
          {visible && (
            <motion.div
              variants={item}
              initial={{ height: 0, opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-end animate-fadeLeft"
            >
              <div className="flex justify-center bg-blue-400 absolute top-0 right-0 z-10 h-screen w-1/2">
                <ul className="flex flex-col justify-evenly h-1/3 md:hidden mt-5">
                  <div className="flex justify-end">
                    <X
                      className="cursor-pointer"
                      onClick={() => setVisible(!visible)}
                    />
                  </div>
                  {navs.map((list, index) => (
                    <li className="mr-8 text-lg" key={index}>
                      <motion.a
                        initial={{ y: 90, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: list.delay }}
                        exit={{
                          opacity: 0,
                          y: 90,
                          transition: {
                            ease: "easeInOut",
                            delay: list.delay,
                          },
                        }}
                        href={list.url}
                      >
                        {list.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default NavBar;
