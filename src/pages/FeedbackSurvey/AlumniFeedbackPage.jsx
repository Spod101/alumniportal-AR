// pages/FeedbackSurvey/AlumniFeedbackPage.jsx

import React, { useState } from 'react'
import { FiUser, FiChevronLeft, FiCheck } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function AlumniFeedbackPage() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  // ================= FORM STATE =================
  const [formData, setFormData] = useState({
    email: '',
    graduationYear: '',
    phone: '',
    experience: '',
    suggestions: ''
  })

  const [errors, setErrors] = useState({})

  // ================= HANDLERS =================
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

    if (!formData.experience.trim()) {
      newErrors.experience = 'This field is required'
    }

    if (!formData.suggestions.trim()) {
      newErrors.suggestions = 'This field is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      setShowModal(true)
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
          <h1 className="text-xl font-semibold">Alumni Feedback</h1>
          <p className="text-sm text-gray-500">
            Please fill out the survey below
          </p>
        </div>
      </div>

      {/* PROFILE + CONTACT CARD */}
      <div className="bg-white rounded-xl p-8 shadow-sm max-w-6xl mx-auto mb-8">

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

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
              className={`mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1
                ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#DAB619]'}`}
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
              className={`mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1
                ${errors.graduationYear ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#DAB619]'}`}
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
                className="w-full border rounded-r-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#DAB619]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* FEEDBACK FORM */}
      <div className="bg-white rounded-xl p-8 shadow-sm max-w-6xl mx-auto">

        <div className="mb-6">
          <label className="text-xs font-medium text-gray-600">
            What did you enjoy most in your experience? <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={`mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1
              ${errors.experience ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#DAB619]'}`}
          />
          {errors.experience && (
            <p className="text-xs text-red-500 mt-1">{errors.experience}</p>
          )}
        </div>

        <div className="mb-8">
          <label className="text-xs font-medium text-gray-600">
            What improvements and suggestions would you suggest? <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            name="suggestions"
            value={formData.suggestions}
            onChange={handleChange}
            className={`mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1
              ${errors.suggestions ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#DAB619]'}`}
          />
          {errors.suggestions && (
            <p className="text-xs text-red-500 mt-1">{errors.suggestions}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-[#DAB619] text-white px-6 py-2 rounded-md text-sm hover:opacity-90 transition"
          >
            ✏️ Submit Feedback
          </button>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="bg-[#DAB619] p-4 rounded-full">
                <FiCheck size={28} className="text-white" />
              </div>
            </div>

            <h2 className="text-lg font-semibold mb-2">
              Thank you for your feedback!
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              Your response has been successfully submitted.
            </p>

            <button
              onClick={() => {
                setShowModal(false)
                navigate('/feedback-surveys')
              }}
              className="bg-[#DAB619] text-white px-6 py-2 rounded-md text-sm hover:opacity-90 transition"
            >
              Back to Surveys
            </button>
          </div>
        </div>
      )}

    </div>
  )
}
