"use client";

import { useState } from "react";
import { delay, motion } from "framer-motion";

export default function HomePage() {
  const [isAssets, setIsAssets] = useState(false);
  console.log("Assets", isAssets);

  // animation
  const [hNav, setHNav] = useState("h-52");
  const [flex, setFlex] = useState("flex-col");

  function handleAsset() {
    setIsAssets((prevIsAssets) => {
      const newIsAssets = !prevIsAssets;
      console.log("isAssets (updated)", newIsAssets);

      if (newIsAssets) {
        setHNav("h-24");
      } else {
        setHNav("h-52");
      }

      return newIsAssets; // Return the new state value
    });
  }

  return (
    <div
      className={`relative w-screen h-full font-[family-name:var(--font-cabin)] overflow-hidden`}
    >
      <div
        className={`w-[700px] h-[700px] bg-purple absolute -right-96 -top-[30rem] rounded-full`}
      />
      <div
        className={`w-[700px] h-[700px] bg-blue absolute  -left-96 -bottom-[30rem]  rounded-full`}
      />
      <main
        className={`w-screen h-screen  py-24 lg:py-0 flex flex-col bg-bgPrimary bg-opacity-50 backdrop-blur-2xl`}
      >
        <nav
          className={`relative w-screen ${hNav} pt-12 px-16 flex  justify-between transition-all duration-500`}
        >
          <div className={`flex gap-4 w-[76%] justify-end items-end  flex-col`}>
            <div className={`relative flex-col flex gap-4 duration-300`}>
              <motion.h1
                animate={{
                  y: isAssets == false ? 0 : 50,
                  x: isAssets == false ? 0 : -300,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className={`text-xl flex gap-2 items-center`}
              >
                Hi,{" "}
                <span
                  className={`text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple`}
                >
                  Irsyad Agung!
                </span>
              </motion.h1>
              <input
                type="text"
                placeholder="Search"
                className={`bg-containerSecondary bg-opacity-20 backdrop-blur-lg w-[50vw] p-2 rounded-full border border-blue`}
              />
            </div>
          </div>
          <div className={`w-10 h-10 bg-slate-200 rounded-full`} />
        </nav>
        <div className={`px-80 py-16`}>
          {isAssets == true ? (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => handleAsset()}
              className={`mb-4`}
            >
              Back
            </motion.h1>
          ) : null}
          {isAssets == false ? (
            <Home handleAsset={() => handleAsset()} />
          ) : (
            <Asset handleAsset={() => handleAsset()} />
          )}
        </div>
      </main>
    </div>
  );
}

function Home({ handleAsset }: { handleAsset: () => void }) {
  return (
    <div className={`flex flex-wrap relative justify-start gap-4`}>
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          key={index}
          onClick={() => handleAsset()}
          className={`bg-containerSecondary w-32 h-44 rounded-lg`}
        ></motion.div>
      ))}
    </div>
  );
}

function Asset({ handleAsset }: { handleAsset: () => void }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Variants untuk animasi fade-in awal
  const initialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants untuk animasi membesar
  const expandVariants = {
    initial: { width: "8rem", height: "11rem" }, // ukuran awal
    expanded: {
      width: "50vw",
      height: "50vh",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 10,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      transition: { duration: 0.5 },
    },
  };

  function handleAdd(index: number) {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <div className={`flex flex-wrap gap-4 relative justify-start`}>
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate={selectedIndex === null ? "visible" : undefined}
          variants={selectedIndex === null ? initialVariants : expandVariants}
          whileHover={selectedIndex === null ? { scale: 1.05 } : undefined}
          onClick={() => handleAdd(index)}
          className={`bg-containerSecondary w-32 h-44 rounded-lg cursor-pointer ${
            selectedIndex === index ? "fixed" : ""
          }`}
          style={{
            zIndex: selectedIndex === index ? 10 : 1,
          }}
        ></motion.div>
      ))}
    </div>
  );
}


function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17,12c0,.276-.224,.5-.5,.5h-4v4c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-4H7.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h4V7.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v4h4c.276,0,.5,.224,.5,.5Zm7-7.5v15c0,2.481-2.019,4.5-4.5,4.5H4.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C0,2.019,2.019,0,4.5,0h15c2.481,0,4.5,2.019,4.5,4.5Zm-1,0c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5V4.5Z" />
    </svg>
  );
}
