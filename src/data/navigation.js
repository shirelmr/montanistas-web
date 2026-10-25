// Main menu, in order: home, one link per activity, then the other pages.

import { activities } from './activities'
import { contactPage, ui } from './common'
import { mediaPage } from './media'

export const navItems = [
  { to: '/', label: ui.home },
  ...activities.map((activity) => ({ to: `/${activity.slug}`, label: activity.nav })),
  { to: mediaPage.path, label: mediaPage.nav },
  { to: contactPage.path, label: contactPage.nav },
]
