import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import finnhub from '../api/finnhub'

const StockDetailPage = () => {
  const [chartData, setChartData] = useState()
  const { symbol } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const date = new Date();
      const currentTime = Math.floor(date.getTime() / 1000)
      let oneDay;

      if(date.getDay() === 6){
        oneDay = currentTime - 2*24*60*60;
      }else if(date.getDay() === 0){
        oneDay = currentTime - 3*24*60*60;
      }else{
        oneDay = currentTime - 24*60*60;
      }
      const oneWeek = currentTime - 7*24*60*60;
      const oneYear = currentTime - 365*24*60*60

      try {
        const responses = await Promise.all([finnhub.get("/stock/candle", {
          params: {
            symbol,
            from: oneDay,
            to:currentTime,
            resolution:30
          }
        }), finnhub.get("/stock/candle", {
          params: {
            symbol,
            from: oneWeek,
            to:currentTime,
            resolution:60
          }
        }), finnhub.get("/stock/candle", {
          params: {
            symbol,
            from: oneWeek,
            to:currentTime,
            resolution:60
          }
        })])
      } catch (error) {
        
      }
    }
    console.log(responses);
    fetchData()
  },[])


  return (
    <div>StockDetailPage {symbol} </div>
  )
}

const data = [{
  w
}]

export default StockDetailPage 