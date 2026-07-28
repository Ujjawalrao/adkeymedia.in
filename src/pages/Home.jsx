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
                  <i class="ri-arrow-right-long-fill"></i>
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
              Let's Connect <i class="ri-arrow-right-up-line"></i>
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
      <section className="w-screen relative py-20 px-2 ">
        <div className="max-w-6xl mx-auto">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl text-white font-bold text-center lg:text-start mb-10"
            >
              Title
            </motion.h2>
          </div>

          {/* card 1*/}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:max-w-7xl w-full bg-white border lg:h-[60vh] h-[90vh] rounded-xl lg:rounded-4xl mx-auto sticky top-25 lg:top-35 flex flex-col lg:flex-row justify-between items-center gap-8 overflow-hidden p-4 lg:p-8 "
          >
            <div className="w-full h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/1b/24/67/1b24675a1e16a5928604b84bdb986972.jpg"
                className="w-full h-fit object-cover lg:object-center object-bottom"
                alt=""
              />
            </div>
            <div className=" w-full h-full rounded-2xl ">
              <h2 className="text-xl lg:text-3xl">
                Needs a Professionally Created Website
              </h2>

              <p className="text-lg lg:text-xl mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis soluta aperiam architecto iusto non deleniti harum
                qui nemo illo. Quo magni sequi deserunt tempora quasi unde iure
                beatae atque nesciunt. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consequuntur veritatis placeat recusandae.
                Praesentium nulla unde aliquam! Quisquam ea natus enim earum!
                Reprehenderit sed tempora ipsam odio similique omnis et quasi
                error animi beatae blanditiis ea aperiam fugiat sequi saepe
                nobis aliquid inventore, odit magni impedit adipisci unde
                repellendus!
              </p>
            </div>
          </motion.div>
          {/* card 2*/}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:max-w-7xl w-full bg-[#54095b] border lg:h-[60vh] h-[90vh] rounded-xl lg:rounded-4xl mx-auto sticky top-25 lg:top-35 flex flex-col lg:flex-row-reverse justify-between items-center gap-8 overflow-hidden p-4 lg:p-8 "
          >
            <div className="w-full h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/1b/24/67/1b24675a1e16a5928604b84bdb986972.jpg"
                className="w-full h-fit object-cover lg:object-center object-bottom"
                alt=""
              />
            </div>
            <div className=" w-full h-full rounded-2xl text-white">
              <h2 className="text-xl lg:text-3xl">
                Needs a Professionally Created Website
              </h2>

              <p className="text-lg lg:text-xl mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis soluta aperiam architecto iusto non deleniti harum
                qui nemo illo. Quo magni sequi deserunt tempora quasi unde iure
                beatae atque nesciunt. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consequuntur veritatis placeat recusandae.
                Praesentium nulla unde aliquam! Quisquam ea natus enim earum!
                Reprehenderit sed tempora ipsam odio similique omnis et quasi
                error animi beatae blanditiis ea aperiam fugiat sequi saepe
                nobis aliquid inventore, odit magni impedit adipisci unde
                repellendus!
              </p>
            </div>
          </motion.div>
          {/* card 3*/}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:max-w-7xl w-full bg-black border lg:h-[60vh] h-[90vh] rounded-xl lg:rounded-4xl mx-auto sticky top-25 lg:top-35 flex flex-col lg:flex-row justify-between items-center gap-8 overflow-hidden p-4 lg:p-8 "
          >
            <div className="w-full h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/1b/24/67/1b24675a1e16a5928604b84bdb986972.jpg"
                className="w-full h-fit object-cover lg:object-center object-bottom"
                alt=""
              />
            </div>
            <div className=" w-full h-full rounded-2xl p-4 text-white">
              <h2 className="text-xl lg:text-3xl">
                Needs a Professionally Created Website
              </h2>

              <p className="text-lg lg:text-xl mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis soluta aperiam architecto iusto non deleniti harum
                qui nemo illo. Quo magni sequi deserunt tempora quasi unde iure
                beatae atque nesciunt. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consequuntur veritatis placeat recusandae.
                Praesentium nulla unde aliquam! Quisquam ea natus enim earum!
                Reprehenderit sed tempora ipsam odio similique omnis et quasi
                error animi beatae blanditiis ea aperiam fugiat sequi saepe
                nobis aliquid inventore, odit magni impedit adipisci unde
                repellendus!
              </p>
            </div>
          </motion.div>
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

          <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 p-4">
            {thoughtsData.map((c, i) => {
              return (
                <>
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
                </>
              );
            })}
          </div>
        </div>
      </section>

      {/* project show case */}
      <ProjectShowcase />

      <OurCertification />
    </>
  );
}
