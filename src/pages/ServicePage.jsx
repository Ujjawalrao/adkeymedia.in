import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Globe,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

// Import your serviceData
import { useContext } from "react";
import { Context } from "../context/Context.jsx"; // Change path if needed

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function ServicePage() {
  const { slug } = useParams();
  // console.log("Service slug:", slug);
  const { serviceData } = useContext(Context);
  const service = serviceData[slug];
  // console.log(service);
  

  if (!service) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">
          Service Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.seo.title}</title>

        <meta
          name="description"
          content={service.seo.description}
        />

        <meta
          name="keywords"
          content={service.seo.keywords}
        />

        <meta property="og:title" content={service.seo.title} />

        <meta
          property="og:description"
          content={service.seo.description}
        />
      </Helmet>

      <div className="bg-black text-white overflow-hidden">

        {/* HERO */}

        <section className="relative pt-24 pb-4 lg:py-50 ">

          <div className="absolute inset-0">

            <motion.img
            initial={{ opacity: 0,
              y: -60,
              

             }}
            whileInView={{ opacity: 1,
              y: 20
             }}
            transition={{ duration: 1 }}
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover object-top opacity-100"
            />

            <div className="absolute inset-0 bg-black/60"></div>

          </div>

          <div className="relative max-w-7xl mx-auto px-6">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-3xl"
            >

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">

                {service.title}

              </h1>

              <p className="mt-8 text-lg text-gray-300 leading-8">

                {service.description}

              </p>

              <div className="mt-10 flex gap-5 flex-wrap">

                <button className="px-8 py-4 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700 transition flex items-center gap-2">

                  Get Started

                  <ArrowRight size={18} />

                </button>

                <button className="px-8 py-4 rounded-xl border border-fuchsia-600 hover:bg-fuchsia-600 transition">

                  Contact Us

                </button>

              </div>

            </motion.div>

          </div>

        </section>

        {/* WHY CHOOSE */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >

              <h2 className="text-4xl font-bold">

                Why Choose Our {service.title}?

              </h2>

              <p className="mt-5 text-gray-400 max-w-2xl mx-auto">

                We combine creativity, technology, and strategy to
                deliver outstanding digital solutions that help
                businesses grow faster.

              </p>

            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-3xl bg-[#121212] border border-fuchsia-500/20 p-8"
              >

                <Globe
                  className="text-fuchsia-500 mb-5"
                  size={45}
                />

                <h3 className="text-2xl font-semibold">

                  Modern Technology

                </h3>

                <p className="text-gray-400 mt-4 leading-7">

                  We use the latest frameworks and industry best
                  practices to create high-performance digital
                  products.

                </p>

              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-3xl bg-[#121212] border border-fuchsia-500/20 p-8"
              >

                <TrendingUp
                  className="text-fuchsia-500 mb-5"
                  size={45}
                />

                <h3 className="text-2xl font-semibold">

                  Business Growth

                </h3>

                <p className="text-gray-400 mt-4 leading-7">

                  Every project is built to improve engagement,
                  generate leads, and maximize your return on
                  investment.

                </p>

              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-3xl bg-[#121212] border border-fuchsia-500/20 p-8"
              >

                <ShieldCheck
                  className="text-fuchsia-500 mb-5"
                  size={45}
                />

                <h3 className="text-2xl font-semibold">

                  Trusted Quality

                </h3>

                <p className="text-gray-400 mt-4 leading-7">

                  Every solution is optimized for speed,
                  responsiveness, security, and long-term
                  scalability.

                </p>

              </motion.div>

            </div>

          </div>

        </section>

                {/* FEATURES */}

        <section className="py-24 bg-[#0b0b0b]">
          <div className="max-w-7xl mx-auto px-6">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-fuchsia-500 uppercase tracking-[0.3em] text-sm">
                Features
              </span>

              <h2 className="text-4xl font-bold mt-4">
                What's Included
              </h2>

              <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
                Our {service.title.toLowerCase()} service is designed
                to help your business stand out with premium quality,
                modern technology, and proven strategies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#121212] border border-fuchsia-500/20 rounded-3xl p-8 hover:border-fuchsia-500 transition"
                >
                  <CheckCircle
                    className="text-fuchsia-500 mb-5"
                    size={32}
                  />

                  <h3 className="text-xl font-semibold mb-3">
                    {feature}
                  </h3>

                  <p className="text-gray-400 leading-7">
                    Our team ensures this feature is implemented
                    using the latest standards for better
                    performance and business growth.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="uppercase tracking-[0.3em] text-fuchsia-500 text-sm">
                Process
              </span>

              <h2 className="text-4xl font-bold mt-4">
                Our Working Process
              </h2>

              <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
                We follow a structured workflow to ensure every
                project is delivered on time with exceptional
                quality.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="relative bg-[#121212] rounded-3xl border border-fuchsia-500/20 p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-fuchsia-600 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {step}
                  </h3>

                  <p className="mt-4 text-gray-400 leading-7">
                    We carefully execute this stage while keeping
                    your business goals and quality standards at
                    the highest priority.
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* TECHNOLOGIES */}

        <section className="py-24 bg-[#0b0b0b]">

          <div className="max-w-7xl mx-auto px-6">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >

              <span className="uppercase tracking-[0.3em] text-fuchsia-500 text-sm">
                Technology Stack
              </span>

              <h2 className="text-4xl font-bold mt-4">
                Tools & Technologies
              </h2>

              <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
                We use modern tools and technologies to deliver
                secure, scalable, and high-performing digital
                solutions.
              </p>

            </motion.div>

            <div className="flex flex-wrap justify-center gap-5">

              {service.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="px-7 py-4 rounded-full border border-fuchsia-500/30 bg-[#121212] hover:bg-fuchsia-600 transition-all duration-300"
                >
                  {tech}
                </motion.div>
              ))}

            </div>

          </div>
        </section>

                {/* BENEFITS */}

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="uppercase tracking-[0.3em] text-fuchsia-500 text-sm">
                Benefits
              </span>

              <h2 className="text-4xl font-bold mt-4">
                Why Businesses Choose Us
              </h2>

              <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
                We deliver measurable results through innovative
                strategies, modern technologies, and a customer-first
                approach.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-4 rounded-2xl border border-fuchsia-500/20 bg-[#121212] p-6"
                >
                  <CheckCircle
                    className="text-fuchsia-500 mt-1 shrink-0"
                    size={24}
                  />

                  <div>
                    <h3 className="text-lg font-semibold">
                      {benefit}
                    </h3>

                    <p className="text-gray-400 mt-2 leading-7">
                      Our team ensures every project delivers this
                      advantage through careful planning and execution.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* FAQ */}

        <section className="py-24 bg-[#0b0b0b]">
          <div className="max-w-5xl mx-auto px-6">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="uppercase tracking-[0.3em] text-fuchsia-500 text-sm">
                FAQs
              </span>

              <h2 className="text-4xl font-bold mt-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-fuchsia-500/20 bg-[#121212] p-8"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {faq.question}
                  </h3>

                  <p className="text-gray-400 leading-8">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}

        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[40px] border border-fuchsia-500/20 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 p-12 md:p-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Grow Your Business?
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90 leading-8">
                Partner with Adkey Media and let our experts help
                you achieve your digital marketing and website
                goals through innovative solutions and proven
                strategies.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-5">

                <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
                  Get Free Consultation
                </button>

                <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
                  Contact Us
                </button>

              </div>
            </motion.div>

          </div>
        </section>

      </div>
    </>
  );
}