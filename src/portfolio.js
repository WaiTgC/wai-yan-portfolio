import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaBriefcase,
} from "react-icons/fa";

const Portfolio = () => {
  const portfolioData = {
    name: "Wai Yan Lin",
    role: "Passionate Full Stack Developer",
    photoUrl:
      "https://preview.redd.it/batman-profile-pics-v0-qrz10k9s6fid1.jpg?width=542&format=pjpg&auto=webp&s=2f848b2d6644cbb03e0116e28755cd7e0a63319a",
    about: {
      description:
        "I am a dedicated Full Stack Developer with expertise in building dynamic and responsive web applications. My skill set includes frontend and backend technologies, allowing me to create seamless user experiences and robust systems.",
      skills: [
        "React",
        "MongoDB",
        "Node.js",
        "WordPress",
        "Microsoft Suite",
        "HTML",
        "CSS",
        "PHP",
        "Tailwind",
        "Bootstrap",
        "Figma",
        "Canva",
        "XAMPP",
        "GitHub",
        "Git",
      ],
      languages: [
        { language: "Burmese", proficiency: "Native" },
        { language: "English", proficiency: "Intermediate" },
      ],
      location: "52/728 Ek Charoen Road, Lak Hok, Mueang Pathumthani 12000",
    },
    education: [
      {
        degree: "B.S.c in Information and Communication Technology",
        school: "Rangsit University, Thailand",
        year: "2022 - 2025",
      },
      {
        degree: "B.S. in Computer Science",
        school: "Tech University",
        year: "2018 - 2022",
      },
    ],
    experience: [
      {
        title: "Frontend Developer",
        company: "Tech Corp",
        period: "2022 - Present",
        description:
          "Developed responsive web applications using React and TypeScript.",
        moreInfoLink: "/projects/tech-corp",
      },
      {
        title: "Junior Developer",
        company: "Web Solutions",
        period: "2021 - 2022",
        description: "Assisted in building modern UI components.",
        moreInfoLink: "/projects/web-solutions",
      },
      {
        title: "English Tutor",
        company: "Language Center",
        period: "August 2023",
        description:
          "Taught English to students, focusing on conversational skills and grammar.",
        moreInfoLink: "/projects/language-center",
      },
      {
        title: "Intern (Self-Ordering System & Admin Dashboard)",
        company: "Shalpal Teashop",
        period: "January 2025",
        description:
          "Developed a self-ordering system and admin dashboard to streamline operations.",
        moreInfoLink: "/projects/shalpal-teashop",
      },
      {
        title: "POS System Developer",
        company: "TamarMyay Restaurant",
        period: "May 2023",
        description:
          "Designed and implemented a Point of Sale (POS) system to enhance restaurant efficiency.",
        moreInfoLink: "/projects/tamarmyay",
      },
      {
        title: "Full Stack Developer (Learning App)",
        company: "Yarsu",
        period: "June 2025",
        description:
          "Built a learning app for Myanmar community in Thailand with features for job finding and hotel booking.",
        moreInfoLink: "/projects/yarsu",
      },
      {
        title: "FAQ Webpage Developer",
        company: "Freelance",
        period: "January 2023",
        description:
          "Created an interactive FAQ webpage using the Gemini API for dynamic content.",
        moreInfoLink: "/projects/faq-webpage",
      },
    ],
    contact: {
      email: "waiyanlintg@gmail.com",
      phone: "+66613967527",
      linkedin: "linkedin.com/in/waiyanlin",
      github: "github.com/waiyanlin",
      facebook: "facebook.com/waiyanlin",
      instagram: "instagram.com/waiyanlin",
      upwork: "upwork.com/freelancers/waiyanlin",
    },
  };

  // Simplified animation variants for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const photoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const blackHoleTextStyle = {
    background:
      "radial-gradient(circle, #ffffff 20%, #4b5563 40%, #1f2937 80%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    textShadow: "0 0 2px rgba(255, 255, 255, 0.5)",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (This is a placeholder)");
  };

  return (
    <div
      className="min-h-screen font-sans overflow-hidden relative"
      style={{
        background: "linear-gradient(to bottom, #1f2937 0%, #4b5563 100%)",
      }}
    >
      {/* Simplified Background for Performance */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.3) 3%, transparent 3%),
            radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.2) 3%, transparent 3%)
          `,
          backgroundSize: "cover, cover",
          opacity: 0.8,
          zIndex: 0,
        }}
      ></div>

      {/* Header Section */}
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="bg-opacity-80 bg-gray-800 py-4 sm:h-1/3 relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-4">
            <motion.img
              src={portfolioData.photoUrl}
              alt="Profile"
              className="w-full h-full rounded-full border-4 border-gray-400 shadow-lg object-cover"
              variants={photoVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/300")
              }
            />
          </div>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 tracking-wide"
            style={blackHoleTextStyle}
            variants={textVariants}
          >
            {portfolioData.name}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl tracking-wide text-gray-200"
            variants={textVariants}
          >
            {portfolioData.role}
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 relative z-10">
        {/* About Me Section */}
        <motion.section
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center"
            style={blackHoleTextStyle}
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.div
            className="bg-gray-800 bg-opacity-70 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-600"
            variants={itemVariants}
          >
            <p className="text-gray-300 text-sm sm:text-base mb-3">
              {portfolioData.about.description}
            </p>
            <p className="text-gray-300 text-sm sm:text-base mb-3">
              <strong>Location:</strong> {portfolioData.about.location}
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {portfolioData.about.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.about.languages.map((lang, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs sm:text-sm"
                >
                  {lang.language}: {lang.proficiency}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center"
            style={blackHoleTextStyle}
            variants={itemVariants}
          >
            Education
          </motion.h2>
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-70 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-600 mb-4"
              variants={itemVariants}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {edu.degree}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">{edu.school}</p>
              <p className="text-gray-400 text-sm sm:text-base">{edu.year}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center"
            style={blackHoleTextStyle}
            variants={itemVariants}
          >
            Experience
          </motion.h2>
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-70 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-600 mb-4"
              variants={itemVariants}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {exp.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {exp.company}
              </p>
              <p className="text-gray-400 text-sm sm:text-base">{exp.period}</p>
              <p className="text-gray-300 text-sm sm:text-base mt-2">
                {exp.description}
              </p>
              <a
                href={exp.moreInfoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-3 py-1 bg-gray-700 text-gray-200 rounded-lg text-xs sm:text-sm hover:bg-gray-600 transition-colors"
              >
                More Info
              </a>
            </motion.div>
          ))}
        </motion.section>
      </main>

      {/* Contact Footer */}
      <motion.footer
        className="bg-gray-800 bg-opacity-80 py-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={blackHoleTextStyle}
            variants={rightItemVariants}
          >
            Contact Me
          </motion.h2>

          {/* Contact Info and Form */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            variants={rightItemVariants}
          >
            <div className="space-y-3 text-sm sm:text-base text-gray-300">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  {portfolioData.contact.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <span className="text-gray-200">
                  {portfolioData.contact.phone}
                </span>
              </p>
              <div className="flex justify-center gap-3 sm:gap-4">
                <a
                  href={`https://${portfolioData.contact.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href={`https://${portfolioData.contact.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href={`https://${portfolioData.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={`https://${portfolioData.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={`https://${portfolioData.contact.upwork}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors"
                  aria-label="Upwork"
                >
                  <FaBriefcase size={20} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              className="space-y-3"
              variants={rightItemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 rounded-lg bg-gray-700 bg-opacity-50 text-gray-200 border border-gray-600 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-sm"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 rounded-lg bg-gray-700 bg-opacity-50 text-gray-200 border border-gray-600 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-sm"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 h-24 rounded-lg bg-gray-700 bg-opacity-50 text-gray-200 border border-gray-600 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-sm"
                  required
                ></textarea>
              </div>
              <motion.button
                type="button"
                className="w-full p-2 bg-gray-700 text-gray-200 rounded-lg shadow-md text-sm hover:bg-gray-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={handleSubmit}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Portfolio;
