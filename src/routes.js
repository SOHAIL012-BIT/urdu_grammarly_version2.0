import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import WordsSuggestion from './pages/WordsSuggestion';
import GrammarChecking from './pages/GrammarChecking';
import SentenceCorrection from './pages/SentenceCorrection';
import TextEditor from './pages/TextEditor';


// ----------------------------------------------------------------------

// --------------------website------------------

import Aboutus from './websitepages/AboutUs'
import HomePage from './websitepages/homepage'
import Features from './websitepages/features'
import GrammarCheck from './websitepages/grammarCheck'
import WordSuggestion from './websitepages/WordSuggestion'
import TextCorrection from './websitepages/TextCorrection'

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'WordsSuggestion', element: <WordsSuggestion /> },
        { path: 'GrammarChecking', element: <GrammarChecking /> },
        { path: 'SentenceCorrection', element: <SentenceCorrection /> },
        { path: 'TextEditor', element: <TextEditor /> },

      ],
    },

    {
      path: 'home',
      element: <HomePage />,
    },
    {
      path: 'About',
      element: <Aboutus />,
    },
    {
      path: 'features',
      element: <Features/>,
    },
    {
      path: 'GrammarCheck',
      element: <GrammarCheck/>,
    },
    {
      path: 'TextCorrection',
      element: <TextCorrection/>,
    },
    {
      path: 'WordSuggestion',
      element: <WordSuggestion/>,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignUpPage/>,
    },
    {
      element: <SimpleLayout />,
      children: [
        // { element: <Navigate to="/urduGrammarly/home" />, index: true },
        { element: <Navigate to="/home" />, index: true },

        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
