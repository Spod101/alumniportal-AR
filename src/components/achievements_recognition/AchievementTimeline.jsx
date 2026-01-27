// src/components/achievements_recognition/AchievementTimeline.jsx
import React, { useState } from 'react';
import {
  Clock,
  Medal,
  Trophy,
  Crown,
  Star,
  Certificate,
  HandHeart,
  Rocket,
  Lightning,
  Heart,
  CalendarBlank,
  ArrowRight,
  Confetti,
  Sparkle,
} from '@phosphor-icons/react';

// Mock data for recent achievements
const recentAchievements = [
  {
    id: 1,
    type: 'badge_earned',
    user: 'Maria Santos',
    hsiRole: 'Web Developer',
    alumniType: 'Former Employee',
    badge: 'Industry Leader',
    badgeIcon: Crown,
    badgeColor: '#9333EA',
    badgeBgColor: '#F3E8FF',
    timestamp: '2026-01-27T10:30:00',
    description: 'Recognized for exceptional leadership at Google Philippines',
  },
  {
    id: 2,
    type: 'featured',
    user: 'John Dela Cruz',
    hsiRole: 'Project Manager',
    alumniType: 'Former Employee',
    timestamp: '2026-01-26T14:00:00',
    description: 'Selected as Featured Alumni of the Month for January 2026',
  },
  {
    id: 3,
    type: 'badge_earned',
    user: 'Ana Reyes',
    hsiRole: 'QA / Web Dev',
    alumniType: 'Former Intern',
    badge: 'Top Performer',
    badgeIcon: Trophy,
    badgeColor: '#DAB619',
    badgeBgColor: '#FFF8E1',
    timestamp: '2026-01-25T09:15:00',
    description: 'Promoted to QA Lead at Ubisoft Philippines',
  },
  {
    id: 4,
    type: 'hall_of_fame',
    user: 'Angela Reyes',
    hsiRole: 'QA',
    alumniType: 'Former Employee',
    timestamp: '2026-01-24T16:00:00',
    description: 'Inducted into Hall of Fame as QA Director at Blizzard',
  },
  {
    id: 5,
    type: 'appreciation',
    user: 'Carlos Garcia',
    hsiRole: 'Game Developer',
    alumniType: 'Former Employee',
    company: 'Gameloft',
    timestamp: '2026-01-23T11:45:00',
    description: 'Received Best Game Developer Award from Gameloft Manila',
  },
  {
    id: 6,
    type: 'badge_earned',
    user: 'Patricia Lim',
    hsiRole: 'HR',
    alumniType: 'Former Employee',
    badge: 'Mentor',
    badgeIcon: HandHeart,
    badgeColor: '#3B82F6',
    badgeBgColor: '#E3F2FD',
    timestamp: '2026-01-22T13:30:00',
    description: 'Completed 50 mentoring sessions with current HSI employees',
  },
  {
    id: 7,
    type: 'milestone',
    user: 'Miguel Torres',
    hsiRole: 'GFX / Game Dev',
    alumniType: 'Former Intern',
    milestone: '1000 Points',
    timestamp: '2026-01-21T10:00:00',
    description: 'Reached 1000 achievement points milestone',
  },
  {
    id: 8,
    type: 'badge_earned',
    user: 'Sofia Chen',
    hsiRole: 'Unleash Web Dev',
    alumniType: 'Former Employee',
    badge: 'Innovator',
    badgeIcon: Rocket,
    badgeColor: '#F97316',
    badgeBgColor: '#FFF7ED',
    timestamp: '2026-01-20T15:20:00',
    description: 'Now CTO at Canva, leading technical architecture',
  },
];

const achievementTypes = {
  badge_earned: {
    icon: Medal,
    color: '#DAB619',
    bgColor: '#FFF8E1',
    label: 'Badge Earned',
  },
  featured: {
    icon: Crown,
    color: '#9333EA',
    bgColor: '#F3E8FF',
    label: 'Featured',
  },
  hall_of_fame: {
    icon: Trophy,
    color: '#199A08',
    bgColor: '#E8F5E9',
    label: 'Hall of Fame',
  },
  appreciation: {
    icon: Heart,
    color: '#EC4899',
    bgColor: '#FCE7F3',
    label: 'Appreciation',
  },
  milestone: {
    icon: Star,
    color: '#3B82F6',
    bgColor: '#E3F2FD',
    label: 'Milestone',
  },
};

function AchievementTimeline() {
  const [filter, setFilter] = useState('all');

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp);
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const filteredAchievements = filter === 'all' 
    ? recentAchievements 
    : recentAchievements.filter(a => a.type === filter);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-[#DAB619]" weight="duotone" />
            <h3 className="font-semibold text-gray-900">Recent Achievements</h3>
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 bg-white"
          >
            <option value="all">All Types</option>
            <option value="badge_earned">Badges</option>
            <option value="featured">Featured</option>
            <option value="hall_of_fame">Hall of Fame</option>
            <option value="appreciation">Appreciation</option>
            <option value="milestone">Milestones</option>
          </select>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100"></div>

          {/* Timeline Items */}
          <div className="space-y-4">
            {filteredAchievements.map((achievement, idx) => {
              const typeConfig = achievementTypes[achievement.type];
              const TypeIcon = typeConfig?.icon || Medal;

              return (
                <div key={achievement.id} className="relative flex gap-4 group">
                  {/* Timeline Dot */}
                  <div
                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border-2 border-white group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: typeConfig?.bgColor }}
                  >
                    {achievement.type === 'badge_earned' && achievement.badgeIcon ? (
                      <achievement.badgeIcon
                        size={18}
                        style={{ color: achievement.badgeColor }}
                        weight="duotone"
                      />
                    ) : (
                      <TypeIcon
                        size={18}
                        style={{ color: typeConfig?.color }}
                        weight="duotone"
                      />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-4">
                    <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group-hover:shadow-sm">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-medium text-gray-900 text-sm">
                              {achievement.user}
                            </span>
                            <span
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                              style={{
                                color: typeConfig?.color,
                                backgroundColor: typeConfig?.bgColor,
                              }}
                            >
                              {typeConfig?.label}
                            </span>
                          </div>
                          
                          {/* Achievement specific content */}
                          {achievement.type === 'badge_earned' && (
                            <div className="flex items-center gap-1.5 mt-1">
                              <span className="text-xs text-gray-500">Earned:</span>
                              <span
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border"
                                style={{
                                  color: achievement.badgeColor,
                                  backgroundColor: achievement.badgeBgColor,
                                  borderColor: achievement.badgeColor,
                                }}
                              >
                                <achievement.badgeIcon size={10} weight="duotone" />
                                {achievement.badge}
                              </span>
                            </div>
                          )}

                          {achievement.type === 'appreciation' && (
                            <p className="text-xs text-gray-500 mt-1">
                              From: <span className="font-medium">{achievement.company}</span>
                            </p>
                          )}

                          {achievement.type === 'milestone' && (
                            <div className="flex items-center gap-1 mt-1">
                              <Confetti size={14} className="text-[#DAB619]" weight="duotone" />
                              <span className="text-xs font-medium text-[#DAB619]">
                                {achievement.milestone}
                              </span>
                            </div>
                          )}
                        </div>

                        <span className="text-xs text-gray-400 whitespace-nowrap">
                          {formatTimeAgo(achievement.timestamp)}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 border-t border-gray-100 bg-gray-50">
        <button className="w-full flex items-center justify-center gap-1 text-sm text-[#DAB619] font-medium hover:underline">
          View All Achievements
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

export default AchievementTimeline;
