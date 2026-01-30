// ProgramEvaluationPage.jsx

import React, { useState } from 'react'
import { FiUser, FiChevronLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function ProgramEvaluationPage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    graduationYear: '',
    phone: '',
    department: '',
    program: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    }

    if (!formData.graduationYear.trim()) {
      newErrors.graduationYear = 'Graduation year is required'
    }

    if (!formData.program) {
      newErrors.program = 'Please select a program'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateForm()) {
      navigate('/feedback-surveys/program-evaluation/section-2')
    }
  }

  return (
    <div className="px-6 md:px-10 py-8 bg-[#F5F5F5] min-h-full">

      {/* BACK */}
      <button
        onClick={() => navigate('/feedback-surveys')}
        className="flex items-center gap-1 text-sm font-bold uppercase text-gray-700 mb-6 hover:underline"
      >
        <FiChevronLeft size={16} />
        Back
      </button>

      {/* PAGE HEADER */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4 mb-8 max-w-6xl mx-auto">
        <div className="bg-[#DAB619] p-4 rounded-full">
          <FiUser size={28} className="text-white" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">Program Evaluation</h1>
          <p className="text-sm text-gray-500">
            Evaluate programs and share your experience.
          </p>
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="bg-white rounded-xl p-8 shadow-sm max-w-6xl mx-auto">

        {/* PROFILE CARD */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/80"
              alt="User"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <p className="font-semibold text-sm uppercase text-black">
                Mark Zuckerberg
              </p>
              <p className="text-xs text-black">
                Co-Founder / CEO
              </p>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* CONTACT INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* EMAIL */}
          <div>
            <label className="text-xs font-medium text-gray-600">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 w-full border rounded-md px-3 py-2 text-sm
                focus:outline-none focus:ring-1 focus:ring-[#DAB619]
                ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* GRADUATION YEAR */}
          <div>
            <label className="text-xs font-medium text-gray-600">
              Graduation Year <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              className={`mt-1 w-full border rounded-md px-3 py-2 text-sm
                focus:outline-none focus:ring-1 focus:ring-[#DAB619]
                ${errors.graduationYear ? 'border-red-500' : ''}`}
            />
            {errors.graduationYear && (
              <p className="text-xs text-red-500 mt-1">{errors.graduationYear}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <label className="text-xs font-medium text-gray-600">
              Phone Number
            </label>
            <div className="flex mt-1">
              <select className="border border-r-0 rounded-l-md px-2 text-sm bg-gray-50 focus:outline-none">
                <option value="+63">🇵🇭 +63</option>
              </select>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9123456789"
                className="w-full border rounded-r-md px-3 py-2 text-sm
                  focus:outline-none focus:ring-1 focus:ring-[#DAB619]"
              />
            </div>
          </div>

          {/* DEPARTMENT */}
          <div>
            <label className="text-xs font-medium text-gray-600">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="e.g. Web Development"
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm
                focus:outline-none focus:ring-1 focus:ring-[#DAB619]"
            />
          </div>

          {/* SELECT PROGRAM */}
          <div>
            <label className="text-xs font-medium text-gray-600">
              Select Program <span className="text-red-500">*</span>
            </label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              className={`mt-1 w-full border rounded-md px-3 py-2 text-sm bg-white
                focus:outline-none focus:ring-1 focus:ring-[#DAB619]
                ${errors.program ? 'border-red-500' : ''}`}
            >
              <option value="">Select a program</option>
              <option value="QA">Quality Assurance</option>
              <option value="GD">Graphics Design</option>
              <option value="ITS">IT Sales</option>
              <option value="MU">Marketing Unleash</option>
              <option value="EComU">E-Commerce Unleash</option>
              <option value="UL1">Unleash L1</option>
              <option value="UWD">Unleash Web Development</option>
              <option value="UGD">Unleash Game Development</option>
              <option value="UGDX">Unleash Game Graphics</option>
              <option value="HR">Human Resource</option>
              <option value="AAF">Admin, Accounting and Finance</option>
              <option value="PM">Project Management</option>
              <option value="SA">System Administration</option>
              <option value="U">Unleash</option>
              <option value="TR">Traverse</option>
              <option value="MD">Mobile Development</option>
              <option value="WD">Web Development</option>
              <option value="CIA">CIO Assistant</option>
            </select>
            {errors.program && (
              <p className="text-xs text-red-500 mt-1">{errors.program}</p>
            )}
          </div>

        </div>

        {/* ACTION ROW */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500 text-center flex-1">
            Section 1 of 3
          </p>

          <button
            onClick={handleNext}
            className="bg-[#DAB619] text-white px-8 py-2 rounded-md text-sm
              hover:opacity-90 transition"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  )
}
