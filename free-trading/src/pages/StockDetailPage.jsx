import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import finnhub from '../api/finnhub'

const StockDetailPage = () => {
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

      const responseDay = await finnhub.get("/stock/candle", {
        params: {
          symbol,
          from: oneDay,
          to:currentTime,
          resolution:30
        }
      })
      const responseWeek = await finnhub.get("/stock/candle", {
        params: {
          symbol,
          from: oneWeek,
          to:currentTime,
          resolution:60
        }
      })
      const responseYear = await finnhub.get("/stock/candle", {
        params: {
          symbol,
          from: oneDay,
          to:oneYear,
          resolution:"W"
        }
      })
      console.log(responseDay);
      console.log(responseWeek);
      console.log(responseYear);
    }
    fetchData()
  },[])


  return (
    <div>StockDetailPage {symbol} </div>
  )
}

export default StockDetailPage 