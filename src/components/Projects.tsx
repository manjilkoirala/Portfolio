import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20  text-4xl text-center"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index: number) => (
          <a href={project.link} target="_blank">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              key={index}
              className="mb-8 flex flex-wrap lg:justify-center cursor-pointer"
            >
              <div className="w-full lg:w-1/4">
                <motion.img
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ duration: 1 }}
                  src={project.image}
                  alt={project.title}
                  width={180}
                  height={180}
                  className="mb-6 rounded-xl"
                />
              </div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className=" mb-2 font-semibold">{project.title}</h6>
                <p className=" mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="inline-block bg-neutral-800 text-neutral-300 px-2 py-1 rounded-lg text-sm mr-2 mb-2"
                  >
                    {technology}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experience;
