import React from 'react'
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

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

function Contactform() {
  return (
    <>
    <section className="pb-24 px-5">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 text-white">

          {/* Left */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-zinc-900/60 rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-[#86268E]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-[#86268E]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-[#86268E]"
              />

              <select className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-[#86268E]">
                <option>Select Service</option>
                <option>Website Development</option>
                <option>SEO</option>
                <option>Google Ads</option>
                <option>Meta Ads</option>
                <option>Social Media Marketing</option>
                <option>Branding</option>
                <option>Graphic Design</option>
                <option>Other</option>
              </select>

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none resize-none focus:border-[#86268E]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#86268E] hover:bg-[#6d1f74] duration-300 px-8 py-4 rounded-xl font-semibold w-full"
              >
                Send Message
              </button>

            </form>
          </motion.div>

          {/* Right */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-zinc-900/60 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <MapPin className="text-[#86268E]" />
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-zinc-400">
                      Adkey Media, New Delhi, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-[#86268E]" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-zinc-400">
                      info@adkeymedia.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-[#86268E]" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-zinc-400">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-[#86268E]" />
                  <div>
                    <h3 className="font-semibold">Working Hours</h3>
                    <p className="text-zinc-400">
                      Monday - Saturday
                    </p>
                    <p className="text-zinc-400">
                      10:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
    </>
  )
}

export default Contactform