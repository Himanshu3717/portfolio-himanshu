import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaGithub, FaCode, FaBrain, FaTrophy } from 'react-icons/fa';

const achievements = [
  {
    title: "Academic Excellence",
    description: "Consistently maintained academic excellence with a 9.84/10 GPA, placing in the top 5% of the class",
    icon: <FaGraduationCap className="text-yellow-500" />
  },
  {
    title: "GitHub Contributions",
    description: "Active open-source contributor with multiple repositories, demonstrating commitment to collaborative development",
    icon: <FaGithub className="text-blue-500" />
  },
  {
    title: "Technical Leadership",
    description: "Successfully led the development of 3+ full-stack applications, showcasing project management skills",
    icon: <FaCode className="text-purple-500" />
  },
  {
    title: "Problem Solving",
    description: "Demonstrated strong algorithmic and data structure problem-solving skills through various coding challenges",
    icon: <FaBrain className="text-green-500" />
  },
  {
    title: "Hackathon Achievement",
    description: "Selected among the Top 64 teams out of 500+ participants at Mumbai Hacks, the Guinness World Record-holding largest GenAI hackathon in the world.",
    icon: <FaTrophy className="text-red-500" />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Recognition and accomplishments that showcase my dedication to excellence in technology and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-300">{achievement.title}</h3>
              </div>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 