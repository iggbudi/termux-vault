---
type: project-detail
status: active
title: "Fetal PJD"
slug: "fetal-pjd"
updated: "2026-07-05"
repo: ""
source-path: "/home/ubuntu/deploy_fetal/app/resiko_kehamilan"
production-url: "https://fetal.pjdigital.top"
priority: medium
tags:
  - project
  - vps
  - ops/apache
  - lang/python
  - fw/flask
links:
  readme: "[[README]]"
  techstack: "[[techstack]]"
  roadmap: "[[roadmap]]"
  index: "[[Meta/index]]"
---

# Fetal PJD

## Overview

RiskCare adalah aplikasi Flask/Gunicorn untuk prediksi risiko ibu dan fetal health berbasis model machine learning dengan XAI SHAP.

## Server / Vhost

- **Domain**: `fetal.pjdigital.top`
- **Aliases**: `-`
- **Production URL**: https://fetal.pjdigital.top
- **Source path**: `/home/ubuntu/deploy_fetal/app/resiko_kehamilan`
- **DocumentRoot**: `-`
- **Reverse proxy**: `http://127.0.0.1:8000/`
- **Apache configs**:
  - `/etc/apache2/sites-enabled/fetal.pjdigital.top.conf`
  - `/etc/apache2/sites-enabled/fetal.pjdigital.top-le-ssl.conf`
- **Docs / markers found**: README.txt, app.py, requirements.txt, train_maternal.py, train_fetal.py, models/*.joblib, templates/, static/

## Current Understanding

Fetal PJD / RiskCare ditemukan berjalan dari `/home/ubuntu/deploy_fetal/app/resiko_kehamilan`, bukan dari `/var/www`. Apache hanya menjadi reverse proxy dari `fetal.pjdigital.top` ke Gunicorn `127.0.0.1:8000`. Aplikasi menyediakan dashboard prediksi risiko ibu dan fetal health dengan model machine learning dan SHAP. Informasi ini diambil dari konfigurasi Apache, systemd, proses Gunicorn, endpoint `/health`, dan marker file source tanpa membuka atau mencatat secret `.env`.

## Architecture

```text
Client
  ↓ HTTPS
Apache
  ↓
http://127.0.0.1:8000/
  ↓
Flask app (`app.py`) / Gunicorn / model joblib
```

## Runtime Details

- systemd unit: `fetal-flask.service`
- Service status saat ditelusuri: active/running
- WorkingDirectory: `/home/ubuntu/deploy_fetal/app/resiko_kehamilan`
- ExecStart: `.venv/bin/gunicorn --workers 2 --bind 127.0.0.1:8000 app:app`
- Web server: Apache reverse proxy with SSL
- App server header: `gunicorn`

## App / ML Notes

- App name in UI: RiskCare • Dual Model + XAI
- Datasets: `data_pasien_ml_ready.csv`, `fetal_health.csv`
- Models: `models/maternal_model.joblib`, `models/fetal_model.joblib`
- Training scripts: `train_maternal.py`, `train_fetal.py`
- Requirements: Flask, pandas, joblib, scikit-learn, numpy, matplotlib, shap
- Health endpoint returns metrics for maternal and fetal models.

## Notes

- Jangan commit token, password, private key, atau isi `.env` ke vault.
- Untuk klaim versi dependency, inspeksi lockfile/source terbaru dulu.
- Jika worktree source dirty, catat statusnya di note sebelum perubahan source.

## Related

- [[README]]
- [[techstack]]
- [[roadmap]]
- [[VPS Projects]]
