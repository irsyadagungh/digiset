import CardOverlayLayout from "./layout/cardOverlayLayout"
import Image from "next/image";
import TransferAssets from "./transferAssets";
import { useState } from "react";

interface DetailAssetsProps {
    isVisible: boolean;
    handleVisible?: () => void;
}

export default function DetailAssets({isVisible, handleVisible} : DetailAssetsProps) {

    const [isTransferVisible, setIsTransferVisible] = useState(false);

    function handleTransfer() {
        setIsTransferVisible((prevIsTransferVisible) => {
            const newIsTransferVisible = !prevIsTransferVisible;
            console.log("isTransferVisible (updated)", newIsTransferVisible);

            return newIsTransferVisible;
        });
    }

    return (
      <CardOverlayLayout
        isVisible={isVisible}
        innerClassName={`flex flex-col justify-between`}
      >
        <div className={`flex h-full items-center justify-between`}>
          <div className={`w-44 h-3/4 border border-blue rounded-lg`}></div>
          <div className={`w-44 h-3/4 border border-blue rounded-lg`}></div>
          <div className={`w-1/3 h-3/4 flex flex-col justify-between`}>
            <div>
              <h1 className={`text-blue`}>Label</h1>
              <p>qwerty</p>
            </div>
            <div>
              <h1 className={`text-blue`}>Last Owner</h1>
              <p>qwerty</p>
            </div>
            <div>
              <h1 className={`text-blue`}>First Owner</h1>
              <p>qwerty</p>
            </div>
            <div>
              <h1 className={`text-blue`}>Date</h1>
              <p>qwerty</p>
            </div>
          </div>
        </div>
        <div className={`w-full flex justify-around`}>
          <button onClick={() => handleTransfer()} className={`bg-blue px-12 py-1 rounded-full`}>Transfer</button>
          <button onClick={() => handleVisible?.()}  className={`border border-red-800 px-12 py-1 text-red-800 rounded-full hover:bg-red-800 hover:text-white duration-300`}>Close</button>
        </div>
        <TransferAssets isVisible={isTransferVisible} handleVisible={handleTransfer} />
      </CardOverlayLayout>
    );
}