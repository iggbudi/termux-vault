---
type: knowledge
category: database
updated: 2026-07-05
tags:
  - mysql
  - mariadb
  - database
  - rdbms
---

# MySQL / MariaDB

## Overview
MySQL dan MariaDB adalah RDBMS utama yang digunakan di mayoritas project production di vault ini. MariaDB adalah drop-in replacement untuk MySQL dengan fitur tambahan.

## Version yang Digunakan
- **MySQL 8.x** — Fitur: window functions, CTEs, JSON support
- **MariaDB 10.x** — Fitur: InnoDB improvements, JSON support

## Ecosystem

### PHP Integration
- **PDO** (PHP Data Objects) — Database abstraction layer
- **MySQLi** — MySQL improved extension (alternatif)

### Connection Pattern
```php
// PDO connection
$pdo = new PDO(
    'mysql:host=localhost;dbname=mydb;charset=utf8mb4',
    $user,
    $pass,
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]
);

// Prepared statement (SQL injection prevention)
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = :id");
$stmt->execute(['id' => $userId]);
$user = $stmt->fetch();
```

## Schema Patterns yang Digunakan

### User Management
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user', 'viewer') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Audit Trail
```sql
CREATE TABLE audit_log (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(50) NOT NULL,
    table_name VARCHAR(50),
    record_id INT,
    old_values JSON,
    new_values JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## Performance Tips

### Indexing
```sql
-- Composite index untuk query umum
CREATE INDEX idx_status_created ON orders(status, created_at);

-- Covering index
CREATE INDEX idx_user_email ON users(id, email);
```

### Query Optimization
- Gunakan `EXPLAIN` untuk analisis query
- Hindari `SELECT *` — pilih kolom spesifik
- Gunakan LIMIT untuk pagination
- Batch insert untuk bulk data

## Backup & Maintenance

```bash
# Backup database
mysqldump -u user -p dbname > backup.sql

# Restore database
mysql -u user -p dbname < backup.sql

# Optimize table
OPTIMIZE TABLE table_name;
```

## Related Technologies
- [[PHP]] — Backend language utama
- [[Node.js]] — Alternative runtime (WA Dwibudi, Slack Bridge)
- [[Supabase]] — Alternative BaaS (EclipseTrack)
- [[SQLite]] — Lightweight alternative

## Projects Menggunakan MySQL/MariaDB
- [[SIMPMU DPMP2]] — MySQL/MariaDB
- [[LK UKMs]] — MySQL/MariaDB
- [[Ruang Belajar Terbuka]] — MySQL/MariaDB
- [[WA Dwibudi Multi-Device]] — MariaDB
- [[SHM My ID]] — MariaDB
- [[Lelangu Bitcoin Chart]] — (localStorage, no server DB)

---
Source: Practical experience from production projects
Tags: #knowledge #mysql #mariadb #database #rdbms #sql
