import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
              className="glassBox no-hover rounded-xl p-6 w-full flex flex-col items-end"
              style={{
                aspectRatio: "16 / 10",
                maxWidth: "calc(80vw - 3rem)",
                maxHeight: "calc(100vh - 3rem)",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}>
              <div className="rounded-xl w-full h-full overflow-hidden">
                {openModalContent || (
                  <div className="w-full h-full bg-neutral-600"></div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveModalWrapper;
