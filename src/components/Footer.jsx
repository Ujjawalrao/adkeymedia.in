import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Send,
  MessageCircle,
  Monitor,
} from "lucide-react";

const footerLinks = {
  company: [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
  ],

  services: [
    { label: "Website Designing" },
    { label: "Website Development" },
    { label: "PPC Google Ads" },
    { label: "Search Engine Optimization" },
    { label: "Social Media Optimization" },
    { label: "GMB Promotion" },
    { label: "Youtube Marketing" },
    { label: "Video Editing" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#85168f] via-[#883790] to-[#2a0b4b] text-white pt-20 pb-8">
      {/* Background Text */}
      <h1 className="absolute bottom-[-70px] left-0 text-[120px] md:text-[260px] font-black text-white/[0.03] select-none pointer-events-none leading-none">
        ADKEY
      </h1>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-bold mb-5">
              Adkey <span className="text-pink-300">Media</span>
            </h2>

            <p className="text-white/70 leading-7 mb-8">
              We help businesses grow online through innovative digital
              marketing, website development, branding, and creative
              strategies.
            </p>

            <div className="flex gap-4">
              {[
                {
                  icon: <Globe size={20} />,
                  link: "#",
                },
                {
                  icon: <MessageCircle size={20} />,
                  link: "#",
                },
                {
                  icon: <Send size={20} />,
                  link: "#",
                },
                {
                  icon: <Monitor size={20} />,
                  link: "#",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#6b21d8] transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 uppercase">
              Company
            </h3>

            <ul className="space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-white transition duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="relative max-w-[240px]">
            <h3 className="text-2xl font-semibold mb-4 uppercase">
              Services
            </h3>

            <div className="group inline-block w-full rounded-xl border border-white/10 bg-white/10 px-3 py-3 backdrop-blur-md transition-all duration-300 hover:bg-white/20">
              <div className="text-white/80 group-hover:text-white transition duration-300 cursor-pointer text-sm uppercase tracking-[0.2em]">
                Explore Services
              </div>

              <div className="pointer-events-none mt-2 overflow-hidden rounded-lg border border-white/10 bg-[#2a0b4b]/95 shadow-2xl transition-all duration-300 max-h-0 opacity-0 group-hover:pointer-events-auto group-hover:max-h-[420px] group-hover:opacity-100">
                <ul className="space-y-1 p-3">
                  {footerLinks.services.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md px-2 py-2 transition duration-300"
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 uppercase">
              Contact
            </h3>

            <div className="space-y-5 text-white/70">
              <div className="flex gap-3">
                <Phone className="mt-1 shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-white">
                    +91-9582345373
                  </p>
                  <p>+91-9891090497</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 shrink-0" size={18} />
                <p>info@adkeymedia.in</p>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-1 shrink-0" size={18} />
                <p>
                  306, 3rd Floor, Pooja Complex,
                  <br />
                  Veer Savarkar Block,
                  <br />
                  Shakarpur,
                  <br />
                  Delhi – 110092
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/15 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Adkey Media. All Rights Reserved.
          </p>

          <a
            href="https://ujjawalraosahab.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white transition"
          >
            Designed & Developed by Ujjawal Yadav
          </a>
        </div>
      </div>
    </footer>
  );
}