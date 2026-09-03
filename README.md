# MedAI — Educational Symptom Checker

MedAI is a frontend-only React application that lets users describe symptoms
in plain language and see educational information about commonly associated
conditions. It uses a small local dataset and a simple keyword-matching
algorithm — there is no backend, API key, or external AI service involved.

**This is not a diagnostic tool.** See the disclaimer in the app footer and
near the symptom checker.

## Tech stack

- React 18 + Vite
- Tailwind CSS
- lucide-react for icons
- Plain JavaScript (no TypeScript), no backend

## Folder structure

```
medai-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── SymptomChecker.jsx
│   │   ├── ChatMessage.jsx
│   │   ├── ConditionCard.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── About.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── conditions.js
│   ├── utils/
│   │   └── matchSymptoms.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Setup

1. Unzip the project and open the `medai-app` folder in VS Code.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the printed local URL (usually `http://localhost:5173`) in your browser.

To build a production bundle:

```bash
npm run build
npm run preview
```

## Notes

- Symptom matching lives in `src/utils/matchSymptoms.js` and compares user
  input against `src/data/conditions.js`. Add more conditions or symptoms
  there to expand coverage.
- Wording that suggests a medical emergency (e.g. "difficulty breathing",
  "severe chest pain") triggers a prominent warning instead of a normal
  match result.
- Dark mode can be toggled from the navbar; the preference is not persisted
  between sessions.
