// src/pages/AchievementsAndRecognition.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Medal,
  Trophy,
  Star,
  Certificate,
  Crown,
  Sparkle,
  TrendUp,
  Users,
  CalendarCheck,
  Heart,
} from '@phosphor-icons/react';
import FeaturedAlumni from '../components/achievements_recognition/FeaturedAlumni';
import BadgeShowcase from '../components/achievements_recognition/BadgeShowcase';
import CompanyAppreciationPosts from '../components/achievements_recognition/CompanyAppreciationPosts';
import HallOfFame from '../components/achievements_recognition/HallOfFame';
import Leaderboard from '../components/achievements_recognition/Leaderboard';
import AchievementTimeline from '../components/achievements_recognition/AchievementTimeline';

const AchievementsAndRecognition = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Stats for overview
  const stats = [
    { label: 'Total Badges Awarded', value: '1,247', icon: Medal, color: '#DAB619', bgColor: '#FFF8E1' },
    { label: 'Featured Alumni', value: '48', icon: Crown, color: '#9333EA', bgColor: '#F3E8FF' },
    { label: 'Appreciation Posts', value: '156', icon: Heart, color: '#EC4899', bgColor: '#FCE7F3' },
    { label: 'Hall of Fame Members', value: '32', icon: Trophy, color: '#199A08', bgColor: '#E8F5E9' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Sparkle },
    { id: 'badges', label: 'Alumni Badges', icon: Medal },
    { id: 'featured', label: 'Featured Alumni', icon: Crown },
    { id: 'appreciation', label: 'Appreciation Posts', icon: Heart },
    { id: 'hall-of-fame', label: 'Hall of Fame', icon: Trophy },
    { id: 'leaderboard', label: 'Leaderboard', icon: TrendUp },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'badges':
        return <BadgeShowcase />;
      case 'featured':
        return <FeaturedAlumni />;
      case 'appreciation':
        return <CompanyAppreciationPosts />;
      case 'hall-of-fame':
        return <HallOfFame />;
      case 'leaderboard':
        return <Leaderboard />;
      default:
        return (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                        <p className="text-3xl font-bold mt-2" style={{ color: stat.color }}>
                          {stat.value}
                        </p>
                      </div>
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: stat.bgColor }}
                      >
                        <Icon size={28} style={{ color: stat.color }} weight="duotone" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <TrendUp size={14} className="text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+12%</span>
                      <span className="ml-1">from last month</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Featured Alumni Spotlight */}
            <FeaturedAlumni isCompact />

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Achievements Timeline */}
              <AchievementTimeline />

              {/* Leaderboard Preview */}
              <Leaderboard isCompact />
            </div>

            {/* Company Appreciation Posts */}
            <CompanyAppreciationPosts isCompact />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#EFEFEF] px-5 sm:px-8 lg:px-12 py-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Breadcrumb Header */}
        <div className="mb-8 flex justify-center">
          <div className="w-full bg-white rounded-xl py-6 px-8 shadow-md">
            <h1 className="text-left text-xl md:text-2xl text-[#696969] tracking-tight">
              <Link to="/alumni-management" className="hover:text-[#DAB619] transition-colors">
                Dashboard
              </Link>{' '}
              / <span className="text-[#C3A41E] font-semibold">Achievements & Recognition</span>
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Celebrate and recognize outstanding employee and intern alumni achievements, milestones, and contributions
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                    activeTab === tab.id
                      ? 'text-[#DAB619] border-[#DAB619] bg-[#DAB619]/5'
                      : 'text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} weight={activeTab === tab.id ? 'duotone' : 'regular'} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AchievementsAndRecognition;
