import React from 'react'
import Chart from '../components/Chart.jsx'

export default function Dashboard() {
  return (
    <div>
      <div className="flex">
        <div className="bg-gray-800 p-3 text-gray-200 rounded-lg">
          <p className="font-semibold text-2xl">Dashboard</p>
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <div>
          <h1 className="text-center mb-5 text-2xl">Kinerja Pendapatan Qlue (juta rupiah)</h1>
          <Chart/>
        </div>
      </div>
    </div>
  )
}
