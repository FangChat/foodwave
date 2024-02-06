// import { motion as motion3d } from 'framer-motion-3d';
import { motion } from 'framer-motion';

function App() {

  return (

    <motion.main className='h-lvh w-lvw bg-cover bg-no-repeat flex flex-col gap-y-10'> 
      <motion.nav className='sticky p-4 w-full'
      animate={{
        opacity: [0, 1],
        boxShadow: "2px 2px 40px rgba(255, 255, 255, 0.48), -2px -2px 40px rgba(255, 255, 255, 0.48)",
      }}
      transition={{
        delay: 0.5,
        duration: 1,
      }}
      >
        <motion.ul className='relative flex flex-row h-full items-center text-center text-2xl ml-auto gap-10 self-end w-fit right-4'>
          <motion.li ><motion.a href='#'><h1 className='gradient-text bg-gradient-to-r from-cyan-400 to-green-200'>Home</h1></motion.a></motion.li>
          <motion.li><motion.a href='#download'><h1 className='gradient-text bg-gradient-to-r from-cyan-400 to-green-200'>Download</h1></motion.a></motion.li>
          <motion.li><motion.a href='#about'><h1 className='gradient-text bg-gradient-to-r from-cyan-400 to-green-200'>About</h1></motion.a></motion.li>
          <motion.li><motion.a href='#contact'><h1 className='gradient-text bg-gradient-to-r from-cyan-400 to-green-200'>Contact</h1></motion.a></motion.li>
        </motion.ul>
      </motion.nav>

      <motion.p id='about' className='text-justify mx-auto w-10/12 text-xl text-white font-shantell-sans font-bold italic mt-1000'>
      
      </motion.p>
    </motion.main>

  );

}

export default App;
