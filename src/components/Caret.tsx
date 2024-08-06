import { motion } from "framer-motion";

const Caret = ({left}: {left:number}) => {
  return (
    <motion.div
      aria-hidden={true}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
      className="inline-block bg-yellow-500 w-0.5 h-7"
      style={{ left: `${left * 14.5833}px` }}
    />
  );
};

export default Caret;