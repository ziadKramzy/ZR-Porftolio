import { useEffect, useState } from 'react';
import { ThreeDCardDemo } from './components/Card/ThreeDCardDemo';
import ContactForm from './components/contact/Contactform';
import Footer from './components/Footer/Footer';
import { HeroParallaxDemo } from './components/myhero';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/aboutMe/AboutMe';
import { motion } from 'framer-motion';
import Particles from './components/Particles';
import Loader from './components/ui/Loader';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload key images used in the landing page for smoother first paint
    const urls: string[] = [
      'https://i.postimg.cc/W3YTCBg9/logo.png',
      'https://i.postimg.cc/Kc757m7R/Screenshot-from-2025-10-06-01-41-02.png',
      'https://i.postimg.cc/m2Bc5bZB/Crowdfunding-Concept-Icon.png',
      'https://i.postimg.cc/qMFTCL5S/Screenshot-from-2025-07-24-17-27-25.png',
      'https://i.postimg.cc/HncCS8JB/E-Commerce-Simplified-Icon.png',
      'https://i.postimg.cc/9Mqhbqw1/Screenshot-from-2025-07-24-17-35-16.png',
      'https://i.postimg.cc/J08RhcPv/logoMTIS.png',
      'https://i.postimg.cc/XYyTBBmg/Screenshot-from-2025-07-24-17-42-15.png',
      'https://i.postimg.cc/pXGys40d/marvel-Cards.jpg',
      'https://i.postimg.cc/cH0sxBDj/Screenshot-from-2025-07-24-18-01-48.png',
    ];
    const total = urls.length;
    let loaded = 0;

    type PrioritizedImage = HTMLImageElement & { fetchPriority?: 'high' | 'low' | 'auto' };
    const preload = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image() as PrioritizedImage;
        const done = () => {
          loaded += 1;
          setProgress(Math.round((loaded / total) * 100));
          resolve();
        };
        img.onload = done;
        img.onerror = done;
        img.decoding = 'async';
        // give priority hints where supported
        img.fetchPriority = 'high';
        img.src = src;
      });

    Promise.all(urls.map(preload)).then(() => {
      // small delay to let fonts/particles settle
      setTimeout(() => setIsLoading(false), 200);
    });
  }, []);

  // While loading, render only the loader to prevent background components
  // (particles, parallax, animations) from mounting and running in the
  // background. This ensures the loader exclusively manages the initial
  // loading experience.
  if (isLoading) {
    return <Loader progress={progress} />;
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global background layer - render after load to avoid initial jank */}
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={8000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground content */}
      <main className="relative z-10 flex-1">
        <Navbar />
        <div>
          <HeroParallaxDemo />
        </div>
        <AboutMe />
        <div id="projects-section" className="py-12 px-4 sm:px-6 lg:px-8 gap-4">
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
                title="Education PLatform For PSU" 
                description="A full-stack education platform (SaaS) built with React, JSX, and Django REST Framework. Features include user authentication, course creation, real-time updates, and responsive design." 
                floatImgSrc="https://i.postimg.cc/W3YTCBg9/logo.png" 
                mainImgSrc="https://i.postimg.cc/Kc757m7R/Screenshot-from-2025-10-06-01-41-02.png" 
                linkHref="https://psu-platform.vercel.app/" 
                linkText="LIVE DEMO →" 
                gitHubLink='https://github.com/ITI-Team1/Edu-Track'
              />

     <ThreeDCardDemo 
     title='Power Axes Company Website'
     description='a Next.Js Frontend project that focuses on optmizing the SEO and make the copmany apear more and reach to thier needed users'
      floatImgSrc='https://i.postimg.cc/vZv8qTJR/main-logo.png'
      mainImgSrc='https://i.postimg.cc/YScN3nBs/Screenshot-from-2025-10-23-15-55-46.png'
      linkHref='https://poweraxes.vercel.app/'
      gitHubLink='https://github.com/Galal-Elsayed/power-axes/tree/main'

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
                title="E-Commerce Platform" 
                description="A modern e-commerce solution built with React, featuring user authentication, product Built with React Hooks, Context API for state management" 
                floatImgSrc="https://i.postimg.cc/HncCS8JB/E-Commerce-Simplified-Icon.png" 
                mainImgSrc="https://i.postimg.cc/9Mqhbqw1/Screenshot-from-2025-07-24-17-35-16.png" 
                linkHref="https://quiet-crumble-137356.netlify.app/" 
                linkText="LIVE DEMO →" 
                gitHubLink='https://github.com/ziadKramzy/e-commerce'
              />


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

        <div id="contact-section">
          <ContactForm/>
        </div>
      </main>

      {/* Page footer at bottom */}
      <Footer/>

      {isLoading && <Loader progress={progress} />}
    </div>
  );
}

export default App
