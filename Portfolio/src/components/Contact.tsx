import { motion } from 'framer-motion';

const contacts = [
  {
    icon: '📧',
    label: 'Email',
    value: 'nayantaka@gmail.com',
    href: 'mailto:nayantaka@gmail.com',
  },
  {
    icon: '🔗',
    label: 'GitHub',
    value: 'github.com/iggbudi',
    href: 'https://github.com/iggbudi',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Indonesia',
    href: null,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau punya project yang ingin dibangun? 
            Mari diskusikan!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{contact.label}</h3>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-gray-300">{contact.value}</p>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:nayantaka@gmail.com"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-medium transition-colors"
            >
              📧 Send Email
            </a>
            <a
              href="https://github.com/iggbudi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-medium transition-colors border border-white/20"
            >
              🔗 View GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
