---
type: knowledge
category: language
updated: 2026-07-05
tags:
  - php
  - backend
  - language
  - web
---

# PHP

## Overview
PHP adalah bahasa pemrograman server-side yang paling banyak digunakan untuk web development. Digunakan di mayoritas project di vault ini.

## Version yang Digunakan
- **PHP 8.0+** — Mayoritas project production
- **PHP 8.x** — Fitur: named arguments, match expression, union types, fibers

## Ecosystem

### Package Manager
- **Composer** — Dependency manager standar PHP

### Framework yang Digunakan
| Framework | Use Case di Vault |
|-----------|-------------------|
| **Native PHP** | SIMPMU DPMP2, LK UKMs, Ruang Belajar Terbuka, EclipseTrack, Nana Research, AIDIS, Al-Barokah |
| **Laravel** | Brainboard SocAI, Quizify SocAI, VibePlan AI |

### Libraries Umum
| Library | Purpose |
|---------|---------|
| `phpmailer/phpmailer` | SMTP email |
| `tecnickcom/tcpdf` | PDF generation |
| `phpoffice/phpspreadsheet` | Excel import/export |
| `endroid/qr-code` | QR code generation |

## Patterns yang Digunakan

### Database Access
- **PDO** — Database abstraction layer
- **Repository Pattern** — Data access layer
- **Service Layer** — Business logic

### Authentication
- Session-based auth dengan DB revalidation
- Google OAuth 2.0 (Ruang Belajar Terbuka)

### Template Rendering
- PHP native template dengan `include`/`require`
- Quill.js untuk rich text editor

## Best Practices

```php
// Type declarations (PHP 8.x)
function processData(int $id, string $name): array {
    return ['id' => $id, 'name' => $name];
}

// Named arguments
$config = createConfig(
    host: 'localhost',
    port: 3306,
    db: 'mydb'
);

// Match expression
$status = match($input) {
    'active' => 1,
    'inactive' => 0,
    default => -1
};
```

## Related Technologies
- [[MySQL]] / [[MariaDB]] — Database utama
- [[Bootstrap]] — CSS framework
- [[Apache]] / [[Nginx]] — Web server

## Projects Menggunakan PHP
- [[SIMPMU DPMP2]] — PHP Native
- [[LK UKMs]] — PHP Native + Composer
- [[Ruang Belajar Terbuka]] — PHP + Google OAuth + OpenAI
- [[EclipseTrack]] — PHP + Supabase
- [[Brainboard SocAI]] — Laravel
- [[Quizify SocAI]] — Laravel
- [[AIDIS Disposisi Surat]] — PHP + Composer
- [[Al-Barokah]] — PHP + Composer
- [[SHM My ID]] — PHP + MariaDB
- [[IBRAA]] — PHP
- [[Biro Jurnal]] — PHP
- [[Node PJDigital]] — PHP (OJS)
- SHM Publishers (DIEF, JOGASTO, JOHMPE, JOISER, JOSCEX, JOSRE)

---
Source: Practical experience from 20+ PHP projects
Tags: #knowledge #php #backend #language #web
