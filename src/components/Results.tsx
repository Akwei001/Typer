import {motion} from "framer-motion";

const Results = ({errors, accuracyPercentage, total, className} : {
    errors: number; 
    accuracyPercentage: number;
    total: number
    className?: string;
}) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.5 };
  

  return (
    <motion.ul> <ul className={`flex flex-col items-center text-yellow-500 space-y-3 ${className}}`}>
    <li className="text-xl font-semibold">Results</li>
    <li>Accuracy: {accuracyPercentage}</li>
    <li>Errors: {errors}</li>
    <li> Typed: {total}</li> 
 
 </ul>
 </motion.ul>
   
  )
}

export default Results