# Portfolio Website

Portfolio website pribadi untuk menampilkan 40+ production applications.

## Tech Stack

- **Vite** — Build tool
- **React 19** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations

## Features

- ✅ Responsive design (mobile-first)
- ✅ Project filtering by category
- ✅ Search functionality
- ✅ Animated skill bars
- ✅ Smooth scroll navigation
- ✅ Dark gradient hero section
- ✅ Project cards with status badges
- ✅ Tech stack tags

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deployment

Build output ada di folder `dist/`. Deploy ke VPS:

```bash
# Copy dist to VPS
scp -r dist/ user@vps:/var/www/portfolio/

# Or use Git
git add -A
git commit -m "Update portfolio"
git push
```

## Structure

```
src/
├── components/
│   ├── Hero.tsx        # Hero section dengan stats
│   ├── Navbar.tsx      # Sticky navigation
│   ├── Skills.tsx      # Technical skills grid
│   ├── Projects.tsx    # Project cards dengan filter
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
├── data/
│   └── projects.ts     # Data 40+ projects dari vault
├── App.tsx             # Main component
└── main.tsx            # Entry point
```

---
Generated from Obsidian Vault: termux-vault
