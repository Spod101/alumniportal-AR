import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiCamera, FiVideo, FiCalendar, FiHeart, FiMessageCircle, FiChevronRight, FiSearch } from 'react-icons/fi'
import AnnouncementModal from '../components/AnnouncementModal'

// Mock data
const mockAnnouncements = [
  {
    id: 1,
    author: 'Mark Zuckerberg',
    authorAvatar: 'https://i.pravatar.cc/150?img=1',
    timestamp: 'Jan 23, 2026 - 2:00pm',
    title: 'Expansion into Southeast Asia',
    subtitle: 'Jan 23, 2026 | Company News',
    content: 'We are excited to announce our expansion into Southeast Asia, with new offices opening in Singapore, Malaysia, and Thailand. This strategic move will help us better serve our growing customer base in the region.',
    category: 'Company News',
    likes: 42,
    comments: 8,
    pinned: true,
  },
  {
    id: 2,
    author: 'HR Department',
    authorAvatar: 'https://i.pravatar.cc/150?img=2',
    timestamp: 'Jan 23, 2026 - 1:30pm',
    title: 'Updated Workplace Health & Safety Policy',
    subtitle: 'Jan 23, 2026 | Policy Changes',
    content: 'Our workplace health and safety policy has been updated to ensure a safer and more compliant environment for our team. Please review the updated guidelines in the employee portal.',
    category: 'Policy Changes',
    likes: 28,
    comments: 5,
    pinned: true,
    icon: 'warning',
  },
  {
    id: 3,
    author: 'Partnerships Team',
    authorAvatar: 'https://i.pravatar.cc/150?img=3',
    timestamp: 'Jan 23, 2026 - 12:00pm',
    title: 'Tech AI Partnership',
    subtitle: 'Jan 23, 2026 | Partnerships & Advocacies',
    content: 'We are proud to announce our new partnership with Tech AI to promote sustainable technology and innovation. Together, we will work towards a greener future.',
    category: 'Partnerships & Advocacies',
    likes: 35,
    comments: 12,
    pinned: false,
    icon: 'building',
  },
]

const pinnedAnnouncements = mockAnnouncements.filter((a) => a.pinned)

const alumniSpotlight = {
  name: 'John Michael',
  title: 'Founder & CEO Tech AI',
  image: 'https://i.pravatar.cc/300?img=10',
  quote: 'This company provided me with the skills and network I needed to launch my own startup',
}

const categories = [
  { label: 'All Announcements', path: '/announcements' },
  { label: 'Company News', path: '/announcements/company-news' },
  { label: 'Policy Changes', path: '/announcements/policy-changes' },
  { label: 'Partnerships & Advocacies', path: '/announcements/partnerships' },
  { label: 'Alumni Success Stories', path: '/announcements/alumni-stories' },
]

export default function AnnouncementsPage() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (announcement) => {
    setSelectedAnnouncement(announcement)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedAnnouncement(null)
  }

  return (
    <>
      <div className="flex flex-col gap-6 min-h-full">
        {/* Header Section - Full Width */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Announcements & Updates</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Q Search"
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white w-64"
                />
              </div>
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white">
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Area with Sidebars */}
        <div className="flex gap-6">
          {/* Left Sidebar - Navigation */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-4 shadow-sm sticky top-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Announcements</h3>
              <nav className="flex flex-col gap-1">
                {categories.map((category) => (
                  <NavLink
                    key={category.path}
                    to={category.path}
                    end={category.path === '/announcements'}
                    className={({ isActive }) =>
                      `px-4 py-2.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? 'bg-accent text-[#2c2c2c] font-medium border-l-4 border-accent'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    {category.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content - Feed */}
          <div className="flex-1 min-w-0">
            {/* Create Announcement */}
            <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
              <input
                type="text"
                placeholder="Create Announcement"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent mb-3"
              />
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <FiCamera className="w-5 h-5" />
                  <span className="text-sm">Photo</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <FiVideo className="w-5 h-5" />
                  <span className="text-sm">Video</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <FiCalendar className="w-5 h-5" />
                  <span className="text-sm">Event</span>
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-4">
              <p className="text-sm text-gray-600">Found {mockAnnouncements.length} Matches</p>
            </div>

            {/* Announcements Feed */}
            <div className="space-y-4">
              {mockAnnouncements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="bg-white rounded-xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleOpenModal(announcement)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={announcement.authorAvatar}
                      alt={announcement.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{announcement.author}</h3>
                        <span className="text-xs text-gray-500">{announcement.timestamp}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        {announcement.icon === 'warning' && (
                          <span className="text-accent text-xl">⚠</span>
                        )}
                        {announcement.icon === 'building' && (
                          <span className="text-teal-600 text-xl">🏢</span>
                        )}
                        <h2 className="text-xl font-bold text-gray-900">{announcement.title}</h2>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{announcement.subtitle}</p>
                      <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors">
                      <FiHeart className="w-5 h-5" />
                      <span className="text-sm">Like ({announcement.likes})</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors">
                      <FiMessageCircle className="w-5 h-5" />
                      <span className="text-sm">Comment ({announcement.comments})</span>
                    </button>
                    <button className="flex items-center gap-2 text-accent hover:text-accent-dark transition-colors ml-auto">
                      <span className="text-sm font-medium">View Full Post</span>
                      <FiChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Pinned & Spotlight */}
          <aside className="w-80 flex-shrink-0">
            {/* Pinned Announcements */}
            <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden sticky top-6">
              <div className="bg-[#556B2F] text-white px-4 py-3">
                <h3 className="font-semibold">Pinned Announcements</h3>
              </div>
              <div className="p-4 space-y-4">
                {pinnedAnnouncements.map((announcement) => (
                  <div key={announcement.id} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <h4 className="font-semibold text-gray-900 mb-1">{announcement.title}</h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{announcement.content}</p>
                    <button
                      className="text-sm text-accent hover:text-accent-dark font-medium flex items-center gap-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleOpenModal(announcement)
                      }}
                    >
                      View Post <FiChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Alumni Spotlight */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-[400px]">
              <div className="bg-[#556B2F] text-white px-4 py-3">
                <h3 className="font-semibold">Alumni Spotlight</h3>
              </div>
              <div className="p-4">
                <img
                  src={alumniSpotlight.image}
                  alt={alumniSpotlight.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-1">{alumniSpotlight.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{alumniSpotlight.title}</p>
                <p className="text-sm text-gray-700 italic mb-4">"{alumniSpotlight.quote}"</p>
                <button className="w-full bg-[#556B2F] text-white py-2.5 rounded-lg font-medium hover:bg-[#4a5d28] transition-colors flex items-center justify-center gap-2">
                  Read Story <FiChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Modal */}
      <AnnouncementModal
        announcement={selectedAnnouncement}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
