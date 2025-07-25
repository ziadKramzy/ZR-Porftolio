import { ThreeDCardDemo } from './components/Card/ThreeDCardDemo';
import ContactForm from './components/contact/Contactform';
import { HeroParallaxDemo } from './components/myhero';
import Navbar from './components/Navbar/Navbar';
import { motion } from 'framer-motion';



function App() {
  return (
    <>
      
      <Navbar />
      <div className='bg-gray-950'>
        <HeroParallaxDemo />
      </div>
      <div id="projects-section" className="py-12 px-4 sm:px-6 lg:px-8 gap-4 bg-gray-950">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center animate-fade-in-down bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg mb-12">
          Take a look at my Projects
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 2xl:gap-16 max-w-6xl 2xl:max-w-7xl mx-auto"
        >
        <ThreeDCardDemo 
          title="CrowdFunding Platform" 
          description="A full-stack crowdfunding platform built with React, JSX, and Django REST Framework. Features include user authentication, project creation, real-time updates, and responsive design." 
          floatImgSrc="https://i.postimg.cc/m2Bc5bZB/Crowdfunding-Concept-Icon.png" 
          mainImgSrc="https://i.postimg.cc/qMFTCL5S/Screenshot-from-2025-07-24-17-27-25.png" 
          linkHref="https://guileless-cucurucho-6b4a5d.netlify.app/" 
          linkText="LIVE DEMO →" 
          gitHubLink='https://github.com/ziadKramzy/crowdfunding_frontend-'
        />
        <ThreeDCardDemo 
          title="E-Commerce Platform" 
          description="A modern e-commerce solution built with React, featuring user authentication, product Built with React Hooks, Context API for state management" 
          floatImgSrc="https://i.postimg.cc/HncCS8JB/E-Commerce-Simplified-Icon.png" 
          mainImgSrc="https://i.postimg.cc/9Mqhbqw1/Screenshot-from-2025-07-24-17-35-16.png" 
          linkHref="https://quiet-crumble-137356.netlify.app/" 
          linkText="LIVE DEMO →" 
          gitHubLink='https://github.com/ziadKramzy/e-commerce'
        />
        <ThreeDCardDemo 
          title="MTIS College Website" 
          description="A comprehensive college website developed for MTIS College, featuring program information, faculty details, news updates, and student portal." 
          floatImgSrc="https://i.postimg.cc/J08RhcPv/logoMTIS.png" 
          mainImgSrc="https://i.postimg.cc/XYyTBBmg/Screenshot-from-2025-07-24-17-42-15.png" 
          linkHref="https://mtisproject.onrender.com/home-en" 
          linkText="VISIT SITE →" 
          gitHubLink='https://github.com/ziadKramzy/MTISProject'
        />
        <ThreeDCardDemo 
          title="Marvel Memory Match" 
          description='A fun and engaging memory matching game featuring Marvel superheroes, built with vanilla JavaScript and DOM manipulation.' 
          floatImgSrc='https://i.postimg.cc/pXGys40d/marvel-Cards.jpg' 
          mainImgSrc='https://i.postimg.cc/cH0sxBDj/Screenshot-from-2025-07-24-18-01-48.png' 
          linkHref="https://ziadkramzy.github.io/Memory-Matching-Game/" 
          linkText="PLAY GAME →" 
          gitHubLink='https://github.com/ziadKramzy/Memory-Matching-Game'
        />
        </motion.div>
      </div>
      
      <div id="contact-section" className='bg-gray-950'>
      <ContactForm/>
</div>
      
    </>
  );
}

export default App
