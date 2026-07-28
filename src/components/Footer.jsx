import { Link } from 'react-router-dom';

const footerLinks = {
  company: [
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ],
  services: [
    { label: 'Digital Marketing' },
    { label: 'Web Development' },
    { label: 'Brand Strategy' },
    { label: 'Content Creation' },
  ],
  social: [
    { label: 'Facebook', icon: 'M' },
    { label: 'Twitter', icon: 'T' },
    { label: 'Instagram', icon: 'I' },
    { label: 'LinkedIn', icon: 'L' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#54095b] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Adkey Media</h3>
            <p className="text-gray-400 max-w-md">
              We help brands connect with their audience through innovative digital solutions and strategic marketing.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Adkey Media. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <p className='text-xs text-gray-500 hover:text-white/60 transition-colors duration-300 ease-in-out'>
              <a href="https://ujjawalraosahab.netlify.app/">
              ~ Created by Ujjawal yadav
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}