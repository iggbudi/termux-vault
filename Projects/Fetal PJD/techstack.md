---
type: techstack
project: "[[Fetal PJD]]"
status: active
updated: "2026-07-05"
tags:
  - techstack
  - vps
  - ops/apache
  - lang/python
  - fw/flask
---

# Fetal PJD Tech Stack

> [!important]
> Version values are not fully captured. Inspect source `package.json`, `composer.json`, lockfiles, and deployment service before upgrades.

## Summary

| Layer | Technology |
|---|---|
| Domain | `fetal.pjdigital.top` |
| Languages | Python |
| Frameworks / Runtime | Flask, Gunicorn, scikit-learn, SHAP, pandas |
| Database / Storage | CSV datasets + joblib model files |
| Services / APIs | systemd `fetal-flask.service`, Gunicorn `127.0.0.1:8000`, Flask endpoints |
| Web Server | Apache vhost + SSL |
| DocumentRoot | `-` |
| Reverse Proxy | `http://127.0.0.1:8000/` |

## Detected Markers

- `README.txt`
- `app.py`
- `requirements.txt`
- `train_maternal.py`
- `train_fetal.py`
- `models/maternal_model.joblib`
- `models/fetal_model.joblib`
- `templates/dashboard.html`
- `static/style.css`

## Python Dependencies

- Flask 3.0.0
- pandas >=2.0,<2.2
- joblib 1.4.2
- scikit-learn 1.3.2
- numpy 1.26.4
- matplotlib 3.8.4
- shap 0.44.1

## Runtime

- systemd: `fetal-flask.service`
- WorkingDirectory: `/home/ubuntu/deploy_fetal/app/resiko_kehamilan`
- Command: `.venv/bin/gunicorn --workers 2 --bind 127.0.0.1:8000 app:app`

## Upgrade Notes

- [ ] Confirm current dependency files in `/home/ubuntu/deploy_fetal/app/resiko_kehamilan`.
- [ ] Check process manager/systemd/PM2 or Apache/PHP-FPM status before restart.
- [ ] Run available tests/build commands.
- [ ] Update this techstack note after dependency changes.

## Related

- [[Fetal PJD]]
- [[VPS Projects]]
- [[MOC/Technologies]]
