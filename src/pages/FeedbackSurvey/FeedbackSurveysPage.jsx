import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiUser,
  FiCheckCircle,
  FiClipboard,
} from 'react-icons/fi'

export default function FeedbackSurveysPage() {
  const [rating, setRating] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="px-10 py-8 bg-[#F5F5F5] min-h-full">
      {/* PAGE HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold mb-1">
          Feedback & Surveys
        </h1>
        <p className="text-sm text-gray-600">
          Share your feedback and help us improve.
        </p>
      </div>

      {/* CARDS */}
      <div className="flex flex-col items-center gap-6 mb-14">
        {/* Alumni Feedback */}
        <Card
          icon={<FiUser size={28} className="text-white" />}
          title="Alumni Feedback"
          onClick={() => navigate('/feedback-surveys/alumni-feedback')}
        />

        {/* Program Evaluation */}
        <Card
          icon={<FiCheckCircle size={28} className="text-white" />}
          title="Program Evaluation"
          onClick={() => navigate('/feedback-surveys/program-evaluation')}
        />

        {/* Suggestions */}
        <Card
          icon={<FiClipboard size={28} className="text-white" />}
          title="Suggestions & Improvement Portal"
          onClick={() =>
            navigate('/feedback-surveys/suggestions-improvement')
          }
        />
      </div>

      {/* FEEDBACK SCALE */}
      <div className="bg-white rounded-xl p-8 shadow-sm max-w-3xl mx-auto text-center">
        <h3 className="font-semibold mb-6">
          We’d like to hear from you!
        </h3>
        <p className="text-sm mb-4">
          How likely are you to recommend this portal?
        </p>

        {/* SCALE */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {[
            { value: 0, color: 'bg-red-500', hover: 'hover:bg-red-600', emoji: '😡' },
            { value: 1, color: 'bg-red-400', hover: 'hover:bg-red-500', emoji: '😠' },
            { value: 2, color: 'bg-orange-400', hover: 'hover:bg-orange-500', emoji: '😕' },
            { value: 3, color: 'bg-orange-300', hover: 'hover:bg-orange-400', emoji: '🙁' },
            { value: 4, color: 'bg-yellow-400', hover: 'hover:bg-yellow-500', emoji: '😐' },
            { value: 5, color: 'bg-yellow-300', hover: 'hover:bg-yellow-400', emoji: '🙂' },
            { value: 6, color: 'bg-lime-400', hover: 'hover:bg-lime-500', emoji: '😊' },
            { value: 7, color: 'bg-green-400', hover: 'hover:bg-green-500', emoji: '😄' },
            { value: 8, color: 'bg-green-500', hover: 'hover:bg-green-600', emoji: '😁' },
            { value: 9, color: 'bg-emerald-500', hover: 'hover:bg-emerald-600', emoji: '🤩' },
            { value: 10, color: 'bg-emerald-600', hover: 'hover:bg-emerald-700', emoji: '🔥' },
          ].map(({ value, color, hover, emoji }) => (
            <button
              key={value}
              onClick={() => setRating(value)}
              className={`w-14 h-14 rounded-md flex flex-col items-center justify-center text-white text-sm font-semibold transition
                ${color} ${hover}
                ${rating === value ? 'ring-2 ring-black/30' : ''}
              `}
            >
              <span>{value}</span>
              <span className="text-lg">{emoji}</span>
            </button>
          ))}
        </div>

        <button
          className="bg-[#04AA6D] text-white px-6 py-2 rounded-lg text-sm hover:opacity-90 transition"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  )
}

function Card({ icon, title, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-sm cursor-pointer w-full max-w-md hover:bg-gray-50 transition"
    >
      <div className="bg-[#DAB619] p-4 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-gray-500">Lorem ipsum</p>
      </div>
    </div>
  )
}
