import { createBrowserRouter } from 'react-router'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ActivityPage from './pages/ActivityPage'
import MediaPage from './pages/MediaPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import { activities } from './data/activities'
import { contactPage } from './data/common'
import { mediaPage } from './data/media'

// Paths come from the data files, so a new activity in activities.js gets
// its page automatically.
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      ...activities.map((activity) => ({
        path: activity.slug,
        // The key gives each activity a fresh page, so gallery positions
        // don't carry over when switching between activities.
        element: <ActivityPage key={activity.slug} activity={activity} />,
      })),
      { path: mediaPage.path, element: <MediaPage /> },
      { path: contactPage.path, element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
