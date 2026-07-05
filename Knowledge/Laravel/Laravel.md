---
type: knowledge
category: framework
updated: 2026-07-05
tags:
  - laravel
  - php
  - framework
  - mvc
---

# Laravel

## Overview
Laravel adalah PHP framework modern dengan sintaks elegan. Digunakan di beberapa project SocAI ecosystem di vault ini.

## Ecosystem

### Fitur Utama
- **Eloquent ORM** — Database abstraction
- **Blade Templating** — Template engine
- **Artisan CLI** — Command-line tools
- **Queue System** — Background jobs
- **Authentication** — Built-in auth scaffolding

### Package yang Digunakan
| Package | Purpose |
|---------|---------|
| `laravel/framework` | Core framework |
| `laravel/sanctum` | API authentication |
| `laravel/horizon` | Queue dashboard |

## Project Structure
```
app/
├── Http/
│   ├── Controllers/
│   ├── Middleware/
│   └── Requests/
├── Models/
├── Services/
└── Providers/
config/
database/
├── migrations/
└── seeders/
resources/
├── views/
└── css/
routes/
├── web.php
└── api.php
```

## Artisan Commands
```bash
# Generate controller
php artisan make:controller UserController

# Generate model with migration
php artisan make:model Post -m

# Run migrations
php artisan migrate

# Clear cache
php artisan cache:clear
php artisan config:clear
php artisan view:clear
```

## Deployment

### Build Assets
```bash
npm install
npm run build
```

### Production Optimization
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize
```

## Related Technologies
- [[PHP]] — Base language
- [[MySQL]] / [[MariaDB]] — Database
- [[Next.js]] — Alternative frontend framework

## Projects Menggunakan Laravel
- [[Brainboard SocAI]] — Laravel + Composer + Vite
- [[Quizify SocAI]] — Laravel + Composer + Vite
- [[VibePlan AI]] — Laravel backend + Next.js frontend
- [[AI Study Buddy]] — Laravel + MongoDB + Groq API

---
Source: Practical experience from SocAI projects
Tags: #knowledge #laravel #php #framework #mvc
