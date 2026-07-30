import React from 'react'
import { motion } from "motion/react";

function AdkeyLocation() {

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

  return (
    <>
    <section className="pb-24 px-5">

        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-zinc-800"
          >

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8196695702345!2d77.2853657!3d28.635166299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd780afb4af3%3A0x288276bd7f81dc4b!2sAdkey%20Media!5e0!3m2!1sen!2sin!4v1785235616565!5m2!1sen!2sin"
              className="w-full h-[450px]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title="Adkey Media Location"
            ></iframe>

          </motion.div>

        </div>

      </section>
    </>
  )
}

export default AdkeyLocation