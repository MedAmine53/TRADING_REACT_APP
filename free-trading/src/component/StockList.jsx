import React from 'react';
import { useState, useEffect } from 'react';
import finnhub from '../api/finnhub';

const StockList = () => {
  
  const [stock, setStock] = useState()
  const [watchList, setWatchList] = useState(["GOOGLE","MICROSOFT","AMAZON"]);

  useEffect (() => {
    let isMounted = true
    const fetchData = async () => {
      const responses = [];
      try {
        const responses = Promise.all(finnhub.get("/quote", {
          params: {
            symbol: "GOOGLE"
          }
        }), finnhub.get("/quote", {
          params: {
            symbol: "MICROSOFT"
          }
        }), finnhub.get("/quote", {
          params: {
            symbol: "AMAZON"
          }
        }))

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