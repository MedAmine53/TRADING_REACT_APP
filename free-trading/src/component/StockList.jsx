import React from 'react';
import { useState, useEffect } from 'react';
import finnhub from '../api/finnhub';
import { AiFillCaretUp } from 'react-icons/ai';
import { AiFillCaretDown } from 'react-icons/ai'

const StockList = () => {
  
  const [stock, setStock] = useState([]);

  const changeColor = (change) => {
    return change > 0 ? "success" : "danger"
  }

  const changeIcon = (change) => {
    return change > 0 ? <AiFillCaretUp /> : <AiFillCaretDown />
  }

  useEffect (() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const responses = await Promise.all(watchList.map((stock) => {
          return finnhub.get("/quote", {
            params: {
              symbol: stock
            }
          })
        }))

        const data = responses.map((response) => {
          return {
            data: response.data,
            symbol: response.config.params.symbol
          }
        })

        // console.log(data);
        // console.log(responses);

        if (isMounted) {
          setStock(data)
        }

      } catch (error) {
        
      }
    }
    fetchData();

    return () => (isMounted = false)
  },[])
  
  return (
    <div>
      <table className='table hover mt-5'>

        <thead style={{color:"rgb(79,89,102)"}}>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Last</th>
            <th scope='col'>Chg</th>
            <th scope='col'>Chg%</th>
            <th scope='col'>High</th>
            <th scope='col'>Low</th>
            <th scope='col'>Open</th>
            <th scope='col'>PClose</th>
          </tr>
        </thead>

        <tbody>
          {stock.map((stockData) => {
            return (
              <tr className='table-row' key={stockData.symbol}>
                <th scope='row'>{stockData.symbol}</th>
                <td>{stockData.data.c}</td>
                <td className={`text-${changeColor(stockData.data.d)}`}>{stockData.data.d}{changeIcon(stockData.data.d)}</td>
                <td className={`text-${changeColor(stockData.data.d)}`}>{stockData.data.dp}{changeIcon(stockData.data.d)}</td>
                <td>{stockData.data.h}</td>
                <td>{stockData.data.l}</td>
                <td>{stockData.data.o}</td>
                <td>{stockData.data.pc}</td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  )
}

export default StockList 