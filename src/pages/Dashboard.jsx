import React, { useEffect } from 'react'
import { fetchRevenue } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'
import Chart from '../components/Chart.jsx'
import LoadingPlaceholder from '../components/LoadingPlaceholder'

export default function Dashboard() {
  const dispatch = useDispatch()
  const revenue = useSelector(state => state.revenue.revenueData)
  const loading = useSelector(state => state.revenue.loadingRevenue)

  useEffect(() => {
    dispatch(fetchRevenue())
  },[])

  if(loading) {
    <LoadingPlaceholder/>
  }

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
          <Chart revenue={revenue} loading={loading}/>
        </div>
      </div>
    </div>
  )
}
