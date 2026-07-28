import React from "react";
import { motion } from "motion/react";

const certificates = [
  {
    id: 1,
    // title: "Frontend Development",
    // issuer: "Unified Mentor",
    image: "src/assets/certification/1.webp",
  },
  {
    id: 2,
    // title: "React.js Certification",
    // issuer: "Coursera",
    image: "src/assets/certification/3.webp",
  },
  {
    id: 3,
    // title: "JavaScript Essentials",
    // issuer: "Udemy",
    image: "src/assets/certification/2.webp",
    },
  {
    id: 4,
    // title: "Web Development",
    // issuer: "freeCodeCamp",
    image: "src/assets/certification/4.webp",  
  },
];

function OurCertification() {
  return (
    <section className="w-full py-10 px-4 ">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Our Certifications
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            A collection of professional certifications showcasing skills,
            knowledge, and continuous learning.
          </p>
        </motion.div>

        {/* Certificates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#151515] rounded-2xl overflow-hidden border border-white/10 hover:border-[#86268E] transition-all duration-300"
            >
              <div className="overflow-hidden max-h-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* <div className="p-5">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  Issued by{" "}
                  <span className="text-[#86268E]">{item.issuer}</span>
                </p>
              </div> */}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurCertification;