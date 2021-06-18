import React from 'react'
import { Bar, Line } from 'react-chartjs-2'

function Chart() {
  return (
    <>
      <div>
        <Bar 
          data={{
            labels: ['2016','2017','2018', '2019', '2020'],
            datasets: [
              {
                label: 'expense',
                type: 'line',
                data: [1500, 1000, 2500, 2400, 3000],
                borderColor: 'navy',
                backgroundColor: 'navy'
              },
              {
                label: 'sales',
                data: [2000, 3000, 4000, 4500, 4400],
                backgroundColor: 'gray',
              },
              {
                label: 'net profit',
                data: [500, 2000, 1500, 2100, 1400],
                backgroundColor: 'orange',
              }
            ]
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    </>
  )
}

export default Chart
