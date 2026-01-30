import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiChevronRight, FiFlag } from 'react-icons/fi'
import AnnouncementModal from '../../components/AnnouncementModal'

const categories = [
  { label: 'All Announcements', path: '/announcements' },
  { label: 'Company News', path: '/announcements/company-news' },
  { label: 'Policy Changes', path: '/announcements/policy-changes' },
  { label: 'Partnerships & Advocacies', path: '/announcements/partnerships' },
  { label: 'Alumni Success Stories', path: '/announcements/alumni-stories' },
]

const featuredPolicy = {
  image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
  title: 'Updated Workplace Health & Safety Policy',
  date: 'Jan 23, 2026',
  category: 'Policy Changes',
  source: 'HSI Communications',
  content:
    'Our workplace health and safety policy has been updated to ensure a safer and more compliant environment for our team. Please review the updated guidelines in the employee portal. These changes reflect our commitment to maintaining the highest standards of workplace safety and compliance with all regulatory requirements.',
  bulletPoints: [
    'Enhanced safety protocols for all work environments',
    'Updated emergency response procedures',
    'New mandatory safety training requirements',
    'Improved reporting mechanisms for safety concerns',
  ],
  icon: 'warning',
}

const importantLinks = [
  { label: 'Workplace and Health Safety', icon: <FiFlag className="w-4 h-4 text-red-500" /> },
  { label: 'Remote Work Policy', icon: <FiFlag className="w-4 h-4 text-red-500" /> },
  { label: 'Information Security', icon: <FiFlag className="w-4 h-4 text-red-500" /> },
]

const otherPolicies = [
  {
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400',
    title: 'Workplace and Health Safety',
    date: 'Jan 9, 2026',
    category: 'Policy Changes',
    source: 'HSI Communications',
    content:
      'New remote work policy guidelines have been implemented to support flexible work arrangements. This policy outlines expectations, communication protocols, and performance standards for remote team members.',
    bulletPoints: [
      'Flexible work hours and location options',
      'Clear communication and collaboration guidelines',
      'Performance evaluation criteria for remote work',
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400',
    title: 'Information Security',
    date: 'Jan 12, 2026',
    category: 'Policy Changes',
    source: 'HSI Communications',
    content:
      'Updated information security policy to enhance data protection and cybersecurity measures. All employees are required to complete the new security training module.',
    bulletPoints: [
      'Enhanced password requirements and multi-factor authentication',
      'Updated data handling and storage protocols',
      'New cybersecurity awareness training program',
    ],
  },
]

export default function PolicyChangesPage() {
  const [selectedPolicy, setSelectedPolicy] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (policy) => {
    setSelectedPolicy(policy)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPolicy(null)
  }

  return (
    <>
      <div className="flex flex-col gap-6 min-h-full">
        {/* Header Section - Full Width */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-600 mb-4">Announcements / Policy Changes</p>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Policy Changes</h1>
              <p className="text-gray-600">Stay informed about the latest policies and guidelines</p>
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
            {/* Featured Policy */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Policy</h2>
              <div
                className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleOpenModal(featuredPolicy)}
              >
                <div className="flex">
                  <div className="w-1/2">
                    <img
                      src={featuredPolicy.image}
                      alt={featuredPolicy.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-accent text-2xl">⚠</span>
                      <h3 className="text-xl font-bold text-gray-900">{featuredPolicy.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {featuredPolicy.date} | {featuredPolicy.category}
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">{featuredPolicy.content}</p>
                    <button className="bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-900 transition-colors w-fit">
                      Read Full Policy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
              {/* Important Links */}
              <div className="bg-gray-800 text-white rounded-xl p-4">
                <h3 className="font-semibold mb-4">Important Links</h3>
                <div className="space-y-3">
                  {importantLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Other Policies */}
              {otherPolicies.map((policy, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleOpenModal(policy)}
                >
                  <img
                    src={policy.image}
                    alt={policy.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{policy.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {policy.date} | {policy.category}
                    </p>
                    <p className="text-gray-700 mb-3 text-sm">{policy.content}</p>
                    <button className="text-accent hover:text-accent-dark font-medium text-sm flex items-center gap-1">
                      Read More <FiChevronRight className="w-4 h-4" />
                    </button>
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
        announcement={selectedPolicy}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
