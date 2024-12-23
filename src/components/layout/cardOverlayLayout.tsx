import { motion } from "framer-motion";

interface CardOverlayLayoutProps {
  isVisible: boolean;
  children: React.ReactNode;
  outerClassName?: string;
  innerClassName?: string;
}

export default function CardOverlayLayout({
  isVisible,
  children,
  outerClassName,
  innerClassName,
}: CardOverlayLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className={`${
        isVisible ? `fixed` : `hidden`
      } w-screen h-screen bg-black bg-opacity-20 backdrop-blur-3xl top-0 left-0 flex justify-center items-center ${outerClassName}`}
    >
      <div
        className={`w-2/3 h-2/3 bg-containerSecondary rounded-lg py-24 px-44 ${innerClassName}`}
      >
        {children}
      </div>
    </motion.div>
  );
}
