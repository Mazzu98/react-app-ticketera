import { useEffect, useState } from "react"

const useGetData = (endpoint) =>{
  const apiUrl = process.env.REACT_APP_API_URL; 
  const [data, setData] = useState();

  useEffect(()=>{
    if(endpoint){
      fetch(apiUrl + endpoint).then(async (res)=>{
        setData(await res.json())
      })
    }
  },[endpoint])

  return data;
}

export default useGetData;