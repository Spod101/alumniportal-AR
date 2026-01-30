// pages/FeedbackSurvey/ProgramEvaluationSection3.jsx

import React, { useState } from 'react'
import { FiCheck, FiChevronLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function ProgramEvaluationSection3() {
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)

  const [formData, setFormData] = useState({
    challenge: '',
    motivation: '',
    comments: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.challenge.trim()) {
      newErrors.challenge = 'This field is required'
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = 'This field is required'
    }

    if (!formData.comments.trim()) {
      newErrors.comments = 'This field is required'
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
              What was the most challenging aspect of your experience?
              <span className="text-red-500"> *</span>
            </label>
            <textarea
              name="challenge"
              rows={6}
              value={formData.challenge}
              onChange={handleChange}
              className={`mt-1 w-full border rounded-md px-4 py-3 text-sm
                focus:outline-none focus:ring-1 focus:ring-[#DAB619]
                ${errors.challenge ? 'border-red-500' : ''}`}
            />
            {errors.challenge && (
              <p className="text-xs text-red-500 mt-1">{errors.challenge}</p>
            )}
          </div>

          {/* Q2 */}
          <div>
            <label className="text-xs font-medium text-gray-600">
              What motivated you to join this program?
              <span className="text-red-500"> *</span>
            </label>
            <textarea
              name="motivation"
              rows={6}
              value={formData.motivation}
              onChange={handleChange}
              className={`mt-1 w-full border rounded-md px-4 py-3 text-sm
                focus:outline-none focus:ring-1 focus:ring-[#DAB619]
                ${errors.motivation ? 'border-red-500' : ''}`}
            />
            {errors.motivation && (
              <p className="text-xs text-red-500 mt-1">{errors.motivation}</p>
            )}
          </div>

          {/* Q3 */}
          <div>
            <label className="text-xs font-medium text-gray-600">
              Any additional comments or suggestions?
              <span className="text-red-500"> *</span>
            </label>
            <textarea
              name="comments"
              rows={6}
              value={formData.comments}
              onChange={handleChange}
              className={`mt-1 w-full border rounded-md px-4 py-3 text-sm
                focus:outline-none focus:ring-1 focus:ring-[#DAB619]
                ${errors.comments ? 'border-red-500' : ''}`}
            />
            {errors.comments && (
              <p className="text-xs text-red-500 mt-1">{errors.comments}</p>
            )}
          </div>

        </div>

        {/* ACTION ROW */}
        <div className="flex items-center justify-between">

          <p className="text-xs text-gray-500 flex-1 text-center">
            Section 3 of 3
          </p>

          <div className="flex gap-3">

            <button
              onClick={() =>
                navigate('/feedback-surveys/program-evaluation/section-2')
              }
              className="border border-[#DAB619] text-[#DAB619]
                bg-white px-8 py-2 rounded-md text-sm
                hover:bg-[#DAB619] hover:text-white transition"
            >
              Back
            </button>

            <button
              onClick={handleSubmit}
              className="bg-[#DAB619] text-white px-8 py-2 rounded-md text-sm
                hover:opacity-90 transition"
            >
              ✏️ Submit Feedback
            </button>

          </div>
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
              className="bg-[#DAB619] text-white px-6 py-2 rounded-md text-sm
                hover:opacity-90 transition"
            >
              Back to Surveys
            </button>

          </div>
        </div>
      )}
    </div>
  )
}
