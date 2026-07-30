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
import Galaxy from "../components/Galaxy.jsx";
import Faq from "../components/faq.jsx";
import aboutImage from "../assets/home-img/1.jpg";
import Contactform from "../components/Contactform.jsx";
import AdkeyLocation from "../components/AdkeyLocation.jsx";

export default function Home() {
  const { testimonialData, thoughtsData } = useContext(Context);

  

  return (
    <>
      <HeroSection />

      <section className="w-full min-h-[80vh] py-20  overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl sm:text-3xl lg:text-6xl text-white font-bold text-center mb-12"
        >
          Best Digital Marketing Agency in Delhi NCR
        </motion.h1>

        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 px-4 bg-transparent backdrop-blur-2xl rounded-3xl py-10 ">
          {/* Content */}
          <div className="w-full flex flex-col justify-center gap-6">

            <p className="text-gray-300 text-base sm:text-lg leading-8">
              Digital marketing encompasses a wide range of online strategies
              designed to promote businesses, products, and services. At{" "}
              <span className="font-semibold text-white">Adkey Media</span>, we
              provide complete digital marketing solutions including Social
              Media Marketing, Search Engine Optimization (SEO), Pay-Per-Click
              (PPC) advertising, Branding, Email Marketing, Website Design, and
              Website Development. Each strategy is carefully planned to help
              businesses grow, generate leads, and increase revenue.
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-8">
              In today's competitive digital world, having a strong online
              presence is no longer optional—it's essential. Businesses without
              effective digital marketing often struggle to reach their target
              audience and stay ahead of competitors. By partnering with{" "}
              <span className="font-semibold text-white">Adkey Media</span>, you
              gain a team of experts dedicated to building your brand,
              increasing visibility, and delivering measurable business growth.
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={aboutImage}
              alt="Digital Marketing"
              className="w-full max-w-md sm:max-w-lg lg:max-w-full rounded-xl object-fit shadow-2xl"
            />
          </div>
        </div>
      </section>
      {/* 1st */}

      {/*  */}
      <section className="w-full min-h-[70vh] flex justify-center items-center overflow-hidden">
        <div className="w-full max-w-6xl h-full border border-[#86268E] flex flex-col lg:flex-row justify-between items-stretch gap-2 p-6 rounded-sm overflow-hidden bg-transparent backdrop-blur-3xl shadow-xl shadow-[#86268E]/30">
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
      <section className="w-full relative py-16 lg:py-24 px-2 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl sm:text-3xl lg:text-6xl text-white font-bold text-center"
          >
            Needs a Professionally Created Website
          </motion.h2>

          <ScrollStack
            useWindowScroll
            itemDistance={50}
            itemScale={0.03}
            itemStackDistance={24}
            className="w-full top-20 absolute"
          >
            <ScrollStackItem itemClassName="h-auto p-0 rounded-[2rem] bg-white ">
              <div className="w-full flex flex-col lg:flex-row items-center gap-8 overflow-hidden p-5 lg:p-8">
                <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/1b/24/67/1b24675a1e16a5928604b84bdb986972.jpg"
                    alt="Website Development"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="w-full lg:w-1/2">
                  {/* <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
                    Professional Website Design & Development
                  </h2> */}

                  <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
                    Visitors typically make an instant decision whether to keep exploring your website. “Go to your website and if it looks outdated, confusing or slow, they are immediately going to leave and go to the next person.” That’s where the power of professional design comes in.

                    <br />

                    Adkey Media is a full-service design firm that has the creativity and the expertise to get your project done on time. We blend branding, usability and performance to design sites that not only look great, but also work. Our process maintains a focus on your brand identity, and leads users to take action.
                  </p>
                </div>
              </div>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="h-auto p-0 rounded-[2rem] bg-[#54095b]">
              <div className="w-full flex flex-col lg:flex-row-reverse items-center gap-8 overflow-hidden p-5 lg:p-8">
                <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/f1/1b/d7/f11bd72266c8b9bddd5d65ad51788a3a.jpg"
                    alt="Digital Marketing"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="w-full lg:w-1/2 text-white">
                  <h2 className="text-2xl lg:text-4xl font-bold">
                    A Results-Driven
                    Digital Marketing Agency
                  </h2>

                  <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200">
                    Adkey Media is a Full-service digital marketing agency focused on your business objectives. We help start-ups, small businesses and established brands harness the full potential of digital channels for measurable growth.
                    We don’t just stop at brand visibility. Our strategies are built to generate quality leads, drive consistent sales and build a strong digital presence that lasts.
                  </p>
                </div>
              </div>
            </ScrollStackItem>

            <ScrollStackItem itemClassName="h-auto p-0 rounded-[2rem] bg-black border border-[#86268E]/40">
              <div className="w-full flex flex-col lg:flex-row items-center gap-8 overflow-hidden p-5 lg:p-8 ">
                <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/fa/f3/4c/faf34c402c87640cccd3ef036bde7ad2.jpg"
                    alt="Business Growth"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="w-full lg:w-1/2 text-white">
                  <h2 className="text-2xl lg:text-4xl font-bold">
                    Trusted Digital Marketing Partner in Delhi
                  </h2>

                  <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300">
                    Searching for a digital marketing agency that truly understands your business goals? Welcome to Adkey Media Pvt. Ltd.—your reliable partner in building a strong online presence, enhancing brand visibility, and achieving measurable outcomes. Since 2018, we have empowered startups, local businesses, and enterprises to transform clicks into loyal customers with strategies that are both transparent and result-driven.
                  </p>
                </div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 lg:py-10 px-4 sm:px-6 lg:px-8 flex justify-center">
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

      {/* Thoughts */}
      <section className="w-full max-h-6xl lg:h-[80vh] flex justify-center items-center py-10">
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

      {/* Contact form */}
       <Contactform  className="text-white" />

       {/* map */}
            <AdkeyLocation />

      {/* Faq */}
      <Faq faqs={faqs} />
    </>
  );
}

const faqs = [
  {
    question: "What is a digital marketing Company/Agency?",
    answer:
      "A digital marketing agency is a company that assists other businesses market their products or services online using digital channels, such as search engines, social media, websites, and email. To ensure visibility of your business online and drive targeted traffic, leads and sales through strategic decisions driven by data.",
  },
  {
    question: "What services does Adkey Media offer?",
    answer:
      "Adkey Media offers full digital marketing services, which include SEO, social media marketing, Google & Meta ads, website design & development, content marketing and custom digital strategies that fit your business goals.",
  },
  {
    question: "How does digital marketing help my business grow?",
    answer:
      "Digital Marketing allows you to engage an ideal audience, increase brand exposure, create quality leads and drive more sales using data driven measurable strategies across the internet.",
  },
  {
    question: "What makes Adkey Media different from other agencies?",
    answer:
      "It's our result-oriented mentality, innovative techniques, open communication and full attention that makes us different. We think about long-term partnership, not just a short-term campaign.",
  },
  {
    question: "What do your services cost?",
    answer:
      "We charge based on your list of services and the size of the project. We have flexible and cheap packages for everyone.",
  },
  {
    question: "Can you assist with website design and development?",
    answer:
      "Yes, we are creative in house designers and developers who specialize in fast & mobile friendly websites that convert when optimized for search engines (SEO). Do you specialize in industries.",
  },
  {
    question: "Is SEO better than paid advertising?",
    answer:
      "Both are important. SEO gets you organic traffic in the long run, and paid ads give you short-term results. We recommend a balanced strategy.",
  },
];
