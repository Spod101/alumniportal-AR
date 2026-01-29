// src/components/achievements_recognition/CompanyAppreciationPosts.jsx
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Heart,
  Buildings,
  CalendarBlank,
  Plus,
  MagnifyingGlass,
  Trophy,
  Sparkle,
  X,
  TrendUp,
  Crown,
  Star,
  Code,
  Target,
  Users,
  Certificate,
  Briefcase,
  GraduationCap,
  Rocket,
  Image,
  Confetti,
  FunnelSimple,
  CaretDown,
  Check,
} from '@phosphor-icons/react';

// Recognition types with icons and colors
const recognitionTypes = {
  'Promotion': { 
    icon: TrendUp, 
    color: '#199A08', 
    bgColor: '#E8F5E9',
  },
  'Leadership Award': { 
    icon: Crown, 
    color: '#9333EA', 
    bgColor: '#F3E8FF',
  },
  'Developer of the Year': { 
    icon: Code, 
    color: '#3B82F6', 
    bgColor: '#E3F2FD',
  },
  'Technical Excellence': { 
    icon: Star, 
    color: '#F97316', 
    bgColor: '#FFF7ED',
  },
  'Project Completion': { 
    icon: Target, 
    color: '#06B6D4', 
    bgColor: '#ECFEFF',
  },
  'Team Player Award': { 
    icon: Users, 
    color: '#EC4899', 
    bgColor: '#FCE7F3',
  },
  'Innovation Award': { 
    icon: Rocket, 
    color: '#EF4444', 
    bgColor: '#FEE2E2',
  },
  'Employee of the Month': { 
    icon: Trophy, 
    color: '#DAB619', 
    bgColor: '#FFF8E1',
  },
  'Certification Achievement': { 
    icon: Certificate, 
    color: '#14B8A6', 
    bgColor: '#CCFBF1',
  },
};

// Mock data for appreciation posts
const mockPosts = [
  {
    id: 1,
    company: 'Google Philippines',
    title: 'Promoted to Senior Software Engineer',
    honoree: 'Maria Elena Santos',
    hsiRole: 'Web Developer',
    hsiTenure: '2020-2024',
    currentRole: 'Senior Software Engineer',
    alumniType: 'Employee',
    content: 'We are thrilled to announce that Maria Elena Santos has been promoted to Senior Software Engineer! Maria has consistently demonstrated exceptional technical skills and leadership in developing AI-powered accessibility features that have helped millions of users worldwide.',
    recognitionType: 'Promotion',
    postedDate: '2026-01-25',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
    featured: true,
  },
  {
    id: 2,
    company: 'Ubisoft Philippines',
    title: 'QA Team Lead of the Year 2025',
    honoree: 'Ana Marie Reyes',
    hsiRole: 'QA / Web Dev',
    hsiTenure: '2021-2023',
    currentRole: 'QA Lead',
    alumniType: 'Intern',
    content: 'Ana Marie Reyes has been recognized as QA Team Lead of the Year for her outstanding leadership in managing a team of 30 testers. Her attention to detail and quality standards developed at HSI continue to drive excellence in our game development pipeline.',
    recognitionType: 'Leadership Award',
    postedDate: '2026-01-20',
    image: null,
    featured: true,
  },
  {
    id: 3,
    company: 'Gameloft Manila',
    title: 'Developer of the Year 2025',
    honoree: 'Carlos Garcia',
    hsiRole: 'Game Developer',
    hsiTenure: '2019-2022',
    currentRole: 'Senior Game Developer',
    alumniType: 'Employee',
    content: 'Carlos Garcia has been awarded Developer of the Year for his exceptional contributions to our flagship mobile game. His innovative gameplay mechanics have significantly enhanced user engagement and helped achieve over 10 million downloads.',
    recognitionType: 'Developer of the Year',
    postedDate: '2026-01-15',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop',
    featured: false,
  },
  {
    id: 4,
    company: 'Accenture Philippines',
    title: 'Technical Excellence Award Q4 2025',
    honoree: 'Patricia Lim',
    hsiRole: 'Web Developer',
    hsiTenure: '2018-2021',
    currentRole: 'Solutions Architect',
    alumniType: 'Employee',
    content: 'Patricia Lim receives the Technical Excellence Award for designing and implementing a scalable microservices architecture that reduced system latency by 60%. Her technical expertise continues to set benchmarks for excellence.',
    recognitionType: 'Technical Excellence',
    postedDate: '2026-01-10',
    image: null,
    featured: true,
  },
  {
    id: 5,
    company: 'Globe Telecom',
    title: 'Network Migration Project Completion',
    honoree: 'David Kim',
    hsiRole: 'Sys Admin / QA',
    hsiTenure: '2022-2024',
    currentRole: 'IT Infrastructure Specialist',
    alumniType: 'Intern',
    content: 'David Kim successfully led the completion of our nationwide 5G network migration project ahead of schedule. His meticulous planning and execution ensured zero downtime during the transition.',
    recognitionType: 'Project Completion',
    postedDate: '2026-01-05',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    featured: false,
  },
  {
    id: 6,
    company: 'Canva',
    title: 'Innovation Award - AI Design Tools',
    honoree: 'Sofia Chen',
    hsiRole: 'Unleash Web Dev',
    hsiTenure: '2020-2024',
    currentRole: 'Tech Lead',
    alumniType: 'Employee',
    content: 'Sofia Chen has been recognized with the Innovation Award for pioneering AI-powered design automation tools that have transformed how millions of users create content.',
    recognitionType: 'Innovation Award',
    postedDate: '2025-12-28',
    image: null,
    featured: true,
  },
];


// Initial form state
const initialFormState = {
  recognitionType: '',
  company: '',
  honoree: '',
  alumniType: '',
  currentRole: '',
  hsiRole: '',
  hsiTenureStart: '',
  hsiTenureEnd: '',
  title: '',
  content: '',
  imageUrl: '',
};

function CompanyAppreciationPosts({ isCompact = false }) {
  const [posts, setPosts] = useState(mockPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]); // Empty array = All
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.recognitionType) {
      errors.recognitionType = 'Please select a recognition type';
    }
    if (!formData.company.trim()) {
      errors.company = 'Company name is required';
    }
    if (!formData.honoree.trim()) {
      errors.honoree = 'Honoree name is required';
    }
    if (!formData.alumniType) {
      errors.alumniType = 'Please select alumni type';
    }
    if (!formData.currentRole.trim()) {
      errors.currentRole = 'Current role is required';
    }
    if (!formData.hsiRole.trim()) {
      errors.hsiRole = 'HSI role is required';
    }
    if (!formData.hsiTenureStart) {
      errors.hsiTenureStart = 'Start year is required';
    }
    if (!formData.hsiTenureEnd) {
      errors.hsiTenureEnd = 'End year is required';
    }
    if (formData.hsiTenureStart && formData.hsiTenureEnd && 
        parseInt(formData.hsiTenureStart) > parseInt(formData.hsiTenureEnd)) {
      errors.hsiTenureEnd = 'End year must be after start year';
    }
    if (!formData.title.trim()) {
      errors.title = 'Title is required';
    } else if (formData.title.trim().length < 10) {
      errors.title = 'Title must be at least 10 characters';
    }
    if (!formData.content.trim()) {
      errors.content = 'Description is required';
    } else if (formData.content.trim().length < 50) {
      errors.content = 'Description must be at least 50 characters';
    }
    if (formData.imageUrl && !isValidUrl(formData.imageUrl)) {
      errors.imageUrl = 'Please enter a valid URL';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // URL validation helper
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Create new post
    const newPost = {
      id: Date.now(), // Simple unique ID
      company: formData.company.trim(),
      title: formData.title.trim(),
      honoree: formData.honoree.trim(),
      hsiRole: formData.hsiRole.trim(),
      hsiTenure: `${formData.hsiTenureStart}-${formData.hsiTenureEnd}`,
      currentRole: formData.currentRole.trim(),
      alumniType: formData.alumniType,
      content: formData.content.trim(),
      recognitionType: formData.recognitionType,
      postedDate: new Date().toISOString().split('T')[0],
      image: formData.imageUrl.trim() || null,
      featured: true, // New posts are automatically featured
    };

    // Add to posts (at the beginning)
    setPosts((prev) => [newPost, ...prev]);

    // Reset form and close modal
    setFormData(initialFormState);
    setFormErrors({});
    setIsSubmitting(false);
    setShowCreateModal(false);
  };

  // Reset form when modal closes
  const handleCloseModal = () => {
    setFormData(initialFormState);
    setFormErrors({});
    setShowCreateModal(false);
  };

  // Toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([]);
  };


  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.honoree.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(post.recognitionType);
    return matchesSearch && matchesCategory;
  });

  // Compact view for overview
  if (isCompact) {
    const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);

    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart size={20} className="text-[#EC4899]" weight="duotone" />
            <h3 className="font-semibold text-gray-900">Appreciation Posts</h3>
          </div>
          <span className="text-sm text-[#DAB619] font-medium cursor-pointer hover:underline">
            View All
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {featuredPosts.map((post) => {
            const typeConfig = recognitionTypes[post.recognitionType];
            const TypeIcon = typeConfig?.icon || Trophy;
            return (
              <div key={post.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: typeConfig?.bgColor }}
                  >
                    <TypeIcon size={20} style={{ color: typeConfig?.color }} weight="duotone" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm truncate">{post.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {post.honoree} • {post.company}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-medium"
                        style={{
                          color: typeConfig?.color,
                          backgroundColor: typeConfig?.bgColor,
                        }}
                      >
                        {post.recognitionType}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
              Celebrating alumni achievements recognized by their current employers
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

      {/* Filter & Results Info */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          {/* Filter Button */}
          <button
            onClick={() => setShowFilterDropdown(true)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              selectedCategories.length > 0
                ? 'bg-[#DAB619] text-white shadow-md'
                : 'bg-white text-gray-700 shadow-sm hover:shadow-md'
            }`}
          >
            <FunnelSimple size={18} />
            <span>
              {selectedCategories.length === 0
                ? 'Filter by Type'
                : `${selectedCategories.length} Selected`}
            </span>
          </button>

          {/* Results Count */}
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">{filteredPosts.length}</span> posts
          </p>
        </div>

        {/* Selected Categories Pills */}
        {selectedCategories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((category) => {
              const config = recognitionTypes[category];
              const Icon = config?.icon;
              return (
                <span
                  key={category}
                  className="inline-flex items-center gap-1.5 pl-2.5 pr-1.5 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: config?.bgColor,
                    color: config?.color,
                  }}
                >
                  {Icon && <Icon size={14} weight="bold" />}
                  {category}
                  <button
                    onClick={() => toggleCategory(category)}
                    className="p-0.5 rounded-full hover:bg-black/10 transition-colors ml-1"
                  >
                    <X size={12} />
                  </button>
                </span>
              );
            })}
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={12} />
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Filter Modal */}
      {showFilterDropdown && createPortal(
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
          onClick={() => setShowFilterDropdown(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-[#DAB619]/10 to-[#DAB619]/5 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DAB619] flex items-center justify-center">
                    <FunnelSimple size={20} className="text-white" weight="bold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Filter by Recognition Type</h3>
                    <p className="text-sm text-gray-500">Select one or more categories</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowFilterDropdown(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Category Grid */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(recognitionTypes).map(([type, config]) => {
                  const Icon = config.icon;
                  const isSelected = selectedCategories.includes(type);
                  return (
                    <button
                      key={type}
                      onClick={() => toggleCategory(type)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl text-center transition-all ${
                        isSelected
                          ? 'ring-2 ring-[#DAB619] bg-[#DAB619]/10 shadow-md'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      {/* Icon with checkbox indicator */}
                      <div className="relative">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: config.bgColor }}
                        >
                          <Icon size={24} style={{ color: config.color }} weight="duotone" />
                        </div>
                        {isSelected && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#DAB619] rounded-full flex items-center justify-center shadow-sm">
                            <Check size={12} className="text-white" weight="bold" />
                          </div>
                        )}
                      </div>
                      <span className={`text-sm font-medium ${isSelected ? 'text-[#DAB619]' : 'text-gray-700'}`}>
                        {type}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {selectedCategories.length > 0 ? (
                  <>
                    <span className="text-sm text-gray-600">
                      <span className="font-semibold text-[#DAB619]">{selectedCategories.length}</span> type{selectedCategories.length > 1 ? 's' : ''} selected
                    </span>
                    <button
                      onClick={clearFilters}
                      className="text-sm text-gray-500 hover:text-gray-700 underline"
                    >
                      Clear all
                    </button>
                  </>
                ) : (
                  <span className="text-sm text-gray-500">Showing all types</span>
                )}
              </div>
              <button
                onClick={() => setShowFilterDropdown(false)}
                className="px-6 py-2.5 bg-[#DAB619] text-white font-medium rounded-xl hover:bg-[#c4a015] transition-colors shadow-md"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Posts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPosts.map((post) => {
          const typeConfig = recognitionTypes[post.recognitionType];
          const TypeIcon = typeConfig?.icon || Trophy;

          return (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className={`group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all cursor-pointer ${
                post.featured ? 'ring-2 ring-[#DAB619]/30' : ''
              }`}
            >
              {/* Image Section (if available) */}
              {post.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Recognition Badge on Image */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm"
                      style={{
                        color: 'white',
                        backgroundColor: `${typeConfig?.color}CC`,
                      }}
                    >
                      <TypeIcon size={14} weight="bold" />
                      {post.recognitionType}
                    </span>
                  </div>

                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#DAB619] text-white text-xs font-medium rounded-full">
                        <Sparkle size={12} weight="fill" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Company Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-xs font-bold text-gray-800 shadow-sm">
                        {post.company.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm drop-shadow-md">{post.company}</p>
                        <p className="text-white/80 text-xs drop-shadow-md">
                          {new Date(post.postedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Section */}
              <div className="p-5">
                {/* No Image Header */}
                {!post.image && (
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                        style={{ backgroundColor: typeConfig?.bgColor }}
                      >
                        <TypeIcon size={24} style={{ color: typeConfig?.color }} weight="duotone" />
                      </div>
                      <div>
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={{
                            color: typeConfig?.color,
                            backgroundColor: typeConfig?.bgColor,
                          }}
                        >
                          {post.recognitionType}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{post.company}</p>
                      </div>
                    </div>
                    {post.featured && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#DAB619]/10 text-[#DAB619] text-xs font-medium rounded-full">
                        <Sparkle size={10} weight="fill" />
                        Featured
                      </span>
                    )}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#DAB619] transition-colors mb-3">
                  {post.title}
                </h3>

                {/* Honoree Card */}
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-md ${
                      post.alumniType === 'Employee'
                        ? 'bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]'
                        : 'bg-gradient-to-br from-[#9333EA] to-[#7C3AED]'
                    }`}
                  >
                    {post.honoree.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900">{post.honoree}</h4>
                      <span
                        className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-medium ${
                          post.alumniType === 'Employee'
                            ? 'bg-[#3B82F6]/10 text-[#3B82F6]'
                            : 'bg-[#9333EA]/10 text-[#9333EA]'
                        }`}
                      >
                        {post.alumniType === 'Employee' ? <Briefcase size={8} /> : <GraduationCap size={8} />}
                        {post.alumniType}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{post.currentRole}</p>
                    <p className="text-[10px] text-gray-400">HSI {post.hsiRole} ({post.hsiTenure})</p>
                  </div>
                </div>

                {/* Content Preview */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
                  {post.content}
                </p>

                {/* Footer */}
                {!post.image && (
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <CalendarBlank size={14} />
                      {new Date(post.postedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <span className="text-xs text-[#DAB619] font-medium group-hover:underline">
                      Read more →
                    </span>
                  </div>
                )}

                {post.image && (
                  <span className="text-xs text-[#DAB619] font-medium group-hover:underline">
                    Read more →
                  </span>
                )}
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

      {/* View Post Modal */}
      {selectedPost && createPortal(
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
          >
            {/* Modal Image */}
            {selectedPost.image && (
              <div className="relative h-56">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors"
                >
                  <X size={20} />
                </button>
                
                {/* Recognition Badge */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold"
                    style={{
                      color: 'white',
                      backgroundColor: `${recognitionTypes[selectedPost.recognitionType]?.color}`,
                    }}
                  >
                    {(() => {
                      const Icon = recognitionTypes[selectedPost.recognitionType]?.icon || Trophy;
                      return <Icon size={16} weight="bold" />;
                    })()}
                    {selectedPost.recognitionType}
                  </span>
                </div>
              </div>
            )}

            {/* Modal Header (no image) */}
            {!selectedPost.image && (
              <div
                className="relative px-6 py-5"
                style={{ backgroundColor: recognitionTypes[selectedPost.recognitionType]?.bgColor }}
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-white/50 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
                <div className="flex items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center bg-white shadow-sm"
                  >
                    {(() => {
                      const Icon = recognitionTypes[selectedPost.recognitionType]?.icon || Trophy;
                      return <Icon size={28} style={{ color: recognitionTypes[selectedPost.recognitionType]?.color }} weight="duotone" />;
                    })()}
                  </div>
                  <div>
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white"
                      style={{ color: recognitionTypes[selectedPost.recognitionType]?.color }}
                    >
                      {selectedPost.recognitionType}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">{selectedPost.company}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-300px)]">
              {/* Company Info (for image posts) */}
              {selectedPost.image && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-700">
                    {selectedPost.company.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{selectedPost.company}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(selectedPost.postedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              )}

              <h2 className="text-xl font-bold text-gray-900 mb-2">{selectedPost.title}</h2>
              
              {!selectedPost.image && (
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <CalendarBlank size={16} />
                  {new Date(selectedPost.postedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              )}

              {/* Honoree Card */}
              <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg ${
                      selectedPost.alumniType === 'Employee'
                        ? 'bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8]'
                        : 'bg-gradient-to-br from-[#9333EA] to-[#7C3AED]'
                    }`}
                  >
                    {selectedPost.honoree.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Confetti size={18} className="text-[#DAB619]" weight="duotone" />
                      <span className="text-xs text-[#DAB619] font-medium">Congratulations!</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{selectedPost.honoree}</h4>
                    <p className="text-[#DAB619] font-medium">{selectedPost.currentRole}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                          selectedPost.alumniType === 'Employee'
                            ? 'bg-[#3B82F6]/10 text-[#3B82F6]'
                            : 'bg-[#9333EA]/10 text-[#9333EA]'
                        }`}
                      >
                        {selectedPost.alumniType === 'Employee' ? <Briefcase size={10} /> : <GraduationCap size={10} />}
                        {selectedPost.alumniType} Alumni
                      </span>
                      <span className="text-xs text-gray-500">
                        HSI {selectedPost.hsiRole} ({selectedPost.hsiTenure})
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Content */}
              <p className="text-gray-700 leading-relaxed">{selectedPost.content}</p>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t">
              <button
                onClick={() => setSelectedPost(null)}
                className="w-full py-2.5 text-sm font-medium text-white bg-[#DAB619] hover:bg-[#c4a015] rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Create Post Modal */}
      {showCreateModal && createPortal(
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4"
          onClick={handleCloseModal}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#DAB619] to-[#c4a015] px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Create Appreciation Post</h3>
                <p className="text-white/80 text-sm mt-0.5">
                  Celebrate an alumni's achievement
                </p>
              </div>
              <button 
                onClick={handleCloseModal}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto">
              {/* Recognition Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Recognition Type <span className="text-red-500">*</span>
                </label>
                <select 
                  name="recognitionType"
                  value={formData.recognitionType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 bg-white ${
                    formErrors.recognitionType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select recognition type</option>
                  {Object.keys(recognitionTypes).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {formErrors.recognitionType && (
                  <p className="mt-1 text-xs text-red-500">{formErrors.recognitionType}</p>
                )}
              </div>

              {/* Two Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g., Google Philippines"
                    className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 ${
                      formErrors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.company && (
                    <p className="mt-1 text-xs text-red-500">{formErrors.company}</p>
                  )}
                </div>

                {/* Alumni Honoree */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Alumni Honoree <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="honoree"
                    value={formData.honoree}
                    onChange={handleInputChange}
                    placeholder="Full name of the honoree"
                    className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 ${
                      formErrors.honoree ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.honoree && (
                    <p className="mt-1 text-xs text-red-500">{formErrors.honoree}</p>
                  )}
                </div>
              </div>

              {/* Alumni Type & Current Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Alumni Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Alumni Type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-3">
                    <label 
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border rounded-lg cursor-pointer transition-all ${
                        formData.alumniType === 'Employee' 
                          ? 'border-[#3B82F6] bg-[#3B82F6]/5 text-[#3B82F6]' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="alumniType"
                        value="Employee"
                        checked={formData.alumniType === 'Employee'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <Briefcase size={18} />
                      <span className="text-sm font-medium">Employee</span>
                    </label>
                    <label 
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border rounded-lg cursor-pointer transition-all ${
                        formData.alumniType === 'Intern' 
                          ? 'border-[#9333EA] bg-[#9333EA]/5 text-[#9333EA]' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="alumniType"
                        value="Intern"
                        checked={formData.alumniType === 'Intern'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <GraduationCap size={18} />
                      <span className="text-sm font-medium">Intern</span>
                    </label>
                  </div>
                  {formErrors.alumniType && (
                    <p className="mt-1 text-xs text-red-500">{formErrors.alumniType}</p>
                  )}
                </div>

                {/* Current Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Current Role <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleInputChange}
                    placeholder="e.g., Senior Software Engineer"
                    className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 ${
                      formErrors.currentRole ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.currentRole && (
                    <p className="mt-1 text-xs text-red-500">{formErrors.currentRole}</p>
                  )}
                </div>
              </div>

              {/* HSI Info Section */}
              <div className="p-4 bg-gray-50 rounded-xl space-y-4">
                <p className="text-sm font-semibold text-gray-700">HSI Information</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* HSI Role */}
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">
                      HSI Role <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="hsiRole"
                      value={formData.hsiRole}
                      onChange={handleInputChange}
                      placeholder="e.g., Web Developer"
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 bg-white ${
                        formErrors.hsiRole ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.hsiRole && (
                      <p className="mt-1 text-xs text-red-500">{formErrors.hsiRole}</p>
                    )}
                  </div>

                  {/* HSI Tenure Start */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">
                      Start Year <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="hsiTenureStart"
                      value={formData.hsiTenureStart}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 bg-white ${
                        formErrors.hsiTenureStart ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 2026 - 2013 + 1 }, (_, i) => 2026 - i).map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    {formErrors.hsiTenureStart && (
                      <p className="mt-1 text-xs text-red-500">{formErrors.hsiTenureStart}</p>
                    )}
                  </div>

                  {/* HSI Tenure End */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1.5">
                      End Year <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="hsiTenureEnd"
                      value={formData.hsiTenureEnd}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 bg-white ${
                        formErrors.hsiTenureEnd ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 2026 - 2013 + 1 }, (_, i) => 2026 - i).map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    {formErrors.hsiTenureEnd && (
                      <p className="mt-1 text-xs text-red-500">{formErrors.hsiTenureEnd}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Post Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Promoted to Senior Software Engineer"
                  className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 ${
                    formErrors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <div className="flex justify-between mt-1">
                  {formErrors.title ? (
                    <p className="text-xs text-red-500">{formErrors.title}</p>
                  ) : (
                    <p className="text-xs text-gray-400">Minimum 10 characters</p>
                  )}
                  <p className={`text-xs ${formData.title.length < 10 ? 'text-gray-400' : 'text-green-600'}`}>
                    {formData.title.length}/10+
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Share the details of this achievement... What makes this recognition special? What impact has this person made?"
                  className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 resize-none ${
                    formErrors.content ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <div className="flex justify-between mt-1">
                  {formErrors.content ? (
                    <p className="text-xs text-red-500">{formErrors.content}</p>
                  ) : (
                    <p className="text-xs text-gray-400">Minimum 50 characters</p>
                  )}
                  <p className={`text-xs ${formData.content.length < 50 ? 'text-gray-400' : 'text-green-600'}`}>
                    {formData.content.length}/50+
                  </p>
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Image URL <span className="text-gray-400">(Optional)</span>
                </label>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <input
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                      className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 ${
                        formErrors.imageUrl ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.imageUrl && (
                      <p className="mt-1 text-xs text-red-500">{formErrors.imageUrl}</p>
                    )}
                  </div>
                </div>
                {formData.imageUrl && isValidUrl(formData.imageUrl) && (
                  <div className="mt-2 relative rounded-lg overflow-hidden h-32 bg-gray-100">
                    <img 
                      src={formData.imageUrl} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 hidden">
                      <span className="text-sm">Failed to load image</span>
                    </div>
                  </div>
                )}
                <p className="mt-1.5 text-xs text-gray-400">
                  Paste a direct link to an image (JPG, PNG, WebP)
                </p>
              </div>

              {/* Auto-featured notice */}
              <div className="flex items-center gap-2 p-3 bg-[#DAB619]/10 rounded-lg">
                <Sparkle size={18} className="text-[#DAB619]" weight="fill" />
                <p className="text-sm text-gray-700">
                  New posts are automatically marked as <span className="font-semibold text-[#DAB619]">Featured</span>
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <p className="text-xs text-gray-500">
                <span className="text-red-500">*</span> Required fields
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleCloseModal}
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-sm font-medium text-white bg-[#DAB619] hover:bg-[#c4a015] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Publishing...
                    </>
                  ) : (
                    <>
                      <Plus size={18} />
                      Publish Post
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default CompanyAppreciationPosts;
