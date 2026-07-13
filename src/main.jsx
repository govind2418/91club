import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import { routes, notFoundRoute } from './routes.js';
import './styles/global.css';

async function start() {
  const pathname = window.location.pathname;
  const matched = routes.find((route) => route.path === pathname);
  const targetRoute = matched || notFoundRoute;

  // Eagerly resolve only the current page so the very first client render is
  // pixel-identical to the prerendered HTML (React.lazy always suspends on its
  // first render regardless of whether the chunk is already cached, which
  // breaks hydration). Every other route stays lazy for client-side navigation.
  const mod = await targetRoute.load();
  const InitialComponent = mod.default;

  const builtRoutes = routes.map((route) => ({
    path: route.path,
    Component: route.path === targetRoute.path ? InitialComponent : lazy(route.load)
  }));
  const NotFoundComponent = targetRoute === notFoundRoute ? InitialComponent : lazy(notFoundRoute.load);

  const container = document.getElementById('root');
  const app = (
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App routes={builtRoutes} NotFoundComponent={NotFoundComponent} />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(container, app);
  } else {
    ReactDOM.createRoot(container).render(app);
  }
}

start();
