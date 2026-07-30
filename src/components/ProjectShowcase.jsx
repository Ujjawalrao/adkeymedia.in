import { motion } from "motion/react";
import { useState } from "react";

const projects = [
  {
    img: "src/assets/website-img/4.png",
    title: "Nasha Mukti Kendra",
    url: "https://navjagritifoundation.in/",
  },
  
  {
    img: "src/assets/website-img/2.png",
    title: "Property Legal Solutions",
    url: "https://propresolve.com",
  },
 
  {
    img: "src/assets/website-img/3.png",
    title: "Campus Dhundo",
    url: "https://campusdhundo.com",
  },
  {
    img: "src/assets/website-img/5.png",
    title: "ambulance Service",
    url: "https://fabulous-madeleine-1abbb3.netlify.app",
  },
   {
    img: "src/assets/website-img/1.png",
    title: "Adhiraj grand Holidays",
    url: "https://adhirajgrandholidays.com",
  },
];

export default function ProjectShowcase() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="w-full py-10 lg:pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-white text-4xl font-bold mb-14">
          100+ Websites We Worked With
        </h2>

        <div className="relative overflow-hidden backdrop:blur-sm rounded-xl">
          <style>{`
            @keyframes scroll-left {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}</style>

          <div
            className="flex gap-6 w-max"
            style={{
              animation: "scroll-left 20s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
              willChange: "transform",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...projects, ...projects].map((d, index) => (
              <motion.a
                key={index}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -2,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="group w-50 h-50 lg:h-auto lg:w-100 shrink-0 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={d.img}
                    alt=""
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:h-56 object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-white text-sm lg:text-2xl font-semibold">
                    {d.title}
                  </h3>

                  <p className="mt-3 text-zinc-400 text-sm truncate">
                    {d.url}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />

          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        </div>
      </div>
    </section>
  );
}