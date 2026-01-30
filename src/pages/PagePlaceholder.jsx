import React from 'react'

export default function PagePlaceholder({ title }) {
  return (
    <div className="bg-white border border-[#e6e6e6] rounded-2xl p-8 shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
      <h1 className="m-0 mb-2 text-[26px] text-[#1f1f1f]">{title}</h1>
      <p className="m-0 text-[#666]">Page content will go here.</p>
    </div>
  )
}
