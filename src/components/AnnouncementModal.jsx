import React from 'react'
import { FiX, FiShare2, FiCheck } from 'react-icons/fi'

export default function AnnouncementModal({ announcement, isOpen, onClose }) {
  if (!isOpen || !announcement) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{announcement.title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <FiX className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image */}
          {announcement.image && (
            <img
              src={announcement.image}
              alt={announcement.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
          )}

          {/* Date and Source */}
          <p className="text-sm text-gray-600 mb-4">
            {announcement.date} | {announcement.source || 'HSI Communications'}
          </p>

          {/* Main Content */}
          <div className="prose max-w-none mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">{announcement.content}</p>

            {/* What this means section */}
            {announcement.bulletPoints && announcement.bulletPoints.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What this means for the team:
                </h3>
                <ul className="space-y-2">
                  {announcement.bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-accent mt-1">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <FiShare2 className="w-4 h-4" />
              <span className="text-sm font-medium">Share</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <FiCheck className="w-4 h-4" />
              <span className="text-sm font-medium">Mark as Read</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
