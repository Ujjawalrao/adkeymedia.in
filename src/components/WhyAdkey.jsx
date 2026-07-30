import { CheckCircle2, XCircle, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyAdkey() {
  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center leading-tight mb-14"
        >
          Why Businesses Choose{" "}
          <span className="text-[#86268E]">Adkey Media</span>
        </motion.h2>

        {/* Comparison Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 80 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="border border-zinc-800 rounded-3xl overflow-hidden  bg-[#0b0b0b]/60 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side */}
            <div className="border-b lg:border-b-0 lg:border-r p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-xl bg-[#86268E] flex items-center justify-center">
                  <BarChart3 className="text-white" size={30} />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Adkey Media
                  </h3>
                  <p className="text-zinc-400">
                    Digital Marketing Agency
                  </p>
                </div>
              </div>

              <div className="space-y-7">
                {[
                  "Result-Driven Digital Marketing Strategies",
                  "SEO, Google Ads & Social Media Experts",
                  "Creative Branding & High-Converting Websites",
                  "Transparent Reporting & Dedicated Support",
                  "Affordable Packages With Premium Quality",
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2
                      className="text-green-500 shrink-0 mt-1"
                      size={24}
                    />
                    <p className="text-white text-lg leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-xl border border-zinc-700 flex items-center justify-center">
                  <XCircle className="text-red-500" size={28} />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Others
                  </h3>
                  <p className="text-zinc-400">
                    Traditional Agencies
                  </p>
                </div>
              </div>

              <div className="space-y-7">
                {[
                  "Generic Marketing Without Clear Strategy",
                  "Poor ROI From Paid Advertising",
                  "Outdated Designs & Weak Online Presence",
                  "Limited Communication & Slow Execution",
                  "High Costs With Inconsistent Results",
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <XCircle
                      className="text-red-500 shrink-0 mt-1"
                      size={24}
                    />
                    <p className="text-white text-lg leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}