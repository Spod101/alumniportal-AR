// src/components/achievements_recognition/FeaturedAlumni.jsx
import React, { useState } from 'react';
import {
  Crown,
  Star,
  Quotes,
  LinkedinLogo,
  EnvelopeSimple,
  CalendarBlank,
  Briefcase,
  GraduationCap,
  Trophy,
  MapPin,
  CaretLeft,
  CaretRight,
  Sparkle,
  Heart,
  ShareNetwork,
  Medal,
} from '@phosphor-icons/react';

// Mock data for featured alumni
const featuredAlumniData = [
  {
    id: 1,
    name: 'Maria Elena Santos',
    currentRole: 'Senior Software Engineer',
    currentCompany: 'Google Philippines',
    hsiTenure: '2018-2022',
    hsiRole: 'Web Developer',
    location: 'Makati City, Philippines',
    image: null,
    month: 'January 2026',
    quote: 'HSI gave me the foundation to dream big and the skills to make those dreams a reality. The mentorship and community here are unparalleled.',
    achievements: [
      'Led development of AI-powered healthcare solutions at Google',
      'Speaker at Google I/O Extended Manila 2025',
      'Mentored 50+ junior developers',
    ],
    badges: ['Top Performer', 'Mentor', 'Industry Leader'],
    stats: { connections: 1234, endorsements: 89, mentees: 50 },
    socialLinks: { linkedin: '#', email: 'maria.santos@email.com' },
    alumniType: 'Former Employee',
  },
  {
    id: 2,
    name: 'John Patrick Dela Cruz',
    currentRole: 'Founder & CEO',
    currentCompany: 'TechStartup PH',
    hsiTenure: '2015-2019',
    hsiRole: 'Project Manager',
    location: 'Quezon City, Philippines',
    image: null,
    month: 'December 2025',
    quote: 'The project management skills and team collaboration I learned at HSI helped me build a company that now employs over 200 people.',
    achievements: [
      'Forbes 30 Under 30 Asia 2024',
      'Raised $5M Series A funding',
      'Created 200+ tech jobs in the Philippines',
    ],
    badges: ['Innovator', 'Community Champion', 'Certified'],
    stats: { connections: 2456, endorsements: 156, mentees: 30 },
    socialLinks: { linkedin: '#', email: 'john.delacruz@email.com' },
    alumniType: 'Former Employee',
  },
  {
    id: 3,
    name: 'Ana Marie Reyes',
    currentRole: 'QA Lead',
    currentCompany: 'Ubisoft Philippines',
    hsiTenure: '2019-2021',
    hsiRole: 'QA / Web Dev',
    location: 'Singapore',
    image: null,
    month: 'November 2025',
    quote: 'Starting as an intern at HSI taught me attention to detail and quality standards that I carry with me to this day.',
    achievements: [
      'Led QA for 3 AAA game titles',
      'Implemented automated testing framework saving 40% QA time',
      'Promoted to lead within 2 years',
    ],
    badges: ['Industry Leader', 'Top Performer', 'Mentor'],
    stats: { connections: 1890, endorsements: 123, mentees: 45 },
    socialLinks: { linkedin: '#', email: 'ana.reyes@email.com' },
    alumniType: 'Former Intern',
  },
];

const badgeColors = {
  'Top Performer': { color: '#DAB619', bgColor: '#FFF8E1' },
  'Mentor': { color: '#3B82F6', bgColor: '#E3F2FD' },
  'Certified': { color: '#199A08', bgColor: '#E8F5E9' },
  'Industry Leader': { color: '#9333EA', bgColor: '#F3E8FF' },
  'Community Champion': { color: '#EC4899', bgColor: '#FCE7F3' },
  'Innovator': { color: '#F97316', bgColor: '#FFF7ED' },
};

function FeaturedAlumni({ isCompact = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState({});

  const currentAlumni = featuredAlumniData[currentIndex];

  const nextAlumni = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredAlumniData.length);
  };

  const prevAlumni = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredAlumniData.length) % featuredAlumniData.length);
  };

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (isCompact) {
    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Compact Header */}
        <div className="bg-gradient-to-r from-[#DAB619] to-[#c4a015] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown size={24} className="text-white" weight="duotone" />
              <div>
                <h3 className="text-lg font-semibold text-white">Alumni of the Month</h3>
                <p className="text-white/80 text-sm">{currentAlumni.month}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevAlumni}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              >
                <CaretLeft size={16} />
              </button>
              <button
                onClick={nextAlumni}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              >
                <CaretRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Compact Content */}
        <div className="p-6">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {currentAlumni.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#DAB619] rounded-full flex items-center justify-center shadow-md">
                <Crown size={16} className="text-white" weight="fill" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-semibold text-gray-900 truncate">{currentAlumni.name}</h4>
              <p className="text-sm text-[#DAB619] font-medium">{currentAlumni.currentRole}</p>
              <p className="text-sm text-gray-500">{currentAlumni.currentCompany}</p>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {currentAlumni.badges.slice(0, 3).map((badge, idx) => {
                  const colors = badgeColors[badge] || { color: '#6B7280', bgColor: '#F3F4F6' };
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{ color: colors.color, backgroundColor: colors.bgColor }}
                    >
                      <Medal size={10} weight="duotone" />
                      {badge}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-[#DAB619]">
            <Quotes size={20} className="text-[#DAB619] mb-2" weight="duotone" />
            <p className="text-sm text-gray-600 italic line-clamp-2">"{currentAlumni.quote}"</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <p className="text-xl font-bold text-[#DAB619]">{currentAlumni.stats.connections.toLocaleString()}</p>
              <p className="text-xs text-gray-500">Connections</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-[#DAB619]">{currentAlumni.stats.endorsements}</p>
              <p className="text-xs text-gray-500">Endorsements</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-[#DAB619]">{currentAlumni.stats.mentees}</p>
              <p className="text-xs text-gray-500">Mentees</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full View
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg py-5 px-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#000000] flex items-center gap-2">
              <Crown size={24} className="text-[#DAB619]" weight="duotone" />
              Featured Alumni of the Month
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Celebrating outstanding alumni who inspire our community
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} of {featuredAlumniData.length}
            </span>
            <button
              onClick={prevAlumni}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <CaretLeft size={20} />
            </button>
            <button
              onClick={nextAlumni}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <CaretRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Banner */}
        <div className="relative h-48 bg-gradient-to-r from-[#DAB619] via-[#c4a015] to-[#b89c14]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoMnY0aC0yem0tNiA2di00aDJ2NGgtMnptMC02di00aDJ2NGgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          
          {/* Month Badge */}
          <div className="absolute top-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm flex items-center gap-2">
            <CalendarBlank size={16} />
            {currentAlumni.month}
          </div>

          {/* Decorative Elements */}
          <Sparkle size={40} className="absolute top-8 left-8 text-white/30" weight="duotone" />
          <Star size={32} className="absolute bottom-8 right-32 text-white/20" weight="fill" />
          <Trophy size={48} className="absolute bottom-4 left-1/4 text-white/20" weight="duotone" />
        </div>

        {/* Profile Section */}
        <div className="relative px-8 pb-8">
          {/* Avatar */}
          <div className="absolute -top-16 left-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#DAB619] to-[#8B7000] flex items-center justify-center text-white text-4xl font-bold shadow-xl border-4 border-white">
                {currentAlumni.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#DAB619] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <Crown size={24} className="text-white" weight="fill" />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <button
              onClick={() => toggleLike(currentAlumni.id)}
              className={`p-2.5 rounded-lg transition-all ${
                liked[currentAlumni.id]
                  ? 'bg-red-50 text-red-500'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              <Heart size={20} weight={liked[currentAlumni.id] ? 'fill' : 'regular'} />
            </button>
            <button className="p-2.5 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
              <ShareNetwork size={20} />
            </button>
            <a
              href={currentAlumni.socialLinks.linkedin}
              className="p-2.5 rounded-lg bg-[#0077B5] text-white hover:bg-[#006097] transition-colors"
            >
              <LinkedinLogo size={20} />
            </a>
            <a
              href={`mailto:${currentAlumni.socialLinks.email}`}
              className="p-2.5 rounded-lg bg-[#DAB619] text-white hover:bg-[#c4a015] transition-colors"
            >
              <EnvelopeSimple size={20} />
            </a>
          </div>

          {/* Info */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900">{currentAlumni.name}</h3>
            <p className="text-lg text-[#DAB619] font-semibold mt-1">{currentAlumni.currentRole}</p>
            <p className="text-gray-600">{currentAlumni.currentCompany}</p>
            
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-600">
              <span className="flex items-center gap-1.5 px-2 py-1 bg-gray-100 rounded-full">
                <Briefcase size={16} className="text-[#DAB619]" />
                {currentAlumni.hsiRole} ({currentAlumni.hsiTenure})
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-gray-400" />
                {currentAlumni.location}
              </span>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {currentAlumni.badges.map((badge, idx) => {
                const colors = badgeColors[badge] || { color: '#6B7280', bgColor: '#F3F4F6' };
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all hover:shadow-sm"
                    style={{ 
                      color: colors.color, 
                      backgroundColor: colors.bgColor,
                      borderColor: colors.color 
                    }}
                  >
                    <Medal size={14} weight="duotone" />
                    {badge}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Quote */}
          <div className="mt-6 p-6 bg-gradient-to-r from-[#FFF8E1] to-[#FFFDE7] rounded-xl border-l-4 border-[#DAB619]">
            <Quotes size={32} className="text-[#DAB619] mb-3" weight="duotone" />
            <p className="text-gray-700 text-lg italic leading-relaxed">"{currentAlumni.quote}"</p>
          </div>

          {/* Achievements */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Trophy size={20} className="text-[#DAB619]" weight="duotone" />
              Key Achievements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentAlumni.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#DAB619]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#DAB619]/20 transition-colors">
                      <Star size={16} className="text-[#DAB619]" weight="fill" />
                    </div>
                    <p className="text-sm text-gray-700">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-3xl font-bold text-[#DAB619]">{currentAlumni.stats.connections.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-1">Network Connections</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-3xl font-bold text-[#DAB619]">{currentAlumni.stats.endorsements}</p>
              <p className="text-sm text-gray-500 mt-1">Skill Endorsements</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-3xl font-bold text-[#DAB619]">{currentAlumni.stats.mentees}</p>
              <p className="text-sm text-gray-500 mt-1">Mentees Guided</p>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Featured Alumni */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Previous Featured Alumni</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredAlumniData.map((alumni, idx) => (
            <button
              key={alumni.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                idx === currentIndex
                  ? 'border-[#DAB619] bg-[#DAB619]/5'
                  : 'border-gray-100 hover:border-[#DAB619]/30 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white font-bold">
                  {alumni.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 truncate">{alumni.name}</p>
                  <p className="text-xs text-gray-500">{alumni.month}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedAlumni;
