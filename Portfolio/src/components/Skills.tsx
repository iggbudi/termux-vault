import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'PHP 8.x', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'Deno', level: 70 },
    ]
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'Next.js / React', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vite', level: 90 },
      { name: 'Bootstrap', level: 90 },
      { name: 'PWA', level: 85 },
    ]
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: [
      { name: 'MySQL / MariaDB', level: 95 },
      { name: 'SQLite', level: 90 },
      { name: 'Supabase', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Turso', level: 80 },
    ]
  },
  {
    category: 'AI & ML',
    icon: '🤖',
    items: [
      { name: 'OpenAI API', level: 90 },
      { name: 'Pi SDK', level: 85 },
      { name: 'scikit-learn', level: 75 },
      { name: 'Multi-Agent', level: 80 },
      { name: 'SHAP', level: 70 },
    ]
  },
  {
    category: 'DevOps',
    icon: '🚀',
    items: [
      { name: 'VPS Management', level: 90 },
      { name: 'Apache / Nginx', level: 90 },
      { name: 'Git / GitHub', level: 95 },
      { name: 'systemd', level: 85 },
      { name: 'SSL / Certbot', level: 90 },
    ]
  },
  {
    category: 'Messaging',
    icon: '💬',
    items: [
      { name: 'WhatsApp (Baileys)', level: 90 },
      { name: 'Telegram Bot', level: 85 },
      { name: 'Slack API', level: 85 },
    ]
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Technical Skills</h2>
          <p className="text-gray-600 text-center mb-12">
            Teknologi yang dikuasai dan digunakan dalam 40+ project
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {skill.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{item.name}</span>
                        <span className="text-gray-500">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
