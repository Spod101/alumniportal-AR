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

const featuredAlumni = {
  image: 'https://i.pravatar.cc/400?img=10',
  title: 'John Michael - From Student to Tech CEO',
  name: 'John Michael',
  date: 'Jan 23, 2026',
  category: 'Alumni Success Stories',
  source: 'HSI Communications',
  content:
    'From classroom collaboration to leading a global tech startup, John transformed his vision into impact. His journey reflects the innovation mindset and leadership values nurtured within our community. Starting as a student with a passion for technology, John leveraged the skills and network he built here to launch Tech AI, now a leading company in sustainable technology solutions.',
  bulletPoints: [
    'Founded Tech AI in 2020, now valued at $50M+',
    'Created 200+ jobs in the sustainable technology sector',
    'Mentors current students and recent graduates',
    'Active contributor to alumni network and community initiatives',
  ],
  jobTitle: 'Founder & CEO | Tech AI',
}

const otherAlumni = [
  {
    image: 'https://i.pravatar.cc/300?img=12',
    title: 'Sarah Lin - Rising Product Leader',
    name: 'Sarah Lin',
    date: 'Jan 20, 2026',
    category: 'Alumni Success Stories',
    source: 'HSI Communications',
    content:
      'The mentorship, hands-on projects, and strong professional network she built here became the foundation of her rapid rise in the tech industry, where she now leads cross-functional innovation teams at NovaTech.',
    bulletPoints: [
      'Led product launches generating $10M+ in revenue',
      'Manages team of 15+ product managers and designers',
      'Regular speaker at tech conferences and industry events',
    ],
    jobTitle: 'Senior Product Manager | NovaTech',
  },
  {
    image: 'https://i.pravatar.cc/300?img=15',
    title: 'Michael Chen - AI Innovation Pioneer',
    name: 'Michael Chen',
    date: 'Jan 18, 2026',
    category: 'Alumni Success Stories',
    source: 'HSI Communications',
    content:
      'Driven by curiosity and resilience, Michael leveraged his technical expertise and industry network to build scalable AI solutions serving global enterprises through ApexAI Labs.',
    bulletPoints: [
      'Co-founded ApexAI Labs, serving Fortune 500 companies',
      'Developed AI solutions processing millions of transactions daily',
      'Published research papers in top AI conferences',
    ],
    jobTitle: 'Co-Founder & CTO | ApexAI Labs',
  },
]

export default function AlumniStoriesPage() {
  const [selectedAlumni, setSelectedAlumni] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (alumni) => {
    setSelectedAlumni(alumni)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedAlumni(null)
  }

  return (
    <>
      <div className="flex flex-col gap-6 min-h-full">
        {/* Header Section - Full Width */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-600 mb-4">Announcements / Alumni Success Stories</p>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Alumni Success Stories</h1>
              <p className="text-gray-600">Celebrating the achievements of our alumni members</p>
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
            {/* Featured Alumni */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Alumni</h2>
              <div
                className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleOpenModal(featuredAlumni)}
              >
                <div className="flex">
                  <div className="w-1/3">
                    <img
                      src={featuredAlumni.image}
                      alt={featuredAlumni.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{featuredAlumni.name}</h3>
                    <p className="text-gray-600 mb-4">{featuredAlumni.jobTitle}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{featuredAlumni.content}</p>
                    <button className="bg-[#8B4513] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#7a3a0f] transition-colors">
                      Read Story
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Alumni */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {otherAlumni.map((alumni, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleOpenModal(alumni)}
                >
                  <div className="flex">
                    <div className="w-1/3">
                      <img
                        src={alumni.image}
                        alt={alumni.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{alumni.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{alumni.jobTitle}</p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">{alumni.content}</p>
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
        announcement={selectedAlumni}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
