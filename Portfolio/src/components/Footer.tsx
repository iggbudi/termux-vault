export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © 2026 Dwi Budi Santoso. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/iggbudi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:nayantaka@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Built with Vite + React + TypeScript + Tailwind CSS</p>
          <p className="mt-1">Generated from Obsidian Vault: termux-vault</p>
        </div>
      </div>
    </footer>
  );
}
