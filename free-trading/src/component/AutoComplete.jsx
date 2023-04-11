import React, { useEffect, useState } from 'react'
import finnhub from '../api/finnhub';

const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([])

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const response = await finnhub.get("/search", {
          params:{
            q: search
          }
        })
        console.log(response);
        if(isMounted){
          setResults(response.data)
        }
        
      } catch (error) {
        
      }
    }
    if ( search.length > 0 ) {
      fetchData();
    }
    return () => (isMounted = false);
  },[search])

  return (
    <div className='w-50 p-5 rounded mx-auto'>
      <div className='form-floating dropdown'>

        <input style={{ backgroundColor: "rgba(145, 158, 171, 0.04)"}} id='search' className='form-control' type="text" placeholder='Search' autoComplete='off' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <label htmlFor="search">Search</label>
        <ul className='dropdown-menu show'>
          <li>Stock1</li>
          <li>Stock2</li>
          <li>Stock3</li>
        </ul>

      </div>
    </div>
  )
}

export default AutoComplete