import { motion } from "framer-motion";

export default function GradientLighting(){

return(

<div className="pointer-events-none absolute inset-0 overflow-hidden">

<motion.div
animate={{
x:[0,200,-200,0],
y:[0,-100,100,0]
}}
transition={{
duration:25,
repeat:Infinity,
ease:"linear"
}}
className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[140px]"
/>

<motion.div
animate={{
x:[0,-200,200,0],
y:[0,100,-100,0]
}}
transition={{
duration:30,
repeat:Infinity,
ease:"linear"
}}
className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-500/20 blur-[140px]"
/>

</div>

)

}