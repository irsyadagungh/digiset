import { useState } from "react";

interface CardAssetProps {
  label: String;
  category: String;
  currentWalletAddress: String;
  lastWalletAddress: String;
  ownerProof: String;
  transactionProof: String;
  timestamp: String;
}

interface CardAddAssetProps {
}

function CardAddAsset({isAddAsset}: {isAddAsset: boolean}) {

  const [isAdd, setIsAdd] = useState(isAddAsset);

  return (
    <div
      className={`w-screen h-screen flex flex-col items-center justify-center bg-black bg-opacity-20 backdrop-blur-md`}
    >
      <div className={`absolute w-1/2 h-1/2 bg-containerSecondary bg-opacity-50 backdrop-blur-md`}>

      </div>
    </div>
  );
}
