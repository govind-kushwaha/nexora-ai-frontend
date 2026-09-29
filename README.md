# FarmBuddyAI Frontend

Built from the uploaded SIH26154 frontend specification.

## Run
```bash
npm install
npm run dev
```

Optional backend URL:
```env
VITE_API_URL=http://localhost:8000
```

## Flow
Dashboard → Create / Transform → Source Preview → AI Content Map → Fact Bank → Settings → Output Selection → Generate → Results Studio → Source Trace + Consistency → Update All → History.

The UI uses local demo state when the FastAPI backend is unavailable; API functions are isolated in `src/services/api.js`.
