import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaCode,
  FaMobile,
  FaRobot,
  FaServer, FaFire, FaProjectDiagram, FaEye, FaBrain, FaChartLine, FaCogs, FaMicrochip, FaJs, FaChartBar, FaAws, FaPen,
  FaSearch, FaCheckCircle, FaFlask,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiSupabase,
  SiVercel,
  SiTensorflow,
  SiMysql,
  SiGooglecloud,
  SiGithubactions,
  SiExpo,
  SiNextdotjs,
  SiPostgresql,
  SiShadcnui,
  SiResend,
  SiZod,
} from "react-icons/si";
import { TbBrandRust } from "react-icons/tb";
import { IoSparkles } from "react-icons/io5";

function SiMicrosoftsqlserver() {
  return null;
}

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const skills = {
    aiEngineering: [
      { name: "Python", icon: <FaCode />, level: "Expert" },
      { name: "PyTorch", icon: <FaFire />, level: "Advanced" },
      { name: "TensorFlow", icon: <SiTensorflow />, level: "Advanced" },
      { name: "Federated Learning (Flower)", icon: <FaProjectDiagram />, level: "Advanced" },
      { name: "Computer Vision", icon: <FaEye />, level: "Advanced" },
      { name: "Deep Learning", icon: <FaBrain />, level: "Expert" },
      { name: "Model Optimization", icon: <FaChartLine />, level: "Advanced" },
    ],

    llmStack: [
      { name: "LLMs (GPT, Open Models)", icon: <FaRobot />, level: "Advanced" },
      { name: "LangChain", icon: <IoSparkles />, level: "Advanced" },
      { name: "RAG Pipelines", icon: <IoSparkles />, level: "Advanced" },
      { name: "Vector Databases (Qdrant)", icon: <IoSparkles />, level: "Advanced" },
      { name: "Semantic Search", icon: <IoSparkles />, level: "Advanced" },
      { name: "Retrievers", icon: <IoSparkles />, level: "Advanced" },
      { name: "Prompt Engineering", icon: <IoSparkles />, level: "Advanced" },
      { name: "AI Agents", icon: <FaRobot />, level: "Advanced" },
      { name: "Agentic AI (LangGraph)", icon: <IoSparkles />, level: "Advanced" },
      { name: "Multimodal AI (CLIP)", icon: <FaRobot />, level: "Advanced" },
    ],

    backendSystems: [
      { name: "Flask", icon: <FaServer />, level: "Advanced" },
      { name: "FastAPI", icon: <FaServer />, level: "Advanced" },
      { name: "Node.js", icon: <FaNode />, level: "Advanced" },
      { name: "Express", icon: <FaServer />, level: "Advanced" },
      { name: "REST API Design", icon: <FaCode />, level: "Advanced" },
      { name: "System Integration", icon: <FaCogs />, level: "Advanced" },
      { name: "Multi-threading", icon: <FaMicrochip />, level: "Advanced" },
      { name: "C++", icon: <FaCode />, level: "Advanced" },
      { name: "Resend", icon: <SiResend />, level: "Advanced" },
    ],

    frontend: [
      { name: "React", icon: <FaReact />, level: "Expert" },
      { name: "Next.js", icon: <SiNextdotjs />, level: "Expert" },
      { name: "JavaScript", icon: <FaJs />, level: "Expert" },
      { name: "TypeScript", icon: <SiTypescript />, level: "Advanced" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, level: "Expert" },
      { name: "shadcn/ui", icon: <SiShadcnui />, level: "Expert" },
      { name: "Data Visualization", icon: <FaChartBar />, level: "Advanced" },
      { name: "Zod", icon: <SiZod />, level: "Advanced" },
      { name: "Zustand", icon: <TbBrandRust />, level: "Advanced" },
    ],

    databasesCloud: [
      { name: "MySQL", icon: <SiMysql />, level: "Advanced" },
      { name: "MS SQL Server", icon: <SiMicrosoftsqlserver />, level: "Advanced" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: "Advanced" },
      { name: "Supabase", icon: <SiSupabase />, level: "Expert" },
      { name: "AWS", icon: <FaAws />, level: "Proficient" },
      { name: "Google Cloud", icon: <SiGooglecloud />, level: "Proficient" },
      { name: "Docker", icon: <SiDocker />, level: "Advanced" },
      { name: "Vercel", icon: <SiVercel />, level: "Expert" },
      { name: "GitHub Actions", icon: <SiGithubactions />, level: "Advanced" },
      { name: "PWA", icon: <FaCode />, level: "Advanced" },
    ],

    research: [
      { name: "Federated Learning Research", icon: <FaProjectDiagram />, level: "Expert" },
      { name: "Academic Writing", icon: <FaPen />, level: "Advanced" },
      { name: "Research Writing", icon: <FaCode />, level: "Advanced" },
      { name: "Research Methodology", icon: <FaSearch />, level: "Advanced" },
      { name: "Model Evaluation", icon: <FaCheckCircle />, level: "Advanced" },
      { name: "Experiment Design", icon: <FaFlask />, level: "Advanced" },
    ],

    mobile: [
      { name: "Expo", icon: <SiExpo />, level: "Proficient" },
      { name: "AI Tools", icon: <FaRobot />, level: "Proficient" },
    ],
  };

  const getLevelClass = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-black text-white";
      case "Advanced":
        return "bg-white text-black border-2 border-black";
      case "Proficient":
        return "bg-yellow-300 text-black border-2 border-black";
      case "Beginner":
        return "bg-blue-200 text-black border-2 border-black";
      default:
        return "bg-gray-200 text-black border-2 border-black";
    }
  };

  const getDotPattern = () => {
    return (
      <div className="absolute top-0 right-0 w-24 h-24 -mt-6 -mr-6">
        <div className="grid grid-cols-6 gap-1">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-black rounded-full"></div>
          ))}
        </div>
      </div>
    );
  };

  const SkillCard = ({
    skill,
    hoverRotate,
  }: {
    skill: { name: string; icon: React.ReactNode; level: string };
    hoverRotate: number;
  }) => (
    <motion.div
      whileHover={{ rotate: hoverRotate, scale: 1.05, y: -5 }}
      className="bg-white border-4 border-black overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="h-2 w-full bg-black"></div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-4xl">{skill.icon}</div>
          <span className={`text-sm font-black px-3 py-1 ${getLevelClass(skill.level)} uppercase`}>
            {skill.level}
          </span>
        </div>
        <h4 className="text-xl font-black">{skill.name}</h4>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      ref={ref}
      id="skills"
      className="font-codefont w-full mx-auto px-6 pb-24 md:px-16 py-28 bg-[#FEFEF1]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-20">
        <div className="inline-block relative transform rotate-1 bg-black px-6 py-3">
          <h2 className="text-5xl md:text-6xl font-black text-yellow-300">
            TECH ARSENAL
          </h2>
        </div>
        <p className="text-xl font-bold mt-10 max-w-2xl transform -rotate-1 bg-white p-3 inline-block border-4 border-black">
          My tools of choice for building exceptional digital experiences
        </p>
      </motion.div>

      {/* Skills Layout */}
      <div className="grid gap-20">

        {/* AI Engineering */}
        <motion.div
          variants={itemVariants}
          className="transform rotate-1 bg-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
        >
          {getDotPattern()}
          <div className="flex items-center gap-4 mb-10 -rotate-1">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-yellow-300 text-4xl shadow-lg">
              <FaBrain />
            </div>
            <h3 className="text-3xl md:text-4xl font-black">AI ENGINEERING</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.aiEngineering.map((skill, index) => (
              <SkillCard key={index} skill={skill} hoverRotate={-2} />
            ))}
          </div>
        </motion.div>

        {/* LLM Stack */}
        <motion.div
          variants={itemVariants}
          className="transform -rotate-1 bg-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
        >
          {getDotPattern()}
          <div className="flex items-center gap-4 mb-10 rotate-1">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-yellow-300 text-4xl shadow-lg">
              <FaRobot />
            </div>
            <h3 className="text-3xl md:text-4xl font-black">LLM STACK</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.llmStack.map((skill, index) => (
              <SkillCard key={index} skill={skill} hoverRotate={2} />
            ))}
          </div>
        </motion.div>

        {/* Backend Systems */}
        <motion.div
          variants={itemVariants}
          className="transform rotate-1 bg-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
        >
          {getDotPattern()}
          <div className="flex items-center gap-4 mb-10 -rotate-1">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-yellow-300 text-4xl shadow-lg">
              <FaServer />
            </div>
            <h3 className="text-3xl md:text-4xl font-black">BACKEND SYSTEMS</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.backendSystems.map((skill, index) => (
              <SkillCard key={index} skill={skill} hoverRotate={-2} />
            ))}
          </div>
        </motion.div>

        {/* Frontend */}
        <motion.div
          variants={itemVariants}
          className="transform -rotate-1 bg-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
        >
          {getDotPattern()}
          <div className="flex items-center gap-4 mb-10 rotate-1">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-yellow-300 text-4xl shadow-lg">
              <FaReact />
            </div>
            <h3 className="text-3xl md:text-4xl font-black">FRONTEND MASTERY</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.frontend.map((skill, index) => (
              <SkillCard key={index} skill={skill} hoverRotate={2} />
            ))}
          </div>
        </motion.div>

        {/* Databases & Cloud */}
        <motion.div
          variants={itemVariants}
          className="transform rotate-1 bg-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
        >
          {getDotPattern()}
          <div className="flex items-center gap-4 mb-10 -rotate-1">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-yellow-300 text-4xl shadow-lg">
              <FaDatabase />
            </div>
            <h3 className="text-3xl md:text-4xl font-black">DATABASES & CLOUD</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.databasesCloud.map((skill, index) => (
              <SkillCard key={index} skill={skill} hoverRotate={-2} />
            ))}
          </div>
        </motion.div>

        {/* Research */}
        <motion.div
          variants={itemVariants}
          className="transform -rotate-1 bg-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
        >
          {getDotPattern()}
          <div className="flex items-center gap-4 mb-10 rotate-1">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-yellow-300 text-4xl shadow-lg">
              <FaSearch />
            </div>
            <h3 className="text-3xl md:text-4xl font-black">RESEARCH</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.research.map((skill, index) => (
              <SkillCard key={index} skill={skill} hoverRotate={2} />
            ))}
          </div>
        </motion.div>

        {/* Mobile & Tools */}
        <motion.div
          variants={itemVariants}
          className="transform rotate-1 bg-white p-8 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
        >
          {getDotPattern()}
          <div className="flex items-center gap-4 mb-10 -rotate-1">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-yellow-300 text-4xl shadow-lg">
              <FaMobile />
            </div>
            <h3 className="text-3xl md:text-4xl font-black">MOBILE & TOOLS</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.mobile.map((skill, index) => (
              <SkillCard key={index} skill={skill} hoverRotate={-2} />
            ))}
          </div>
        </motion.div>

        {/* Also In My Toolbox */}
        <motion.div variants={itemVariants}>
          <div className="transform -rotate-1 bg-black text-yellow-300 p-8 mb-10 inline-flex items-center gap-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <div className="text-4xl">
              <FaCode />
            </div>
            <h3 className="text-3xl font-black">ALSO IN MY TOOLBOX</h3>
          </div>

          <div className="bg-white border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
            {getDotPattern()}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {[
                "Qdrant VDB",
                "Recharts",
                "Vercel AI SDK",
                "GitHub Copilot",
                "Bolt.new",
                "Lovable.dev",
                "Socket.IO",
                "Framer Motion",
                "Shadcn",
                "Drizzle ORM",
                "ValKey",
                "Cursor IDE",
                "PWA",
                "Resend",
                "Zustand",
                "Zod",
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="border-4 border-black p-4 text-center bg-yellow-300 font-black text-lg relative"
                  style={{
                    transform:
                      index % 3 === 0
                        ? "rotate(2deg)"
                        : index % 3 === 1
                        ? "rotate(-1deg)"
                        : "rotate(1deg)",
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Skills;