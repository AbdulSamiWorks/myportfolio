import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import projects from "./projects";
import { Link } from "react-router";
import { BsArrowUpRight } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  url: string;
  repo: string | null;
}

const Project: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsPerPage = 6;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="font-codefont w-full mx-auto p-8 bg-[#FEFFF0]"
      id="projects"
    >
      {/* Header */}
      <motion.header
        variants={itemVariants}
        className="mb-12 flex items-center justify-center gap-2"
      >
        <h1 className="text-4xl font-bold underline">
          My <span className="border-black">Portfolio</span>
        </h1>
        <div className="text-5xl text-blue-400">❆</div>
      </motion.header>

      {/* Project Cards */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10"
      >
        {currentProjects.map((item: Project) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="relative bg-white border-4 border-black p-4 rounded-md shadow-md flex flex-col h-full hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition"
          >
            <div className="w-full h-48 overflow-hidden rounded border-2 border-black mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-3">
              {item.description}
            </p>
            <button
              onClick={() => openModal(item)}
              className="mt-2 text-blue-600 text-sm hover:underline self-start"
            >
              Read more
            </button>

            <div className="flex gap-3 mt-auto pt-4">
              <Link to={item.url} target="_blank" className="bg-black text-white p-2 rounded-full">
                <BsArrowUpRight />
              </Link>
              {item.repo && (
                <Link to={item.repo} target="_blank" className="bg-black text-white p-2 rounded-full">
                  <IoLogoGithub />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`relative w-8 h-8 border-4 border-black ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-white hover:bg-gray-100 active:translate-x-1 active:translate-y-1"
          } flex items-center justify-center font-bold text-black transition-all duration-200 ease-in-out before:absolute before:inset-[-6px] before:border-4 before:border-black before:z-[-1] disabled:opacity-50`}
        >
          <FaChevronLeft className="text-2xl" />
        </button>

        <div className="bg-white border-4 border-black px-4 py-1 font-bold text-lg shadow-[5px_5px_0px_0px_rgb(0,0,0)]">
          Page {currentPage} of {totalPages}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`relative w-8 h-8 border-4 border-black ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-white hover:bg-gray-100 active:translate-x-1 active:translate-y-1"
          } flex items-center justify-center font-bold text-black transition-all duration-200 ease-in-out before:absolute before:inset-[-6px] before:border-4 before:border-black before:z-[-1] disabled:opacity-50`}
        >
          <FaChevronRight className="text-2xl" />
        </button>
      </div>

      {/* Modal (Improved) */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border-4 border-black shadow-[8px_8px_0px_0px_rgb(0,0,0)] relative">
            <button
              className="absolute top-3 right-4 text-black text-3xl font-bold hover:text-red-500 transition"
              onClick={closeModal}
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-72 object-cover rounded-md mb-5 border-2 border-black"
            />
            <p className="text-gray-800 text-[1.1rem] leading-relaxed whitespace-pre-line">
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Project;
