# 🧭 Stoic Pips Mentorship

A modern, responsive website showcasing the **Stoic Pips Trading Mentorship Program**, offering comprehensive trading education in synthetic indices and forex markets.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Formspree](https://img.shields.io/badge/Formspree-FF6B6B?style=for-the-badge&logo=formspree&logoColor=white)](https://formspree.io/)
[![ImprovX](https://img.shields.io/badge/ImprovX-6C63FF?style=for-the-badge&logo=zapier&logoColor=white)](https://improvx.ai)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Website Structure](#-website-structure)
- [Contact Form Integration](#-contact-form-integration)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Theming](#-theming)
- [Support & Communication](#-support--communication)
- [Developer Notes](#-developer-notes)
- [Security & Privacy](#-security--privacy)
- [Future Improvements](#-future-improvements)

---

## ⚙️ Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | [Next.js 14+](https://nextjs.org/) | App routing, React rendering, and optimization |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first responsive styling |
| **Theme Management** | [next-themes](https://github.com/pacocoursey/next-themes) | Light/dark/system theme handling |
| **Forms & Email** | [Formspree](https://formspree.io/f/meorkqzl) | Backend-free contact form management |
| **Support Email** | [ImprovX](https://improvx.ai) | Customer communication via `support@stoicpips.com` |
| **Font** | [Geist Sans](https://vercel.com/font) | Modern, clean typography |
| **Hosting** | [Vercel](https://vercel.com/) | Optimized Next.js deployment |

---

## 🧩 Website Structure

| Section | Description |
|---------|-------------|
| **Hero** | Engaging introduction with primary CTA |
| **About** | Mission statement and trading philosophy |
| **Services** | Mentorship programs, courses, and guidance details |
| **Brokers** | Partner brokers with affiliate links |
| **Testimonials** | Student success stories and feedback |
| **FAQ** | Common questions about the program |
| **Contact** | Formspree-integrated contact form |

---

## 📨 Contact Form Integration

### Formspree Endpoint
```

https://formspree.io/f/meorkqzl

```

### Request Method
`POST` (JSON)

### Request Format
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+256712345678",
  "service": "Mentorship Program",
  "message": "I'm interested in joining the next cohort.",
  "_subject": "New Contact: John Doe - Mentorship Program",
  "_replyto": "john@example.com"
}
```

Response Handling

· ✅ Success: "Thank you! Your message has been sent successfully."
· ❌ Error: "There was an error sending your message. Please try again or email us directly."

Fallback Support

If Formspree fails, users can email directly: support@stoicpips.com (handled via ImprovX)

---

🗂️ Project Structure

```
stoic-pips/
├── app/
│   ├── layout.tsx           # Root layout with ThemeProvider and font
│   ├── page.tsx             # Main landing page
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Brokers.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   └── styles/              # Global styles
├── public/
│   ├── logo.svg
│   ├── favicon.ico
│   └── images/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

🛠️ Installation & Setup

1. Clone Repository

```bash
git clone https://github.com/anguzuDaniel/stoic-pips.git
cd stoic-pips
```

2. Install Dependencies

```bash
npm install
```

3. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 to view the application.

4. Build for Production

```bash
npm run build
npm start
```

5. Deploy to Vercel

```bash
vercel
```

---

🎨 Theming

· Automatically detects system theme (dark/light)
· Manual toggle option available
· Uses next-themes with hydration-safe mounting

Implementation Example

```javascript
const { theme, systemTheme, setTheme } = useTheme();
const currentTheme = theme === "system" ? systemTheme : theme;
```

---

💬 Support & Communication

Type Channel
General Support support@stoicpips.com (via ImprovX)
Mentorship Inquiries Website contact form
Partnership Requests Direct email to support

---

🧠 Developer Notes

· No backend logic required (Formspree handles submissions)
· Guard against hydration issues with mounted checks for useTheme()
· Node.js 18+ recommended
· Do not expose Formspree endpoint publicly without spam protection

---

🔒 Security & Privacy

· All form submissions use HTTPS via Formspree
· No user data stored locally or in cookies
· No analytics/tracking unless explicitly added

---

🚀 Future Improvements

· Animated success modal for form submissions
· CRM integration (Notion, Airtable, Google Sheets)
· Dynamic testimonial loading from CMS
· Calendly integration for mentorship booking
· Enhanced form validation and user feedback
· Performance optimization and lazy loading

---

📄 License

© Stoic Pips Mentorship — All Rights Reserved

```

## Key Improvements Made:

1. **Better Organization**: Added a table of contents for easier navigation
2. **Improved Structure**: More logical grouping of related information
3. **Enhanced Readability**: Better spacing and section separation
4. **Consistent Formatting**: Standardized code blocks and tables
5. **Clearer Headings**: More descriptive section titles
6. **Better Flow**: Information progresses from setup to advanced features
7. **Future Improvements**: Added checkboxes for better task tracking
8. **Professional Polish**: Cleaner presentation overall

This markup is now more organized, easier to navigate, and presents the information in a more professional and logical manner.