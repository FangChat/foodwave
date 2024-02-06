// import { motion as motion3d } from 'framer-motion-3d';
import { motion } from 'framer-motion';

function App() {

  return (
    <motion.div className='h-lvh w-lvw bg-cover bg-no-repeat flex flex-col gap-y-10'>
      <motion.main>
        <motion.nav className='fixed w-full top-0 z-50'
          animate={{
            opacity: [0, 1],
            boxShadow: "2px 2px 40px rgba(255, 255, 255, 0.48), -2px -2px 40px rgba(255, 255, 255, 0.48)",
            backgroundColor: "rgba(0, 0, 0, 1)",
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
        >
          <motion.ul className='relative justify-center flex flex-row h-full items-center text-center lg:text-2xl md:text-2xl text-xl lg:ml-auto gap-10 lg:w-fit lg:right-4 p-4 shrink'>
            <motion.li ><motion.a href='#'><h1 className='gradient-text bg-gradient-to-r from-cyan-400 to-green-200'>Home</h1></motion.a></motion.li>
            <motion.li><motion.a href='https://github.com/FangChat/foodwave/raw/main/public/FoodWave.apk'><h1 className='gradient-text bg-gradient-to-r from-cyan-400 to-green-200'>Download</h1></motion.a></motion.li>
            <motion.li><motion.a href='#about'><h1 className='gradient-text bg-gradient-to-r from-cyan-400 to-green-200'>About</h1></motion.a></motion.li>
            <motion.li><motion.a href='#contact'><h1 className='gradient-text bg-gradient-to-r from-cyan-400 to-green-200'>Contact</h1></motion.a></motion.li>
          </motion.ul>
        </motion.nav>
        </motion.main>
        
        <motion.div className='relative w-screen justify-center items-center container mx-auto'
          animate={{
            opacity: [0, 1],
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
        >
          <motion.h1 id='home' className='text-4xl text-center text-white mx-auto underline underline-offset-8 decoration-2 mt-12'>
            Home
          </motion.h1>

          <motion.p className='text-justify mx-auto w-10/12 text-xl text-white font-shantell-sans font-bold italic mt-10'>
            Foodwave is a location-based unused food donation application that is designed to connect donor entities with recipient entities to utilize unused food to minimize food wastage while feeding the needy.With Foodwave, users can easily identify food donation opportunities in their area and make donations with just a few taps.
          </motion.p>

          <motion.h1 id='about' className='text-4xl text-center text-white mx-auto underline underline-offset-8 decoration-2 mt-10 scroll-m-20'>
            About
          </motion.h1>

          <motion.p className='text-justify mx-auto w-10/12 text-xl text-white font-shantell-sans font-bold italic mt-10'>
            Purpose:
            <br />
            <br />
            FoodWave aims to minimize food wastage by utilizing unused food. We believe that throwing away food is akin to stealing from the table of those who are poor and hungry.
            <br />
            <br />
            Functionality:
            <br />
            <br />
            Donor-Recipient Connection:
            <br />
            <br />
            FoodWave connects restaurants, caterers, and food producers (donors) with charities, food banks, and other organizations (recipients).
            <br />
            <br />
            Location-Based:
            <br />
            <br />
            Users can easily identify food donation opportunities in their area.
            <br />
            <br />
            Effortless Donations:
            <br />
            <br />
            With just a few taps, users can donate unused food.
            <br />
            <br />
            Real-Time Impact Tracking:
            <br />
            <br />
            Donors can track the impact of their contributions by earning points based on the food supplied.
            <br />
            <br />
            Why FoodWave Matters:
            <br />
            <br />
            Environmental Impact: By preventing food wastage, we contribute to a more sustainable planet.
            Social Responsibility: FoodWave empowers individuals and businesses to make a difference in their communities.
            Feeding the Needy: Every donation counts—helping those who remain undernourished.
          </motion.p>

          <motion.h1 id='contact' className='text-4xl text-center text-white mt-5 mx-auto underline underline-offset-8 decoration-2'>
            Contact
          </motion.h1>

          <motion.p className='text-center mx-auto w-10/12 text-xl text-white font-shantell-sans font-bold italic mt-10 mb-10'>
            Email: fangofficialmail@gmail.com
            <br />
            Phone no: 0123456789
          </motion.p>

        </motion.div>

    </motion.div>
  );

}

export default App;
