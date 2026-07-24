<div align="center">
  <img src="public/reef_logo.png" alt="A.E.G.I.S / REEF Logo" width="120" height="120" style="border-radius: 20%; margin-bottom: 20px; box-shadow: 0 0 20px rgba(0,241,254,0.5);" />
  
  # 🌊 A.E.G.I.S (Acoustic Ecosystem & Global Intelligence System)
  **Also known as REEF (Robotic Ecological Evaluation Fleet)**
  
  *A real-time, cinematic command center for deep-sea acoustic monitoring and marine threat intelligence.*

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![MapLibre](https://img.shields.io/badge/MapLibre-GL_JS-0081C6?style=for-the-badge)](https://maplibre.org/)
  [![Web Audio API](https://img.shields.io/badge/Web_Audio_API-4CAF50?style=for-the-badge&logo=w3c&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
</div>

---

## 🚨 The Problem
Our oceans are vast, under-monitored, and facing unprecedented threats. Phenomena like coral bleaching, illegal deep-sea trawling, and acoustic pollution from cargo waste often go undetected until the damage is irreversible. Traditional marine tracking systems are fragmented, slow, and lack the real-time visualization required for rapid tactical response.

## 💡 Our Solution
**A.E.G.I.S** is an ultimate, high-performance tactical dashboard for marine biologists, conservationists, and rapid-response ocean guardians. By unifying telemetry from deep-sea drones, live sonar arrays, and biodiversity tracking systems into a single, breathtaking interface, we empower teams to secure the future of our oceans before it's too late.

---

## ✨ Key Features & USP

Our Unique Selling Proposition (USP) is the **seamless fusion of high-performance data visualization with a cinematic, highly responsive cyber-tactical aesthetic**.

### 1. 🌐 Global MapLibre 3D Integration
Navigate real-world satellite imagery mapped with high-performance WebGL. Features active, animated threat pulse-markers (e.g., Ghost Nets, Coral Bleaching) pinned dynamically to coordinates deep within the Mariana Trench.

### 2. 📡 Live Sonar Matrix (Web Audio API)
Experience true deep-sea monitoring with live-generated, real-time acoustic spectrograms. Powered natively by the Web Audio API, the system synthesizes and visualizes complex oceanic frequencies without relying on heavy external video files.

### 3. 🚨 Automated Threat Intelligence
A dedicated priority inbox system that categorizes incoming hazards (Thermal Anomalies, Microplastic Clusters) by severity, allowing conservationists to deploy autonomous drones instantly.

### 4. 📊 Data Analytics & PDF Reports
Interactive charting (powered by Recharts) to analyze long-term trends in Coral Health vs. Temperature. Includes one-click, highly-formatted PDF report generation for seamless data sharing and documentation.

### 5. 📱 Uncompromising Responsiveness
Built mobile-first. Whether you are in a high-tech 4K command center or using a rugged tablet on a swaying research vessel, the complex data grids cleanly collapse and remain perfectly usable.

---

## 🛠️ Tech Stack Architecture

We chose a cutting-edge, lightweight modern web stack to ensure absolute maximum performance and fluid animations.

| Domain | Technology | Implementation Details |
| :--- | :--- | :--- |
| **Core Framework** | `React + Vite` | Chosen for lightning-fast HMR, component modularity, and optimized production chunking. |
| **Styling Engine** | `Tailwind CSS` | Custom utility classes, deep CSS variable integration for theming, and glassmorphism styling. |
| **Geospatial UI** | `MapLibre GL JS` | Open-source WebGL rendering for 3D map pitching, custom HTML markers, and satellite tiles. |
| **Data Viz** | `Recharts` | Composable React charting library customized with glowing tooltips and customized axes. |
| **Audio Processing**| `Web Audio API` | Native browser API used to synthesize and pipe audio data into a custom HTML5 Canvas Analyzer. |
| **Animations** | `Framer Motion` | Declarative, physics-based UI animations for buttery-smooth layout transitions and page routing. |
| **Export Logic** | `html2pdf.js` | Client-side DOM parsing and PDF generation for the Reports module. |

---

## 🚀 Quick Start (Local Setup)

To spin up the A.E.G.I.S command center on your local terminal:

```bash
# 1. Clone the repository
git clone https://github.com/Prajitsingh1105/reef-hackocean.git

# 2. Install project dependencies
npm install

# 3. Start the Vite development server
npm run dev
```

*Navigate to `http://localhost:5173` in your browser to enter Mission Control.*

---

## 🔮 Future Scope (Roadmap)
- **Machine Learning Integration:** Connect the Web Audio API feed to a TensorFlow.js model to automatically classify biological vs. mechanical sounds locally in the browser.
- **IoT Hardware Link:** Build a WebSocket bridge to receive live JSON telemetry from physical Arduino-based ocean buoys.
- **VR Command Mode:** Export the MapLibre visualization into WebXR for fully immersive mission planning.

---

## 👥 The Team
- **Team Name:** Kryptexx 
- **Team Leader:** Harsh Gautam | gautamharsh409@gmail.com / +919140780539
- **Event:** HackOcean 2026 - Round 2
- **Problem Statement:** PS03 – Deep Sea Guardian | AI-Powered Deep Ocean Pollution & Biodiversity Monitoring

---
<div align="center">
  <p><i>Welcome to the future of ocean conservation.</i></p>
  <p>Made with ❤️ for HackOcean 2026.</p>
</div>
