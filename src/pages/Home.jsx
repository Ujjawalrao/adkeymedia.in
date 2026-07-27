import HeroSection from "../components/HeroSection.jsx";
import ScrollStack, {ScrollStackItem,
} from "../components/ScrollStackItem.jsx";
import { motion } from "motion/react";
import CircularGallery from "../components/CircularGallery.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { useContext } from "react";
import { Context } from "../context/Context.jsx";

export default function Home() {

 const { testimonialData, thoughtsData } = useContext(Context);


  return (
    <>
      <HeroSection />

      {/*  */}
      <section className="w-full max-h-6xl h-[70vh] flex justify-center items-center">
          <div className="w-6xl h-full border border-[#86268E] lg:flex  justify-between items-center gap-2 p-6 rounded-sm ">
              {/* 1st */}
              <div className=" w-full h-full rounded-sm flex flex-col gap-2">
                {/* inner 1st */}
                  <div className="w-full h-[50%] gap-2 flex">
                    <div className="w-full h-[100%] bg-gray-200 border border-[#86268E]"></div>
                    <div className="w-full h-[100%] bg-gray-200 border border-[#86268E]"></div>
                  </div>
                  {/* inner 2nd */}
                  <div className="w-full h-[50%] bg-gray-200"></div>
              </div>
              {/* 2nd */}
              {/* this div not show in mobile view */}
              <div className="bg-gray-200 w-full h-full hidden lg:flex rounded-sm"></div>

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
      <section className="w-screen relative py-20 ">


        <div className="w-6xl mx-auto">
    <div>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl text-white font-bold text-center lg:text-start mb-10"
          >
            Scroll Stack
          </motion.h2>
        </div>

          {/* card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl w-full bg-white/80 border  h-[60vh] rounded-4xl mx-auto sticky top-30 "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl w-full bg-white/80 border  h-[60vh] rounded-4xl mx-auto sticky top-50 mt-20"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl w-full bg  -white/80 border  h-[60vh] rounded-4xl mx-auto sticky top-70 mt-30"
        ></motion.div>
        </div>
        

      </section>

      <section className="w-full max-h-6xl flex justify-center items-center">

        <div className="max-w-6xl w-full  h-full">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-7xl text-white mb-8 text-center lg:text-start"
          >
            Testimonials
          </motion.h2>

          <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4">
            {testimonialData.map((item, index) => (
              <TestimonialCard key={index} {...item} />
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
            className="text-4xl md:text-7xl text-white mb-8 text-center lg:text-start"
          >
            Thoughts
          </motion.h2>

          <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4">
            {
              thoughtsData.map( (c, i) => {
                return (
                  <>
                    <div className="bg-gray-200 w-[370px] h-[400px] rounded-xl flex items-end duration-300 p-5">
                      
                      <div className="">
                        <span className="text-sm text-gray-600 bg-yellow-400/30 px-2 py-1 mb-2 rounded-full" >{c.date}</span>
                      <p className="text-4xl font-black font-sans text-gray-800 my-2">{c.heading}</p>

                      <p className="text-[#86268E]">{c.about}</p>
                      </div>

                    </div>
                  </>
                )
            } )
            }
          </div>

        </div>

      </section>

    </>
  );
}
