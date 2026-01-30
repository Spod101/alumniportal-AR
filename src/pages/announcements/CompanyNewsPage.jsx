import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import AnnouncementModal from '../../components/AnnouncementModal'

const categories = [
  { label: 'All Announcements', path: '/announcements' },
  { label: 'Company News', path: '/announcements/company-news' },
  { label: 'Policy Changes', path: '/announcements/policy-changes' },
  { label: 'Partnerships & Advocacies', path: '/announcements/partnerships' },
  { label: 'Alumni Success Stories', path: '/announcements/alumni-stories' },
]

const featuredNews = {
  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
  title: 'Company Announces Expansion into Southeast Asia',
  date: 'Jan 23, 2026',
  category: 'Company News',
  source: 'HSI Communications',
  content:
    "We're thrilled to announce our expansion in the vibrant Southeast Asia market with new offices opening in Singapore, Malaysia, and Thailand. This marks a major step in our growth strategy as we continue to broaden our international presence.",
  bulletPoints: [
    'Increased opportunities for cross-border collaboration',
    'Expanded client support coverage',
    'More roles opening in operations',
  ],
}

const otherNews = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    title: 'Quarterly Financial Report',
    date: 'Jan 11, 2026',
    category: 'Company News',
    content: 'Our Q1 financial performance shows strong growth across all sectors.',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    title: 'New Corporate HQs Opening',
    date: 'Jan 19, 2026',
    category: 'Company News',
    content: 'Our new corporate headquarters will open in the central business district.',
  },
]

export default function CompanyNewsPage() {
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
          <p className="text-sm text-gray-600 mb-4">Announcements / Company News</p>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Company News</h1>
              <p className="text-gray-600">Official company updates and major milestones</p>
            </div>
            <div className="flex items-center gap-4">
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white">
                <option>Sort by: Latest</option>
                <option>Sort by: Oldest</option>
              </select>
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white">
                <option>Year: 2026</option>
                <option>Year: 2025</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Area with Sidebar */}
        <div className="flex gap-6">
          {/* Left Sidebar - Navigation */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-4 shadow-sm sticky top-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Announcements</h3>
              <nav className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <NavLink
                    key={cat.path}
                    to={cat.path}
                    end={cat.path === '/announcements'}
                    className={({ isActive }) =>
                      `px-4 py-2.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? 'bg-accent text-[#2c2c2c] font-medium border-l-4 border-accent'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    {cat.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Featured News */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured News</h2>
              <div
                className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleOpenModal(featuredNews)}
              >
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{featuredNews.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {featuredNews.date} | {featuredNews.category}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{featuredNews.content}</p>
                  <button className="bg-accent text-[#2c2c2c] px-6 py-2.5 rounded-lg font-medium hover:bg-accent-dark transition-colors">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>

            {/* Other News */}
            <div className="grid grid-cols-2 gap-6">
              {otherNews.map((news, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleOpenModal(news)}
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{news.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {news.date} | {news.category}
                    </p>
                    <p className="text-gray-700 mb-3 text-sm">{news.content}</p>
                    <button className="text-accent hover:text-accent-dark font-medium text-sm flex items-center gap-1">
                      Read More <FiChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <button className="bg-accent text-[#2c2c2c] px-4 py-2 rounded-lg font-medium text-sm">
                FIRST
              </button>
              <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                &lt;
              </button>
              <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                10
              </button>
              <button className="px-3 py-2 bg-gray-200 rounded-lg text-sm font-medium">11</button>
              <span className="px-2 text-gray-600">...</span>
              <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                26
              </button>
              <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                &gt;
              </button>
              <button className="bg-accent text-[#2c2c2c] px-4 py-2 rounded-lg font-medium text-sm">
                LAST
              </button>
            </div>
          </div>
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
