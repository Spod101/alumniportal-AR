// src/components/achievements_recognition/CompanyAppreciationPosts.jsx
import React, { useState } from 'react';
import {
  Heart,
  HandsClapping,
  ChatCircle,
  ShareNetwork,
  Buildings,
  CalendarBlank,
  DotsThree,
  Plus,
  MagnifyingGlass,
  Funnel,
  Star,
  Trophy,
  Medal,
  Sparkle,
  Eye,
  PencilSimple,
  Trash,
  BookmarkSimple,
} from '@phosphor-icons/react';

// Mock data for appreciation posts
const mockPosts = [
  {
    id: 1,
    company: 'Google Philippines',
    companyLogo: null,
    title: 'Outstanding Contribution to AI Development',
    honoree: 'Maria Elena Santos',
    hsiRole: 'Web Developer',
    hsiTenure: '2018-2022',
    currentRole: 'Senior Software Engineer',
    alumniType: 'Former Employee',
    content: 'We are proud to recognize Maria Elena Santos for her exceptional work in developing AI-powered accessibility features that have helped millions of users worldwide. Her innovative approach and dedication to inclusive technology exemplify the values we cherish at Google.',
    category: 'Innovation',
    postedDate: '2026-01-20',
    reactions: { hearts: 234, claps: 156, stars: 89 },
    comments: 45,
    shares: 23,
    featured: true,
  },
  {
    id: 2,
    company: 'Ubisoft Philippines',
    companyLogo: null,
    title: 'QA Team Lead of the Year 2025',
    honoree: 'Ana Marie Reyes',
    hsiRole: 'QA / Web Dev',
    hsiTenure: '2019-2021',
    currentRole: 'QA Lead',
    alumniType: 'Former Intern',
    content: 'Ana has been instrumental in scaling our QA processes and leading a team of 30 testers. Her attention to detail and quality standards learned at HSI have been invaluable to our game development pipeline.',
    category: 'Leadership',
    postedDate: '2026-01-15',
    reactions: { hearts: 189, claps: 201, stars: 67 },
    comments: 38,
    shares: 19,
    featured: true,
  },
  {
    id: 3,
    company: 'Gameloft Manila',
    companyLogo: null,
    title: 'Best Game Developer Award',
    honoree: 'Carlos Garcia',
    hsiRole: 'Game Developer',
    hsiTenure: '2019-2023',
    currentRole: 'Senior Game Developer',
    alumniType: 'Former Employee',
    content: 'Carlos designed and implemented core gameplay mechanics for our top-grossing mobile game. His game development skills honed at HSI continue to set new standards for excellence in our studio.',
    category: 'Technical Excellence',
    postedDate: '2026-01-10',
    reactions: { hearts: 145, claps: 178, stars: 56 },
    comments: 29,
    shares: 15,
    featured: false,
  },
  {
    id: 4,
    company: 'Accenture Philippines',
    companyLogo: null,
    title: 'Community Impact Recognition',
    honoree: 'Patricia Lim',
    hsiRole: 'HR',
    hsiTenure: '2016-2021',
    currentRole: 'HR Business Partner',
    alumniType: 'Former Employee',
    content: 'Patricia\'s initiative to mentor underrepresented groups in tech has positively impacted over 500 aspiring professionals. Her dedication to diversity and inclusion makes her a true ambassador of our values.',
    category: 'Community Impact',
    postedDate: '2026-01-05',
    reactions: { hearts: 312, claps: 245, stars: 123 },
    comments: 67,
    shares: 45,
    featured: true,
  },
  {
    id: 5,
    company: 'Globe Telecom',
    companyLogo: null,
    title: 'System Administrator Excellence Award Q4 2025',
    honoree: 'David Kim',
    hsiRole: 'Sys Admin / QA',
    hsiTenure: '2021-2022',
    currentRole: 'IT Infrastructure Specialist',
    alumniType: 'Former Intern',
    content: 'David\'s exceptional server management and network optimization skills led to 99.99% uptime for our critical systems. His technical foundation from HSI has been outstanding.',
    category: 'Project Excellence',
    postedDate: '2025-12-28',
    reactions: { hearts: 98, claps: 134, stars: 45 },
    comments: 22,
    shares: 11,
    featured: false,
  },
];

const categories = [
  'All',
  'Innovation',
  'Leadership',
  'Technical Excellence',
  'Community Impact',
  'Project Excellence',
];

const categoryColors = {
  Innovation: { color: '#F97316', bgColor: '#FFF7ED' },
  Leadership: { color: '#9333EA', bgColor: '#F3E8FF' },
  'Technical Excellence': { color: '#3B82F6', bgColor: '#E3F2FD' },
  'Community Impact': { color: '#EC4899', bgColor: '#FCE7F3' },
  'Project Excellence': { color: '#199A08', bgColor: '#E8F5E9' },
};

function CompanyAppreciationPosts({ isCompact = false }) {
  const [posts, setPosts] = useState(mockPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [userReactions, setUserReactions] = useState({});
  const [savedPosts, setSavedPosts] = useState({});

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.honoree.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleReaction = (postId, reactionType) => {
    setUserReactions((prev) => {
      const postReactions = prev[postId] || {};
      return {
        ...prev,
        [postId]: {
          ...postReactions,
          [reactionType]: !postReactions[reactionType],
        },
      };
    });
  };

  const toggleSave = (postId) => {
    setSavedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  if (isCompact) {
    const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);

    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart size={20} className="text-[#EC4899]" weight="duotone" />
            <h3 className="font-semibold text-gray-900">Company Appreciation Posts</h3>
          </div>
          <span className="text-sm text-[#DAB619] font-medium cursor-pointer hover:underline">
            View All
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {featuredPosts.map((post) => (
            <div key={post.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {post.company.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-gray-900 text-sm truncate">{post.title}</h4>
                    {post.featured && (
                      <Sparkle size={14} className="text-[#DAB619] flex-shrink-0" weight="fill" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {post.honoree} • {post.company}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Heart size={12} weight="duotone" className="text-red-400" />
                      {post.reactions.hearts}
                    </span>
                    <span className="flex items-center gap-1">
                      <ChatCircle size={12} />
                      {post.comments}
                    </span>
                    <span
                      className="px-1.5 py-0.5 rounded text-[10px] font-medium"
                      style={{
                        color: categoryColors[post.category]?.color,
                        backgroundColor: categoryColors[post.category]?.bgColor,
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg py-5 px-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#000000] flex items-center gap-2">
              <Heart size={24} className="text-[#EC4899]" weight="duotone" />
              Company Appreciation Posts
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Celebrate former employee and intern achievements recognized by their current employers
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-56 pl-10 pr-4 py-2.5 text-sm border border-[#AAA9A9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40"
              />
              <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#DAB619] hover:bg-[#c4a015] rounded-lg transition-colors"
            >
              <Plus size={18} />
              Create Post
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedCategory === category
                ? 'bg-[#DAB619] text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPosts.map((post) => {
          const postReactions = userReactions[post.id] || {};
          const isSaved = savedPosts[post.id];

          return (
            <div
              key={post.id}
              className={`bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all ${
                post.featured ? 'ring-2 ring-[#DAB619]/30' : ''
              }`}
            >
              {/* Post Header */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center text-white font-bold">
                      {post.company.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900">{post.company}</h4>
                        {post.featured && (
                          <span className="flex items-center gap-1 px-2 py-0.5 bg-[#DAB619]/10 text-[#DAB619] text-xs font-medium rounded-full">
                            <Sparkle size={12} weight="fill" />
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-0.5">
                        <CalendarBlank size={14} />
                        {new Date(post.postedDate).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleSave(post.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        isSaved ? 'text-[#DAB619] bg-[#DAB619]/10' : 'text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      <BookmarkSimple size={20} weight={isSaved ? 'fill' : 'regular'} />
                    </button>
                    <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                      <DotsThree size={20} weight="bold" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-5">
                {/* Category Badge */}
                <span
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{
                    color: categoryColors[post.category]?.color,
                    backgroundColor: categoryColors[post.category]?.bgColor,
                  }}
                >
                  <Trophy size={12} weight="duotone" />
                  {post.category}
                </span>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>

                {/* Honoree Info */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] flex items-center justify-center text-white text-sm font-bold">
                    {post.honoree.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{post.honoree}</p>
                    <p className="text-xs text-gray-500">
                      {post.hsiRole} ({post.hsiTenure})
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{post.content}</p>

                <button className="text-sm text-[#DAB619] font-medium mt-2 hover:underline">
                  Read more
                </button>
              </div>

              {/* Reactions Bar */}
              <div className="px-5 py-3 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleReaction(post.id, 'hearts')}
                      className={`flex items-center gap-1.5 text-sm transition-colors ${
                        postReactions.hearts ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                      }`}
                    >
                      <Heart size={18} weight={postReactions.hearts ? 'fill' : 'regular'} />
                      {post.reactions.hearts + (postReactions.hearts ? 1 : 0)}
                    </button>
                    <button
                      onClick={() => toggleReaction(post.id, 'claps')}
                      className={`flex items-center gap-1.5 text-sm transition-colors ${
                        postReactions.claps ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'
                      }`}
                    >
                      <HandsClapping size={18} weight={postReactions.claps ? 'fill' : 'regular'} />
                      {post.reactions.claps + (postReactions.claps ? 1 : 0)}
                    </button>
                    <button
                      onClick={() => toggleReaction(post.id, 'stars')}
                      className={`flex items-center gap-1.5 text-sm transition-colors ${
                        postReactions.stars ? 'text-[#DAB619]' : 'text-gray-500 hover:text-[#DAB619]'
                      }`}
                    >
                      <Star size={18} weight={postReactions.stars ? 'fill' : 'regular'} />
                      {post.reactions.stars + (postReactions.stars ? 1 : 0)}
                    </button>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <button className="flex items-center gap-1.5 hover:text-[#DAB619] transition-colors">
                      <ChatCircle size={18} />
                      {post.comments}
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-[#DAB619] transition-colors">
                      <ShareNetwork size={18} />
                      {post.shares}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredPosts.length === 0 && (
        <div className="bg-white rounded-xl p-12 text-center">
          <Heart size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
          <p className="text-sm text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#EC4899] to-[#DB2777] px-6 py-4">
              <h3 className="text-lg font-semibold text-white">Create Appreciation Post</h3>
              <p className="text-white/80 text-sm mt-1">
                Recognize an alumni's achievement
              </p>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Alumni Honoree <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Search alumni..."
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Employee of the Month"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Category <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 bg-white">
                  <option value="">Select category</option>
                  {categories.slice(1).map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Share the story of this achievement..."
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 resize-none"
                />
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-5 py-2.5 text-sm font-medium text-white bg-[#DAB619] hover:bg-[#c4a015] rounded-lg transition-colors"
              >
                Publish Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyAppreciationPosts;
