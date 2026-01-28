// src/components/achievements_recognition/BadgeShowcase.jsx
import React, { useState } from 'react';
import {
  Medal,
  MagnifyingGlass,
  Trophy,
  Certificate,
  HandHeart,
  Crown,
  Rocket,
  Eye,
  SortAscending,
  SortDescending,
} from '@phosphor-icons/react';

// Badge configuration
const badgeConfig = {
  certified: {
    name: 'Certified Alumni',
    color: '#199A08',
    bgColor: '#E8F5E9',
    icon: Certificate,
    description: 'Verified employee/intern alumni status',
    criteria: 'Complete profile verification and current employment update',
    tier: 'standard',
  },
  top_performer: {
    name: 'Top Performer',
    color: '#DAB619',
    bgColor: '#FFF8E1',
    icon: Trophy,
    description: 'Outstanding professional achievements',
    criteria: 'Recognized for exceptional career accomplishments post-HSI',
    tier: 'gold',
  },
  mentor: {
    name: 'Mentor',
    color: '#3B82F6',
    bgColor: '#E3F2FD',
    icon: HandHeart,
    description: 'Actively guides current employees and interns',
    criteria: 'Successfully mentor at least 5 current or former colleagues',
    tier: 'gold',
  },
  industry_leader: {
    name: 'Industry Leader',
    color: '#9333EA',
    bgColor: '#F3E8FF',
    icon: Crown,
    description: 'Recognized leader in their industry',
    criteria: 'Hold executive position or significant industry influence',
    tier: 'platinum',
  },
  innovator: {
    name: 'Innovator',
    color: '#F97316',
    bgColor: '#FFF7ED',
    icon: Rocket,
    description: 'Pioneer in innovation and entrepreneurship',
    criteria: 'Launch startup, patent, or innovative project after leaving HSI',
    tier: 'platinum',
  },
};

const tierConfig = {
  platinum: { label: 'Platinum', color: '#6366F1', bgColor: '#EEF2FF' },
  gold: { label: 'Gold', color: '#DAB619', bgColor: '#FFF8E1' },
  silver: { label: 'Silver', color: '#6B7280', bgColor: '#F3F4F6' },
  standard: { label: 'Standard', color: '#199A08', bgColor: '#E8F5E9' },
};

// Mock data for badge holders
const mockBadgeHolders = [
  { id: 1, name: 'Maria Santos', email: 'maria.santos@email.com', alumniType: 'Former Employee', hsiRole: 'Web Developer', hsiTenure: '2018-2022', badges: ['certified', 'mentor', 'top_performer'], totalPoints: 850 },
  { id: 2, name: 'John Dela Cruz', email: 'john.delacruz@email.com', alumniType: 'Former Employee', hsiRole: 'Project Manager', hsiTenure: '2015-2019', badges: ['certified', 'industry_leader', 'innovator'], totalPoints: 1200 },
  { id: 3, name: 'Ana Reyes', email: 'ana.reyes@email.com', alumniType: 'Former Intern', hsiRole: 'QA / Web Dev', hsiTenure: '2019-2021', badges: ['certified', 'mentor'], totalPoints: 720 },
  { id: 4, name: 'Carlos Garcia', email: 'carlos.garcia@email.com', alumniType: 'Former Employee', hsiRole: 'Game Developer', hsiTenure: '2019-2023', badges: ['certified', 'top_performer'], totalPoints: 450 },
  { id: 5, name: 'Patricia Lim', email: 'patricia.lim@email.com', alumniType: 'Former Employee', hsiRole: 'HR', hsiTenure: '2016-2021', badges: ['certified', 'top_performer'], totalPoints: 980 },
  { id: 6, name: 'Miguel Torres', email: 'miguel.torres@email.com', alumniType: 'Former Intern', hsiRole: 'GFX / Game Dev', hsiTenure: '2020-2021', badges: ['certified', 'mentor'], totalPoints: 670 },
  { id: 7, name: 'Sofia Chen', email: 'sofia.chen@email.com', alumniType: 'Former Employee', hsiRole: 'Unleash Web Dev', hsiTenure: '2017-2022', badges: ['certified', 'innovator', 'industry_leader'], totalPoints: 1100 },
  { id: 8, name: 'David Kim', email: 'david.kim@email.com', alumniType: 'Former Intern', hsiRole: 'Sys Admin / QA', hsiTenure: '2021-2022', badges: ['certified', 'top_performer'], totalPoints: 580 },
];

const ITEMS_PER_PAGE = 6;

function BadgeShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBadge, setSelectedBadge] = useState('');
  const [selectedTier, setSelectedTier] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [showBadgeDetail, setShowBadgeDetail] = useState(null);

  // Filter and sort badge holders
  const filteredHolders = mockBadgeHolders
    .filter((holder) => {
      const matchesSearch =
        holder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        holder.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBadge = !selectedBadge || holder.badges.includes(selectedBadge);
      const matchesTier =
        !selectedTier ||
        holder.badges.some((b) => badgeConfig[b]?.tier === selectedTier);
      return matchesSearch && matchesBadge && matchesTier;
    })
    .sort((a, b) =>
      sortOrder === 'desc' ? b.totalPoints - a.totalPoints : a.totalPoints - b.totalPoints
    );

  const totalPages = Math.ceil(filteredHolders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentHolders = filteredHolders.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Badge statistics
  const badgeStats = Object.keys(badgeConfig).map((type) => ({
    type,
    count: mockBadgeHolders.filter((h) => h.badges.includes(type)).length,
    ...badgeConfig[type],
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg py-5 px-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#000000] flex items-center gap-2">
              <Medal size={24} className="text-[#DAB619]" weight="duotone" />
              Alumni Badges Showcase
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Explore badges earned by our distinguished employee and intern alumni
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search alumni..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-56 pl-10 pr-4 py-2.5 text-sm border border-[#AAA9A9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40"
              />
              <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Badge Filter */}
            <select
              value={selectedBadge}
              onChange={(e) => setSelectedBadge(e.target.value)}
              className="px-4 py-2.5 text-sm border border-[#AAA9A9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 bg-white"
            >
              <option value="">All Badges</option>
              {Object.entries(badgeConfig).map(([key, config]) => (
                <option key={key} value={key}>{config.name}</option>
              ))}
            </select>

            {/* Sort Button */}
            <button
              onClick={() => setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'))}
              className="flex items-center gap-2 px-4 py-2.5 text-sm border border-[#AAA9A9] rounded-lg hover:bg-gray-50 transition-colors"
            >
              {sortOrder === 'desc' ? <SortDescending size={18} /> : <SortAscending size={18} />}
              Points
            </button>
          </div>
        </div>
      </div>

      {/* Badge Types Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {badgeStats.map((badge) => {
          const Icon = badge.icon;
          const isSelected = selectedBadge === badge.type;
          return (
            <button
              key={badge.type}
              onClick={() => setSelectedBadge(isSelected ? '' : badge.type)}
              className={`p-4 rounded-xl text-center transition-all ${
                isSelected
                  ? 'ring-2 ring-[#DAB619] shadow-lg scale-105'
                  : 'bg-white hover:shadow-md'
              }`}
              style={{ backgroundColor: isSelected ? badge.bgColor : undefined }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
                style={{ backgroundColor: badge.bgColor }}
              >
                <Icon size={24} style={{ color: badge.color }} weight="duotone" />
              </div>
              <p className="text-xs font-medium text-gray-900 truncate">{badge.name}</p>
              <p className="text-lg font-bold mt-1" style={{ color: badge.color }}>
                {badge.count}
              </p>
            </button>
          );
        })}
      </div>

      {/* Badge Holders Grid */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-gray-900">
            Badge Holders ({filteredHolders.length})
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-[#DAB619] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-[#DAB619] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentHolders.map((holder) => (
              <div
                key={holder.id}
                className="p-5 border border-gray-100 rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white font-bold text-lg">
                      {holder.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                    <h4 className="font-semibold text-gray-900">{holder.name}</h4>
                    <p className="text-sm text-gray-500">{holder.hsiRole} ({holder.hsiTenure})</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Points</p>
                    <p className="text-lg font-bold text-[#DAB619]">{holder.totalPoints}</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {holder.badges.map((badgeType, idx) => {
                    const config = badgeConfig[badgeType];
                    const Icon = config?.icon || Medal;
                    return (
                      <div
                        key={idx}
                        className="group/badge relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border cursor-pointer hover:shadow-sm transition-all"
                        style={{
                          color: config?.color || '#6B7280',
                          borderColor: config?.color || '#6B7280',
                          backgroundColor: config?.bgColor || '#F3F4F6',
                        }}
                        onClick={() => setShowBadgeDetail(badgeType)}
                      >
                        <Icon size={12} weight="duotone" />
                        {config?.name || badgeType}
                      </div>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm text-gray-600 hover:text-[#DAB619] hover:bg-[#DAB619]/5 rounded-lg transition-colors">
                    <Eye size={16} />
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {currentHolders.map((holder) => (
              <div
                key={holder.id}
                className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white font-bold">
                    {holder.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{holder.name}</h4>
                    <p className="text-sm text-gray-500">{holder.hsiRole} ({holder.hsiTenure})</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex flex-wrap gap-1.5 max-w-xs">
                    {holder.badges.slice(0, 4).map((badgeType, idx) => {
                      const config = badgeConfig[badgeType];
                      const Icon = config?.icon || Medal;
                      return (
                        <div
                          key={idx}
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: config?.bgColor || '#F3F4F6' }}
                          title={config?.name}
                        >
                          <Icon size={16} style={{ color: config?.color }} weight="duotone" />
                        </div>
                      );
                    })}
                    {holder.badges.length > 4 && (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">
                        +{holder.badges.length - 4}
                      </div>
                    )}
                  </div>

                  <div className="text-right min-w-[80px]">
                    <p className="text-lg font-bold text-[#DAB619]">{holder.totalPoints}</p>
                    <p className="text-xs text-gray-500">points</p>
                  </div>

                  <button className="p-2 text-gray-500 hover:text-[#DAB619] hover:bg-[#DAB619]/5 rounded-lg transition-colors">
                    <Eye size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6 pt-6 border-t border-gray-100">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === idx + 1
                    ? 'bg-[#DAB619] text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Badge Detail Modal */}
      {showBadgeDetail && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div
              className="p-6"
              style={{ backgroundColor: badgeConfig[showBadgeDetail]?.bgColor }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'white' }}
                >
                  {(() => {
                    const Icon = badgeConfig[showBadgeDetail]?.icon || Medal;
                    return (
                      <Icon
                        size={32}
                        style={{ color: badgeConfig[showBadgeDetail]?.color }}
                        weight="duotone"
                      />
                    );
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {badgeConfig[showBadgeDetail]?.name}
                  </h3>
                  <span
                    className="inline-block px-2 py-0.5 rounded-full text-xs font-medium mt-1"
                    style={{
                      backgroundColor: tierConfig[badgeConfig[showBadgeDetail]?.tier]?.bgColor,
                      color: tierConfig[badgeConfig[showBadgeDetail]?.tier]?.color,
                    }}
                  >
                    {tierConfig[badgeConfig[showBadgeDetail]?.tier]?.label} Tier
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Description</h4>
                <p className="text-sm text-gray-600">
                  {badgeConfig[showBadgeDetail]?.description}
                </p>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Criteria</h4>
                <p className="text-sm text-gray-600">
                  {badgeConfig[showBadgeDetail]?.criteria}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Badge Holders</h4>
                <p className="text-2xl font-bold" style={{ color: badgeConfig[showBadgeDetail]?.color }}>
                  {mockBadgeHolders.filter((h) => h.badges.includes(showBadgeDetail)).length}
                </p>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex justify-end">
              <button
                onClick={() => setShowBadgeDetail(null)}
                className="px-5 py-2.5 text-sm font-medium text-white bg-[#DAB619] hover:bg-[#c4a015] rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BadgeShowcase;
