# Global Trust Fund

A React/Vite digital banking application foundation with Supabase authentication and a separated backend API.

## Structure
- `frontend/` React + Vite customer interface
- `backend/` Express API foundation
- `authentication/` authentication helpers
- `supabase/` database migration
- `.env.example` environment template

## Run frontend
```bash
cd frontend
npm install
npm run dev
```

Do not commit real secrets. Copy `.env.example` to `.env` and provide your own Supabase public project URL/key.
