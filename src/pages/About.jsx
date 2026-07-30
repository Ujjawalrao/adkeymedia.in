import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Globe,
  TrendingUp,
  Megaphone,
  Palette,
} from "lucide-react";
import CircularGallery from "../components/CircularGallery";
import OurCertifications from "../components/ourCertification.jsx";
import Faq from "../components/faq.jsx";
import aboutImage from "../assets/about/1.jpg";
import Contactform from "../components/Contactform.jsx";
import AdkeyLocation from "../components/AdkeyLocation.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <main className="bg-black text-white pt-10">
      {/* ================= Hero ================= */}
      <section className="min-h-screen flex items-center px-5 py-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* <span className="text-[#86268E] uppercase tracking-[4px] font-semibold">
              About Adkey Media
            </span> */}

            <h1 className="text-5xl md:text-6xl font-bold mt-5 leading-tight">
              Your Digital Growth Partners
              <span className="text-[#86268E]"> Grow Online.</span>
            </h1>

            <p className="text-zinc-400 mt-8 text-lg leading-8">
              We are a digital marketing agency based in Delhi, founded in 2019.
              With a team of experienced professionals and a focus on innovative
              strategies, we deliver guaranteed results.
              <br />
              As a results-driven agency, we specialize in digital marketing and
              lead generation, helping businesses of all sizes grow through
              effective online strategies. Our services include, website design
              & development, SEO, social media marketing, PPC, video editing and
              youtube marketing.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
          >
            <img
              src={aboutImage}
              alt="about-image"
              className="w-full h-[500px] object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= Mission & Vision ================= */}

      <section className="py-10 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-3xl p-10"
          >
            <Target size={42} className="text-[#86268E]" />

            <h2 className="text-3xl font-bold mt-6">Our Mission</h2>

            <p className="text-zinc-400 mt-5 leading-8">
              Our mission is to help your brand shine in the digital landscape.
              We provide tailored solutions that drive growth, enhance
              engagement, and create long-term value, ensuring every campaign
              and strategy is aligned with your business objectives.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-3xl p-10"
          >
            <Eye size={42} className="text-[#86268E]" />

            <h2 className="text-3xl font-bold mt-6">Our Approach</h2>

            <p className="text-zinc-400 mt-5 leading-8">
              At Adkey Media, we empower businesses to achieve their digital
              goals through innovative, data-driven strategies. From building
              responsive websites and enhancing search visibility to launching
              engaging social media campaigns, we combine creativity,
              technology, and precise analysis to deliver results that truly
              matter.
            </p>
          </motion.div>
        </div>
      </section>

            {/* ================= Services ================= */}

      <section style={{ height: "800px", position: "relative" }}
        className="py-10"
      >

         <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold">Our Services</h2>

            <p className="text-zinc-400 mt-5 max-w-3xl mx-auto">
              We offer a comprehensive range of services to help your business
            </p>
          </motion.div>

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

      
      {/* Our Certifications */}
      <OurCertifications />

      {/* ================= Why Choose ================= */}

      <section className="py-10  mt-10 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold">Why Choose Adkey Media?</h2>

            <p className="text-zinc-400 mt-5 max-w-3xl mx-auto">
              We don’t just promote your brand; we create meaningful experiences
              that leave a lasting impact. Our team combines creativity,
              strategy, and technology to deliver solutions tailored to your
              goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: Globe,
                title: "Data-Driven Approach",
                text: "We leverage analytics and insights to design strategies that are precise, effective, and results-oriented.",
              },
              {
                icon: TrendingUp,
                title: "Affordable & Transparent Pricing",
                text: "Get premium-quality services at fair prices. We ensure complete transparency so your investment drives real growth.",
              },
              {
                icon: TrendingUp,
                title: "Integrity & Ethical Practices",
                text: "We operate with honesty, professionalism, and strong ethical standards in every campaign we manage for our clients.",
              },
              {
                icon: Megaphone,
                title: "Social Media",
                text: "Engaging campaigns built to capture attention and convert followers into customers, driving sustainable growth and maximizing your return on investment.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-zinc-900 rounded-3xl p-8 hover:bg-[#86268E] duration-500"
              >
                <item.icon size={42} />

                <h3 className="text-2xl font-semibold mt-6">{item.title}</h3>

                <p className="text-zinc-300 mt-4">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* contact form */}
      <Contactform />

      {/* map */}
            <AdkeyLocation />

      {/* ================= Faq ================= */}
   <Faq faqs={faqs} />

    </main>
  );
}

const faqs = [
  {
    question: "Do you work with specific industries?",
    answer:
      "We are working with a diverse industry-verticals such as e-commerce, real estate, healthcare, education, start-ups & local businesses.",
  },
  {
    question: "How do I get started with your agency?",
    answer:
      "Just give us a call, and get the free consultation you need. We will get to know your goals, and recommend the best digital strategy.",
  },
  {
    question: "How do you measure campaign performance?",
    answer:
      "Performance can be measured in terms of KPIs – traffic, leads, conversions, ROI and engagement for example. Transparent reports are provided so you can actually see results.",
  },

];