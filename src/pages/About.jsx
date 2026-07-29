import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Globe,
  TrendingUp,
  Megaphone,
  Palette,
} from "lucide-react";

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
    <main className="bg-black text-white">

      {/* ================= Hero ================= */}
      <section className="min-h-screen flex items-center px-5 py-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-[#86268E] uppercase tracking-[4px] font-semibold">
              About Adkey Media
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-5 leading-tight">
              We Build Brands That
              <span className="text-[#86268E]"> Grow Online.</span>
            </h1>

            <p className="text-zinc-400 mt-8 text-lg leading-8">
              Adkey Media is a full-service digital marketing agency helping
              businesses increase their online visibility through SEO,
              performance marketing, social media management, branding, and
              website development.
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
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
              alt=""
              className="w-full h-[500px] object-cover"
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

            <h2 className="text-3xl font-bold mt-6">
              Our Mission
            </h2>

            <p className="text-zinc-400 mt-5 leading-8">
              To empower businesses with innovative digital marketing solutions
              that increase visibility, generate qualified leads, and deliver
              measurable business growth.
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

            <h2 className="text-3xl font-bold mt-6">
              Our Vision
            </h2>

            <p className="text-zinc-400 mt-5 leading-8">
              To become one of India's most trusted digital marketing agencies,
              known for creativity, transparency, and exceptional client
              results.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= Why Choose ================= */}

      <section className="py-10 px-5">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold">
              Why Choose Adkey Media?
            </h2>

            <p className="text-zinc-400 mt-5 max-w-3xl mx-auto">
              We combine creativity, strategy, and technology to build
              successful digital experiences that help businesses grow faster.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              {
                icon: Globe,
                title: "SEO Experts",
                text: "Boost rankings and organic traffic.",
              },
              {
                icon: TrendingUp,
                title: "Performance Marketing",
                text: "ROI-focused Google & Meta Ads.",
              },
              {
                icon: Palette,
                title: "Creative Branding",
                text: "Memorable brand identities.",
              },
              {
                icon: Megaphone,
                title: "Social Media",
                text: "Engaging campaigns that convert.",
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

                <h3 className="text-2xl font-semibold mt-6">
                  {item.title}
                </h3>

                <p className="text-zinc-300 mt-4">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= Services ================= */}

      <section className="py-10 px-5">

        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold">
              Our Services
            </h2>

            <p className="text-zinc-400 mt-5">
              Everything you need to grow your business online.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              "Website Development",
              "Search Engine Optimization",
              "Google Ads",
              "Meta Ads",
              "Social Media Marketing",
              "Branding & Graphic Design",
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border border-zinc-800 rounded-2xl p-8 hover:border-[#86268E] duration-300"
              >
                <h3 className="text-2xl font-semibold">
                  {service}
                </h3>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}