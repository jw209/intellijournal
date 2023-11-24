import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage';
import WhyPage from './pages/WhyPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import ContributorsPage from './pages/ContributorsPage';
import MissionPage from './pages/MissionPage';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

/* Routes for base-level website */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/why",
        element: <WhyPage />
      },
      {
        path: "/pricing",
        element: <PricingPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/privacy",
        element: <PrivacyPage />
      },
      {
        path: "/contributors",
        element: <ContributorsPage />
      },
      {
        path: "/mission",
        element: <MissionPage />
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<HomePage />}
    />
  </React.StrictMode>
);

reportWebVitals();
