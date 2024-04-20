import React from "react"

const OurProducts = ({ data }) => {
  return (
    <div>
      <div
        key={data.id}
        className="flex flex-col items-center justify-center text-center"
      >
        <div className="rounded-full text-slate-800 bg-white p-8">
          <div className="w-8 h-8">{data.icon}</div>
        </div>
        <div className="my-4 text-caption1 font-semibold">{data.title}</div>
      </div>
    </div>
  )
}

export default OurProducts
