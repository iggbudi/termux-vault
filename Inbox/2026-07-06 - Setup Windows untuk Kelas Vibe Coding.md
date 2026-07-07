# 💻 Setup Windows untuk Kelas Vibe Coding

> **Status**: Guide | **Tanggal**: 2026-07-06 | **Tags**: #windows #setup #tools #vibe-coding

---

## 📦 Software yang Dibutuhkan

| Software | Fungsi | Ukuran | Wajib? |
|----------|--------|--------|--------|
| **Node.js** | Runtime JavaScript | ~30 MB | ✅ Wajib |
| **Git** | Version control | ~30 MB | ✅ Wajib |
| **VS Code** | Text editor (optional) | ~100 MB | ⚡ Recommended |
| **Windows Terminal** | Terminal modern | ~30 MB | ⚡ Recommended |
| **Pi** | AI Coding Agent | ~10 MB | ✅ Wajib |

---

## 🚀 Step-by-Step Installation

### Step 1: Install Node.js

```
📥 Download: https://nodejs.org
📦 Pilih: LTS version (v20 atau v22)
▶️ Run installer → Next → Next → Install
```

**Verifikasi:**
```powershell
# Buka PowerShell / Command Prompt
node --version
# Output: v20.x.x atau v22.x.x

npm --version
# Output: 10.x.x
```

**Tips untuk Peserta:**
> "Node.js itu runtime buat jalanin JavaScript di luar browser. Kita butuh ini buat jalanin Pi."

---

### Step 2: Install Git

```
📥 Download: https://git-scm.com
📦 Pilih: Windows version
▶️ Run installer → Use default settings → Next → Install
```

**Verifikasi:**
```powershell
git --version
# Output: git version 2.x.x
```

**Konfigurasi Dasar:**
```powershell
git config --global user.name "Nama Kamu"
git config --global user.email "email@kamu.com"
```

**Tips untuk Peserta:**
> "Git itu buat nyimpan history perubahan kode. Kalau ada error, bisa balik ke versi sebelumnya."

---

### Step 3: Install Windows Terminal (Recommended)

```
📥 Download: Microsoft Store → "Windows Terminal"
   Atau: https://aka.ms/terminal
▶️ Install dari Microsoft Store
```

**Kenapa Windows Terminal?**
| Fitur | CMD Biasa | PowerShell | Windows Terminal |
|-------|-----------|------------|------------------|
| Tab | ❌ | ❌ | ✅ |
| Theme | ❌ | ❌ | ✅ |
| Multi-shell | ❌ | ❌ | ✅ (CMD, PS, WSL) |
| Copy-paste | Manual | Manual | ✅ Ctrl+C/V |

**Tips untuk Peserta:**
> "Windows Terminal lebih modern dan nyaman. Bisa buka banyak tab sekaligus."

---

### Step 4: Install VS Code (Optional tapi Recommended)

```
📥 Download: https://code.visualstudio.com
📦 Pilih: Windows version
▶️ Run installer → Add to PATH → Install
```

**Extensions yang Direkomendasikan:**
| Extension | Fungsi |
|-----------|--------|
| **GitHub Copilot** | AI autocomplete (free untuk students) |
| **ESLint** | JavaScript/TypeScript linter |
| **Prettier** | Auto format kode |
| **Live Server** | Preview HTML langsung |
| **GitLens** | Git history visualization |

**Tips untuk Peserta:**
> "VS Code itu editor kode paling populer. Lo bisa pake, tapi di kelas ini kita fokus ke terminal."

---

### Step 5: Install Pi

```powershell
# Buka PowerShell / Windows Terminal
npm install -g @earendil-works/pi-coding-agent
```

**Verifikasi:**
```powershell
pi --version
# Output: x.x.x
```

**Tips untuk Peserta:**
> "Pi itu AI coding assistant yang jalan di terminal. Lo ngomong, dia nulis kode."

---

### Step 6: Setup Free AI Provider

```powershell
# Jalankan Pi
pi

# Login dengan free provider
/login
# Pilih: Xiaomi MiMo (FREE!)
```

**Alternatif Free Providers:**
| Provider | Cara Dapet |
|----------|------------|
| **Xiaomi MiMo** | `/login` → Xiaomi MiMo |
| **Google Gemini** | API key dari https://aistudio.google.com |
| **GitHub Copilot** | `/login` → GitHub Copilot (free untuk students) |
| **ZAI** | `/login` → ZAI Coding Plan |

---

## 📋 Checklist Installasi

```markdown
## Pre-Installation Checklist

- [ ] Windows 10/11 (64-bit)
- [ ] Internet connection stabil
- [ ] Minimal 4 GB RAM
- [ ] Minimal 5 GB free disk space
- [ ] Admin access (untuk install software)

## Installation Checklist

- [ ] Node.js terinstall (`node --version`)
- [ ] npm terinstall (`npm --version`)
- [ ] Git terinstall (`git --version`)
- [ ] Windows Terminal terinstall (recommended)
- [ ] VS Code terinstall (optional)
- [ ] Pi terinstall (`pi --version`)
- [ ] AI provider sudah login

## Verification Checklist

- [ ] Bisa buka terminal
- [ ] Bisa jalankan `pi`
- [ ] Bisa dapat response dari AI
- [ ] Bisa buat file baru
- [ ] Bisa edit file
```

---

## 🎬 Demo Script: Setup Live

### Opening (1 menit)
```
🎤 "Hari ini kita setup environment untuk vibe coding.
    Total waktu: 15 menit.
    Total biaya: Rp 0.
    Mari mulai!"
```

### Install Node.js (3 menit)
```
🎤 "Pertama, kita butuh Node.js.
    Buka browser, ke nodejs.org.
    Download LTS version.
    Next, next, install.
    Done!"

# Verifikasi
$ node --version
$ npm --version
```

### Install Git (2 menit)
```
🎤 "Kedua, Git. Buat version control.
    Buka git-scm.com.
    Download, install dengan default settings.
    Done!"

# Verifikasi
$ git --version
```

### Install Pi (2 menit)
```
🎤 "Ketiga, si bintang utama: Pi.
    Di terminal, ketik:
    npm install -g @earendil-works/pi-coding-agent
    Tunggu sebentar...
    Done!"

# Verifikasi
$ pi --version
```

### Login Free Provider (2 menit)
```
🎤 "Sekarang kita login dengan AI GRATIS.
    Jalankan pi, ketik /login.
    Pilih Xiaomi MiMo.
    Done! Sekarang lo punya AI coding assistant GRATIS!"

$ pi
> /login
> Select: Xiaomi MiMo
```

### First Prompt (3 menit)
```
🎤 "Mari kita coba!
    Ketik prompt pertama lo:
    'Buatkan saya file HTML hello world'
    
    Dan... MAGIC!"

> "Buatkan saya file HTML hello world"
# Pi creates hello.html
```

### Closing (1 menit)
```
🎤 "Selesai! 15 menit, Rp 0.
    Lo sekarang punya AI coding assistant.
    Siap belajar vibe coding?"
```

---

## 🐛 Common Issues & Solutions

### Issue 1: "npm is not recognized"
```
❌ Error: 'npm' is not recognized as an internal or external command

✅ Solution: 
1. Restart terminal setelah install Node.js
2. Atau restart komputer
3. Cek Node.js ada di PATH: 
   Settings → System → About → Advanced system settings 
   → Environment Variables → Path
```

### Issue 2: "Permission denied"
```
❌ Error: EACCES permission denied

✅ Solution (PowerShell as Admin):
1. Klik kanan PowerShell → Run as Administrator
2. Jalankan: npm install -g @earendil-works/pi-coding-agent
```

### Issue 3: "Pi command not found"
```
❌ Error: 'pi' is not recognized

✅ Solution:
1. Cek npm global path: npm config get prefix
2. Tambahkan ke PATH:
   - Contoh: C:\Users\Nama\AppData\Roaming\npm
3. Restart terminal
```

### Issue 4: "Node.js version too old"
```
❌ Error: Unsupported engine

✅ Solution:
1. Uninstall Node.js lama
2. Download LTS terbaru dari nodejs.org
3. Install ulang
```

---

## 📊 System Requirements

### Minimum Requirements
| Komponen | Minimum |
|----------|---------|
| OS | Windows 10 (64-bit) |
| RAM | 4 GB |
| Storage | 5 GB free |
| Internet | 1 Mbps |

### Recommended
| Komponen | Recommended |
|----------|-------------|
| OS | Windows 11 |
| RAM | 8 GB |
| Storage | 20 GB free |
| Internet | 10 Mbps |
| Terminal | Windows Terminal |
| Editor | VS Code |

---

## 📱 Untuk Peserta yang Pakai HP

### Android
```bash
# Install Termux dari F-Droid
# BUKAN Play Store (versi outdated)

pkg update && pkg upgrade
pkg install nodejs git
npm install -g @earendil-works/pi-coding-agent
```

### iOS
```
⚠️ Tidak bisa install Pi langsung di iPhone/iPad

Alternatif:
1. Pakai laptop/PC
2. Pakai web-based: bolt.new / lovable.dev
3. SSH ke server (advanced)
```

---

## 🎯 Quick Start Commands

Setelah semua terinstall, peserta bisa langsung practice:

```powershell
# 1. Buat folder project
mkdir my-first-project
cd my-first-project

# 2. Start Pi
pi

# 3. Buat file pertama
> "Buatkan saya file HTML dengan judul Hello World"

# 4. Edit file
> "Ubah warna background jadi biru muda"

# 5. Tambah fitur
> "Tambahkan button yang kalau diklik muncul alert"

# 6. Deploy (nanti diajarkan)
> "Bantu saya deploy ke Vercel"
```

---

## ✅ Action Items untuk Kelas

- [ ] Buat video tutorial install Node.js di Windows
- [ ] Buat video tutorial install Pi di Windows
- [ ] Buat PDF checklist installasi
- [ ] Buat troubleshooting guide
- [ ] Test installasi di berbagai versi Windows
- [ ] Siapkan backup plan (laptop pinjaman / cloud IDE)

---

*"The hardest part is starting. Once you have Pi installed, the rest is just prompts."* 💻🚀
