import { createContext } from "react";

// improting images for services

import websiteDesigningImage from "../assets/services/1.png";
import websiteDevelopmentImage from "../assets/services/2.png";
import PPCGoogleImage from "../assets/services/3.png";
import SEOImage from "../assets/services/4.png";
import SocialMediaOptImage from "../assets/services/5.png";
import GoogleBusinessProfilePromotionImage from "../assets/services/6.png";
import YoutubeMarketingImage from "../assets/services/7.png";
import VideoEditingImage from "../assets/services/8.png";

export const Context = createContext();

function ContextProvider({ children }) {
const testimonialData = [
  {
    name: "Ujjawal",
    designation: "Frontend developer",
    testimonial:
      "An excellent team that delivers modern websites and effective digital marketing solutions.",
    image:
      "https://media-del3-2.cdn.whatsapp.net/v/t61.24694-24/646564197_1015834838095809_2300288732313279701_n.jpg?ccb=11-4&oh=01_Q5Aa5AFl6Nvj6zAV_x2h246CkUSaPWUZpNCWxBAPvgHg0tV4GA&oe=6A73DDC5&_nc_sid=5e03e0&_nc_cat=111",
  },
  {
    name: "Arman",
    designation: "Full-Stack developer",
    testimonial:
      "Professional service, creative ideas, and outstanding results for our online business.",
    image:
      "https://media-del3-2.cdn.whatsapp.net/v/t61.24694-24/637041720_875373521894373_7364064939469755642_n.jpg?ccb=11-4&oh=01_Q5Aa5AHFx-C9manCFeZM4hEkP_QpR5Ny1bAhUmDqi0HT233uCg&oe=6A73F9DB&_nc_sid=5e03e0&_nc_cat=110",
  },
  {
    name: "Rahul",
    designation: "SEO Exicutive",
    testimonial:
      "Their SEO strategies improved our visibility and brought more quality leads.",
    image: "",
  },
  {
    name: "Nikhil",
    designation: "Video Editor",
    testimonial:
      "Highly recommended for businesses looking to grow their brand with digital marketing.",
    image:
      "https://media-del3-2.cdn.whatsapp.net/v/t61.24694-24/534421781_968280902859787_8550675849200452276_n.jpg?ccb=11-4&oh=01_Q5Aa5AGX-5FWfFj5A_Jb5p57mC5r6d0K47d7q_siuxmtO3Gd_A&oe=6A73ED0B&_nc_sid=5e03e0&_nc_cat=107",
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

  // Service page Data 
  const serviceData = {
  "website-designing": {
    title: "Website Designing",
    shortDescription:
      "Creative, responsive, and user-focused website designs that strengthen your brand identity and maximize conversions.",
    description:
      "At Adkey Media, we create modern, visually appealing, and responsive website designs that provide an outstanding user experience. Every design is crafted with your business goals in mind, ensuring your website not only looks beautiful but also converts visitors into loyal customers.",

    heroImage: websiteDesigningImage,

    seo: {
      title: "Website Designing Services | Adkey Media",
      description:
        "Professional website designing services by Adkey Media. Responsive, creative, SEO-friendly, and conversion-focused websites for your business.",
      keywords:
        "website designing, responsive web design, UI UX, landing page design, business website",
    },

    features: [
      "Responsive Website Design",
      "Modern UI/UX Design",
      "Landing Page Design",
      "Corporate Website Design",
      "E-commerce Website Design",
      "Mobile-Friendly Layouts",
    ],

    benefits: [
      "Professional brand identity",
      "Better user experience",
      "Higher conversion rates",
      "Fast loading pages",
      "Mobile optimized design",
      "SEO-friendly structure",
    ],

    process: [
      "Requirement Analysis",
      "Wireframe Planning",
      "UI/UX Design",
      "Development Support",
      "Testing & Launch",
    ],

    technologies: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],

    faqs: [
      {
        question: "Why is responsive design important?",
        answer:
          "Responsive websites work perfectly on desktop, tablet, and mobile devices, improving user experience and SEO.",
      },
      {
        question: "Do you redesign existing websites?",
        answer:
          "Yes. We redesign outdated websites with modern UI and better performance.",
      },
    ],
  },

  "website-development": {
    title: "Website Development",
    shortDescription:
      "Fast, scalable, secure, and SEO-friendly websites built using the latest technologies.",
    description:
      "Our website development services focus on creating high-performance, scalable, and secure websites tailored to your business needs. From corporate websites to complex web applications, we build solutions that help businesses grow online.",

    heroImage: websiteDevelopmentImage,

    seo: {
      title: "Website Development Services | Adkey Media",
      description:
        "Custom website development using modern technologies including React, Node.js, and more.",
      keywords:
        "website development, web developer, react developer, node js, custom website",
    },

    features: [
      "Custom Website Development",
      "React Development",
      "Business Websites",
      "CMS Development",
      "API Integration",
      "Performance Optimization",
    ],

    benefits: [
      "Lightning-fast performance",
      "Secure architecture",
      "SEO-ready code",
      "Scalable solutions",
      "Easy maintenance",
      "Cross-browser compatibility",
    ],

    process: [
      "Planning",
      "Frontend Development",
      "Backend Development",
      "Testing",
      "Deployment",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
    ],

    faqs: [
      {
        question: "Can you develop custom websites?",
        answer:
          "Yes. Every website is developed according to your business requirements.",
      },
      {
        question: "Is the website SEO friendly?",
        answer:
          "Absolutely. We follow modern SEO coding practices.",
      },
    ],
  },

  "ppc-google-ads": {
    title: "PPC Google Ads",
    shortDescription:
      "Generate instant leads and sales with highly optimized Google Ads campaigns.",
    description:
      "Our Google Ads experts create high-converting PPC campaigns that drive targeted traffic, maximize ROI, and help businesses achieve measurable growth.",

    heroImage: PPCGoogleImage,

    seo: {
      title: "Google Ads & PPC Services | Adkey Media",
      description:
        "Increase leads and sales with ROI-focused Google Ads campaign management.",
      keywords:
        "google ads, ppc, paid marketing, google advertising",
    },

    features: [
      "Search Ads",
      "Display Ads",
      "Remarketing",
      "Shopping Ads",
      "Performance Max",
      "Conversion Tracking",
    ],

    benefits: [
      "Instant traffic",
      "Qualified leads",
      "Better ROI",
      "Lower CPC",
      "Data-driven campaigns",
      "Detailed reports",
    ],

    process: [
      "Keyword Research",
      "Campaign Setup",
      "Ad Creation",
      "Optimization",
      "Reporting",
    ],

    technologies: [
      "Google Ads",
      "Google Analytics",
      "Tag Manager",
      "Keyword Planner",
    ],

    faqs: [
      {
        question: "How soon can I see results?",
        answer:
          "Most campaigns start generating traffic within a few hours after approval.",
      },
      {
        question: "Do you manage existing campaigns?",
        answer:
          "Yes. We optimize existing campaigns for better ROI.",
      },
    ],
  },

  "search-engine-optimization": {
    title: "Search Engine Optimization",
    shortDescription:
      "Improve your website rankings and attract organic traffic through proven SEO strategies.",
    description:
      "We provide comprehensive SEO services including on-page optimization, technical SEO, keyword research, link building, and content strategy to improve your Google rankings.",

    heroImage: SEOImage,

    seo: {
      title: "SEO Services | Adkey Media",
      description:
        "Professional SEO services to improve search rankings and increase organic traffic.",
      keywords:
        "seo services, search engine optimization, google ranking, technical seo",
    },

    features: [
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Keyword Research",
      "Local SEO",
      "SEO Audit",
    ],

    benefits: [
      "Higher rankings",
      "Organic traffic",
      "Brand authority",
      "Long-term growth",
      "More conversions",
      "Better visibility",
    ],

    process: [
      "SEO Audit",
      "Keyword Research",
      "Optimization",
      "Link Building",
      "Monthly Reporting",
    ],

    technologies: [
      "Google Search Console",
      "Google Analytics",
      "Ahrefs",
      "SEMrush",
    ],

    faqs: [
      {
        question: "How long does SEO take?",
        answer:
          "Generally 3–6 months depending on competition and website condition.",
      },
      {
        question: "Do you provide monthly reports?",
        answer:
          "Yes, every client receives detailed SEO reports.",
      },
    ],
  },

  "social-media-optimization": {
    title: "Social Media Optimization",
    shortDescription:
      "Grow your audience and increase engagement with strategic social media management.",
    description:
      "We optimize your social media presence through creative content, profile optimization, audience engagement, and performance analysis to help your brand grow online.",

    heroImage: SocialMediaOptImage,

    seo: {
      title: "Social Media Optimization Services | Adkey Media",
      description:
        "Professional SMO services to grow your brand on Facebook, Instagram, LinkedIn, and more.",
      keywords:
        "social media optimization, smo services, instagram marketing",
    },

    features: [
      "Profile Optimization",
      "Content Strategy",
      "Creative Posts",
      "Audience Engagement",
      "Hashtag Research",
      "Performance Reports",
    ],

    benefits: [
      "Brand awareness",
      "More followers",
      "Higher engagement",
      "Better reach",
      "Lead generation",
      "Improved trust",
    ],

    process: [
      "Research",
      "Content Planning",
      "Design",
      "Publishing",
      "Analytics",
    ],

    technologies: [
      "Facebook",
      "Instagram",
      "LinkedIn",
      "Canva",
      "Meta Business Suite",
    ],

    faqs: [
      {
        question: "Which platforms do you manage?",
        answer:
          "Facebook, Instagram, LinkedIn, Twitter, and more.",
      },
      {
        question: "Do you create content?",
        answer:
          "Yes. We create graphics, captions, and posting strategies.",
      },
    ],
  },

  "gmb-promotion": {
    title: "Google Business Profile Promotion",
    shortDescription:
      "Improve your local visibility and attract nearby customers with Google Business Profile optimization.",
    description:
      "Our Google Business Profile optimization services help businesses appear in local searches, Maps, and increase customer inquiries through profile enhancements.",

      heroImage: GoogleBusinessProfilePromotionImage,

    seo: {
      title: "Google Business Profile Optimization | Adkey Media",
      description:
        "Boost local rankings with professional Google Business Profile optimization.",
      keywords:
        "google business profile, gmb optimization, local seo",
    },

    features: [
      "Profile Optimization",
      "Local SEO",
      "Review Management",
      "Business Posts",
      "Photo Optimization",
      "Performance Reports",
    ],

    benefits: [
      "Local visibility",
      "More phone calls",
      "Map rankings",
      "Customer trust",
      "Higher footfall",
      "Business credibility",
    ],

    process: [
      "Business Audit",
      "Optimization",
      "Content Updates",
      "Review Strategy",
      "Reporting",
    ],

    technologies: [
      "Google Business Profile",
      "Google Maps",
      "Search Console",
    ],

    faqs: [
      {
        question: "Will my business appear on Google Maps?",
        answer:
          "Yes, after proper optimization and verification.",
      },
      {
        question: "Can you manage reviews?",
        answer:
          "Yes. We help improve ratings and customer engagement.",
      },
    ],
  },

  "youtube-marketing": {
    title: "YouTube Marketing",
    shortDescription:
      "Grow your YouTube channel with SEO, content strategy, and audience engagement.",
    description:
      "We help businesses and creators grow their YouTube presence through optimized videos, SEO strategies, audience targeting, and promotional campaigns.",

    heroImage: YoutubeMarketingImage,

    seo: {
      title: "YouTube Marketing Services | Adkey Media",
      description:
        "Professional YouTube marketing services to increase subscribers and video views.",
      keywords:
        "youtube marketing, youtube seo, video promotion",
    },

    features: [
      "Channel Optimization",
      "Video SEO",
      "Thumbnail Design",
      "Growth Strategy",
      "Audience Research",
      "Analytics",
    ],

    benefits: [
      "More subscribers",
      "Higher views",
      "Better engagement",
      "Brand awareness",
      "Organic growth",
      "Video optimization",
    ],

    process: [
      "Channel Audit",
      "SEO",
      "Content Planning",
      "Promotion",
      "Analytics",
    ],

    technologies: [
      "YouTube Studio",
      "TubeBuddy",
      "VidIQ",
      "Google Analytics",
    ],

    faqs: [
      {
        question: "Can you optimize old videos?",
        answer:
          "Yes. We optimize titles, descriptions, tags, and thumbnails.",
      },
      {
        question: "Do you guarantee subscribers?",
        answer:
          "We focus on organic and sustainable channel growth.",
      },
    ],
  },

  "video-editing": {
    title: "Video Editing",
    shortDescription:
      "Professional video editing that transforms raw footage into engaging visual content.",
    description:
      "We provide cinematic, engaging, and high-quality video editing services for businesses, influencers, YouTubers, and brands using modern editing techniques.",

    heroImage: VideoEditingImage,

    seo: {
      title: "Professional Video Editing Services | Adkey Media",
      description:
        "Creative video editing services for YouTube, social media, business, and promotional videos.",
      keywords:
        "video editing, youtube editing, reels editing, promotional videos",
    },

    features: [
      "YouTube Editing",
      "Reels Editing",
      "Corporate Videos",
      "Motion Graphics",
      "Transitions",
      "Color Grading",
    ],

    benefits: [
      "Professional quality",
      "Higher engagement",
      "Creative storytelling",
      "Fast delivery",
      "HD & 4K support",
      "Brand consistency",
    ],

    process: [
      "Content Review",
      "Editing",
      "Effects & Motion",
      "Color Grading",
      "Final Delivery",
    ],

    technologies: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro",
    ],

    faqs: [
      {
        question: "Do you edit Shorts and Reels?",
        answer:
          "Yes. We edit YouTube Shorts, Instagram Reels, and TikTok videos.",
      },
      {
        question: "Can you add subtitles?",
        answer:
          "Yes. We provide professional subtitles and captions.",
      },
    ],
  },
};

  return (
    <Context.Provider value={{ testimonialData, thoughtsData, serviceData }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;