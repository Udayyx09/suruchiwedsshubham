# 🏰 The Royal Gateway — Interactive 3D Luxury Wedding Website

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-3D_Transforms-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-dea645?style=for-the-badge)

<p align="center">
  <strong>An opulent, interactive 3D Rajasthani palace wedding invitation web application.</strong><br />
  Featuring swinging 3D peacock double gates, classical Shehnai & Sitar acoustics, velvet unrolling itinerary scrolls with a live scroll-tracking vintage car, Jharokha window shutter reveals, a 3D photo carousel, and direct WhatsApp RSVP integration with celebratory confetti.
</p>

</div>

---

## 🌟 Highlights & Visual Experience

- 🚪 **3D Swinging Peacock Double Gate Reveal:** Master SVG arch clip mask with swinging left/right doors, pulsing golden wax seal (`TAP TO OPEN`), ambient sunlight flood, and 16 floating golden ember particles.
- 🎶 **Classical Shehnai & Sitar Audio Engine:** Floating luxury medallion with rotating vinyl disc, animated equalizer sound waves, and seamless toggle.
- 🏛️ **Multilayer Parallax Courtyard:** GPU-accelerated 3D parallax scroll handling across sky, glowing sun disc, grand palace facade with moving sheen bar, and staggered typography (*Shubh Vivah — Vikram & Aaradhya*).
- ⏳ **Live Auspicious Moments Countdown:** Real-time countdown timer to the wedding date (Days, Hours, Minutes, Seconds) with pulsing seconds glass tile.
- 🪟 **Jharokha 3D Shutter Reveal Portraits:** Traditional palace window frames with carved Jali shutter leaves that swing open on scroll/hover for the Groom, Bride, and ancestral elders.
- 📜 **Unrolling Velvet Scroll Itinerary & Procession Car:** 6 royal ceremonies (*Ganesh Sthapana*, *Peethi Haldi Snanam*, *Rangrezz Mehendi*, *Jharokha Sangeet*, *Shahi Vivah Sanskar*, *Royal Reception*) with an animated vintage car that travels along the vertical timeline in lockstep with the user's scroll.
- 🖼️ **Gilded Palace Memories 3D Carousel:** 7 high-resolution curated palace ceremony photos with smooth crossfade, slide counter (`01 / 07`), golden progress bar, and clickable arched thumbnails.
- 📍 **Royal Destination & Interactive Map:** The Raj Palace, Jaipur venue showcase with detail medallions, direct directions button, and embedded Google Maps frame with a brass compass rose.
- 💌 **Digital RSVP with WhatsApp & Confetti:** Stepper guest counter (`-`/`+`), attendance selector (*Joyfully Accept* / *Regretfully Decline*), blessings textarea, golden confetti burst, direct WhatsApp payload, and in-page *Dhanyavaad* card.
- 📞 **Guest Concierge & Advisory:** Direct Call / WhatsApp shortcuts for family coordinators and advisory cards (Hashtag `#AaradhyaGotVikram`, Climate, Valet, Dress Code).
- 🐫 **Desert Folk Art Footer:** Painted Rajasthani desert illustration with camel caravan and musicians alongside Vedic wedding shlokas.

---

## 📂 Project Structure

```text
royal-gateway/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI build verification
├── public/
│   └── assets/
│       ├── audio/              # Classical Shehnai & Sitar MP3
│       ├── gallery/            # Palace, mandap, couple, haldi photos
│       ├── gate/               # Peacock arch 3D double doors & facade
│       ├── img/                # Favicon and brand badges
│       ├── scroll/             # Velvet royal scroll rollers & textures
│       └── ...                 # Background mandalas, vintage car, folk art
├── src/
│   ├── components/
│   │   ├── AudioWidget.jsx     # Floating luxury audio disc & equalizer
│   │   ├── BlessingsFooter.jsx # Vedic blessings & desert folk artwork
│   │   ├── CeremoniesTimeline.jsx # Scroll-driven unrolling scrolls & car
│   │   ├── CountdownSection.jsx# Real-time countdown timer
│   │   ├── CoupleSection.jsx   # Jharokha 3D shutter reveal portraits
│   │   ├── DynamicRoyalBg.jsx  # Royal jali lattice & spinning mandalas
│   │   ├── FallingPetals.jsx   # Ambient falling rose petals layer
│   │   ├── GallerySection.jsx  # 3D gilded memories photo carousel
│   │   ├── GateOverlay.jsx     # 3D swinging peacock gateway reveal
│   │   ├── HeroSection.jsx     # Parallax courtyard, sun disc & typography
│   │   ├── LogisticsSection.jsx# Concierge contacts & guest advisory
│   │   ├── ProgressBar.jsx     # Top gold scroll progress bar
│   │   ├── RsvpSection.jsx     # WhatsApp RSVP + confetti celebration
│   │   ├── TopBanner.jsx       # Preview navigation banner
│   │   └── VenueSection.jsx    # The Raj Palace map & directions
│   ├── data/
│   │   └── weddingConfig.js    # Single-file configuration for all wedding data
│   ├── App.jsx                 # Main layout & IntersectionObserver engine
│   ├── index.css               # Royal design system, CSS variables & keyframes
│   └── main.jsx                # Application entry point
├── .editorconfig
├── .gitignore
├── .prettierrc
├── index.html                  # HTML entry with Google Fonts & SVG arch clips
├── LICENSE                     # MIT License
├── package.json
├── vercel.json                 # Vercel SPA routing & asset caching rules
└── vite.config.js              # Vite configuration
```

---

## 🎨 Easy Customization Guide

All event details, couple names, venue, dates, and contacts are centralized in [`src/data/weddingConfig.js`](file:///c:/Users/kushu/OneDrive/Desktop/royal-gateway/src/data/weddingConfig.js).

To personalize for any wedding, open `src/data/weddingConfig.js` and modify:

```javascript
export const weddingConfig = {
  couple: {
    groom: { name: 'Your Groom Name', parents: '...' },
    bride: { name: 'Your Bride Name', parents: '...' }
  },
  dates: {
    targetCountdownISO: '2026-12-10T09:30:00+05:30', // Sets countdown target
    displayRange: 'December 10 – 12, 2026'
  },
  venue: {
    name: 'Your Palace Name',
    address: 'Your Venue Address',
    mapLink: 'https://maps.google.com/?q=...'
  },
  rsvpWhatsAppNumber: '918959226985', // Receives RSVP responses on WhatsApp
  hashtag: '#YourWeddingHashtag'
};
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18.0 or higher recommended)
- **npm** (v9.0 or higher)

### 2. Installation & Run
```bash
# Navigate to the repository
cd royal-gateway

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **`http://localhost:5173`** in your browser.

> [!TIP]
> **Auto-Open Mode:** Append `?autoplay=1` to the URL (`http://localhost:5173/?autoplay=1`) to automatically open the gates on page load.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 🚢 Deployment

### Deploying to Vercel
1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. The included `vercel.json` will automatically configure routing and caching.
4. Click **Deploy**.

### Deploying to Netlify / GitHub Pages
- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
