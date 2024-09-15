 import React, { useEffect, useState } from 'react'
 import axios from 'axios'
 
 
 function App() {

    const [data,setData] = useState()

  useEffect(()=>{
    axios.get('/api/getData')
  .then((response)=>setData(response.data))
  },[])

   return (
     <div>
      {data}
     </div>
   )
 }
 
 export default App