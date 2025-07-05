"use client";
import { motion } from "framer-motion";

function SpireCompleters() {
  return (
    <section
      id="spire-completers"
      className="relative py-16 md:py-24 mb-16 md:mb-24 text-white overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mb-4 font-['Distancia'] font-bold text-[clamp(2rem,5vw,4rem)] text-white"
          >
            SPIRE COMPLETERS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-gray-400 max-w-2xl mx-auto mb-8 font-medium font-['Poppins'] text-lg md:text-xl lg:text-2xl"
          >
            Recognizing those who conquered the ultimate challenge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center items-center gap-8 md:gap-12 flex-wrap md:flex-nowrap"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="w-32 md:w-40 lg:w-48"
            >
              <img
                src="/icons/future.png"
                alt="Future"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              className="w-24 md:w-32"
            >
              <img
                src="/icons/logoicon.svg"
                alt="Logo Icon"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              className="w-32 md:w-40 lg:w-48"
            >
              <img src="/icons/acm.png" alt="ACM" className="w-full h-auto" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-['Poppins']">
              The Ultimate Challenge
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-['Poppins']">
              Only the most dedicated hackers who complete every challenge,
              solve every puzzle, and push their limits beyond imagination earn
              the prestigious title of Spire Completer. These legends have
              proven their mastery in the digital realm.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            className="text-center md:text-right"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-['Poppins']">
              Legacy of Excellence
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-['Poppins']">
              Each Spire Completer joins an elite community of innovators,
              problem-solvers, and boundary-pushers. Their achievements inspire
              the next generation of hackers to dream bigger, code smarter, and
              hack the impossible.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full px-8 py-4">
            <span className="text-purple-300 text-lg font-medium font-['Poppins']">
              🏆 Only 0.1% of participants achieve this status
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SpireCompleters;
