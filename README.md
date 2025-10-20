# 🧭 Stoic Pips Mentorship

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) 
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) 
[![Formspree](https://img.shields.io/badge/Formspree-FF6B6B?style=for-the-badge&logo=formspree&logoColor=white)](https://formspree.io/) 
[![ImprovX](https://img.shields.io/badge/ImprovX-6C63FF?style=for-the-badge&logo=zapier&logoColor=white)](https://improvx.ai) 
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)  

**Stoic Pips Mentorship** is a modern, responsive website built to showcase the **Stoic Pips Trading Mentorship Program**, offering trading education and guidance in synthetic indices and forex markets.  

The site is designed to inform, engage, and convert visitors into leads using **Formspree** for contact submissions and **ImprovX** for official support.

---

## ⚙️ Tech Stack

| Layer | Tool / Library | Purpose |
|-------|----------------|----------|
| **Framework** | [Next.js 14+](https://nextjs.org/) | App routing, React rendering, and optimization |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling for responsive design |
| **Theme Management** | [next-themes](https://github.com/pacocoursey/next-themes) | Handles light/dark/system themes |
| **Forms & Email** | [Formspree](https://formspree.io/f/meorkqzl) | Manages contact form submissions without a backend |
| **Support Email** | [ImprovX](https://improvx.ai) | Handles customer communication via `support@stoicpips.com` |
| **Font** | [Geist Sans](https://vercel.com/font) | Clean and modern typography |
| **Hosting (recommended)** | [Vercel](https://vercel.com/) | Seamless deployment for Next.js apps |

---

## 🧩 Website Structure

| Section | Description |
|----------|--------------|
| **Hero Section** | Engaging headline introducing the mentorship with a CTA button |
| **About** | Overview of Stoic Pips’ mission and trading philosophy |
| **Services** | Details on mentorship, courses, and broker guidance |
| **Brokers** | Partner brokers with affiliate links |
| **Testimonials** | Student success stories and feedback |
| **FAQ** | Common questions about mentorship and enrollment |
| **Contact Form** | Integrated with Formspree for message submissions |

---

## 📨 Contact Form Integration

### Endpoint

https://formspree.io/f/meorkqzl

### Method
`POST` (JSON)

### Example Request
`json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+256712345678",
  "service": "Mentorship Program",
  "message": "I'm interested in joining the next cohort.",
  "_subject": "New Contact: John Doe - Mentorship Program",
  "_replyto": "john@example.com"
}`

### Success Response

✅ Displays: “Thank you! Your message has been sent successfully.”

### Error Response

❌ Displays: “There was an error sending your message. Please try again or email us directly.”

### Fallback Support

If Formspree fails, users can email: support@stoicpips.com (handled via ImprovX)


---

🧱 File Structure

stoic-pips/
│
├── app/
│   ├── layout.tsx        # Root layout with ThemeProvider and font
│   ├── page.tsx          # Main landing page
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
│   └── styles/           # Global styles
│
├── public/
│   ├── logo.svg
│   ├── favicon.ico
│   └── images/
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md


---

🧰 Installation & Setup

1️⃣ Clone Repository

git clone https://github.com/anguzuDaniel/stoic-pips.git
cd stoic-pips

2️⃣ Install Dependencies

npm install

3️⃣ Run Development Server

npm run dev

Open http://localhost:3000

4️⃣ Build for Production

npm run build
npm start

5️⃣ Deploy to Vercel

vercel


---

🎨 Theming Logic

Automatically detects system theme (dark or light)

User can manually toggle

Uses next-themes with hydration-safe mounting


Example:

const { theme, systemTheme, setTheme } = useTheme();
const currentTheme = theme === "system" ? systemTheme : theme;


---

💬 Support & Communication

Type	Channel

General Support	support@stoicpips.com (via ImprovX)
Mentorship Inquiries	Through website contact form
Partnership Requests	Directly via support email



---

🧠 Developer Notes

No backend logic required (Formspree handles it)

Hydration issues can occur if useTheme() runs before mount — always guard rendering with mounted check

Node.js 18+ recommended

Do not expose Formspree endpoint in public repos without spam protection



---

🔒 Security & Privacy

All form submissions use HTTPS via Formspree

No user data stored locally or in cookies

No analytics/tracking unless added manually



---

🚀 Future Improvements

Add animated success modal for form submissions

Connect form data to CRM (Notion, Airtable, Google Sheets)

Dynamically load testimonials from CMS

Integrate Calendly for mentorship booking



---

© Stoic Pips Mentorship — All Rights Reserved