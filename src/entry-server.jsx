import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import { routes, notFoundRoute } from './routes.js';

const Noop = () => null;

export async function renderRoute(path) {
  const match = routes.find((route) => route.path === path);
  const targetRoute = match || notFoundRoute;
  const mod = await targetRoute.load();
  const Component = mod.default;

  // Only the single route being prerendered needs a real component: React
  // Router's <Routes> renders exactly one matched element, so every other
  // path/the catch-all can point at a no-op since they are never selected
  // during this render.
  const builtRoutes = match ? [{ path: match.path, Component }] : [];
  const NotFoundComponent = match ? Noop : Component;

  const helmetContext = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={path}>
        <App routes={builtRoutes} NotFoundComponent={NotFoundComponent} />
      </StaticRouter>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet, notFound: !match };
}
