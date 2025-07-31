import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar } from "lucide-react";
import { coursesData } from "./Certifications_&_Courses_Data";

const CertificationsAndCourses: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Fallback for mobile visibility
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <motion.div
      ref={ref}
      id="courses"
      className="font-codefont bg-[#FEFFF0] w-full mx-auto p-6 sm:p-8 md:px-36 py-16 md:py-28"
      initial={{ opacity: 0 }}
      animate={isInView || isMobile ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-black mb-2 inline-block border-b-4 border-black">
        Certifications & Courses
      </h2>
      <span className="ml-2 text-4xl">📚</span>
      <p className="text-xl font-bold mt-2 mb-12">
        Self-paced learning through global platforms like Coursera, AWS, Google.
      </p>

      <div className="grid grid-cols-1 gap-12">
        {coursesData.map((course, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 border-4 border-black bg-white hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition-shadow"
            whileHover={{ y: -5 }}
          >
            {/* Left - Details */}
            <div className="p-6 flex flex-col justify-between bg-yellow-50">
              <div>
                <h3 className="text-2xl font-bold mb-1">{course.name}</h3>
                <p className="text-sm font-semibold mb-2 text-gray-700">
                  {course.platform}
                </p>
                <div className="flex items-center text-sm mb-4 gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-bold">{course.year}</span>
                </div>
                <p className="text-sm mb-4">{course.description}</p>

                {course.skills && (
                  <div className="mt-2">
                    <h4 className="text-sm font-bold mb-1">Skills:</h4>
                    <ul className="flex flex-wrap gap-2 text-sm">
                      {course.skills.map((skill, idx) => (
                        <li
                          key={idx}
                          className="bg-yellow-200 border-2 border-black px-2 py-1 rounded"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {course.certificateUrl && (
                  <div className="mt-4">
                    <a
                      href={course.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
                    >
                      View Certificate
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Right - Certificate Image */}
            <div className="p-4 border-t-4 md:border-t-0 md:border-l-4 border-black bg-yellow-100 flex items-center justify-center">
              <img
                src={course.imageSrc}
                alt={course.name}
                className="w-full object-contain border-2 border-black 
                  h-64 sm:h-72 md:h-80 lg:h-[24rem] xl:h-[28rem]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CertificationsAndCourses;
