import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { FaDownload } from "react-icons/fa6";

const About: React.FC = () => {
  return (
    <>
      <div className="font-codefont min-h-screen w-full bg-[#FEFFF0] p-4 pt-36 md:pt-32 md:p-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full">
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-medium">
                  AI Researcher & Web Developer
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                I build intelligent{" "}
                <span className="relative inline-block">
                  web & AI solutions
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 -z-10"></div>
                </span>
              </h1>

              <p className="text-lg text-gray-600">
                Bridging artificial intelligence and modern web development to
                create powerful, privacy-aware, and user-friendly applications.
              </p>

              <p className="text-lg text-gray-600 max-w-lg">
                Hello! I'm Abdul Sami, a Computer Science graduate, AI
                researcher, and full-stack developer. I specialize in Federated
                Learning, NLP, and MERN stack development. With publications in
                IEEE Access and hands-on project deployments, I combine academic
                research with practical engineering.
              </p>

              <p className="text-lg text-gray-600 max-w-lg">
                Since 2023, I’ve developed secure e-commerce apps, deployed
                LLM-based chatbots, and built document-grounded AI assistants. I
                love experimenting with Transformers, privacy-preserving models,
                and cutting-edge web technologies to bring real-world ideas to
                life.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 py-3 bg-blue-100 text-black border-2 border-black rounded-full font-medium transition-shadow hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <a href="/projects">see projects</a>

                  <div className="absolute top-0 right-0 -mt-2 -mr-2 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black"></div>
                </motion.button>

                <motion.a
                   href="https://drive.google.com/file/d/10v-YhuMqxlYiLGqPcMUwqSZQNXwGJV3E/view?usp=sharing"
                  //href="/assets/Abdul_Sami_cv.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-black hover:text-blue-600 font-medium"
                >
                  Resume <FaDownload className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Border Frame */}
                <div className="absolute inset-0 border-2 border-black bg-gradient-to-br from-blue-100 to-white rounded-3xl transform rotate-2"></div>
                <div className="absolute inset-0 border-2 border-black bg-gradient-to-br from-blue-100 to-white rounded-3xl transform -rotate-2"></div>

                {/* Main Image Container */}
                <div className="relative h-full border-2 border-black bg-[#FEFFF0] rounded-3xl overflow-hidden p-8">
                  <img
                    src="https://res.cloudinary.com/dtf5nwiic/image/upload/v1752760967/sami_axhpjt.jpg"
                    //src="/assets/sami.jpg"
                    alt="Developer Portrait"
                    className="object-cover w-full h-full"
                  />

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center">
                    <span className="text-xl">:)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
