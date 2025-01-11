// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function GitHub() {
     const data = useLoaderData()
//   const [data , setData] = useState([])

//   useEffect(() =>{
//     fetch('https://api.github.com/users/yashsirola9410')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         setData(data)
//     })
//   } , [])

  return (
    <div className='ttext-center m-4 bg-gray-600 p-4 text-3xl '>
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git pic"/>
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async() => {    // ye loader wala concept hai 
    const response = await fetch('https://api.github.com/users/yashsirola9410')
    return response.json()
}
