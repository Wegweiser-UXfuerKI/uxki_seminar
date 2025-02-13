import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContainerSixteenNine from "./ContainerSixteenNine";

const InteractiveModalWrapper = ({ closedModalContent, openModalContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative my-5 rounded-xl overflow-hidden">
      <div onClick={toggleModal} className="cursor-pointer">
        {closedModalContent}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleModal}>
            <motion.div
              className="glassBox p-6 m-6 mt-24 w-3/4 flex flex-col items-end"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}>
              <div className="rounded-xl w-full h-full overflow-hidden">
                <ContainerSixteenNine>
                  {openModalContent || (
                    <div className="w-full h-full bg-neutral-600"></div>
                  )}
                </ContainerSixteenNine>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveModalWrapper;
