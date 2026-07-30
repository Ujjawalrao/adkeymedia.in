import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ({ faqs }) {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full pt-5 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Find answers to the most common questions about our digital
            marketing and web development services.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left p-5 lg:p-6"
              >
                <h3 className="text-white text-lg lg:text-xl font-semibold pr-4">
                  {faq.question}
                </h3>

                <span className="text-[#86268E] flex-shrink-0">
                  {active === index ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  active === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 lg:px-6 pb-6">
                  <p className="text-gray-300 leading-8 text-base lg:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}