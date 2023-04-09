import React from 'react';
import { useState, useEffect } from 'react';
import finnhub from '../api/finnhub';

const StockList = () => {
  
  const [stock, setStock] = useState()
  const [watchList, setWatchList] = useState(["GOOGLE","MICROSOFT","AMAZON"]);

  useEffect (() => {
    let isMounted = true
    const fetchData = async () => {
      const responses = []
      try {
        const response1 = await finnhub.get("/quote", {
          params: {
            symbol: "GOOGLE"
          }
        })
        responses.push(response1)
        const response2 = await finnhub.get("/quote", {
          params: {
            symbol: "MICROSOFT"
          }
        })
        responses.push(response2)

        const response3 = await finnhub.get("/quote", {
          params: {
            symbol: "AMAZON"
          }
        })
        responses.push(response3)

        console.log(responses);
        if (isMounted) {
          setStock(responses)
        }

      } catch (error) {
        
      }
    }
    fetchData();

    return () => (isMounted = false)
  },[])
  return (
    <div>StockList</div>
  )
}

export default StockList 