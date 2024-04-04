import { motion } from 'framer-motion'


const Caret = () => {
  return (
    <motion.div
    aria-hidden={true}
    className='inline-block bg-yellow-500 w-o.5 h-7'
    initial={{opacity:1}}
    
    />
  )
}

export default Caret