import HeroSection from "../components/HeroSection.jsx";
import ScrollStack, {
  ScrollStackItem,
} from "../components/ScrollStackItem.jsx";
import { motion } from "motion/react";
import CircularGallery from "../components/CircularGallery.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { useContext } from "react";
import { Context } from "../context/Context.jsx";
import ProjectShowcase from "../components/ProjectShowcase.jsx";
import OurCertification from "../components/ourCertification.jsx";
import WhyAdkey from "../components/WhyAdkey.jsx";

export default function Home() {
  const { testimonialData, thoughtsData } = useContext(Context);

  return (
    <>
      <HeroSection />

      {/*  */}
      <section className="w-full min-h-[70vh] flex justify-center items-center overflow-hidden">
        <div className="w-full max-w-6xl h-full border border-[#86268E] flex flex-col lg:flex-row justify-between items-stretch gap-2 p-6 rounded-sm overflow-hidden">
          {/* 1st */}
          <div className="w-full h-[407px] rounded-sm flex flex-col gap-2 min-w-0">
            {/* inner 1st */}
            <div className="w-full h-[50%] gap-2 flex ">
              <div className="relative w-full h-full border border-[#86268E] shadow-2xl shadow-[#86268E]/60 text-white text-xl lg:text-4xl p-4">
                <span className="text-blue-600">S</span>
                <span className="text-red-500">E</span>
                <span className="text-yellow-600">O</span>
                <br />
                Optimization
                <p className="text-sm absolute bottom-4">
                  Rank higher on Google and attract organic, high-intent
                  traffic.
                </p>
              </div>
              <div className="w-full h-full border border-[#86268E] shadow-2xl shadow-[#86268E]/60 text-white text-3xl lg:text-4xl p-4">
                Best Digital Marketing Agency in Delhi NCR
              </div>
            </div>
            {/* inner 2nd */}
            <div className="w-full h-[50%] shadow-2xl shadow-[#86268E]/30 border border-[#86268E] rounded-sm">
              <p className="text-white text-3xl lg:text-5xl font-bold p-4 bg-transparent backdrop-blur-3xl capitalize">
                Unlock Your first job or Internship with our expert guidance
                <span className="px-10 py-2 ml-2 border border-[#FDCB06] text-lg rounded-full">
                  <i className="ri-arrow-right-long-fill"></i>
                </span>
              </p>
            </div>
          </div>
          {/* 2nd */}
          <div className=" w-full lg:h-full h-auto rounded-sm shadow-2xl border border-[#86268E] shadow-[#86268E]/30 relative min-w-0 overflow-hidden">
            <h1 className="absolute z-10 text-white text-sm lg:text-2xl font-bold p-4 bg-transparent backdrop-blur-xl">
              Let's Connect with Adkey Media: We Build Something Amazing
              Together!
            </h1>
            <video
              src="src/assets/video/vdo1.mp4"
              autoPlay
              loop
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 left-4 px-8 py-3 hover:bg-[#86268E]/50 backdrop-blur-xl text-white rounded border-dotted border transition-all duration-300 ease-in-out text-xl font-bold cursor-pointer">
              Let's Connect <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Circular Gallery */}
      <section style={{ height: "600px", position: "relative" }}>
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
      </section>

      {/* Scroll Stack */}
      <section className="w-full relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl sm:text-3xl lg:text-6xl text-white font-bold text-center mb-12"
          >
            Why Choose Adkey Media?
          </motion.h2>

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full bg-white rounded-2xl lg:rounded-[2rem] sticky top-20 lg:top-28 flex flex-col lg:flex-row items-center gap-8 overflow-hidden p-5 lg:p-8 mb-10 shadow-2xl"
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/1b/24/67/1b24675a1e16a5928604b84bdb986972.jpg"
                alt="Website Development"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
                Professional Website Design & Development
              </h2>

              <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
                Your website is the foundation of your online success. We build
                modern, responsive, and high-performing websites that reflect
                your brand identity and deliver exceptional user experiences.
                Every website we create is optimized for speed, SEO, and
                conversions, helping your business attract more visitors and
                turn them into loyal customers.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full bg-[#54095b] rounded-2xl lg:rounded-[2rem] sticky top-20 lg:top-28 flex flex-col lg:flex-row-reverse items-center gap-8 overflow-hidden p-5 lg:p-8 mb-10 shadow-2xl"
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/f1/1b/d7/f11bd72266c8b9bddd5d65ad51788a3a.jpg"
                alt="Digital Marketing"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-2xl lg:text-4xl font-bold">
                Digital Marketing That Delivers Results
              </h2>

              <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200">
                We help businesses grow through powerful SEO, Google Ads, Meta
                Ads, Social Media Marketing, and content strategies. Our
                data-driven campaigns increase your online visibility, generate
                high-quality leads, and improve customer engagement, ensuring
                every marketing investment contributes to measurable business
                growth.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full bg-black rounded-2xl lg:rounded-[2rem] sticky top-20 lg:top-28 flex flex-col lg:flex-row items-center gap-8 overflow-hidden p-5 lg:p-8 shadow-2xl"
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/fa/f3/4c/faf34c402c87640cccd3ef036bde7ad2.jpg"
                alt="Business Growth"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-2xl lg:text-4xl font-bold">
                Grow Your Brand with Proven Strategies
              </h2>

              <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300">
                We don't just run campaigns—we build long-term growth
                strategies. Through performance tracking, audience analysis,
                branding, and conversion optimization, we continuously improve
                your digital presence. Our goal is to help your business
                generate more leads, increase sales, and achieve sustainable
                success in today's competitive online market.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-6xl">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-10 lg:mb-14 text-center"
          >
            Testimonials
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2">
            {testimonialData.map((item, index) => (
              <div key={index} className="w-full flex justify-center">
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-h-7xl lg:h-[80vh] flex justify-center items-center py-10">
        <div className="max-w-6xl w-full  h-full">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-7xl text-white mb-8 text-center"
          >
            Thoughts
          </motion.h2>

          <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 p-4">
            {thoughtsData.map((c, i) => {
              return (
                <div key={`${c.heading}-${i}`}>
                  <div className="bg-gray-200 w-full lg:w-[370px] h-[400px] rounded-xl flex items-end duration-300 p-5">
                    <div className="">
                      <span className="text-sm text-gray-600 bg-yellow-400/30 px-2 py-1 mb-2 rounded-full">
                        {c.date}
                      </span>
                      <p className="text-4xl font-black font-sans text-gray-800 my-2">
                        {c.heading}
                      </p>

                      <p className="text-[#86268E]">{c.about}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* project show case */}
      <ProjectShowcase />

      {/* Our Certifications */}
      <OurCertification />

      {/* why Adkey */}
      <WhyAdkey />
    </>
  );
}
