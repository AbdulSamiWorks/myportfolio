import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { blogsData } from "./blogData";

const categoryColors: Record<string, string> = {
  "AI / Machine Learning": "#4ade80",
  "Blockchain": "#60a5fa",
  // add more categories/colors here as needed
};

const Blogs: React.FC = () => {
  // Extract unique categories from blogsData
  const categories = [
    "All",
    ...Array.from(new Set(blogsData.map((b) => b.category))).filter(Boolean),
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((blog) => blog.category === selectedCategory);

  return (
    <motion.div
      id="blogs"
      className="font-codefont bg-[#FEFFF0] max-w-7xl mx-auto p-10 md:px-36 py-28"
    >
      {/* Header */}
      <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="text-4xl font-black mb-2 inline-block border-b-4 border-black">
          Blog Articles
        </h2>
        <span className="ml-2 text-4xl">📝</span>
        <p className="text-xl font-bold mt-2">
          Sharing insights and updates from my tech journey.
        </p>
      </motion.div>

      {/* Category Filter Buttons */}
      <div className="mb-12 flex flex-wrap gap-4">
        {categories.map((category) => {
          const isSelected = category === selectedCategory;
          const color = category === "All" ? "#000" : categoryColors[category] || "#000";
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold border-2 transition 
                ${isSelected ? "text-white" : "text-black"} 
                ${isSelected ? "bg-black" : "bg-transparent"} 
                hover:bg-black hover:text-white`}
              style={{
                borderColor: color,
                ...(isSelected ? { backgroundColor: color, color: "white" } : {}),
                cursor: "pointer",
              }}
              aria-pressed={isSelected}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.length === 0 ? (
          <p className="text-center col-span-full text-gray-600 font-semibold">
            No blogs found in "{selectedCategory}" category.
          </p>
        ) : (
          filteredBlogs.map((blog) => {
            const categoryColor = categoryColors[blog.category] || "#000";
            return (
              <motion.a
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredId(blog.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="border-4 border-black bg-white cursor-pointer flex flex-col rounded-md overflow-hidden relative focus:outline-none focus:ring-4 focus:ring-offset-2"
                style={{
                  boxShadow:
                    hoveredId === blog.id
                      ? `0 8px 15px ${categoryColor}88`
                      : undefined,
                  borderColor: hoveredId === blog.id ? categoryColor : undefined,
                  transform: hoveredId === blog.id ? "translateY(-8px)" : "none",
                  transition: "all 0.3s ease",
                }}
                tabIndex={0}
                aria-label={`Read blog post: ${blog.title}`}
              >
                {/* Blur-up placeholder */}
                <div className="relative h-48 overflow-hidden border-b-4 border-black bg-gray-100">
                  {/* Blurred background image */}
                  <img
                    src={blog.thumbnail}
                    alt={`${blog.title} blurred`}
                    className="w-full h-full object-cover absolute top-0 left-0 filter blur-lg scale-105"
                    aria-hidden="true"
                  />
                  {/* Real image on top */}
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-cover relative transition-opacity duration-700 opacity-0"
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div
                    className="text-xs font-semibold mb-2"
                    style={{ color: categoryColor }}
                  >
                    {blog.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-sm mb-6 line-clamp-4 text-gray-700 flex-grow">
                    {blog.snippet}
                  </p>

                  <motion.button
                    whileHover={{ x: 6 }}
                    className="text-sm font-bold flex items-center gap-1 px-3 py-1 border-2 rounded transition-colors"
                    style={{
                      borderColor: categoryColor,
                      color: hoveredId === blog.id ? "#fff" : categoryColor,
                      backgroundColor:
                        hoveredId === blog.id ? categoryColor : "transparent",
                    }}
                  >
                    Read More <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.a>
            );
          })
        )}
      </div>
    </motion.div>
  );
};

export default Blogs;
