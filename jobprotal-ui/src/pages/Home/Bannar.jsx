/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-md rounded-lg shadow-2xl"
            alt="Banner"
          />
        </div>
        <div className="flex-1 lg:pr-8">
          <motion.h1
            className="mb-4 text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Our Site
          </motion.h1>
          <p className="py-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            quibusdam eius illum explicabo ex accusamus, ea, veniam harum
            tempore aliquid vitae quis adipisci labore. Iure temporibus aliquid
            corporis. Quos, fugiat.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
