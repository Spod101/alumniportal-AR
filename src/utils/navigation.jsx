import React from 'react'
import {
  FiAward,
  FiBell,
  FiBookOpen,
  FiCalendar,
  FiFileText,
  FiHome,
  FiLayers,
  FiTarget,
  FiUser,
  FiUsers,
  FiMessageCircle, 
} from 'react-icons/fi'

export const NAV_ITEMS = [
  { label: 'Dashboard', path: '/dashboard', icon: <FiHome />, section: 'main' },
  { label: 'Directory & Networking', path: '/directory', icon: <FiUsers />, section: 'main' },
  { label: 'Career & Job Opportunities', path: '/career', icon: <FiTarget />, section: 'main' },
  { label: 'Training & Learnings', path: '/training', icon: <FiBookOpen />, section: 'main' },
  { label: 'Achievements & Recognition', path: '/achievements', icon: <FiAward />, section: 'main' },
  { label: 'Events & Community Engagement', path: '/events', icon: <FiCalendar />, section: 'main' },
  { label: 'Announcements', path: '/announcements', icon: <FiBell />, section: 'main' },
  { label: 'Mentorship & Volunteer Programs', path: '/mentorship', icon: <FiLayers />, section: 'main' },
  { label: 'Documents & Records', path: '/documents', icon: <FiFileText />, section: 'main' },
  { label: 'Profile', path: '/profile', icon: <FiUser />, section: 'others' },
  // Feedback & Surveys
  { label: 'Feedback & Surveys', path: '/feedback-surveys', icon: <FiMessageCircle />, section: 'others' },
]

export const groupNavItems = (items) =>
  items.reduce(
    (acc, item) => {
      acc[item.section].push(item)
      return acc
    },
    { main: [], others: [] }
  )
