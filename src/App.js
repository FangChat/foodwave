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
          <motion.li ><motion.a href='#about'><h1 className='gradient-text bg-gradient-to-r from-cyan-400 to-green-200'>Home</h1></motion.a></motion.li>
          <motion.li><motion.a href='#about'><h1 className='gradient-text bg-gradient-to-r from-cyan-400 to-green-200'>Products</h1></motion.a></motion.li>
          <motion.li><motion.a href='#about'><h1 className='gradient-text bg-gradient-to-r from-cyan-400 to-green-200'>About</h1></motion.a></motion.li>
          <motion.li><motion.a href='#about'><h1 className='gradient-text bg-gradient-to-r from-cyan-400 to-green-200'>Contact</h1></motion.a></motion.li>
        </motion.ul>
      </motion.nav>

      <motion.p id='about' className='text-justify mx-auto w-10/12 text-xl text-white font-shantell-sans font-bold italic mt-1000'>
      The Grand Annual Cultural Fiesta of Chennai Institute Of Technology is an eminent spectacle that gives the student community a platform to showcase their talents and sculpt their skills. This memorable occasion is a perfect fusion of entertainment and knowledge-filled atmosphere with a potpourri of genres that escalate the vibrance of celebration. The event inculcates a blend of virtues among the students which makes them shine out of the crowd. This time, Takshashila's voyage will be an exhilarating one, full of adventures that are fished straight out of the ocean.The Great Indian cinema is a fascinating theme that sheds light on Indian culture and society. It has been a beacon of hope for over 100 years, providing an escape from reality for us. This year, Takshashila celebrates Indian cinema and pays tribute to the art of storytelling through movies. The logo explores the beauty of iconic Indian films, delving into the minds of the artists who created them. From a distant point, a movie might not seem of any particular interest, but for us, it represents year-long dedication and hard work to produce a 2-hour-long masterpiece projected on a screen, a testament to the unfathomable wonders of the creative mind.
      </motion.p>
    </motion.main>

  );

}

export default App;
