"use client";

import { useState } from "react";
import { delay, motion } from "framer-motion";
import AddAssetsForm from "@/components/formAddAssets";
import DetailAssets from "@/components/detailAssets";
import PlusIcon from "@/components/plusIcon";

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
  const [isAdd, setIsAdd] = useState(false);
  const [selectedAssets, setSelectedAssets] = useState(false);

  function handleAdd() {
    setIsAdd((prevIsAdd) => {
      const newIsAdd = !prevIsAdd;
      console.log("isAdd (updated)", newIsAdd);

      return newIsAdd;
    });
  }

  function handleselectedAssets() {
    setSelectedAssets((prevSelectedAssets) => {
      const newSelectedAssets = !prevSelectedAssets;
      console.log("selectedAssets (updated)", newSelectedAssets);

      return newSelectedAssets;
    });
  }

  return (
    <div className={`flex flex-wrap gap-4 relative justify-start`}>
      <motion.div
        onClick={() => handleAdd()}
        className={`w-32 h-44 bg-containerSecondary rounded-lg flex flex-col justify-around items-center p-4 cursor-pointer`}
      >
        <PlusIcon />
        <p>Add Assets</p>
      </motion.div>
      <AddAssetsForm isVisible={isAdd} handleVisible={handleAdd} />
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          key={index}
          onClick={() => handleselectedAssets()}
          className={`bg-containerSecondary w-32 h-44 rounded-lg cursor-pointer`}
        ></motion.div>
      ))}
      <DetailAssets isVisible={selectedAssets} handleVisible={handleselectedAssets} />
    </div>
  );
}
