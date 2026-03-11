import { motion } from "framer-motion";

export default function MagneticButton({children}){

return(

<motion.button
whileHover={{
scale:1.05,
boxShadow:"0 0 40px rgba(34,211,238,0.35)"
}}
whileTap={{scale:.95}}
transition={{duration:.2}}
className="rounded-xl bg-cyan-400 px-6 py-3 text-black font-semibold"
>

{children}

</motion.button>

)

}