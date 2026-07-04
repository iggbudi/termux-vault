---
type: project
status: active
title: "Fetal PJD"
slug: "fetal-pjd"
aliases:
  - fetal.pjdigital.top
owner: "iggbudi"
start-date: ""
updated: "2026-07-05"
repo: ""
source-path: "/home/ubuntu/deploy_fetal/app/resiko_kehamilan"
production-url: "https://fetal.pjdigital.top"
docs-url: ""
project-type: "maternal/fetal risk prediction app"
priority: medium
techstack:
  languages:
    - Python
  frameworks:
    - Flask
    - Gunicorn
    - Apache reverse proxy
  databases:
    - CSV datasets
    - joblib model files
  services:
    - systemd fetal-flask.service
    - Gunicorn on 127.0.0.1:8000
  tools:
    - Apache
    - Certbot/SSL
tags:
  - project
  - vps
  - ops/apache
  - lang/python
  - fw/flask
---

# Fetal PJD

> [!important]
> Project folder index untuk vhost `fetal.pjdigital.top`. Main detail note: [[Fetal PJD]]. Update note ini ketika status vhost, source path, deployment, atau arah project berubah.

## Overview

RiskCare adalah aplikasi Flask/Gunicorn untuk prediksi risiko ibu dan fetal health berbasis model machine learning dengan XAI SHAP.

## Vhost

| Item | Value |
|---|---|
| Domain | `fetal.pjdigital.top` |
| Aliases | `-` |
| Production URL | https://fetal.pjdigital.top |
| Source path | `/home/ubuntu/deploy_fetal/app/resiko_kehamilan` |
| DocumentRoot | `-` |
| Reverse proxy | `http://127.0.0.1:8000/` |
| SSL | Yes |
| Config | `/etc/apache2/sites-enabled/fetal.pjdigital.top.conf`, `/etc/apache2/sites-enabled/fetal.pjdigital.top-le-ssl.conf` |

## Goals

- [ ] Pastikan dokumentasi sesuai source project aktif
- [ ] Lengkapi runbook deployment/debug bila project sering diubah
- [ ] Catat dependency, database, dan service eksternal tanpa menulis secret

## Architecture

See main note: [[Fetal PJD]].

```text
User / Browser
  ↓ HTTPS
Apache vhost `fetal.pjdigital.top`
  ↓
DocumentRoot / Reverse Proxy
  ↓
Application runtime / API / storage
```

## Tech Stack

See [[techstack]] for detailed libraries and versions.

### Summary

- **Languages**: Python
- **Frameworks / Runtime**: Flask, Gunicorn, scikit-learn, SHAP, pandas
- **Database / Storage**: CSV datasets + joblib model files
- **Services**: systemd `fetal-flask.service`, Gunicorn `127.0.0.1:8000`
- **Tools/Ops**: Apache, SSL, local service/process if proxied

## Runtime

- systemd unit: `fetal-flask.service`
- WorkingDirectory: `/home/ubuntu/deploy_fetal/app/resiko_kehamilan`
- ExecStart: `.venv/bin/gunicorn --workers 2 --bind 127.0.0.1:8000 app:app`
- Health endpoint: `/health`
- Main endpoints: `/`, `/predict`, `/api/predict_maternal_explain`, `/api/predict_fetal_explain`, `/retrain_maternal`, `/retrain_fetal`, `/retrain_all`

## Current Tasks

- [ ] Review main project note [[Fetal PJD]]
- [ ] Inspect source project before making code changes
- [ ] Keep `techstack.md` aligned with package/composer/config files
- [ ] Add deployment/debug runbook under `docs/` if needed

## Related

- [[VPS Projects]]
- [[Meta/index]]
- [[MOC/Projects]]
