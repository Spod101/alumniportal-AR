// src/components/achievements_recognition/Leaderboard.jsx
import React, { useState } from 'react';
import {
  TrendUp,
  Trophy,
  Medal,
  Crown,
  Star,
  Fire,
  Lightning,
  Target,
  ChartLineUp,
  CaretUp,
  CaretDown,
  Minus,
  UserCircle,
  Funnel,
  CalendarBlank,
} from '@phosphor-icons/react';

// Mock data for leaderboard
const leaderboardData = [
  {
    id: 1,
    name: 'Maria Elena Santos',
    hsiRole: 'Web Developer',
    hsiTenure: '2018-2022',
    currentCompany: 'Google Philippines',
    alumniType: 'Former Employee',
    points: 2850,
    badges: 8,
    mentees: 50,
    rank: 1,
    previousRank: 2,
    streak: 12,
    avatar: null,
    achievements: ['Top Performer', 'Mentor', 'Industry Leader'],
  },
  {
    id: 2,
    name: 'John Patrick Dela Cruz',
    hsiRole: 'Project Manager',
    hsiTenure: '2015-2019',
    currentCompany: 'TechStartup PH',
    alumniType: 'Former Employee',
    points: 2720,
    badges: 7,
    mentees: 30,
    rank: 2,
    previousRank: 1,
    streak: 8,
    avatar: null,
    achievements: ['Innovator', 'Community Champion', 'Certified'],
  },
  {
    id: 3,
    name: 'Ana Marie Reyes',
    hsiRole: 'QA / Web Dev',
    hsiTenure: '2019-2021',
    currentCompany: 'Ubisoft Philippines',
    alumniType: 'Former Intern',
    points: 2580,
    badges: 6,
    mentees: 45,
    rank: 3,
    previousRank: 3,
    streak: 15,
    avatar: null,
    achievements: ['Industry Leader', 'Mentor', 'Top Performer'],
  },
  {
    id: 4,
    name: 'Carlos Garcia',
    hsiRole: 'Game Developer',
    hsiTenure: '2019-2023',
    currentCompany: 'Gameloft Manila',
    alumniType: 'Former Employee',
    points: 2340,
    badges: 5,
    mentees: 25,
    rank: 4,
    previousRank: 6,
    streak: 6,
    avatar: null,
    achievements: ['Rising Star', 'Certified'],
  },
  {
    id: 5,
    name: 'Patricia Lim',
    hsiRole: 'HR',
    hsiTenure: '2016-2021',
    currentCompany: 'Accenture Philippines',
    alumniType: 'Former Employee',
    points: 2180,
    badges: 5,
    mentees: 20,
    rank: 5,
    previousRank: 4,
    streak: 4,
    avatar: null,
    achievements: ['Community Champion', 'Mentor'],
  },
  {
    id: 6,
    name: 'Miguel Torres',
    hsiRole: 'GFX / Game Dev',
    hsiTenure: '2020-2021',
    currentCompany: 'Riot Games',
    alumniType: 'Former Intern',
    points: 2050,
    badges: 4,
    mentees: 18,
    rank: 6,
    previousRank: 7,
    streak: 7,
    avatar: null,
    achievements: ['Certified', 'Top Performer'],
  },
  {
    id: 7,
    name: 'Sofia Chen',
    hsiRole: 'Unleash Web Dev',
    hsiTenure: '2017-2022',
    currentCompany: 'Canva',
    alumniType: 'Former Employee',
    points: 1920,
    badges: 4,
    mentees: 15,
    rank: 7,
    previousRank: 5,
    streak: 3,
    avatar: null,
    achievements: ['Rising Star', 'Innovator'],
  },
  {
    id: 8,
    name: 'David Kim',
    hsiRole: 'Sys Admin / QA',
    hsiTenure: '2021-2022',
    currentCompany: 'Globe Telecom',
    alumniType: 'Former Intern',
    points: 1780,
    badges: 3,
    mentees: 12,
    rank: 8,
    previousRank: 9,
    streak: 5,
    avatar: null,
    achievements: ['Certified', 'Community Champion'],
  },
  {
    id: 9,
    name: 'Isabella Cruz',
    hsiRole: 'Web Developer',
    hsiTenure: '2019-2023',
    currentCompany: 'Netflix',
    alumniType: 'Former Employee',
    points: 1650,
    badges: 3,
    mentees: 10,
    rank: 9,
    previousRank: 8,
    streak: 2,
    avatar: null,
    achievements: ['Rising Star'],
  },
  {
    id: 10,
    name: 'James Reyes',
    hsiRole: 'QA / Web Dev',
    hsiTenure: '2022-2023',
    currentCompany: 'Spotify',
    alumniType: 'Former Intern',
    points: 1520,
    badges: 2,
    mentees: 8,
    rank: 10,
    previousRank: 12,
    streak: 4,
    avatar: null,
    achievements: ['Rising Star', 'Certified'],
  },
];

const timeFilters = ['All Time', 'This Year', 'This Month', 'This Week'];
const categoryFilters = ['Overall', 'Points', 'Badges', 'Mentees'];

function Leaderboard({ isCompact = false }) {
  const [selectedTime, setSelectedTime] = useState('All Time');
  const [selectedCategory, setSelectedCategory] = useState('Overall');

  const getRankChange = (current, previous) => {
    const change = previous - current;
    if (change > 0) return { icon: CaretUp, color: '#199A08', text: `+${change}` };
    if (change < 0) return { icon: CaretDown, color: '#DC2626', text: `${change}` };
    return { icon: Minus, color: '#6B7280', text: '-' };
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return { icon: Crown, color: '#DAB619', bgColor: '#FFF8E1' };
      case 2:
        return { icon: Medal, color: '#9CA3AF', bgColor: '#F3F4F6' };
      case 3:
        return { icon: Medal, color: '#CD7F32', bgColor: '#FEF3C7' };
      default:
        return null;
    }
  };

  if (isCompact) {
    const topFive = leaderboardData.slice(0, 5);

    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendUp size={20} className="text-[#DAB619]" weight="duotone" />
            <h3 className="font-semibold text-gray-900">Top Alumni</h3>
          </div>
          <span className="text-sm text-[#DAB619] font-medium cursor-pointer hover:underline">
            View All
          </span>
        </div>

        {/* Top 3 Podium */}
        <div className="px-6 py-4 bg-gradient-to-b from-[#DAB619]/5 to-transparent">
          <div className="flex items-end justify-center gap-4">
            {/* 2nd Place */}
            <div className="text-center">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold mx-auto shadow-md">
                  {topFive[1].name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs font-bold shadow">
                  2
                </div>
              </div>
              <p className="text-xs font-medium text-gray-900 mt-2 truncate max-w-[80px]">{topFive[1].name.split(' ')[0]}</p>
              <p className="text-xs text-gray-500">{topFive[1].points.toLocaleString()} pts</p>
              <p className="text-[10px] text-gray-400">{topFive[1].hsiRole}</p>
            </div>

            {/* 1st Place */}
            <div className="text-center -mt-4">
              <div className="relative">
                <div className="w-18 h-18 rounded-full bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white text-lg font-bold mx-auto shadow-lg" style={{ width: '4.5rem', height: '4.5rem' }}>
                  {topFive[0].name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <Crown size={24} className="text-[#DAB619]" weight="fill" />
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-900 mt-2 truncate max-w-[100px]">{topFive[0].name.split(' ')[0]}</p>
              <p className="text-xs text-[#DAB619] font-medium">{topFive[0].points.toLocaleString()} pts</p>
              <p className="text-[10px] text-gray-400">{topFive[0].hsiRole}</p>
            </div>

            {/* 3rd Place */}
            <div className="text-center">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#CD7F32] to-[#A0522D] flex items-center justify-center text-white font-bold mx-auto shadow-md">
                  {topFive[2].name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#CD7F32] rounded-full flex items-center justify-center text-white text-xs font-bold shadow">
                  3
                </div>
              </div>
              <p className="text-xs font-medium text-gray-900 mt-2 truncate max-w-[80px]">{topFive[2].name.split(' ')[0]}</p>
              <p className="text-xs text-gray-500">{topFive[2].points.toLocaleString()} pts</p>
              <p className="text-[10px] text-gray-400">{topFive[2].hsiRole}</p>
            </div>
          </div>
        </div>

        {/* Remaining Ranks */}
        <div className="px-4 pb-4">
          {topFive.slice(3).map((person) => {
            const rankChange = getRankChange(person.rank, person.previousRank);
            const ChangeIcon = rankChange.icon;

            return (
              <div
                key={person.id}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span className="w-6 text-sm font-semibold text-gray-500 text-center">{person.rank}</span>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white text-sm font-bold">
                  {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm truncate">{person.name}</p>
                  <p className="text-xs text-gray-500">{person.hsiRole}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#DAB619] text-sm">{person.points.toLocaleString()}</p>
                  <div className="flex items-center justify-end gap-0.5 text-xs" style={{ color: rankChange.color }}>
                    <ChangeIcon size={12} weight="bold" />
                    <span>{rankChange.text}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Full Leaderboard View
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg py-5 px-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#000000] flex items-center gap-2">
              <TrendUp size={24} className="text-[#DAB619]" weight="duotone" />
              Alumni Leaderboard
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Rankings of former employees and interns based on achievements, contributions, and engagement
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Time Filter */}
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="px-4 py-2.5 text-sm border border-[#AAA9A9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 bg-white"
            >
              {timeFilters.map((filter) => (
                <option key={filter} value={filter}>{filter}</option>
              ))}
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 text-sm border border-[#AAA9A9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 bg-white"
            >
              {categoryFilters.map((filter) => (
                <option key={filter} value={filter}>{filter}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Top 3 Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leaderboardData.slice(0, 3).map((person, idx) => {
          const rankConfig = getRankIcon(person.rank);
          const RankIcon = rankConfig?.icon;
          const rankChange = getRankChange(person.rank, person.previousRank);
          const ChangeIcon = rankChange.icon;

          return (
            <div
              key={person.id}
              className={`relative bg-white rounded-xl shadow-sm overflow-hidden ${
                idx === 0 ? 'md:-mt-4 md:mb-4 ring-2 ring-[#DAB619]/30' : ''
              }`}
            >
              {/* Banner */}
              <div
                className="h-24"
                style={{
                  background: idx === 0
                    ? 'linear-gradient(135deg, #DAB619 0%, #c4a015 50%, #8B7000 100%)'
                    : idx === 1
                    ? 'linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%)'
                    : 'linear-gradient(135deg, #CD7F32 0%, #A0522D 100%)',
                }}
              >
                {/* Rank Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">#{person.rank}</span>
                </div>

                {/* Streak Badge */}
                {person.streak > 5 && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full flex items-center gap-1 text-white text-xs font-medium">
                    <Fire size={12} weight="fill" />
                    {person.streak} week streak
                  </div>
                )}
              </div>

              {/* Avatar */}
              <div className="relative px-5 -mt-10">
                <div className="relative">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-xl border-4 border-white"
                    style={{
                      background: idx === 0
                        ? 'linear-gradient(135deg, #DAB619 0%, #c4a015 100%)'
                        : idx === 1
                        ? 'linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%)'
                        : 'linear-gradient(135deg, #CD7F32 0%, #A0522D 100%)',
                    }}
                  >
                    {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  {idx === 0 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Crown size={28} className="text-[#DAB619]" weight="fill" />
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 pt-3">
                <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
                <p className="text-sm text-gray-500">{person.currentCompany}</p>
                <p className="text-xs text-gray-400 mt-0.5">{person.hsiRole} ({person.hsiTenure})</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-lg font-bold text-[#DAB619]">{person.points.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">Points</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-lg font-bold text-[#DAB619]">{person.badges}</p>
                    <p className="text-xs text-gray-500">Badges</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-lg font-bold text-[#DAB619]">{person.mentees}</p>
                    <p className="text-xs text-gray-500">Mentees</p>
                  </div>
                </div>

                {/* Rank Change */}
                <div className="flex items-center justify-center gap-1 mt-4 text-sm" style={{ color: rankChange.color }}>
                  <ChangeIcon size={16} weight="bold" />
                  <span className="font-medium">
                    {person.previousRank === person.rank
                      ? 'No change'
                      : person.previousRank > person.rank
                      ? `Up ${person.previousRank - person.rank} from last week`
                      : `Down ${person.rank - person.previousRank} from last week`}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Rankings Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Full Rankings</h3>
        </div>

        {/* Table Header */}
        <div className="px-6 py-3 grid grid-cols-12 gap-4 text-sm font-semibold text-gray-500 bg-gray-50 border-b border-gray-100">
          <div className="col-span-1">Rank</div>
          <div className="col-span-4">Alumni</div>
          <div className="col-span-2 text-center">Points</div>
          <div className="col-span-1 text-center">Badges</div>
          <div className="col-span-1 text-center">Mentees</div>
          <div className="col-span-2 text-center">Change</div>
          <div className="col-span-1 text-center">Streak</div>
        </div>

        {/* Table Body */}
        {leaderboardData.map((person) => {
          const rankConfig = getRankIcon(person.rank);
          const RankIcon = rankConfig?.icon;
          const rankChange = getRankChange(person.rank, person.previousRank);
          const ChangeIcon = rankChange.icon;

          return (
            <div
              key={person.id}
              className="px-6 py-4 grid grid-cols-12 gap-4 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              {/* Rank */}
              <div className="col-span-1">
                {rankConfig ? (
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: rankConfig.bgColor }}
                  >
                    <RankIcon size={18} style={{ color: rankConfig.color }} weight="fill" />
                  </div>
                ) : (
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
                    {person.rank}
                  </span>
                )}
              </div>

              {/* Alumni Info */}
              <div className="col-span-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 truncate">{person.name}</p>
                  <p className="text-xs text-gray-500 truncate">{person.hsiRole} ({person.hsiTenure})</p>
                </div>
              </div>

              {/* Points */}
              <div className="col-span-2 text-center">
                <span className="font-bold text-[#DAB619]">{person.points.toLocaleString()}</span>
              </div>

              {/* Badges */}
              <div className="col-span-1 text-center">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">
                  <Medal size={14} weight="duotone" />
                  {person.badges}
                </span>
              </div>

              {/* Mentees */}
              <div className="col-span-1 text-center">
                <span className="text-sm text-gray-600">{person.mentees}</span>
              </div>

              {/* Change */}
              <div className="col-span-2 flex items-center justify-center gap-1" style={{ color: rankChange.color }}>
                <ChangeIcon size={16} weight="bold" />
                <span className="text-sm font-medium">{rankChange.text}</span>
              </div>

              {/* Streak */}
              <div className="col-span-1 text-center">
                {person.streak > 0 && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">
                    <Fire size={12} weight="fill" />
                    {person.streak}w
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Leaderboard;
