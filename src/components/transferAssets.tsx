import { useState } from "react";
import CardOverlayLayout from "./layout/cardOverlayLayout";
import PlusIcon from "./plusIcon";

interface TransferAssetsProps {
  isVisible: boolean;
  handleVisible?: () => void;
}

export default function TransferAssets({
  isVisible,
  handleVisible,
}: TransferAssetsProps) {
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      console.error("No file selected");
      return;
    }

    console.log("Transaction Proof Preview: ", transactionProof);


    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.onerror = (error) => {
      console.error("File reading error: ", error);
    };
    reader.readAsDataURL(file);
  };

  const [transactionProof, setTransactionProof] = useState<string | null>(null);

  return (
    <CardOverlayLayout isVisible={isVisible}>
      <div className={`flex flex-col justify-between`}>
        <input
          type="text"
          placeholder="Wallet Address"
          className={`w-full p-2 rounded-full mb-4 backdrop-blur bg-transparent border border-blue px-4`}
        />
        {/* {UNTUK INPUT GAMBAR} */}
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
    </CardOverlayLayout>
  );
}
