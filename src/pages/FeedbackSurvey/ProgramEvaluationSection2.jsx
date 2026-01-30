// pages/FeedbackSurvey/ProgramEvaluationSection2.jsx

import React, { useState } from 'react'
import { FiCheck, FiChevronLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function ProgramEvaluationSection2() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    enjoyment: '',
    suggestions: '',
    skills: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.enjoyment.trim()) {
      newErrors.enjoyment = 'This field is required'
    }

    if (!formData.suggestions.trim()) {
      newErrors.suggestions = 'This field is required'
    }

    if (!formData.skills.trim()) {
      newErrors.skills = 'This field is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateForm()) {
      navigate('/feedback-surveys/program-evaluation/section-3')
    }
  }

  return (
    <div className="px-6 md:px-10 py-8 bg-[#F5F5F5] min-h-full">

      {/* TOP BACK */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm font-bold uppercase text-gray-700 mb-6 hover:underline"
      >
        <FiChevronLeft size={16} />
        Back
      </button>

      {/* PAGE HEADER */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4 mb-8 max-w-6xl mx-auto">
        <div className="bg-[#DAB619] p-4 rounded-full flex items-center justify-center">
          <FiCheck size={28} className="text-white" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">Program Evaluation</h1>
          <p className="text-sm text-gray-500">
            Please fill out the survey below
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

        {/* QUESTIONS */}
        <div className="space-y-8 mb-10">

          {/* Q1 */}
          <div>
            <label className="text-xs font-medium text-gray-600">
              What did you enjoy most in your experience? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="enjoyment"
              rows={6}
              value={formData.enjoyment}
              onChange={handleChange}
              className={`mt-1 w-full border rounded-md px-4 py-3 text-sm
                focus:outline-none focus:ring-1 focus:ring-[#DAB619]
                ${errors.enjoyment ? 'border-red-500' : ''}`}
            />
            {errors.enjoyment && (
              <p className="text-xs text-red-500 mt-1">{errors.enjoyment}</p>
            )}
          </div>

          {/* Q2 */}
          <div>
            <label className="text-xs font-medium text-gray-600">
              What suggestions do you have to improve the program for future participants?
              <span className="text-red-500"> *</span>
            </label>
            <textarea
              name="suggestions"
              rows={6}
              value={formData.suggestions}
              onChange={handleChange}
              className={`mt-1 w-full border rounded-md px-4 py-3 text-sm
                focus:outline-none focus:ring-1 focus:ring-[#DAB619]
                ${errors.suggestions ? 'border-red-500' : ''}`}
            />
            {errors.suggestions && (
              <p className="text-xs text-red-500 mt-1">{errors.suggestions}</p>
            )}
          </div>

          {/* Q3 */}
          <div>
            <label className="text-xs font-medium text-gray-600">
              What new skills or competencies did you develop during your time in work?
              <span className="text-red-500"> *</span>
            </label>
            <textarea
              name="skills"
              rows={6}
              value={formData.skills}
              onChange={handleChange}
              className={`mt-1 w-full border rounded-md px-4 py-3 text-sm
                focus:outline-none focus:ring-1 focus:ring-[#DAB619]
                ${errors.skills ? 'border-red-500' : ''}`}
            />
            {errors.skills && (
              <p className="text-xs text-red-500 mt-1">{errors.skills}</p>
            )}
          </div>

        </div>

        {/* ACTION ROW */}
        <div className="flex items-center justify-between">

          <p className="text-xs text-gray-500 flex-1 text-center">
            Section 2 of 3
          </p>

          <div className="flex gap-3">

            <button
              onClick={() =>
                navigate('/feedback-surveys/program-evaluation')
              }
              className="border border-[#DAB619] text-[#DAB619]
                bg-white px-8 py-2 rounded-md text-sm
                hover:bg-[#DAB619] hover:text-white transition"
            >
              Back
            </button>

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
    </div>
  )
}
