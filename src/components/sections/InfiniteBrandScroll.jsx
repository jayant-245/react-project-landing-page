import { logos } from "../../utils/content";
import { motion } from "framer-motion";
const InfiniteBrandScroll = () => {
  const scrollLogos = [...logos, ...logos];

  return (
    <div className="bg-primary-1500 relative overflow-hidden bg-[url('../src/assets/Noise.webp')] bg-repeat py-10">
      <div className="absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r from-[#011014] to-transparent" />
      <div className="absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[#011014] to-transparent" />

      <motion.div
        className="flex gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {scrollLogos.map((logo, index) => (
          <img
            key={`${logo.id}-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="h-10 opacity-80 grayscale transition hover:opacity-100"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteBrandScroll;
