// Runtime config for the portfolio frontend.
//
// In production (GitHub Pages), the frontend is on a different origin from
// the backend, so we POST to the absolute BTP CF URL. In local dev, the
// backend mounts ../frontend at the same origin — flip BACKEND_URL to '' to
// hit the same-origin /api/contact path during local debugging.
//
// Loaded as a plain script before the form-handler script in index.html, so
// it sets a global on window. No build step.
window.PORTFOLIO_CONFIG = {
  BACKEND_URL: 'https://kishore-kumar.cfapps.us10.hana.ondemand.com',
  // Cloudflare Turnstile site key. Public — safe to commit. The matching
  // secret key lives only on the backend (TURNSTILE_SECRET env var).
  TURNSTILE_SITE_KEY: '0x4AAAAAADnrhC8FpeCxzM4l',
};
