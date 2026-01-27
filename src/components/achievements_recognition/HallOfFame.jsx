// src/components/achievements_recognition/HallOfFame.jsx
import React, { useState } from 'react';
import {
  Trophy,
  Crown,
  Star,
  Medal,
  GraduationCap,
  Briefcase,
  CalendarBlank,
  MapPin,
  LinkedinLogo,
  Globe,
  Quotes,
  Eye,
  MagnifyingGlass,
  Funnel,
  Sparkle,
  ArrowRight,
} from '@phosphor-icons/react';

// Mock data for Hall of Fame members
const hallOfFameMembers = [
  {
    id: 1,
    name: 'Roberto Cruz',
    currentRole: 'CEO & Founder',
    currentCompany: 'GameForge Studios',
    hsiTenure: '2010-2014',
    hsiRole: 'Game Developer',
    location: 'Singapore',
    inductionYear: 2020,
    category: 'Entrepreneurship',
    alumniType: 'Former Employee',
    achievement: 'Built a successful game studio from scratch, publishing 20+ mobile games with 50M+ downloads',
    quote: 'The game development skills and work ethic I learned at HSI gave me the courage to start my own studio.',
    highlights: ['Top 10 Mobile Game Publisher in SEA', 'Employed 150+ game developers', 'Founded 2 successful studios'],
    image: null,
  },
  {
    id: 2,
    name: 'Lisa Mendoza',
    currentRole: 'VP of Engineering',
    currentCompany: 'Meta',
    hsiTenure: '2008-2012',
    hsiRole: 'Web Developer',
    location: 'California, USA',
    inductionYear: 2019,
    category: 'Technology',
    alumniType: 'Former Employee',
    achievement: 'Led engineering teams building products used by 2 billion people worldwide',
    quote: 'HSI taught me that great software starts with great teamwork.',
    highlights: ['Led Facebook Messenger redesign', 'Manages 500+ engineers', 'Tech diversity advocate'],
    image: null,
  },
  {
    id: 3,
    name: 'Mark Villanueva',
    currentRole: 'Technical Director',
    currentCompany: 'Riot Games',
    hsiTenure: '2012-2014',
    hsiRole: 'Game Dev / QA',
    location: 'Los Angeles, USA',
    inductionYear: 2023,
    category: 'Technology',
    alumniType: 'Former Intern',
    achievement: 'Key contributor to League of Legends gameplay systems, one of the most played games globally',
    quote: 'My internship at HSI opened doors I never knew existed in the gaming industry.',
    highlights: ['Shipped 5 major game titles', 'Game Developers Choice Award', '10+ patents in game tech'],
    image: null,
  },
  {
    id: 4,
    name: 'Carmen Santiago',
    currentRole: 'Chief People Officer',
    currentCompany: 'Grab Holdings',
    hsiTenure: '2009-2015',
    hsiRole: 'HR',
    location: 'Singapore',
    inductionYear: 2021,
    category: 'Leadership',
    alumniType: 'Former Employee',
    achievement: 'Built and scaled HR operations for Southeast Asia\'s largest tech company',
    quote: 'HSI showed me that people are the heart of any successful organization.',
    highlights: ['HR Executive of the Year Asia', 'Scaled team from 100 to 10,000', 'D&I Champion Award'],
    image: null,
  },
  {
    id: 5,
    name: 'Angela Reyes',
    currentRole: 'QA Director',
    currentCompany: 'Blizzard Entertainment',
    hsiTenure: '2011-2016',
    hsiRole: 'QA',
    location: 'California, USA',
    inductionYear: 2024,
    category: 'Technology',
    alumniType: 'Former Employee',
    achievement: 'Pioneered automated testing frameworks that revolutionized game QA industry standards',
    quote: 'Quality is not an act, it\'s a habit. HSI instilled that in me.',
    highlights: ['QA Innovation Award 2023', 'Built QA team of 200+', 'Industry speaker & author'],
    image: null,
  },
  {
    id: 6,
    name: 'Juan Carlos Ramos',
    currentRole: 'CTO',
    currentCompany: 'Canva',
    hsiTenure: '2013-2015',
    hsiRole: 'Unleash Web Dev / QA',
    location: 'Sydney, Australia',
    inductionYear: 2022,
    category: 'Technology',
    alumniType: 'Former Intern',
    achievement: 'Led technical architecture scaling Canva to 100M+ users globally',
    quote: 'HSI gave me my first real-world development experience. That foundation was everything.',
    highlights: ['Forbes 30 Under 30', 'Scaled platform 100x', 'Tech leadership mentor'],
    image: null,
  },
];

const categories = ['All', 'Entrepreneurship', 'Technology', 'Leadership'];

const categoryIcons = {
  Entrepreneurship: { icon: Briefcase, color: '#DAB619' },
  Technology: { icon: Trophy, color: '#3B82F6' },
  Leadership: { icon: Crown, color: '#9333EA' },
};

function HallOfFame() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const filteredMembers = hallOfFameMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || member.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg py-5 px-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#000000] flex items-center gap-2">
              <Trophy size={24} className="text-[#DAB619]" weight="duotone" />
              Hall of Fame
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Honoring former employees and interns who have achieved extraordinary success and impact
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search inductees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-56 pl-10 pr-4 py-2.5 text-sm border border-[#AAA9A9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40"
              />
              <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-gradient-to-r from-[#DAB619] via-[#c4a015] to-[#b89c14] rounded-xl p-6 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold">{hallOfFameMembers.length}</p>
            <p className="text-white/80 text-sm mt-1">Inductees</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{new Set(hallOfFameMembers.map(m => m.category)).size}</p>
            <p className="text-white/80 text-sm mt-1">Categories</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{Math.min(...hallOfFameMembers.map(m => parseInt(m.hsiTenure.split('-')[0])))}</p>
            <p className="text-white/80 text-sm mt-1">Earliest Alumni</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{new Date().getFullYear() - Math.max(...hallOfFameMembers.map(m => m.inductionYear)) + 1}</p>
            <p className="text-white/80 text-sm mt-1">Years of Excellence</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => {
          const config = categoryIcons[category];
          const Icon = config?.icon;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-[#DAB619] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {Icon && <Icon size={16} weight="duotone" />}
              {category}
            </button>
          );
        })}
      </div>

      {/* Hall of Fame Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => {
          const categoryConfig = categoryIcons[member.category];
          const CategoryIcon = categoryConfig?.icon || Trophy;

          return (
            <div
              key={member.id}
              className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              {/* Card Header with Gradient */}
              <div className="relative h-32 bg-gradient-to-br from-[#DAB619] to-[#8B7000]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoMnY0aC0yem0tNiA2di00aDJ2NGgtMnptMC02di00aDJ2NGgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
                
                {/* Induction Year Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium flex items-center gap-1">
                  <Crown size={12} weight="fill" />
                  Class of {member.inductionYear}
                </div>

                {/* Category Icon */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm"
                    style={{ color: categoryConfig?.color }}
                  >
                    <CategoryIcon size={14} weight="duotone" />
                    {member.category}
                  </span>
                </div>

                {/* Decorative */}
                <Trophy size={64} className="absolute -bottom-4 -right-4 text-white/10" weight="fill" />
              </div>

              {/* Avatar */}
              <div className="relative px-5 -mt-12">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white text-2xl font-bold shadow-xl border-4 border-white group-hover:scale-105 transition-transform">
                  {member.name.split(' ').slice(-2).map(n => n[0]).join('')}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 pt-3">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#DAB619] transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-[#DAB619] font-medium">{member.currentRole}</p>
                <p className="text-sm text-gray-500">{member.currentCompany}</p>

                <div className="flex flex-wrap gap-2 mt-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded-full">
                    <Briefcase size={12} />
                    {member.hsiRole} ({member.hsiTenure})
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {member.location}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-3 line-clamp-2">{member.achievement}</p>

                <button className="flex items-center gap-1 text-sm text-[#DAB619] font-medium mt-3 group-hover:gap-2 transition-all">
                  View Profile <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredMembers.length === 0 && (
        <div className="bg-white rounded-xl p-12 text-center">
          <Trophy size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No inductees found</h3>
          <p className="text-sm text-gray-500">Try adjusting your search or category filter</p>
        </div>
      )}

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="relative h-40 bg-gradient-to-br from-[#DAB619] to-[#8B7000]">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoMnY0aC0yem0tNiA2di00aDJ2NGgtMnptMC02di00aDJ2NGgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
              
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center gap-2">
                <Trophy size={16} weight="fill" />
                Hall of Fame {selectedMember.inductionYear}
              </div>

              <Sparkle size={48} className="absolute bottom-4 right-8 text-white/20" weight="fill" />
              <Star size={32} className="absolute top-12 right-24 text-white/20" weight="fill" />
            </div>

            {/* Avatar */}
            <div className="relative px-8 -mt-16">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white text-3xl font-bold shadow-xl border-4 border-white">
                {selectedMember.name.split(' ').slice(-2).map(n => n[0]).join('')}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 pt-4 overflow-y-auto max-h-[calc(90vh-16rem)]">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedMember.name}</h2>
                  <p className="text-lg text-[#DAB619] font-semibold">{selectedMember.currentRole}</p>
                  <p className="text-gray-600">{selectedMember.currentCompany}</p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    color: categoryIcons[selectedMember.category]?.color,
                    backgroundColor: `${categoryIcons[selectedMember.category]?.color}15`,
                  }}
                >
                  {(() => {
                    const Icon = categoryIcons[selectedMember.category]?.icon || Trophy;
                    return <Icon size={16} weight="duotone" />;
                  })()}
                  {selectedMember.category}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5 px-2 py-1 bg-[#DAB619]/10 rounded-full">
                  <Briefcase size={16} className="text-[#DAB619]" />
                  {selectedMember.hsiRole} ({selectedMember.hsiTenure})
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-gray-400" />
                  {selectedMember.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarBlank size={16} className="text-gray-400" />
                  Inducted {selectedMember.inductionYear}
                </span>
              </div>

              {/* Achievement */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Achievement</h4>
                <p className="text-gray-700 leading-relaxed">{selectedMember.achievement}</p>
              </div>

              {/* Quote */}
              <div className="mt-6 p-5 bg-gradient-to-r from-[#FFF8E1] to-[#FFFDE7] rounded-xl border-l-4 border-[#DAB619]">
                <Quotes size={24} className="text-[#DAB619] mb-2" weight="duotone" />
                <p className="text-gray-700 italic text-lg leading-relaxed">"{selectedMember.quote}"</p>
              </div>

              {/* Highlights */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Career Highlights</h4>
                <div className="space-y-2">
                  {selectedMember.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-[#DAB619]/10 flex items-center justify-center flex-shrink-0">
                        <Star size={14} className="text-[#DAB619]" weight="fill" />
                      </div>
                      <p className="text-sm text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-white bg-[#DAB619] hover:bg-[#c4a015] rounded-lg transition-colors">
                  <LinkedinLogo size={18} />
                  Connect on LinkedIn
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Globe size={18} />
                  Website
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HallOfFame;
