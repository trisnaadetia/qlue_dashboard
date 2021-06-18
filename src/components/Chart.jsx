import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

function Chart({revenue}) {
  const [year, setYear] = useState([])
  const [expense, setExpense] = useState([])
  const [netProfit, setNetProfit] = useState([])
  const [sales, setSales] = useState([])

  useEffect(() => {
    filter()
  },[revenue])

  function filter() {
    const data = [...revenue]
    const listYear = data.map(x => x.year)
    const listExpense = data.map(x => x.expense)
    const listNetProfit = data.map(x => x.net_profit)
    const listSales = data.map(x => x.sales)

    setExpense(listExpense)
    setNetProfit(listNetProfit)
    setSales(listSales)
    setYear(listYear)
  }


  return (
    <>
      <div>
        <Bar 
          data={{
            labels: year,
            datasets: [
              {
                label: 'expense',
                type: 'line',
                data: expense,
                borderColor: 'navy',
                backgroundColor: 'navy'
              },
              {
                label: 'sales',
                data: sales,
                backgroundColor: 'gray',
              },
              {
                label: 'net profit',
                data: netProfit,
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

