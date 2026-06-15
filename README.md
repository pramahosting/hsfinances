# Headstart Finances Australia — Website

**Headstart Finances Australia Pty Ltd**  
ABN: 88 656 265 860 | 11 York Street, Sydney NSW 2000  
info@hsfinances.com.au | 0435 064 886

---

## Project Structure

```
hsfinances/
├── app.cmd                  ← Windows: double-click to run locally
├── app.sh                   ← macOS/Linux: bash app.sh to run locally
├── Dockerfile               ← Production Docker image (Northflank)
├── .dockerignore
├── .gitignore
├── index.html               ← HTML entry point
├── package.json
├── vite.config.js
├── nginx/
│   └── nginx.conf           ← Production nginx config
├── public/
│   └── data/
│       ├── hsflogo.jpeg     ← ⚠ Place logo here before running
│       └── legal/
│           ├── terms_and_conditions.pdf
│           ├── privacy_and_security.pdf
│           └── legal_compliance.pdf
└── src/
    ├── main.jsx             ← React entry
    ├── App.jsx              ← Router / page switcher
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── AboutPage.jsx
    │   ├── ProductsPage.jsx
    │   ├── ServicesPage.jsx
    │   └── ContactPage.jsx
    ├── hooks/
    │   └── useReveal.js     ← Scroll-reveal IntersectionObserver
    ├── styles/
    │   ├── variables.css    ← CSS tokens + reset
    │   ├── layout.css       ← Grid, sections, buttons, utilities
    │   ├── components.css   ← Cards, forms, team, careers
    │   ├── nav-footer.css   ← Navbar, ticker, footer
    │   └── hero.css         ← Hero, features bar, page hero, CTA
    └── utils/
        └── constants.js     ← Company info, images, product links
```

---

## Quick Start — Local Development

### Windows
Double-click **`app.cmd`** — it will:
1. Check Node.js is installed (download from nodejs.org if not)
2. Run `npm install` on first launch
3. Start the Vite dev server at **http://localhost:3000**

### macOS / Linux
```bash
chmod +x app.sh
./app.sh
```

### Manual
```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Before Running — Add Your Logo

Place `hsflogo.jpeg` into the `public/data/` folder:
```
public/data/hsflogo.jpeg
```

Then update the logo placeholders in:
- `src/components/Navbar.jsx` — swap the `<div className="nav-logo-placeholder">H</div>` with `<img src="/data/hsflogo.jpeg" alt="HSF Logo" />`
- `src/components/Footer.jsx` — same swap for `<div className="footer-brand-placeholder">H</div>`

---

## Production Build

```bash
npm run build
# Output: dist/
npm run preview   # preview the built app locally
```

---

## Docker — Local Test

```bash
# Build image
docker build -t hsfinances .

# Run container
docker run -p 8080:80 hsfinances

# Visit http://localhost:8080
```

---

## Northflank Deployment

1. Push this repo to GitHub/GitLab
2. In Northflank: **New Service → Combined Service → Docker**
3. Connect your repo, select `Dockerfile`
4. Set **Port: 80** (HTTP)
5. Northflank will build and deploy automatically

### Environment Variables (optional)
| Variable | Default | Description |
|----------|---------|-------------|
| `PORT`   | `80`    | Nginx listen port (set in nginx.conf) |

### Health Check
Northflank polls `GET /health` — nginx returns `200 OK` from that path.

---

## Connecting the Contact Form to FastAPI

In `src/pages/ContactPage.jsx`, uncomment and update this section:

```js
const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

**FastAPI backend endpoint:**
```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib, ssl
from email.message import EmailMessage

app = FastAPI()

class ContactForm(BaseModel):
    name: str
    company: str = ""
    email: str
    phone: str = ""
    service: str = ""
    message: str

@app.post("/api/contact")
async def contact(form: ContactForm):
    # Send email via SMTP — configure SMTP_HOST, SMTP_USER, SMTP_PASS
    msg = EmailMessage()
    msg["Subject"] = f"Website enquiry from {form.name}"
    msg["From"]    = "noreply@hsfinances.com.au"
    msg["To"]      = "info@hsfinances.com.au"
    msg.set_content(f"Name: {form.name}\nEmail: {form.email}\nPhone: {form.phone}\nService: {form.service}\n\n{form.message}")
    # ... send via smtplib
    return {"status": "ok"}
```

---

## Pages

| Page | Route (SPA) | Description |
|------|-------------|-------------|
| Home | `home` | Hero, services overview, about teaser, products teaser, testimonials, CTA |
| About | `about` | Story, Values, Team, Careers, Partners (tabbed) |
| Products | `products` | Accfino, LinkLens, HSPayroll deep-dives |
| Services | `services` | Kasar Financial / Kasar Technologies (tabbed) |
| Contact | `contact` | Form + map + contact details |

---

## Legal Documents

Located in `public/data/legal/`:
- `terms_and_conditions.pdf`
- `privacy_and_security.pdf`
- `legal_compliance.pdf`

Linked from the footer. Viewable inline in browsers.

---

© 2026 Headstart Finances Australia Pty Ltd. All rights reserved.
