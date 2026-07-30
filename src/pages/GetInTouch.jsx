import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Contactform from "../components/Contactform.jsx";
import AdkeyLocation from "../components/AdkeyLocation.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function GetInTouch() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}

      <section className="py-24 px-5">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold"
          >
            Let's Grow Your Business
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear from you. Fill out the
            form below and our team will get back to you shortly.
          </motion.p>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}

      <Contactform />

      {/* ================= MAP ================= */}

      <AdkeyLocation />

    </main>
  );
}