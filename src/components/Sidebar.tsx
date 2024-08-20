import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Importing icons

interface NavItem {
  name: string;
  link: string;
}

interface SidebarProps {
  navList: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ navList }) => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1500px at 90% 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(30px at 90% 50px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      initial={false}
      animate={open ? "open" : "closed"}
      className="relative z-50"
    >
      <motion.div variants={variants} className="fixed inset-0 bg-white">
        {open && (
          <button
            onClick={() => setOpen(false)} // Close button
            className="fixed top-[25px] right-[48px] w-12 h-12 rounded-full  text-neutral-700 flex items-center justify-center"
          >
            <AiOutlineClose size={30} />
          </button>
        )}

        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navList.map((navItem, index) => (
            <motion.a
              onClick={() => setOpen(false)} // Close sidebar on click
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-neutral-700"
              key={index}
              href={navItem.link}
            >
              {navItem.name}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {!open && (
        <button
          onClick={() => setOpen(true)} // Open button
          className="fixed top-[25px] right-[48px] w-12 h-12 rounded-full  text-neutral-700 flex items-center justify-center"
        >
          <AiOutlineMenu size={25} />
        </button>
      )}
    </motion.div>
  );
};

export default Sidebar;
