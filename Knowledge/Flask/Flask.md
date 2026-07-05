---
type: knowledge
category: framework
updated: 2026-07-05
tags:
  - flask
  - python
  - framework
  - api
  - ml
---

# Flask

## Overview
Flask adalah Python micro-framework untuk web applications dan APIs. Digunakan untuk ML-powered applications di vault ini.

## Ecosystem

### Fitur Utama
- **Lightweight** — Minimal overhead
- **Extensions** — Modular architecture
- **Jinja2** — Template engine
- **Werkzeug** — WSGI utilities

### Package yang Digunakan
| Package | Purpose |
|---------|---------|
| `flask` | Core framework |
| `gunicorn` | Production WSGI server |
| `scikit-learn` | Machine learning |
| `shap` | Model explainability |
| `pandas` | Data processing |
| `joblib` | Model serialization |

## Project Structure
```
app.py
requirements.txt
templates/
├── dashboard.html
└── base.html
static/
├── style.css
└── js/
models/
├── maternal_model.joblib
└── fetal_model.joblib
data/
└── dataset.csv
```

## Key Patterns

### Basic App
```python
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('dashboard.html')

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    prediction = model.predict(data['features'])
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
```

### ML Model Integration
```python
import joblib
import numpy as np

# Load model
model = joblib.load('models/maternal_model.joblib')

# Predict
features = np.array([[age, systolic, diastolic, bs, body_temp, heart_rate]])
prediction = model.predict(features)
probability = model.predict_proba(features)
```

### SHAP Explainability
```python
import shap

explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(features)

# Visualize
shap.summary_plot(shap_values, features)
```

## Deployment with Gunicorn

### systemd Service
```ini
# /etc/systemd/system/flask-app.service
[Unit]
Description=Flask ML App
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/deploy_fetal/app
ExecStart=/home/ubuntu/deploy_fetal/app/.venv/bin/gunicorn \
    --workers 2 \
    --bind 127.0.0.1:8000 \
    app:app
Restart=always

[Install]
WantedBy=multi-user.target
```

### Apache Reverse Proxy
```apache
<VirtualHost *:443>
    ServerName fetal.pjdigital.top
    
    ProxyPass / http://127.0.0.1:8000/
    ProxyPassReverse / http://127.0.0.1:8000/
</VirtualHost>
```

## Best Practices

1. **Virtual Environment**
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

2. **Requirements Pinning**
```
flask==3.0.0
scikit-learn==1.3.2
pandas>=2.0,<2.2
```

3. **Error Handling**
```python
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500
```

## Related Technologies
- [[Python]] — Base language
- [[Node.js]] — Alternative runtime
- [[PHP]] — Alternative backend

## Projects Menggunakan Flask
- [[Fetal PJD]] — Flask + scikit-learn + SHAP + Gunicorn

---
Source: Practical experience from ML project
Tags: #knowledge #flask #python #framework #api #ml
