import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-5xl font-bold">
              DB
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Dwi Budi Santoso
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full-Stack Developer & AI Engineer
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Membangun <span className="text-blue-400">40+ production applications</span> dengan 
            PHP, TypeScript, dan AI. Spesialisasi dalam web apps, 
            multi-agent systems, dan DeFi tools.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 border border-blue-500/30">
              📍 Indonesia
            </span>
            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 border border-purple-500/30">
              📧 nayantaka@gmail.com
            </span>
            <a
              href="https://github.com/iggbudi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-500/20 rounded-full text-gray-300 border border-gray-500/30 hover:bg-gray-500/30 transition-colors"
            >
              🔗 GitHub
            </a>
          </div>
          
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400">40+</div>
              <div className="text-gray-400">Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400">30+</div>
              <div className="text-gray-400">Domains</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400">20+</div>
              <div className="text-gray-400">Tech Stacks</div>
            </div>
          </div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              ↓ Lihat Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
