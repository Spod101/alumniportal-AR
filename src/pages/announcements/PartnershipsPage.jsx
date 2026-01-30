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

const featuredPartnership = {
  image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
  title: 'Tech AI Partnership',
  date: 'Jan 23, 2026',
  category: 'Partnerships & Advocacies',
  source: 'HSI Communications',
  content:
    'We are proud to announce our new partnership with Tech AI to promote sustainable technology and innovation. Together, we will work towards a greener future through our Greentech initiative. This collaboration will focus on developing eco-friendly solutions and advancing sustainable practices in the technology sector.',
  bulletPoints: [
    'Joint development of sustainable technology solutions',
    'Shared resources for environmental research and innovation',
    'Collaborative programs to promote green technology adoption',
    'Expanded network of sustainability-focused organizations',
  ],
  logo: '🌳💻',
}

const keyPartners = [
  { name: 'Tech AI', logo: '🌳💻' },
  { name: 'Caring Hearts Organization', logo: '❤️' },
]

const otherPartnerships = [
  {
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400',
    title: 'Advocacy for Mental Health',
    date: 'Jan 17, 2026',
    category: 'Partnerships & Advocacies',
    source: 'HSI Communications',
    content:
      'New partnership to promote mental health awareness and support programs. This initiative aims to create a supportive environment and provide resources for mental wellness.',
    bulletPoints: [
      'Mental health awareness campaigns',
      'Support programs and counseling services',
      'Workshops and training sessions',
    ],
    logo: '💚',
  },
  {
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400',
    title: 'Sustainability Initiatives',
    date: 'Jan 21, 2026',
    category: 'Partnerships & Advocacies',
    source: 'HSI Communications',
    content:
      'New sustainability initiative with GSI to reduce carbon footprint and promote environmental responsibility across all operations.',
    bulletPoints: [
      'Carbon reduction targets and monitoring',
      'Renewable energy adoption programs',
      'Waste reduction and recycling initiatives',
    ],
    logo: '🌍',
  },
]

export default function PartnershipsPage() {
  const [selectedPartnership, setSelectedPartnership] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (partnership) => {
    setSelectedPartnership(partnership)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPartnership(null)
  }

  return (
    <>
      <div className="flex flex-col gap-6 min-h-full">
        {/* Header Section - Full Width */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-600 mb-4">Announcements / Partnerships & Advocacies</p>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Partnerships & Advocacies</h1>
              <p className="text-gray-600">Collaborating for positive impact and advocacy</p>
            </div>
            <div className="flex items-center gap-4">
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white">
                <option>Sort by: Latest</option>
              </select>
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white">
                <option>Year: 2026</option>
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
            <div className="grid grid-cols-3 gap-6 mb-6">
              {/* Featured Partnership */}
              <div
                className="col-span-2 bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleOpenModal(featuredPartnership)}
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Partnership</h2>
                  <div className="flex gap-6">
                    <div className="w-1/3">
                      <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-6xl">
                        {featuredPartnership.logo}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{featuredPartnership.logo}</span>
                        <h3 className="text-xl font-bold text-gray-900">{featuredPartnership.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {featuredPartnership.date} | {featuredPartnership.category}
                      </p>
                      <p className="text-gray-700 mb-4 leading-relaxed">{featuredPartnership.content}</p>
                      <button className="bg-[#8B4513] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#7a3a0f] transition-colors">
                        Read Full Announcement
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Partners */}
              <div className="bg-gray-800 text-white rounded-xl p-4">
                <h3 className="font-semibold mb-4">Key Partners</h3>
                <div className="space-y-4 mb-4">
                  {keyPartners.map((partner, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-2xl">{partner.logo}</span>
                      <span className="text-sm">{partner.name}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-[#8B4513] text-white py-2 rounded-lg font-medium hover:bg-[#7a3a0f] transition-colors">
                  + View All Partners
                </button>
              </div>
            </div>

            {/* Other Partnerships */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {otherPartnerships.map((partnership, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleOpenModal(partnership)}
                >
                  <div className="flex gap-4 p-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-4xl flex-shrink-0">
                      {partnership.logo}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{partnership.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {partnership.date} | {partnership.category}
                      </p>
                      <p className="text-gray-700 mb-3 text-sm">{partnership.content}</p>
                      <button className="text-accent hover:text-accent-dark font-medium text-sm flex items-center gap-1">
                        Read More <FiChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
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
        announcement={selectedPartnership}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
