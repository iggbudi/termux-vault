# Git

## Overview
Git adalah version control system untuk melacak perubahan file, membuat branch, dan sinkronisasi project/vault antar perangkat.

## Key Concepts

### Repository
Folder yang dilacak Git. Di vault ini repo berada di `/var/www/termux-vault`.

### Commit
Snapshot perubahan dengan pesan singkat.

### Branch
Jalur kerja terpisah. Vault ini menggunakan branch `main`.

### Remote
Server tujuan sync, biasanya GitHub/GitLab. Cek dengan:

```bash
git remote -v
```

## Common Commands

```bash
# Lihat status
git status

# Lihat perubahan
git diff

# Stage semua perubahan
git add .

# Commit
git commit -m "update vault"

# Push ke remote
git push

# Pull update terbaru
git pull
```

## Workflow untuk Obsidian Vault

1. Edit catatan di Obsidian atau terminal.
2. Cek perubahan dengan `git status`.
3. Commit perubahan yang sudah rapi.
4. Push agar bisa dibuka dari device lain.

## Best Practices

- Commit kecil dan jelas.
- Jalankan `git status` sebelum commit/push.
- Hindari commit file temporary seperti `.trash/`, `*.tmp`, `*.swp`.
- Untuk Obsidian, workspace personal sebaiknya di-ignore agar layout device tidak bentrok.

## Common Pitfalls

- Lupa pull sebelum edit di device lain.
- Konflik karena file yang sama diedit dari dua tempat.
- Commit file workspace Obsidian yang terlalu personal.

## Related

- [[README]]
- [[MOC/Technologies]]
- [[Daily/2026-07-04]]

---
Tags: #knowledge #git #version-control
