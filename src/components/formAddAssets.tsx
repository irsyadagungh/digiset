import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";
import PlusIcon from "./plusIcon";
import CardOverlayLayout from "./layout/cardOverlayLayout";
import { IAssetCreate } from "@/types/Asset.type";


interface AddAssetsFormProps {
  isVisible: boolean;
  handleVisible?: () => void;
}


export default function AddAssetsForm({
  isVisible,
  handleVisible,
}: AddAssetsFormProps) {
    
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }

    console.log("Transaction Proof Preview: ", transactionProof);
    console.log("Ownership Proof Preview: ", ownershipProof);
  };

  const [ownershipProof, setOwnershipProof] = useState<string | null>(null);
  const [transactionProof, setTransactionProof] = useState<string | null>(null);
  const [assetAdd, setassetAdd] = useState<IAssetCreate>();
  const [label, setlabel] = useState("");
  const [buktiKepemilikan, setbuktiKepemilikan] = useState("");
  const [buktiTransaksi, setBuktiTransaksi] = useState("");


  const handleAssetPost = () =>{

  }

  return (
    <CardOverlayLayout isVisible={isVisible}>
      
        <input
          type="text"
          placeholder="Asset Label"
          className={`w-full p-2 rounded-full mb-4 backdrop-blur bg-transparent border border-blue px-4`}
          onChange={()=>{setlabel}}
          value = {label}
        />
        <div className="flex justify-between items-center mt-4">
          {/* Ownership Proof */}
          <div className="w-1/3 flex flex-col items-center">
            <label
              htmlFor="ownershipProof"
              className={`w-full h-40 ${
                ownershipProof
                  ? "border-none"
                  : "border-2 border-blue p-16 text-blue"
              } rounded-lg flex justify-center items-center cursor-pointer overflow-hidden`}
              style={{ backgroundColor: ownershipProof ? "transparent" : "" }}
            >
              {ownershipProof ? (
                <img
                  src={ownershipProof}
                  alt="Ownership Proof"
                  className="w-full h-full object-cover"
                />
              ) : (
                <PlusIcon />
              )}
            </label>
            <p className="text-white mt-2">Ownership Proof*</p>
            <input
              id="ownershipProof"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e, setOwnershipProof)}
            />
          </div>

          {/* Transaction Proof */}
          <div className="w-1/3 flex flex-col items-center">
            <label
              htmlFor="transactionProof"
              className={`w-full h-40 ${
                transactionProof
                  ? "border-none"
                  : "border-2 border-blue p-16 text-blue"
              } rounded-lg flex justify-center items-center cursor-pointer overflow-hidden`}
              style={{
                backgroundColor: transactionProof ? "transparent" : "",
              }}
            >
              {transactionProof ? (
                <img
                  src={transactionProof}
                  alt="Transaction Proof"
                  className="w-full h-full object-cover"
                />
              ) : (
                <PlusIcon />
              )}
            </label>
            <p className="text-white mt-2">Transaction Proof</p>
            <input
              id="transactionProof"
              type="file"
              accept="image/*"
              className="hidden"
              
              onChange={(e) => handleImageUpload(e, setTransactionProof)}
            />
          </div>
        </div>
        <div className={`flex gap-24`}>
          <button
            type="submit"
            className={`w-full p-2 rounded-full bg-blue hover:bg-opacity-60 duration-300 text-white mt-4`}
          >
            Add Asset
          </button>
          <button
            type="button"
            onClick={() => handleVisible?.()}
            className={`w-full p-2 rounded-full border border-red-800 text-red-800 mt-4 hover:bg-red-800 hover:text-white duration-300`}
          >
            Close
          </button>
        </div>
      
    </CardOverlayLayout>
  );
}
