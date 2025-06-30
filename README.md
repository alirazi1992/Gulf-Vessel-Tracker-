# 🚢 Gulf Vessel Tracker 

**Gulf Vessel Tracker** is a futuristic ship monitoring interface built with `React.js`, `Leaflet`, and `Turf.js`. This dashboard visually simulates animated vessel movement in the Gulf using a realistic ozean boundry polygen - ensuring ships never fdrift onto land. Neaon-glow
styling, a sidebar filter, and smooth animateed trails create a dramaric, high-impact marine inteface.

----

## 🌊 Features 

- ⚓ **Animated ship Movement**
| Ships move randomly within water boundries, never touching land, thanks to precise polygon validation usin `Turf.js`.

- 🌌 **Marine Night Mode**
| Uses a dark map tile layer and glowing ship icons to sim ulate radar and night-ops visulization.

- 📍 **Ship Type Daahboard**
| Sidebar filter to view Cargo, Oil, Tug, or All vessels with live animations.

- 🧠 **trail History**
| Every ship leaves a fading trail to indicate its past movement - updated every 2 seconds.

----

## 🛠 Tech Stack

| Tool                | Purpose                           |
|---------------------|-----------------------------------|
| **React.js**        | Fronted interface and logic       |
| **Raect Leaflet**   | Map rendering and interactivity   |
| **Turf.js**         | Geospatial check fro ship movement|
| **Stadia Maps**     | Dark-themed amrine map tiles      |
| **Leaflet**         | Map icons and tile support        |

----

## 📂 Folder Structer 


src/

├── components/

│ └── MapView.js # Core map + animation logic

├── data/

│ ├── vessels.js # Initial ship positions

│ └── gulfPolygon.js # Realistic water boundary

├── assets/

│ └── ship-icon.png # Neon ship marker icon

├── App.css # Global and night theme styles

├── App.js # Main entry


---

## 🚀 Getting Started

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/your-username/persian-gulf-vessel-tracker.git
cd persian-gulf-vessel-tracker
```

## 📦 Install Dependencies

```bash
npm install
```

## ▶️ Start Development Server 

```bash
npm start

```
The app will be available at http://192.168.142.241:3000

## 📸 Screenshots

![App Screenshot](https://raw.githubusercontent.com/alirazi1992/Gulf-Vessel-Tracker-/main/public/screenshot.png)

## 🧩 Customization Options 

 - 🔁 Relace or adjust movement logit `MapView.js` to use direction , current, ore velocity
 - 🧭 Add port makers(e.g., Bandar Abbas, Bushehr) using `Marker` components
 - 🌐 Improve polygon accuracy with official GeoJSON marine data

## 🌐 Live Demo

   Deploy it free with:

   - Vercel
   - Netlify
   - GitHub Pages
  
## 🧑‍💻 Author

     Made with by **Ali Razi**
     🎓 Data Scientist| React Developer| Ocean Daashboard Enthusiast
     📫 Connect on https://www.linkedin.com/in/alirazi1992
     
