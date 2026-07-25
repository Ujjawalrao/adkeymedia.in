import HeroSection from "../components/HeroSection.jsx";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStackItem.jsx";
import { motion } from "motion/react";
import MagicBento from '../components/MagicBento.jsx';
import CircularGallery from "../components/CircularGallery.jsx";

export default function Home() {
  const bg = "https://i.pinimg.com/originals/ee/25/80/ee258099fc4569b154ae1458ba49bf74.gif";
// const bg ="https://i.pinimg.com/originals/8b/86/5d/8b865ddcb9bb441b73db346574214f49.gif";
// const bg ="https://i.pinimg.com/1200x/3e/a0/57/3ea057a4c7a954086b9577d17e14b83f.jpg";
// const bg ="https://i.pinimg.com/736x/60/a8/71/60a8718fe4c7726610d1352c8469e268.jpg";

  return (
    <>
      <HeroSection />

      <section
        className="h-[20vh] lg:h-[80vh] w-full bg-center bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      />

{/* Magic Bento */}
<div className="max-h-6xl w-full flex items-center justify-center ">
       <MagicBento 
  textAutoHide={true}
  enableStars
  enableSpotlight
  enableBorderGlow={true}
  enableTilt={false}
  enableMagnetism={false}
  clickEffect
  spotlightRadius={400}
  particleCount={12}
  glowColor="132, 0, 255"
  disableAnimations={false}
  className="max-w-7xl"
/>
</div>

{/* Circular Gallery */}
<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery
    bend={1}
    textColor="#ffffff"
    borderRadius={0.05}
    scrollEase={0.05}
    // Optionally load a custom font for the labels.
    // Accepts a stylesheet URL (e.g. Google Fonts) or a direct font file.
    // fontUrl=""
    font="bold 30px Orbitron"
    scrollSpeed={2}
    className="max-w-7xl"
/>
</div>

      <section className="w-screen relative py-40">

{/* heading */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl text-white font-bold text-center mb-10"
          >
            Scroll Stack
          </motion.h2>
        </div>
        {/* card */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl w-full bg-amber-300 h-[60vh] rounded-4xl mx-auto sticky top-30 ">

        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        className="max-w-6xl w-full bg-green-300 h-[60vh] rounded-4xl mx-auto sticky top-50 mt-20">

        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        className="max-w-5xl w-full bg-blue-300  h-[60vh] rounded-4xl mx-auto sticky top-70 mt-30">

        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        className="max-w-4xl w-full bg-red-300  h-[60vh] rounded-4xl mx-auto sticky top-90 mt-30">

        </motion.div>
      </section>
  
    </>
  );
}
