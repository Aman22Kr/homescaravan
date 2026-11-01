# HomesCaravan (Recreated from TravelHomes.in)

> **Live Brand Identity:** HomesCaravan  
> **Reference Website:** [https://travelhomes.in/](https://travelhomes.in/)  
> **GitHub Username:** Aman22kr  
> **Target Deployment:** GitHub Pages via GitHub Actions  
> **Tech Stack:** React, Vite, JavaScript (JSX), Tailwind CSS, React Router (HashRouter), Lucide React, Framer Motion  

---

## 1. Overview & Purpose

**HomesCaravan** is an experiential caravan and campervan rental web application designed for discovering India’s scenic landscapes in luxury studio apartments on wheels. 

Recreated from **travelhomes.in**, the application transitions the original brand into **HomesCaravan** while maintaining the comprehensive information architecture:
- Custom luxury motorhomes (Force Urbania Presidential Suite, Samara Grand RV, Wanderlust Pop-top Camper, 4x4 Overlander).
- All-inclusive packages with dedicated tourist chauffeurs.
- Independent off-grid capabilities (400Ah lithium battery inverters + rooftop solar).
- Verified campsite networks with 220V electric hookups across Maharashtra, Karnataka, Rajasthan, Gujarat, and Himachal.
- Client-side persistence for saved vehicle wishlists, trip searches, and booking inquiries.

---

## 2. Implemented Pages & Architecture

All internal links navigate cleanly using **React Router's HashRouter** for static hosting compatibility:

1. **Homepage (`#/`)**:
   - Cinematic hero with Western Ghats luxury motorhome visual asset.
   - Interactive Trip Search & Planner (pickup hub, travel dates, caravan category, passenger count).
   - Core value pillars ("Why HomesCaravan").
   - Segmented category filter tabs and real-time fleet preview cards.
   - 16:9 YouTube video area placeholder with simulated interactive player.
   - Popular Indian road trip circuits (Konkan to Goa, Rajasthan Desert, Western Ghats Coffee Trail, Kutch).
   - Interactive FAQ accordion for driver accommodations, AC performance, and campsite rules.
   - Global compact ad placeholder section.

2. **Fleet Catalog (`#/fleet`)**:
   - Comprehensive vehicle catalog with multi-attribute filtering (category, city hub, sleeping berths, attached washrooms, pet-friendly).
   - Sorting by Price (Low to High, High to Low), Capacity, or Popularity.
   - Wishlist toggle on every card with animated feedback.

3. **Caravan Detail Page (`#/fleet/:id`)**:
   - Multi-view photo gallery (Exterior, Studio Apartment Interior, Campsite Setup).
   - Detailed technical specifications table (dimensions, fresh water tank, battery/solar specs, chassis, drivetrain).
   - Included features & kitchen utensils checklist.
   - Interactive dynamic Tariff & Duration Cost Estimator.
   - Direct modal booking trigger and WhatsApp hotline link (+91 94094 80403).

4. **Destinations Overview (`#/destinations`)**:
   - India-wide road trip circuits with mileage, ideal travel seasons, and recommended vehicle matches.

5. **Destination Detail (`#/destinations/:id`)**:
   - Deep route guide with day-by-day itineraries, scenic photo banners, and campsite power hookup details.

6. **How It Works (`#/how-it-works`)**:
   - 4-step rental process from vehicle selection to 24/7 on-road support.
   - Transparent policy breakdown of what is included vs. paid directly (fuel, tolls).

7. **Verified Campsites Directory (`#/campsites`)**:
   - Directory of pre-vetted caravan campsites across Maharashtra, Karnataka, Rajasthan, and Uttarakhand with 220V electric hookup verification.

8. **Tariffs & Pricing Calculator (`#/tariffs`)**:
   - Fleet-wide comparison table and interactive budget calculator.

9. **About Us (`#/about`)**:
   - Story of HomesCaravan, safety engineering, hygiene sterilization, and RTO commercial tourist licensing.

10. **Contact Concierge (`#/contact`)**:
    - Validated contact form, depot locations across Mumbai, Pune, Delhi, Bangalore, Ahmedabad, and 24/7 phone assistance.

11. **Custom 404 (`#/404`)**:
    - Graceful error screen guiding lost travelers back to the fleet catalog.

---

## 3. Project Structure

```
homescaravan/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow for GitHub Pages
├── dist/                     # Production build output
├── public/                   # Static assets
├── src/
│   ├── assets/
│   │   └── images/           # High-resolution generated photography assets
│   ├── components/
│   │   ├── AdPlaceholder.jsx # Compact advertisement placeholder
│   │   ├── BookingModal.jsx  # Live calculation & inquiry form modal
│   │   ├── Footer.jsx        # Corporate & route directory footer
│   │   ├── Navbar.jsx        # Top bar contract with mobile drawer
│   │   ├── ToastNotification.jsx
│   │   ├── VideoPlaceholder.jsx # 16:9 blank video placeholder
│   │   └── WishlistDrawer.jsx # Slide-over saved caravans panel
│   ├── context/
│   │   └── CaravanContext.jsx # LocalStorage persistence provider
│   ├── data/
│   │   ├── caravansData.js   # Fleet specifications & departure hubs
│   │   └── destinationsData.js # Circuits, itineraries & campsites
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── CampsitesPage.jsx
│   │   ├── CaravanDetail.jsx
│   │   ├── ContactPage.jsx
│   │   ├── DestinationDetail.jsx
│   │   ├── DestinationsPage.jsx
│   │   ├── FleetPage.jsx
│   │   ├── Home.jsx
│   │   ├── HowItWorksPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── TariffsPage.jsx
│   ├── App.tsx               # Route configurations (HashRouter)
│   ├── index.css             # Tailwind v4 styles & typography
│   └── main.tsx              # DOM entry point
├── .gitignore
├── index.html                # App entry HTML with metadata
├── metadata.json
├── package.json
├── package-lock.json         # Valid committed npm lockfile
├── tsconfig.json
├── vite.config.ts            # Configured with base: './'
└── README.md
```

---

## 4. LocalStorage State & Privacy

The application uses browser `localStorage` for responsive client-side persistence:
- `homescaravan_saved_items`: Array of vehicle IDs bookmarked in the wishlist.
- `homescaravan_inquiries`: History of submitted trip inquiries with generated reference IDs (`HC-XXXXXX`).
- `homescaravan_search_prefs`: Last searched hub, guest count, and caravan category in the trip planner.

*Note: `localStorage` is tied to the user's local browser and device. It does not synchronize across separate machines or send data to an external server. Booking submissions are client-side demo inquiries.*

---

## 5. Development & Build Commands

### Prerequisites
- **Node.js**: v20.x or v22.x
- **npm**: v10.x+

### Install Dependencies
```bash
npm ci
```
*(Or `npm install` if regenerating lockfile)*

### Run Development Server
```bash
npm run dev
```
Accessible at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Generates production artifacts inside `/dist` with relative paths (`base: './'`).

### Preview Production Build
```bash
npm run preview
```

---

## 6. GitHub Pages Deployment via GitHub Actions

This repository is pre-configured for automated deployment to GitHub Pages for user **Aman22kr**.

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Recreate travelhomes.in as homescaravan"
git branch -M main
git remote add origin https://github.com/Aman22kr/homescaravan.git
git push -u origin main
```

### Step 2: Configure GitHub Repository Settings
1. Go to your repository on GitHub: `https://github.com/Aman22kr/homescaravan`.
2. Click on **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (Do NOT choose "Deploy from a branch").
4. Under Actions permissions, ensure workflows have Read and Write permissions.

### Step 3: Deployment Execution
- On every push to the `main` branch, `.github/workflows/deploy.yml` automatically triggers.
- It sets up Node.js 22, installs dependencies via `npm ci`, runs `npm run build`, and publishes the `/dist` folder to GitHub Pages.
- Your site will be live at:
  ```
  https://Aman22kr.github.io/homescaravan/
  ```

---

## 7. Customization & Reusability

- **Brand Name**: Search and replace `homescaravan` in `src/components/Navbar.jsx`, `src/components/Footer.jsx`, and `index.html`.
- **Contact Details**: Update the hotline phone `+91 94094 80403` and email `hello@homescaravan.in` in `src/components/Footer.jsx` and `src/pages/ContactPage.jsx`.
- **Fleet Models**: Add or edit vehicle specifications inside `src/data/caravansData.js`.
- **Campsites & Routes**: Modify itineraries and power hookups in `src/data/destinationsData.js`.
