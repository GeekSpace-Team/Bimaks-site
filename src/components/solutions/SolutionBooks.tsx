import { motion } from "framer-motion";
import { FaRegFilePdf } from "react-icons/fa";

const SolutionBooks = () => {
  return (
    <div className="flex mt-3 mb-16 overflow-x-auto">
      {/* Card 1 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex-shrink-0 lg:w-1/3 md:w-1/3 sm:w-1/2 xs:w-full p-4"
      >
        <div className="rounded-lg p-6 flex flex-col gap-5 justify-center items-center">
          <div className="text-4xl bg-blue-500 w-20 flex items-center justify-center h-20 rounded-full text-white mb-4">
            <FaRegFilePdf />
          </div>
          <h2 className="text-lg font-bold mb-2 text-center">
            CONTROL LIST OF RO SYSTEMS
          </h2>
          <button className="text-blue-500 font-bold px-4 py-2 rounded-md">
            Download
          </button>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="flex-shrink-0 lg:w-1/3 md:w-1/3 sm:w-1/2 xs:w-full p-4"
      >
        <div className="rounded-lg p-6 flex flex-col gap-3 justify-center items-center">
          <div className="text-4xl bg-blue-500 w-20 flex items-center justify-center h-20 rounded-full text-white mb-4">
            <FaRegFilePdf />
          </div>
          <h2 className="text-lg font-bold mb-2 text-center">
            CONTROL LIST OF COOLING SYSTEMS
          </h2>
          <button className="text-blue-500 font-bold px-4 py-2 rounded-md">
            Download
          </button>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="flex-shrink-0 lg:w-1/3 md:w-1/3 sm:w-1/2 xs:w-full p-4"
      >
        <div className="rounded-lg p-6 flex flex-col gap-5 justify-center items-center">
          <div className="text-4xl bg-blue-500 w-20 flex items-center justify-center h-20 rounded-full text-white mb-4">
            <FaRegFilePdf />
          </div>
          <h2 className="text-lg font-bold mb-2 text-center">
            BOILER CONTROLLIST
          </h2>
          <button className="text-blue-500 font-bold px-4 py-2 rounded-md">
            Download
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SolutionBooks;
