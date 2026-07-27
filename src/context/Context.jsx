import { createContext } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  const testimonialData = [
    {
      name: "Ujjawal",
      designation: "Frontend developer",
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: 'https://media-del3-2.cdn.whatsapp.net/v/t61.24694-24/646564197_1015834838095809_2300288732313279701_n.jpg?ccb=11-4&oh=01_Q5Aa5AFl6Nvj6zAV_x2h246CkUSaPWUZpNCWxBAPvgHg0tV4GA&oe=6A73DDC5&_nc_sid=5e03e0&_nc_cat=111',
    },
    {
      name: "Arman",
      designation: "Full-Stack developer",
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: 'https://media-del3-2.cdn.whatsapp.net/v/t61.24694-24/637041720_875373521894373_7364064939469755642_n.jpg?ccb=11-4&oh=01_Q5Aa5AHFx-C9manCFeZM4hEkP_QpR5Ny1bAhUmDqi0HT233uCg&oe=6A73F9DB&_nc_sid=5e03e0&_nc_cat=110',
    },
    {
      name: "Rahul",
      designation: "SEO Exicutive",
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: '',
    },
    {
      name: "Nikhil",
      designation: "Video Editor",
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: 'https://media-del3-2.cdn.whatsapp.net/v/t61.24694-24/534421781_968280902859787_8550675849200452276_n.jpg?ccb=11-4&oh=01_Q5Aa5AGX-5FWfFj5A_Jb5p57mC5r6d0K47d7q_siuxmtO3Gd_A&oe=6A73ED0B&_nc_sid=5e03e0&_nc_cat=107',
    },
  ];

  const thoughtsData = [
    {
        date:"May 5, 2026",
        heading:"Building Trust Through Clear Design",
        about:"How thoughtful visual choices create a stronger sense of reliability for modern brands."
    },
    {
        date:"Nav 14, 2004",
        heading:"The Role of Art Direction in Branding",
        about:"How thoughtful visual choices create a stronger sense of reliability for modern brands."
    },
    {
        date:"Dec 8, 2025",
        heading:"Building Trust Through Clear Design",
        about:"How thoughtful visual choices create a stronger sense of reliability for modern brands."
    },
  ]

  return (
    <Context.Provider value={{ testimonialData, thoughtsData }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;