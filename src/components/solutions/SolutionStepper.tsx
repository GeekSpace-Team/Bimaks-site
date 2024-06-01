import { motion } from "framer-motion";

const SolutionStepper = () => {
  return (
    <div className="flex flex-col gap-10 items-center dark:text-white">
      <div className="flex gap-8">
        <div className="flex flex-col gap-5 items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-gray-300"
          >
            <div className="font-bold text-blue-500">1</div>
          </motion.div>
          <div className="w-0.5 h-32 bg-gray-300 mx-2"></div>
          {/* Vertical line */}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="gap-4 flex flex-col"
        >
          <h1 className="text-2xl font-bold ">Excellent Product Quality</h1>
          <p className="leading-8">
            As <span className="font-bold">BIMAKS </span>, we are proud to
            supply our customers with high performance chemical products. Our
            products are offered with quality assurance in high-quality raw
            materials and production processes.
          </p>
        </motion.div>
      </div>
      {/* second step */}
      <div className="flex gap-8 ">
        <div className="flex flex-col gap-5 items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-gray-300"
          >
            <div className="font-bold text-blue-500">2</div>
          </motion.div>
          <div className="w-0.5 h-80 bg-gray-300 mx-2"></div>
          {/* Vertical line */}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="gap-4 flex flex-col"
        >
          <h1 className="text-2xl font-bold ">Fast And Reliable Service</h1>
          <p className="leading-8">
            <span className="font-bold">BIMAKS </span> carries out customer
            water sample analysis in its own private laboratory with short time
            and high accuracy. By uploading the resulting report data to our
            <span className="font-bold"> BAYP (BIMAKS Software Program) </span>
            Anti-scalant system, we are able to determine the most appropriate
            antiscalant at the most appropriate dose. This service has proven
            itself to provide reliable and fast results to our customers.
          </p>
          <p className="leading-8">
            Our technical service engineers continue to provide regular
            consultancy and guidance services throughout the process, including
            before and after the purchase.
          </p>
        </motion.div>
      </div>
      {/* third step */}
      <div className="flex gap-8 ">
        <div className="flex flex-col gap-5 items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-gray-300"
          >
            <div className="font-bold text-blue-500">3</div>
          </motion.div>
          <div className="w-0.5 h-32 bg-gray-300 mx-2"></div>
          {/* Vertical line */}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="gap-4 flex flex-col"
        >
          <h1 className="text-2xl font-bold ">Competitive Prices</h1>
          <p className="leading-8">
            As <span className="font-bold">BIMAKS </span>, we always provide the
            most competitive prices in the market to all our small or large
            scale customers and ensure that they make purchases from
            advantageous prices throughout the year.
          </p>
        </motion.div>
      </div>
      {/* fourth step */}
      <div className="flex gap-8 ">
        <div className="flex flex-col gap-5 items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-full w-12 h-12 flex items-center justify-center border-2 border-gray-300"
          >
            <div className="font-bold text-blue-500">4</div>
          </motion.div>
          {/* <div className="w-0.5 h-32 bg-gray-300 mx-2"></div> */}
          {/* Vertical line */}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="gap-4 flex flex-col"
        >
          <h1 className="text-2xl font-bold ">Technical Support After Sales</h1>
          <p className="leading-8">
            As <span className="font-bold">BIMAKS </span>, we always provide the
            most competitive prices in the market to all our small or large
            scale customers and ensure that they make purchases from
            advantageous prices throughout the year.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionStepper;
