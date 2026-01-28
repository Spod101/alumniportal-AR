// src/components/achievements_recognition/AlumniDirectory.jsx
import React, { useState, useMemo } from 'react';
import {
  Users,
  MagnifyingGlass,
  Briefcase,
  GraduationCap,
  MapPin,
  LinkedinLogo,
  EnvelopeSimple,
  Buildings,
  CaretLeft,
  CaretRight,
  X,
  CalendarBlank,
} from '@phosphor-icons/react';

// Company founding year and current year
const FOUNDING_YEAR = 2013;
const CURRENT_YEAR = 2026;

// Generate all years from founding to current
const ALL_YEARS = Array.from(
  { length: CURRENT_YEAR - FOUNDING_YEAR + 1 },
  (_, i) => (CURRENT_YEAR - i).toString()
);

// Mock data for alumni (updated to 2026)
const alumniData = [
  // 2026 Batch (most recent)
  { id: 1, name: 'Marcus Rivera', currentRole: 'Software Engineer', currentCompany: 'OpenAI', hsiRole: 'AI Developer', batch: '2026', alumniType: 'Employee', location: 'San Francisco, USA', email: 'marcus.rivera@email.com' },
  { id: 2, name: 'Alyssa Tan', currentRole: 'Junior Developer', currentCompany: 'Kumu', hsiRole: 'Web Developer', batch: '2026', alumniType: 'Intern', location: 'Manila, Philippines', email: 'alyssa.tan@email.com' },
  // 2025 Batch
  { id: 3, name: 'James Reyes', currentRole: 'Software Engineer', currentCompany: 'Spotify', hsiRole: 'QA / Web Dev', batch: '2025', alumniType: 'Employee', location: 'Manila, Philippines', email: 'james.reyes@email.com' },
  { id: 4, name: 'Anna Cruz', currentRole: 'Frontend Developer', currentCompany: 'Accenture', hsiRole: 'Web Developer', batch: '2025', alumniType: 'Intern', location: 'Quezon City, Philippines', email: 'anna.cruz@email.com' },
  { id: 5, name: 'Kevin Santos', currentRole: 'QA Analyst', currentCompany: 'Concentrix', hsiRole: 'QA', batch: '2025', alumniType: 'Intern', location: 'Makati, Philippines', email: 'kevin.santos@email.com' },
  // 2024 Batch
  { id: 6, name: 'Maria Elena Santos', currentRole: 'Senior Software Engineer', currentCompany: 'Google Philippines', hsiRole: 'Web Developer', batch: '2024', alumniType: 'Employee', location: 'Makati City, Philippines', email: 'maria.santos@email.com' },
  { id: 7, name: 'David Kim', currentRole: 'IT Infrastructure Specialist', currentCompany: 'Globe Telecom', hsiRole: 'Sys Admin / QA', batch: '2024', alumniType: 'Intern', location: 'Taguig, Philippines', email: 'david.kim@email.com' },
  { id: 8, name: 'Sofia Chen', currentRole: 'Tech Lead', currentCompany: 'Canva', hsiRole: 'Unleash Web Dev', batch: '2024', alumniType: 'Employee', location: 'Sydney, Australia', email: 'sofia.chen@email.com' },
  { id: 9, name: 'Rico Mendoza', currentRole: 'Game Developer', currentCompany: 'Secret 6', hsiRole: 'Game Dev', batch: '2024', alumniType: 'Employee', location: 'Makati, Philippines', email: 'rico.mendoza@email.com' },
  // 2023 Batch
  { id: 10, name: 'Ana Marie Reyes', currentRole: 'QA Lead', currentCompany: 'Ubisoft Philippines', hsiRole: 'QA / Web Dev', batch: '2023', alumniType: 'Intern', location: 'Singapore', email: 'ana.reyes@email.com' },
  { id: 11, name: 'Miguel Torres', currentRole: 'Game Artist', currentCompany: 'Riot Games', hsiRole: 'GFX / Game Dev', batch: '2023', alumniType: 'Intern', location: 'Los Angeles, USA', email: 'miguel.torres@email.com' },
  { id: 12, name: 'Patricia Lim', currentRole: 'HR Business Partner', currentCompany: 'Accenture Philippines', hsiRole: 'HR', batch: '2023', alumniType: 'Employee', location: 'Makati, Philippines', email: 'patricia.lim@email.com' },
  // 2022 Batch
  { id: 13, name: 'Carlos Garcia', currentRole: 'Senior Game Developer', currentCompany: 'Gameloft Manila', hsiRole: 'Game Developer', batch: '2022', alumniType: 'Employee', location: 'Manila, Philippines', email: 'carlos.garcia@email.com' },
  { id: 14, name: 'Jasmine Tan', currentRole: 'Product Manager', currentCompany: 'Grab', hsiRole: 'Project Manager', batch: '2022', alumniType: 'Employee', location: 'Singapore', email: 'jasmine.tan@email.com' },
  // 2021 Batch
  { id: 15, name: 'John Patrick Dela Cruz', currentRole: 'Founder & CEO', currentCompany: 'TechStartup PH', hsiRole: 'Project Manager', batch: '2021', alumniType: 'Employee', location: 'Quezon City, Philippines', email: 'john.delacruz@email.com' },
  { id: 16, name: 'Christine Uy', currentRole: 'Engineering Manager', currentCompany: 'PayMaya', hsiRole: 'Web Developer', batch: '2021', alumniType: 'Employee', location: 'Taguig, Philippines', email: 'christine.uy@email.com' },
  // 2020 Batch
  { id: 17, name: 'Roberto Cruz', currentRole: 'CEO & Founder', currentCompany: 'GameForge Studios', hsiRole: 'Game Developer', batch: '2020', alumniType: 'Employee', location: 'Singapore', email: 'roberto.cruz@email.com' },
  // 2019 Batch
  { id: 18, name: 'Lisa Mendoza', currentRole: 'VP of Engineering', currentCompany: 'Meta', hsiRole: 'Web Developer', batch: '2019', alumniType: 'Employee', location: 'California, USA', email: 'lisa.mendoza@email.com' },
  // 2018 Batch
  { id: 19, name: 'Carmen Santiago', currentRole: 'Chief People Officer', currentCompany: 'Grab Holdings', hsiRole: 'HR', batch: '2018', alumniType: 'Employee', location: 'Singapore', email: 'carmen.santiago@email.com' },
  // 2017 Batch
  { id: 20, name: 'Mark Villanueva', currentRole: 'Technical Director', currentCompany: 'Riot Games', hsiRole: 'Game Dev / QA', batch: '2017', alumniType: 'Intern', location: 'Los Angeles, USA', email: 'mark.villanueva@email.com' },
  // 2016 Batch
  { id: 21, name: 'Angela Reyes', currentRole: 'CTO', currentCompany: 'Ayala Corp', hsiRole: 'Web Developer', batch: '2016', alumniType: 'Employee', location: 'Makati, Philippines', email: 'angela.reyes@email.com' },
  // 2015 Batch
  { id: 22, name: 'Peter Lim', currentRole: 'Director of Engineering', currentCompany: 'Amazon', hsiRole: 'Game Developer', batch: '2015', alumniType: 'Employee', location: 'Seattle, USA', email: 'peter.lim@email.com' },
  // 2014 Batch
  { id: 23, name: 'Grace Santos', currentRole: 'VP of Product', currentCompany: 'Shopee', hsiRole: 'Project Manager', batch: '2014', alumniType: 'Employee', location: 'Singapore', email: 'grace.santos@email.com' },
  // 2013 Batch (founding year)
  { id: 24, name: 'Antonio Cruz', currentRole: 'CEO', currentCompany: 'TechVentures PH', hsiRole: 'Web Developer', batch: '2013', alumniType: 'Employee', location: 'Manila, Philippines', email: 'antonio.cruz@email.com' },
];

const getInitials = (name) => {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2);
};

// Get alumni count per year for the mini chart
const getYearStats = () => {
  const stats = {};
  ALL_YEARS.forEach((year) => {
    const yearAlumni = alumniData.filter((a) => a.batch === year);
    stats[year] = {
      total: yearAlumni.length,
      employees: yearAlumni.filter((a) => a.alumniType === 'Employee').length,
      interns: yearAlumni.filter((a) => a.alumniType === 'Intern').length,
    };
  });
  return stats;
};

function AlumniDirectory() {
  const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR.toString());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const yearStats = useMemo(() => getYearStats(), []);

  // Get years that have alumni
  const yearsWithAlumni = ALL_YEARS.filter((year) => yearStats[year].total > 0);

  // Filter alumni for selected year
  const filteredAlumni = useMemo(() => {
    return alumniData.filter((alumni) => {
      const matchesYear = alumni.batch === selectedYear;
      const matchesSearch =
        alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.currentCompany.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.hsiRole.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'All' || alumni.alumniType === selectedType;
      return matchesYear && matchesSearch && matchesType;
    });
  }, [selectedYear, searchTerm, selectedType]);

  // Separate employees and interns
  const employees = filteredAlumni.filter((a) => a.alumniType === 'Employee');
  const interns = filteredAlumni.filter((a) => a.alumniType === 'Intern');

  // Navigation
  const currentYearIndex = yearsWithAlumni.indexOf(selectedYear);
  const canGoNewer = currentYearIndex > 0;
  const canGoOlder = currentYearIndex < yearsWithAlumni.length - 1;

  const goToNewerYear = () => {
    if (canGoNewer) {
      setSelectedYear(yearsWithAlumni[currentYearIndex - 1]);
    }
  };

  const goToOlderYear = () => {
    if (canGoOlder) {
      setSelectedYear(yearsWithAlumni[currentYearIndex + 1]);
    }
  };

  // Stats
  const totalAlumni = alumniData.length;
  const employeeCount = alumniData.filter((a) => a.alumniType === 'Employee').length;
  const internCount = alumniData.filter((a) => a.alumniType === 'Intern').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl py-5 px-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-[#000000] flex items-center gap-2">
              <Users size={24} className="text-[#DAB619]" weight="duotone" />
              Alumni Directory
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {CURRENT_YEAR - FOUNDING_YEAR + 1} years of excellence • Since {FOUNDING_YEAR}
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

            {/* Alumni Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2.5 text-sm border border-[#AAA9A9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 bg-white"
            >
              <option value="All">All Types</option>
              <option value="Employee">Employee Alumni</option>
              <option value="Intern">Intern Alumni</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-[#DAB619] to-[#c4a015] rounded-xl p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Total Alumni</p>
              <p className="text-3xl font-bold mt-1">{totalAlumni}</p>
            </div>
            <Users size={40} className="text-white/30" weight="duotone" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] rounded-xl p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Employee Alumni</p>
              <p className="text-3xl font-bold mt-1">{employeeCount}</p>
            </div>
            <Briefcase size={40} className="text-white/30" weight="duotone" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#9333EA] to-[#7C3AED] rounded-xl p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Intern Alumni</p>
              <p className="text-3xl font-bold mt-1">{internCount}</p>
            </div>
            <GraduationCap size={40} className="text-white/30" weight="duotone" />
          </div>
        </div>
      </div>

      {/* Year Navigator */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Year Selector Header */}
        <div className="px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            {/* Navigation Arrows & Year Display */}
            <div className="flex items-center gap-4">
              <button
                onClick={goToOlderYear}
                disabled={!canGoOlder}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <CaretLeft size={20} className="text-gray-600" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#DAB619] to-[#c4a015] flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">{selectedYear}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Batch {selectedYear}</h3>
                  <p className="text-sm text-gray-500">
                    {yearStats[selectedYear]?.total || 0} Alumni
                  </p>
                </div>
              </div>

              <button
                onClick={goToNewerYear}
                disabled={!canGoNewer}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <CaretRight size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Quick Jump Dropdown */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">Jump to:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAB619]/40 bg-white font-medium"
              >
                {yearsWithAlumni.map((year) => (
                  <option key={year} value={year}>
                    {year} ({yearStats[year].total} alumni)
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Year Quick Stats */}
        <div className="px-6 py-3 bg-gray-50 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
            <span className="text-sm text-gray-600">
              <span className="font-semibold">{yearStats[selectedYear]?.employees || 0}</span> Employees
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#9333EA]" />
            <span className="text-sm text-gray-600">
              <span className="font-semibold">{yearStats[selectedYear]?.interns || 0}</span> Interns
            </span>
          </div>
          <div className="flex-1" />
          <span className="text-xs text-gray-400">
            {selectedYear === CURRENT_YEAR.toString() ? 'Most Recent Batch' : 
             selectedYear === FOUNDING_YEAR.toString() ? 'Founding Batch' : ''}
          </span>
        </div>

        {/* Year Timeline Mini Bar */}
        <div className="px-6 py-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            {yearsWithAlumni.map((year) => {
              const isSelected = year === selectedYear;
              const hasAlumni = yearStats[year].total > 0;
              return (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`relative flex-1 h-8 rounded transition-all ${
                    isSelected
                      ? 'bg-[#DAB619]'
                      : hasAlumni
                      ? 'bg-[#DAB619]/20 hover:bg-[#DAB619]/40'
                      : 'bg-gray-100'
                  }`}
                  title={`${year}: ${yearStats[year].total} alumni`}
                >
                  {isSelected && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-[#DAB619]">
                      {year}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>{CURRENT_YEAR}</span>
            <span>{FOUNDING_YEAR}</span>
          </div>
        </div>
      </div>

      {/* Alumni List for Selected Year */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {filteredAlumni.length > 0 ? (
          <div className="p-6">
            {/* Employee Alumni Section */}
            {employees.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                    <Briefcase size={16} className="text-[#3B82F6]" />
                  </div>
                  <h4 className="font-semibold text-[#3B82F6]">Employee Alumni</h4>
                  <span className="text-sm text-gray-400">({employees.length})</span>
                  <div className="flex-1 h-px bg-[#3B82F6]/20 ml-2" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {employees.map((alumni) => (
                    <AlumniCard
                      key={alumni.id}
                      alumni={alumni}
                      onClick={() => setSelectedAlumni(alumni)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Intern Alumni Section */}
            {interns.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#9333EA]/10 flex items-center justify-center">
                    <GraduationCap size={16} className="text-[#9333EA]" />
                  </div>
                  <h4 className="font-semibold text-[#9333EA]">Intern Alumni</h4>
                  <span className="text-sm text-gray-400">({interns.length})</span>
                  <div className="flex-1 h-px bg-[#9333EA]/20 ml-2" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {interns.map((alumni) => (
                    <AlumniCard
                      key={alumni.id}
                      alumni={alumni}
                      onClick={() => setSelectedAlumni(alumni)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-12 text-center">
            <Users size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No alumni found for {selectedYear}</h3>
            <p className="text-sm text-gray-500">
              {searchTerm || selectedType !== 'All'
                ? 'Try adjusting your search or filter criteria'
                : 'No alumni records for this batch yet'}
            </p>
          </div>
        )}
      </div>

      {/* Alumni Detail Modal */}
      {selectedAlumni && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            {/* Modal Header */}
            <div
              className={`relative h-36 bg-gradient-to-br ${
                selectedAlumni.alumniType === 'Employee'
                  ? 'from-[#3B82F6] to-[#1D4ED8]'
                  : 'from-[#9333EA] to-[#7C3AED]'
              }`}
            >
              <button
                onClick={() => setSelectedAlumni(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Batch & Type Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  Batch {selectedAlumni.batch}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                  {selectedAlumni.alumniType === 'Employee' ? (
                    <Briefcase size={14} />
                  ) : (
                    <GraduationCap size={14} />
                  )}
                  {selectedAlumni.alumniType}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Avatar */}
            <div className="relative px-6 -mt-14">
              <div
                className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${
                  selectedAlumni.alumniType === 'Employee'
                    ? 'from-[#3B82F6] to-[#1D4ED8]'
                    : 'from-[#9333EA] to-[#7C3AED]'
                } flex items-center justify-center text-white text-3xl font-bold shadow-xl border-4 border-white`}
              >
                {getInitials(selectedAlumni.name)}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-4">
              <h2 className="text-xl font-bold text-gray-900">{selectedAlumni.name}</h2>
              <p className="text-[#DAB619] font-semibold">{selectedAlumni.currentRole}</p>
              <p className="text-gray-600 flex items-center gap-1">
                <Buildings size={14} />
                {selectedAlumni.currentCompany}
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#DAB619]/10 flex items-center justify-center">
                    <Briefcase size={18} className="text-[#DAB619]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">HSI Role</p>
                    <p className="font-medium text-gray-900">{selectedAlumni.hsiRole}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#DAB619]/10 flex items-center justify-center">
                    <MapPin size={18} className="text-[#DAB619]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="font-medium text-gray-900">{selectedAlumni.location}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex gap-3">
                <a
                  href={`mailto:${selectedAlumni.email}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-white bg-[#DAB619] hover:bg-[#c4a015] rounded-xl transition-colors"
                >
                  <EnvelopeSimple size={18} />
                  Send Email
                </a>
                <button className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#0077B5] bg-[#0077B5]/10 hover:bg-[#0077B5]/20 rounded-xl transition-colors">
                  <LinkedinLogo size={18} weight="fill" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Alumni Card Component
function AlumniCard({ alumni, onClick }) {
  const isEmployee = alumni.alumniType === 'Employee';
  const cardGradient = isEmployee
    ? 'from-[#3B82F6] to-[#1D4ED8]'
    : 'from-[#9333EA] to-[#7C3AED]';
  const hoverColor = isEmployee ? 'group-hover:text-[#3B82F6]' : 'group-hover:text-[#9333EA]';

  return (
    <div
      onClick={onClick}
      className="group relative p-4 bg-gray-50 hover:bg-white rounded-xl border border-transparent hover:border-gray-200 hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cardGradient} flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform`}
        >
          {getInitials(alumni.name)}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold text-gray-900 truncate ${hoverColor} transition-colors`}>
            {alumni.name}
          </h4>
          <p className="text-sm text-gray-500 truncate">{alumni.currentRole}</p>
          <p className="text-xs text-gray-400 truncate flex items-center gap-1">
            <Buildings size={10} />
            {alumni.currentCompany}
          </p>
        </div>
      </div>

      {/* HSI Role Tag */}
      <div className="mt-3 pt-3 border-t border-gray-100">
        <span className="text-xs text-gray-500">
          HSI: <span className="font-medium text-gray-700">{alumni.hsiRole}</span>
        </span>
      </div>
    </div>
  );
}

export default AlumniDirectory;
